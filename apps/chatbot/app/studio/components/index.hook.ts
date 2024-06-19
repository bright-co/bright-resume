"use client";

import { IUserCookie } from "@chatbot/cookie/user";
import { IContext } from "./context";
import { useEffect, useState } from "react";
import {
  GetResumeByIdQuery,
  GetResumeByIdQueryVariables,
  GetResumeByIdResumeArgsGql,
  GetResumesQuery,
} from "@chatbot/gql/graphql";
import { QUERY_GET_RESUME_BY_ID_RESUME } from "./gql";
import { useQuery } from "@apollo/client";

export const useData = (user: IUserCookie): IContext => {
  const [resumes, setResumes] = useState<
    GetResumesQuery["getResumes"]["edges"]
  >([]);

  const [selectedResume, setSelectedResume] =
    useState<GetResumesQuery["getResumes"]["edges"][0]>();
  const [selectedResumeId, setSelectedResumeId] = useState<string>("");
  const [isOpenNewResumeDialog, setIsNewResumeDialog] = useState(false);

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
  };
};
