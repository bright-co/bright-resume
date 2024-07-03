"use client";

import { useEffect, useState } from "react";
import { IContext } from "./context";
import {
  UpdateResumeMutation,
  UpdateResumeMutationVariables,
  GetResumeByIdQuery,
  GetResumeByIdQueryVariables,
  GetResumeByIdResumeArgsGql,
  GetResumesQuery,
} from "@chatbot/gql/graphql";
import {
  MUTATION_UPDATE_RESUME_RESUME,
  QUERY_GET_RESUME_BY_ID_RESUME,
} from "./gql";
import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@resume-template-components/shadcn-ui";
import { Props } from ".";

export const useData = ({ user, resumeId }: Props): IContext => {
  const [resumes, setResumes] = useState<
    GetResumesQuery["getResumes"]["edges"]
  >([]);

  const [initialLoading, setInitialLoading] = useState(true);

  const [selectedResume, setSelectedResume] =
    useState<GetResumeByIdQuery["getResumeById"]>();
  const [selectedResumeId, setSelectedResumeId] = useState<string>(
    resumeId || ""
  );
  const [isOpenNewResumeDialog, setIsNewResumeDialog] = useState(false);
  const { toast } = useToast();
  const [isCollapsedSideMenu, setIsCollapsedSideMenu] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [isOpenSteps, setIsOpenSteps] = useState(false);

  const [getResumeByIdResumeArgs, setGetResumeByIdResumeArgs] =
    useState<GetResumeByIdResumeArgsGql>({ resumeId: "" });

  useEffect(() => {
    setGetResumeByIdResumeArgs({ resumeId: selectedResumeId });
  }, [selectedResumeId]);

  /* -------------------------------- useQuery -------------------------------- */

  const { loading: loadingSelectedResume } = useQuery<
    GetResumeByIdQuery,
    GetResumeByIdQueryVariables
  >(QUERY_GET_RESUME_BY_ID_RESUME, {
    skip: !selectedResumeId,
    variables: {
      getResumeByIdResumeArgs,
    },
    onCompleted: async ({ getResumeById }) => {
      setSelectedResume({ ...getResumeById });
      window.history.pushState({}, "", `/studio/resume/${getResumeById.id}`);
    },
  });

  /* ------------------------------- useMutation ------------------------------ */

  const [updateResume, { loading: loadingUpdateResume }] = useMutation<
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
    onCompleted: async ({ updateResume: { id, userId } }) => {
      toast({
        title: "Success!",
        description: "Resume Updated Successfully!",
      });
      setSelectedResumeId(id!);
    },
  });

  return {
    isOpenNewResumeDialog,
    setIsNewResumeDialog,
    user,
    resumes,
    setResumes,
    selectedResume,
    setSelectedResume,
    selectedResumeId,
    setSelectedResumeId,
    loadingSelectedResume,
    loadingUpdateResume,
    updateResume,
    isCollapsedSideMenu,
    setIsCollapsedSideMenu,
    isOpenChat,
    setIsOpenChat,
    isOpenSteps,
    setIsOpenSteps,
    initialLoading,
    setInitialLoading,
  };
};
