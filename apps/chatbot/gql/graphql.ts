/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  _Any: { input: any; output: any; }
  federation__FieldSet: { input: any; output: any; }
  link__Import: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  signIn: User;
  signUp: User;
};


export type MutationSignInArgs = {
  signInAuthInputs: SignInAuthInputsGql;
};


export type MutationSignUpArgs = {
  signUpAuthInputs: SignUpAuthInputsGql;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Float']['output'];
  edgeCount?: Maybe<Scalars['Float']['output']>;
  edgesPerPage: Scalars['Float']['output'];
  totalEdges: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  getProfile: User;
  signInWithOAuthToken: User;
};

export type SignInAuthInputsGql = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type SignUpAuthInputsGql = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export enum Link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  Execution = 'EXECUTION',
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = 'SECURITY'
}

export type SignInWithOAuthTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type SignInWithOAuthTokenQuery = { __typename?: 'Query', signInWithOAuthToken: { __typename?: 'User', id?: string | null, name?: string | null, token?: string | null, username?: string | null, email?: string | null, picture?: string | null } };

export type SignInAuthMutationVariables = Exact<{
  signInAuthInputs: SignInAuthInputsGql;
}>;


export type SignInAuthMutation = { __typename?: 'Mutation', signIn: { __typename?: 'User', id?: string | null, name?: string | null, username?: string | null, email?: string | null, token?: string | null, picture?: string | null, createdAt: any } };

export type SignUpAuthMutationVariables = Exact<{
  signUpAuthInputs: SignUpAuthInputsGql;
}>;


export type SignUpAuthMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', id?: string | null, name?: string | null, username?: string | null, email?: string | null, token?: string | null, picture?: string | null, createdAt: any } };


export const SignInWithOAuthTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"signInWithOAuthToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInWithOAuthToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]}}]} as unknown as DocumentNode<SignInWithOAuthTokenQuery, SignInWithOAuthTokenQueryVariables>;
export const SignInAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signInAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInAuthInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInAuthInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInAuthInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInAuthInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<SignInAuthMutation, SignInAuthMutationVariables>;
export const SignUpAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUpAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpAuthInputs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpAuthInputsGQL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpAuthInputs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpAuthInputs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<SignUpAuthMutation, SignUpAuthMutationVariables>;