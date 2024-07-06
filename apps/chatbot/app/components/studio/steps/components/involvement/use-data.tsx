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
      isShowInvolvement: !!selectedResume_?.isShowInvolvement,
      involvementLabel: selectedResume_?.involvementLabel || "",
      involvements:
        selectedResume_?.involvements?.map((involvement) => ({
          role: involvement.role || "",
          company: involvement.company || "",
          isShowLocation: !!involvement.isShowLocation,
          location: involvement.location || "",
          isShowDate: !!involvement.isShowDate,
          from: involvement.from || "",
          to: involvement.to || "",
          isShowPoints: !!involvement.isShowPoints,
          isShow: !!involvement.isShow,
          points: involvement.points?.map((point) => point || "") || [],
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

  const addNewInvolvement = () => {
    form.setValue("involvements", [
      ...(form.getValues("involvements") || []),
      {
        role: "Role",
        company: "company",
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

    changeSelectedInvolvementIndex(
      (form.getValues("involvements")?.length || 0) - 1
    );
  };

  const removeInvolvement = (involvementIndex: number) => {
    form.setValue("involvements", [
      ...(form.getValues("involvements") || []).filter(
        (_, index) => index !== involvementIndex
      ),
    ]);
    changeSelectedInvolvementIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const addNewPoint = (involvementIndex: number) => {
    form.setValue(
      "involvements",
      [...(form.getValues("involvements") || [])].map((involvement, index) => ({
        ...involvement,
        points:
          index === involvementIndex
            ? [...(involvement.points || []), "new Point"]
            : involvement.points,
      }))
    );
    form.trigger();
  };

  const removePoint = (involvementIndex: number, pointIndex: number) => {
    form.setValue(
      "involvements",
      [...(form.getValues("involvements") || [])].map((involvement, index) => ({
        ...involvement,
        points:
          index === involvementIndex
            ? [
                ...(involvement.points || []).filter(
                  (_, index) => index !== pointIndex
                ),
              ]
            : involvement.points,
      }))
    );
    form.trigger();
  };

  const changeSelectedInvolvementIndex = (index: number) => {
    if (index < (form.getValues("involvements")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loading,
    resumeSubSectionIndex,
    addNewInvolvement,
    removeInvolvement,
    changeSelectedInvolvementIndex,
    addNewPoint,
    removePoint,
  };
};
