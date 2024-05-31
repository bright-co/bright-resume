"use client";

import { FC } from "react";

import {
  ApolloClient,
  // ApolloLink,
  InMemoryCache,
  ApolloProvider as Provider,
  createHttpLink,
} from "@apollo/client";

// import { createUploadLink } from "apollo-upload-client";

export const ApolloProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const client = new ApolloClient({
    link: createHttpLink({
      uri: "http://localhost:4200/api/graphql",
    }),
    cache: new InMemoryCache({
      dataIdFromObject: (object) => object["id"] as string,
    }),
  });

  return <Provider client={client}>{children}</Provider>;
};
