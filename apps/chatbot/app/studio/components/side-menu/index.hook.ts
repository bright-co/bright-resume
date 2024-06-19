"use client";

import { QUERY_GET_RESUMES_RESUME } from "./gql";
import { useQuery } from "@apollo/client";
import {
  GetResumesQuery,
  GetResumesQueryVariables,
  GetResumesResumeArgsGql,
  PaginationArgsGql,
} from "@chatbot/gql/graphql";
import { GetResumesResumeArgs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStudioContext } from "../use-context";

export const useData = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    resumes,
    setResumes,
    setSelectedResume,
    selectedResume,
    setSelectedResumeId,
  } = useStudioContext();

  /* ---------------------------------- args ---------------------------------- */

  const [getResumesResumeArgs, setGetResumesResumeArgs] =
    useState<GetResumesResumeArgsGql>({ name: "" });
  const [paginationArgs] = useState<PaginationArgsGql>({
    limit: 20,
    page: 1,
  });

  /* -------------------------------- useQuery -------------------------------- */

  const { loading, refetch } = useQuery<
    GetResumesQuery,
    GetResumesQueryVariables
  >(QUERY_GET_RESUMES_RESUME, {
    variables: {
      getResumesResumeArgs,
      paginationArgs,
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },

    onCompleted: async ({ getResumes: { edges } }) => {
      if (paginationArgs.page === 1) {
        setSelectedResume(edges[0]);
        setSelectedResumeId(edges[0].id!);
      }
      setResumes(edges);
    },
  });

  /* --------------------------------- useForm -------------------------------- */

  const form = useForm<GetResumesResumeArgs>({
    resolver: classValidatorResolver(GetResumesResumeArgs),
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<GetResumesResumeArgs> = (
    getProductsAdminArgs
  ) => {
    setGetResumesResumeArgs(getProductsAdminArgs);
    refetch();
  };

  /* --------------------------------- output --------------------------------- */

  return {
    onSubmit,
    form,
    loading,
    isCollapsed,
    setIsCollapsed,
    errorMessage,
    resumes,
    getResumesResumeArgs,
    paginationArgs,
    selectedResume,
    setSelectedResume,
    setSelectedResumeId,
  };
};
