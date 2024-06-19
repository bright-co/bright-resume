import { IUserCookie } from "@chatbot/cookie/user";
import { GetResumesQuery } from "@chatbot/gql/graphql";
import { Dispatch, SetStateAction, createContext } from "react";

export interface IContext {
  user: IUserCookie;
  isOpenNewResumeDialog: boolean;
  setIsNewResumeDialog: Dispatch<SetStateAction<boolean>>;
  resumes: GetResumesQuery["getResumes"]["edges"];
  setResumes: Dispatch<SetStateAction<GetResumesQuery["getResumes"]["edges"]>>;
  selectedResume: GetResumesQuery["getResumes"]["edges"][0] | undefined;
  setSelectedResume: Dispatch<
    SetStateAction<GetResumesQuery["getResumes"]["edges"][0] | undefined>
  >;
  selectedResumeId: string;
  setSelectedResumeId: Dispatch<SetStateAction<string>>;
  loadingSelectedResume: boolean;
}

export const Context = createContext<IContext>({
  user: {},
  isOpenNewResumeDialog: false,
  setIsNewResumeDialog: () => {},
  resumes: [],
  setResumes: () => {},
  selectedResume: undefined,
  setSelectedResume: () => {},
  selectedResumeId: "",
  setSelectedResumeId: () => {},
  loadingSelectedResume: false,
});
