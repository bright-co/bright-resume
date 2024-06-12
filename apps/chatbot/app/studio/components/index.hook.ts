"use client";

import { IUserCookie } from "@chatbot/cookie/user";
import { IContext } from "./context";

export const useData = (user: IUserCookie): IContext => {
  return { user };
};
