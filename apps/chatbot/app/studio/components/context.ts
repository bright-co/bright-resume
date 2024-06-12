import { IUserCookie } from "@chatbot/cookie/user";
import { createContext } from "react";

export interface IContext {
  user: IUserCookie;
}

export const Context = createContext<IContext>({ user: {} });
