"use client";

import { UpdateResumeResumeInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useCallback, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStudioContext } from "../../../use-context";

export const useData = () => {
  const {
    selectedResume,
    selectedResumeId,
    resumeSubSectionIndex,
    setResumeSubSectionIndex,
    updateResumeResume,
    loadingUpdateResumeResume,
  } = useStudioContext();

  const getFormValues = useCallback(
    (selectedResumeId_: string, selectedResume_: typeof selectedResume) => ({
      resumeId: selectedResumeId_!,
      title: selectedResume_?.title || "",
      isShowCertification: !!selectedResume_?.isShowCertification,
      certificationLabel: selectedResume_?.certificationLabel || "",
      certifications:
        selectedResume_?.certifications?.map((certification) => ({
          name: certification.name || "",
          isShowInstitute: !!certification.isShowInstitute,
          institute: certification.institute || "",
          isShowDate: !!certification.isShowDate,
          year: certification.year || "",
          isShowPoints: !!certification.isShowPoints,
          isShow: !!certification.isShow,
          points: certification.points?.map((point) => point || "") || [],
        })) || [],
    }),
    []
  );

  const form = useForm<UpdateResumeResumeInputs>({
    resolver: classValidatorResolver(UpdateResumeResumeInputs),
    mode: "onChange",
    defaultValues: getFormValues(selectedResumeId!, selectedResume),
  });

  useEffect(() => {
    form.reset(getFormValues(selectedResumeId!, selectedResume));
  }, [form, selectedResume, selectedResumeId, getFormValues]);

  const onSubmit: SubmitHandler<UpdateResumeResumeInputs> = (
    updateResumeResumeInputs
  ) => {
    updateResumeResume({ variables: { updateResumeResumeInputs } });
  };

  const addNewCertification = () => {
    form.setValue("certifications", [
      ...(form.getValues("certifications") || []),
      {
        name: "name",
        isShowInstitute: false,
        institute: "institute",
        isShowDate: false,
        year: "",
        isShowPoints: false,
        isShow: true,
        points: [],
      },
    ]);

    changeSelectedCertificationIndex(
      (form.getValues("certifications")?.length || 0) - 1
    );
  };

  const removeCertification = (certificationIndex: number) => {
    form.setValue("certifications", [
      ...(form.getValues("certifications") || []).filter(
        (_, index) => index !== certificationIndex
      ),
    ]);
    changeSelectedCertificationIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const changeOrderOfCertificationPoints = (
    certificationIndex: number,
    index1: number,
    index2: number
  ) => {
    form.setValue(
      "certifications",
      [...(form.getValues("certifications") || [])].map(
        (certification, index) => ({
          ...certification,
          points:
            index === certificationIndex
              ? certification.points?.map((point, index) => {
                  if (certification.points && index === index1) {
                    return certification.points[index2];
                  } else if (certification.points && index === index2) {
                    return certification.points[index1];
                  }
                  return point;
                }) || []
              : certification.points,
        })
      )
    );
    form.trigger();
  };

  const addNewPoint = (certificationIndex: number) => {
    form.setValue(
      "certifications",
      [...(form.getValues("certifications") || [])].map(
        (certification, index) => ({
          ...certification,
          points:
            index === certificationIndex
              ? [...(certification.points || []), "new Point"]
              : certification.points,
        })
      )
    );
    form.trigger();
  };

  const removePoint = (certificationIndex: number, pointIndex: number) => {
    form.setValue(
      "certifications",
      [...(form.getValues("certifications") || [])].map(
        (certification, index) => ({
          ...certification,
          points:
            index === certificationIndex
              ? [
                  ...(certification.points || []).filter(
                    (_, index) => index !== pointIndex
                  ),
                ]
              : certification.points,
        })
      )
    );
    form.trigger();
  };

  const changeSelectedCertificationIndex = (index: number) => {
    if (index < (form.getValues("certifications")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loadingUpdateResumeResume,
    resumeSubSectionIndex,
    addNewCertification,
    removeCertification,
    changeSelectedCertificationIndex,
    addNewPoint,
    removePoint,
    changeOrderOfCertificationPoints,
  };
};
