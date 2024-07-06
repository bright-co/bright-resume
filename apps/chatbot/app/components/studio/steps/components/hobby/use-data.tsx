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
      isShowHobby: !!selectedResume_?.isShowHobby,
      hobbyLabel: selectedResume_?.hobbyLabel || "",
      hobbies:
        selectedResume_?.hobbies?.map((hobby) => ({
          point: hobby.point || "",
          isShow: !!hobby.isShow,
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

  const addNewHobby = () => {
    form.setValue("hobbies", [
      ...(form.getValues("hobbies") || []),
      {
        point: "hobbies...",
        isShow: true,
      },
    ]);

    changeSelectedHobbyIndex((form.getValues("hobbies")?.length || 0) - 1);
  };

  const removeHobby = (hobbyIndex: number) => {
    form.setValue("hobbies", [
      ...(form.getValues("hobbies") || []).filter(
        (_, index) => index !== hobbyIndex
      ),
    ]);
    changeSelectedHobbyIndex(
      resumeSubSectionIndex ? resumeSubSectionIndex - 1 : 0
    );
  };

  const changeSelectedHobbyIndex = (index: number) => {
    if (index < (form.getValues("hobbies")?.length || 0) && index >= 0) {
      setResumeSubSectionIndex(index);
      form.trigger();
    }
  };

  return {
    form,
    onSubmit,
    loading,
    resumeSubSectionIndex,
    addNewHobby,
    removeHobby,
    changeSelectedHobbyIndex,
  };
};
