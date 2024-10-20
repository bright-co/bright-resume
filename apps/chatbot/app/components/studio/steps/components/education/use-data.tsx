"use client";

import { UpdateResumeResumeInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useCallback, useEffect, useState } from "react";
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

  const [isOpenRemoveDialogIndex, setIsOpenRemoveDialogIndex] = useState<
    number | undefined
  >();

  const changeOrderOfEducations = (index1: number, index2: number) => {
    form.setValue(
      "educations",
      form.getValues("educations")?.map((project, index) => {
        if (index === index1) {
          return form.getValues("educations")![index2];
        } else if (index === index2) {
          return form.getValues("educations")![index1];
        }
        return project;
      }) || []
    );
    form.trigger();
  };

  const getFormValues = useCallback(
    (selectedResumeId_: string, selectedResume_: typeof selectedResume) => ({
      resumeId: selectedResumeId_!,
      title: selectedResume_?.title || "",
      isShowEducation: !!selectedResume_?.isShowEducation,
      educationLabel: selectedResume_?.educationLabel || "",
      educations:
        selectedResume_?.educations?.map((education) => ({
          degree: education.degree || "",
          isShowInstitute: !!education.isShowInstitute,
          institute: education.institute || "",
          isShowGpa: !!education.isShowGpa,
          gpa: education.gpa || "",
          isShowLocation: !!education.isShowLocation,
          location: education.location || "",
          isShowDate: !!education.isShowDate,
          from: education.from || "",
          to: education.to || "",
          isShowPoints: !!education.isShowPoints,
          isShow: !!education.isShow,
          points: education.points?.map((point) => point || "") || [],
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

  const addNewEducation = () => {
    form.setValue("educations", [
      ...(form.getValues("educations") || []),
      {
        degree: "degree",
        institute: "institute",
        isShowLocation: false,
        location: "location",
        isShowDate: false,
        from: "",
        to: "",
        isShowPoints: false,
        isShow: true,
        points: [],
      },
    ]);

    changeSelectedEducationIndex(
      (form.getValues("educations")?.length || 0) - 1
    );
  };

  const removeEducation = (educationIndex: number) => {
    form.setValue("educations", [
      ...(form.getValues("educations") || []).filter(
        (_, index) => index !== educationIndex
      ),
    ]);
    changeSelectedEducationIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const changeOrderOfEducationPoints = (
    educationIndex: number,
    index1: number,
    index2: number
  ) => {
    form.setValue(
      "educations",
      [...(form.getValues("educations") || [])].map((education, index) => ({
        ...education,
        points:
          index === educationIndex
            ? education.points?.map((point, index) => {
                if (education.points && index === index1) {
                  return education.points[index2];
                } else if (education.points && index === index2) {
                  return education.points[index1];
                }
                return point;
              }) || []
            : education.points,
      }))
    );
    form.trigger();
  };

  const addNewPoint = (educationIndex: number) => {
    form.setValue(
      "educations",
      [...(form.getValues("educations") || [])].map((education, index) => ({
        ...education,
        points:
          index === educationIndex
            ? [...(education.points || []), "new Point"]
            : education.points,
      }))
    );
    form.trigger();
  };

  const removePoint = (educationIndex: number, pointIndex: number) => {
    form.setValue(
      "educations",
      [...(form.getValues("educations") || [])].map((education, index) => ({
        ...education,
        points:
          index === educationIndex
            ? [
                ...(education.points || []).filter(
                  (_, index) => index !== pointIndex
                ),
              ]
            : education.points,
      }))
    );
    form.trigger();
  };

  const changeSelectedEducationIndex = (index: number) => {
    if (index < (form.getValues("educations")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loadingUpdateResumeResume,
    resumeSubSectionIndex,
    addNewEducation,
    removeEducation,
    changeSelectedEducationIndex,
    addNewPoint,
    removePoint,
    changeOrderOfEducationPoints,
    isOpenRemoveDialogIndex,
    setIsOpenRemoveDialogIndex,
    changeOrderOfEducations,
  };
};
