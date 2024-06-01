"use client";

import { MUTATION_SIGN_IN_AUTH } from "./gql";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { SignInAuthInputs } from "@dto";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useToast } from "@resume-template-components/shadcn-ui";
import {
  SignInAuthMutation,
  SignInAuthMutationVariables,
} from "@chatbot/gql/graphql";

export const useData = () => {
  const { toast } = useToast();
  const form = useForm<SignInAuthInputs>({
    resolver: classValidatorResolver(SignInAuthInputs),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [createProductAdmin, { loading }] = useMutation<
    SignInAuthMutation,
    SignInAuthMutationVariables
  >(MUTATION_SIGN_IN_AUTH, {
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    },
    onCompleted: ({
      signIn: { createdAt, email, id, name, picture, token, username },
    }) => {
      toast({
        title: "Welcome!",
        description: "Sign In Success!",
      });
      console.log("success:", {
        createdAt,
        email,
        id,
        name,
        picture,
        token,
        username,
      });
    },
  });

  const onSubmit: SubmitHandler<SignInAuthInputs> = (signInAuthInputs) => {
    createProductAdmin({ variables: { signInAuthInputs } });
  };

  return {
    form,
    onSubmit,
    loading,
  };
};
