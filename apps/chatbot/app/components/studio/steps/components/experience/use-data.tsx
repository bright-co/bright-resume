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
      isShowExperience: !!selectedResume_?.isShowExperience,
      experienceLabel: selectedResume_?.experienceLabel || "",
      experiences:
        selectedResume_?.experiences?.map((experience) => ({
          role: experience.role || "",
          company: experience.company || "",
          isShowLocation: !!experience.isShowLocation,
          location: experience.location || "",
          isShowDate: !!experience.isShowDate,
          fromMonth: experience.fromMonth || "",
          fromYear: experience.fromYear || "",
          toMonth: experience.toMonth || "",
          toYear: experience.toYear || "",
          isShowPoints: !!experience.isShowPoints,
          points: experience.points?.map((point) => point || "") || [],
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

  const addNewExperience = () => {
    form.setValue("experiences", [
      ...(form.getValues("experiences") || []),
      {
        role: "Role",
        company: "company",
        isShowLocation: false,
        location: "location",
        isShowDate: false,
        fromMonth: "",
        fromYear: "",
        toMonth: "",
        toYear: "",
        isShowPoints: false,
        points: [],
      },
    ]);

    changeSelectedExperienceIndex(
      (form.getValues("experiences")?.length || 0) - 1
    );
  };

  const removeExperience = (experienceIndex: number) => {
    form.setValue("experiences", [
      ...(form.getValues("experiences") || []).filter(
        (_, index) => index !== experienceIndex
      ),
    ]);
    changeSelectedExperienceIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const addNewPoint = (experienceIndex: number) => {
    form.setValue(
      "experiences",
      [...(form.getValues("experiences") || [])].map((experience, index) => ({
        ...experience,
        points:
          index === experienceIndex
            ? [...(experience.points || []), "new Point"]
            : experience.points,
      }))
    );
    form.trigger();
  };

  const removePoint = (experienceIndex: number, pointIndex: number) => {
    form.setValue(
      "experiences",
      [...(form.getValues("experiences") || [])].map((experience, index) => ({
        ...experience,
        points:
          index === experienceIndex
            ? [
                ...(experience.points || []).filter(
                  (_, index) => index !== pointIndex
                ),
              ]
            : experience.points,
      }))
    );
    form.trigger();
  };

  const changeSelectedExperienceIndex = (index: number) => {
    if (index < (form.getValues("experiences")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loading,
    resumeSubSectionIndex,
    addNewExperience,
    removeExperience,
    changeSelectedExperienceIndex,
    addNewPoint,
    removePoint,
  };
};
