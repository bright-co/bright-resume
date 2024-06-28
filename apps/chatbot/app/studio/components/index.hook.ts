"use client";

import { IUserCookie } from "@chatbot/cookie/user";
import { IContext } from "./context";
import { useEffect, useState } from "react";
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

export const useData = (user: IUserCookie): IContext => {
  const [resumes, setResumes] = useState<
    GetResumesQuery["getResumes"]["edges"]
  >([]);

  const [selectedResume, setSelectedResume] =
    useState<GetResumeByIdQuery["getResumeById"]>();
  const [selectedResumeId, setSelectedResumeId] = useState<string>("");
  const [isOpenNewResumeDialog, setIsNewResumeDialog] = useState(false);
  const { toast } = useToast();
  const [isCollapsedSideMenu, setIsCollapsedSideMenu] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);

  /* ---------------------------------- args ---------------------------------- */

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
  };
};
