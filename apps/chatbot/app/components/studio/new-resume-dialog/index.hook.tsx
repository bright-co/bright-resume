"use client";

import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import { CreateResumeResumeInputs } from "@dto";
import { useToast } from "@resume-template-components/shadcn-ui";

import {
  CreateResumeMutation,
  CreateResumeMutationVariables,
  CreateResumeResumeInputsGql,
} from "@chatbot/gql/graphql";

import { MUTATION_CREATE_RESUME_RESUME } from "./gql";
import { useStudioContext } from "../use-context";
import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";

export const useData = () => {
  const { toast } = useToast();

  const {
    isOpenNewResumeDialog,
    setIsOpenNewResumeDialog,
    setResumes,
    setSelectedResumeId,
    resumes,
    initialLoading,
    selectedResumeId,
    user,
    setIsOpenSteps,
  } = useStudioContext();

  const form = useForm<CreateResumeResumeInputs>({
    resolver: classValidatorResolver(CreateResumeResumeInputs),
    mode: "onChange",
    defaultValues: {
      title: "",
      name: user.name || user.username || "Your Name",
      role: "Your Role",
      fontFamily: ResumeFontFamilyEnum.Arial,
      color: ResumeColorEnum.Black,
      fontSize: ResumeFontSizeEnum.Medium,

      summaryLabel: "Summary",
      summary: "Write your summary ...",
      isShowSummary: true,
      summaryOrder: 1,
      experienceOrder: 2,
      involvementOrder: 3,
      projectOrder: 4,
      educationOrder: 5,
      skillOrder: 6,
      certificationOrder: 7,
      courseWorkOrder: 8,
      languageOrder: 9,
      hobbyOrder: 10,
    },
  });

  const [createResume, { loading }] = useMutation<
    CreateResumeMutation,
    CreateResumeMutationVariables
  >(MUTATION_CREATE_RESUME_RESUME, {
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    },
    onCompleted: async ({ createResume: { id, title, userId, updatedAt } }) => {
      toast({
        title: "Welcome!",
        description: "Resume Created Successfully!",
      });
      setIsOpenNewResumeDialog(false);
      setResumes((prev) => [{ id, title, userId, updatedAt }, ...prev]);
      setSelectedResumeId(id!);
      setIsOpenSteps(true);
    },
  });

  const onSubmit: SubmitHandler<CreateResumeResumeInputsGql> = (
    createResumeResumeInputs
  ) => {
    createResume({ variables: { createResumeResumeInputs } });
  };

  return {
    form,
    onSubmit,
    loading,
    isOpenNewResumeDialog,
    setIsOpenNewResumeDialog,
    resumes,
    initialLoading,
    selectedResumeId,
  };
};
