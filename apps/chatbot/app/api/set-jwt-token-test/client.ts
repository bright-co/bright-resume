import { clientApi } from "../client-api";

export const setJwtTokenTest = async (): Promise<unknown> => {
  console.log("getProfile > ....");
  const response = await clientApi("/api/set-jwt-token-test");

  return { response };
};
