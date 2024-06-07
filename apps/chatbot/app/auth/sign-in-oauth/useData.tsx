"use client";

import { QUERY_SIGN_IN_WITH_OATH_AUTH } from "./gql";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { client } from "@chatbot/app/api/client";
import { useToast } from "@resume-template-components/shadcn-ui";
import { SignInWithOAuthTokenQuery } from "@chatbot/gql/graphql";
import { useEffect } from "react";

export const useData = () => {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const router = useRouter();

  const { loading } = useQuery<SignInWithOAuthTokenQuery>(
    QUERY_SIGN_IN_WITH_OATH_AUTH,
    {
      skip: !searchParams.get("oauth-token"),
      context: {
        headers: {
          Authorization: "Bearer " + searchParams.get("oauth-token"),
        },
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.message,
        });
      },
      onCompleted: async ({ signInWithOAuthToken }) => {
        await client.setUserCookie(signInWithOAuthToken);
        router.push("/chat");
      },
    }
  );

  useEffect(() => {
    if (!searchParams.get("oauth-token")) {
      router.push("/sign-in");
    }
  }, [searchParams, router]);

  return {
    loading,
  };
};
