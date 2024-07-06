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
import { useEffect } from "react";

export const useData = () => {
  const { selectedResume, selectedResumeId, refetchSelectedResume } =
    useStudioContext();
  const { toast } = useToast();

  const form = useForm<UpdateResumeResumeInputs>({
    resolver: classValidatorResolver(UpdateResumeResumeInputs),
    mode: "onChange",
    defaultValues: {
      resumeId: selectedResumeId!,
      title: selectedResume?.title || "",
      name: selectedResume?.name || "",
      role: selectedResume?.role || "",

      phoneNumber: selectedResume?.phoneNumber || "",
      isShowPhoneNumber: !!selectedResume?.isShowPhoneNumber,

      linkedin: selectedResume?.linkedin || "",
      isShowLinkedin: !!selectedResume?.isShowLinkedin,

      website: selectedResume?.website || "",
      isShowWebsite: !!selectedResume?.isShowWebsite,

      email: selectedResume?.email || "",
      isShowEmail: !!selectedResume?.isShowWebsite,

      location: selectedResume?.location || "",
      isShowLocation: !!selectedResume?.isShowWebsite,
    },
  });

  useEffect(() => {
    form.reset({
      resumeId: selectedResumeId!,
      title: selectedResume?.title || "",
      name: selectedResume?.name || "",
      role: selectedResume?.role || "",

      phoneNumber: selectedResume?.phoneNumber || "",
      isShowPhoneNumber: !!selectedResume?.isShowPhoneNumber,

      linkedin: selectedResume?.linkedin || "",
      isShowLinkedin: !!selectedResume?.isShowLinkedin,

      website: selectedResume?.website || "",
      isShowWebsite: !!selectedResume?.isShowWebsite,

      email: selectedResume?.email || "",
      isShowEmail: !!selectedResume?.isShowWebsite,

      location: selectedResume?.location || "",
      isShowLocation: !!selectedResume?.isShowWebsite,
    });
  }, [form, selectedResume, selectedResumeId]);

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

  return {
    form,
    onSubmit,
    loading,
  };
};
