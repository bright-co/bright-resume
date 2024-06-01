"use client";

import { FC } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  createHttpLink,
} from "@apollo/client";

export const ApolloProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const client = new ApolloClient({
    link: createHttpLink({
      uri: "/api/graphql",
    }),
    cache: new InMemoryCache({
      dataIdFromObject: (object) => object["id"] as string,
    }),
  });

  return <Provider client={client}>{children}</Provider>;
};
