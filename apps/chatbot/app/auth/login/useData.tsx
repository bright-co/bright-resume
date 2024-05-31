"use client";

import { useQuery } from "@apollo/client";
import { GetProfileQuery } from "@chatbot/gql/graphql";

import { QUERY_GET_PROFILE } from "./gql";

export const useData = () => {
  useQuery<GetProfileQuery>(QUERY_GET_PROFILE, {
    onError: (error) => {
      console.error("here... get profile ", { error });
    },
    onCompleted: ({ getProfile: { name } }) => {
      console.log("here... get name ", { name });
    },
  });
};
