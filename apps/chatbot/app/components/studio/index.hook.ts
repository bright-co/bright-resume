"use client";

import { useEffect, useState } from "react";
import { IContext } from "./context";
import {
  UpdateResumeMutation,
  UpdateResumeMutationVariables,
  GeneratePdfOfResumeMutation,
  GeneratePdfOfResumeMutationVariables,
  GetResumeByIdQuery,
  GetResumeByIdQueryVariables,
  GetResumeByIdResumeArgsGql,
  GetResumesQuery,
} from "@chatbot/gql/graphql";
import {
  MUTATION_UPDATE_RESUME_RESUME,
  QUERY_GET_RESUME_BY_ID_RESUME,
  MUTATION_GENERATE_PDF_OF_RESUME_FILE,
} from "./gql";
import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@resume-template-components/shadcn-ui";
import { Props } from ".";
import * as utils from "@utils";
import { ResumeSectionType } from "@models";

export const useData = (props: Props): IContext => {
  const [resumes, setResumes] = useState<
    GetResumesQuery["getResumes"]["edges"]
  >([]);

  const [initialLoading, setInitialLoading] = useState(true);

  const [selectedResume, setSelectedResume] =
    useState<GetResumeByIdQuery["getResumeById"]>();
  const [selectedResumeId, setSelectedResumeId] = useState<string>(
    props.resumeId || ""
  );
  const [deleteResume, setDeleteResume] =
    useState<GetResumesQuery["getResumes"]["edges"][0]>();

  const [isOpenNewResumeDialog, setIsOpenNewResumeDialog] = useState(false);

  const { toast } = useToast();
  const [isCollapsedSideMenu, setIsCollapsedSideMenu] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(props.sheet === "chat");
  const [isOpenSteps, setIsOpenSteps] = useState(props.sheet === "steps");

  const [resumeSection, setResumeSection] = useState<ResumeSectionType>(
    props.section
  );

  const [resumeSubSectionIndex, setResumeSubSectionIndex] = useState<
    number | undefined
  >(utils.convertToInteger(props.resumeSubSectionIndex || "") || 0);

  const [getResumeByIdResumeArgs, setGetResumeByIdResumeArgs] =
    useState<GetResumeByIdResumeArgsGql>({ resumeId: "" });

  useEffect(() => {
    setGetResumeByIdResumeArgs({ resumeId: selectedResumeId });
  }, [selectedResumeId]);

  useEffect(() => {
    if (!selectedResumeId) return;
    let sheet: (typeof props)["sheet"] = undefined;
    if (isOpenSteps) {
      sheet = "steps";
    }
    if (isOpenChat) {
      sheet = "chat";
    }

    window.history.pushState(
      {},
      "",
      utils.buildUrlClient(
        "/studio/resume/:resumeId",
        {
          resumeId: selectedResumeId,
        },
        sheet || resumeSection || resumeSubSectionIndex
          ? {
              sheet,
              section: resumeSection,
              resumeSubSectionIndex:
                resumeSubSectionIndex !== undefined &&
                resumeSubSectionIndex.toString(),
            }
          : {}
      )
    );
  }, [
    selectedResumeId,
    isOpenSteps,
    resumeSection,
    isOpenChat,
    resumeSubSectionIndex,
  ]);

  const { loading: loadingSelectedResume, refetch: refetchSelectedResume } =
    useQuery<GetResumeByIdQuery, GetResumeByIdQueryVariables>(
      QUERY_GET_RESUME_BY_ID_RESUME,
      {
        skip: !selectedResumeId,
        fetchPolicy: "cache-and-network",
        variables: {
          getResumeByIdResumeArgs,
        },
        onCompleted: async ({ getResumeById }) => {
          setSelectedResume({ ...getResumeById });

          window.history.pushState(
            {},
            "",
            utils.buildUrlClient(
              "/studio/resume/:resumeId",
              {
                resumeId: getResumeById.id!,
              },
              props.sheet || props.section || props.resumeSubSectionIndex
                ? {
                    sheet: props.sheet,
                    section: props.section,
                    resumeSubSectionIndex: props.resumeSubSectionIndex,
                  }
                : {}
            )
          );
        },
      }
    );

  const [updateResumeResume, { loading: loadingUpdateResumeResume }] =
    useMutation<UpdateResumeMutation, UpdateResumeMutationVariables>(
      MUTATION_UPDATE_RESUME_RESUME,
      {
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
      }
    );

  const [generatePdfOfResumeFile, { loading: loadingGeneratePdfOfResumeFile }] =
    useMutation<
      GeneratePdfOfResumeMutation,
      GeneratePdfOfResumeMutationVariables
    >(MUTATION_GENERATE_PDF_OF_RESUME_FILE, {
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
          title: "PDF Generated!",
          description: "Please wait while we generate the PDF for you.",
        });
      },
    });

  return {
    isOpenNewResumeDialog,
    setIsOpenNewResumeDialog,
    user: props.user,
    resumes,
    setResumes,
    selectedResume,
    setSelectedResume,
    selectedResumeId,
    setSelectedResumeId,
    loadingSelectedResume,
    loadingUpdateResumeResume,
    isCollapsedSideMenu,
    setIsCollapsedSideMenu,
    isOpenChat,
    setIsOpenChat,
    isOpenSteps,
    setIsOpenSteps,
    initialLoading,
    setInitialLoading,
    resumeSection,
    setResumeSection,
    refetchSelectedResume,
    resumeSubSectionIndex,
    setResumeSubSectionIndex,
    updateResumeResume,
    deleteResume,
    setDeleteResume,
    generatePdfOfResumeFile,
    loadingGeneratePdfOfResumeFile,
  };
};
