"use client";

import { MUTATION_UPDATE_RESUME_RESUME } from "../../../gql";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { UpdateResumeResumeInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useToast } from "@resume-template-components/shadcn-ui";
import {
  UpdateResumeMutation,
  UpdateResumeMutationVariables,
} from "@chatbot/gql/graphql";
import { useStudioContext } from "../../../use-context";
import { useCallback, useEffect } from "react";

export const useData = () => {
  const {
    selectedResume,
    selectedResumeId,
    refetchSelectedResume,
    resumeSubSectionIndex,
    setResumeSubSectionIndex,
  } = useStudioContext();

  const { toast } = useToast();

  const getFormValues = useCallback(
    (selectedResumeId_: string, selectedResume_: typeof selectedResume) => ({
      resumeId: selectedResumeId_!,
      title: selectedResume_?.title || "",
      isShowEducation: !!selectedResume_?.isShowEducation,
      educationLabel: selectedResume_?.educationLabel || "",
      educations:
        selectedResume_?.educations?.map((education) => ({
          degree: education.degree || "",
          institute: education.institute || "",
          isShowInstitute: !!education.isShowInstitute,
          isShowLocation: !!education.isShowLocation,
          location: education.location || "",
          isShowDate: !!education.isShowDate,
          from: education.from || "",
          to: education.to || "",
          gpa: education.gpa || "",
          isShowGpa: !!education.isShowGpa,
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

  const [updateResumeResume, { loading }] = useMutation<
    UpdateResumeMutation,
    UpdateResumeMutationVariables
  >(MUTATION_UPDATE_RESUME_RESUME, {
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    },
    onCompleted: async () => {
      refetchSelectedResume();
      toast({
        title: "Welcome!",
        description: "Resume updated Successfully!",
      });
    },
  });

  const onSubmit: SubmitHandler<UpdateResumeResumeInputs> = (
    updateResumeResumeInputs
  ) => {
    updateResumeResume({ variables: { updateResumeResumeInputs } });
  };

  const addNewEducation = () => {
    form.setValue("educations", [
      ...(form.getValues("educations") || []),
      {
        degree: "Degree",
        institute: "Institute",
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
    loading,
    resumeSubSectionIndex,
    addNewEducation,
    removeEducation,
    changeSelectedEducationIndex,
    addNewPoint,
    removePoint,
  };
};
