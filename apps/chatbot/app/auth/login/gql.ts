import { gql } from "@apollo/client";

export const QUERY_GET_PROFILE = gql`
  query getProfile {
    getProfile {
      id
      name
      username
      email
      picture
      token
    }
  }
`;
