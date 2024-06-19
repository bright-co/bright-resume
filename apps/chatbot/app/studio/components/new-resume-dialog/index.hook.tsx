"use client";

import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

import { CreateResumeResumeInputs } from "@dto";
import { useToast } from "@resume-template-components/shadcn-ui";

import {
  CreateResumeMutation,
  CreateResumeMutationVariables,
} from "@chatbot/gql/graphql";

import { MUTATION_CREATE_RESUME_RESUME } from "./gql";
import { useStudioContext } from "../use-context";

export const useData = () => {
  const {
    isOpenNewResumeDialog,
    setIsNewResumeDialog,
    setResumes,
    setSelectedResume,
    setSelectedResumeId,
  } = useStudioContext();
  const { toast } = useToast();

  const form = useForm<CreateResumeResumeInputs>({
    resolver: classValidatorResolver(CreateResumeResumeInputs),
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  const [signInAuth, { loading }] = useMutation<
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
    onCompleted: async ({ createResume: { id, name } }) => {
      toast({
        title: "Welcome!",
        description: "Resume Created Successfully!",
      });
      setIsNewResumeDialog(false);
      setResumes((prev) => [{ id, name }, ...prev]);
      setSelectedResume({ id, name });
      setSelectedResumeId(id!);
    },
  });

  const onSubmit: SubmitHandler<CreateResumeResumeInputs> = ({ name }) => {
    signInAuth({ variables: { createResumeResumeInputs: { name } } });
  };

  return {
    form,
    onSubmit,
    loading,
    isOpenNewResumeDialog,
    setIsNewResumeDialog,
  };
};
