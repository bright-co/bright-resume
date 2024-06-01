import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { CookieKeyEnum } from "./enum";
import { cookies } from "next/headers";

export interface IJwtToken {
  token: string;
}

export const jwtSetTokenOption: Partial<ResponseCookie> = {
  httpOnly: true,
  secure: true,
  expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
  sameSite: "lax",
  path: "/",
};

const remove = () => {
  cookies().delete(CookieKeyEnum.JWT_TOKEN);
};

const set = (jwtToken: IJwtToken) => {
  cookies().set(
    CookieKeyEnum.JWT_TOKEN,
    JSON.stringify(jwtToken),
    jwtSetTokenOption
  );
};

const get = (): IJwtToken | undefined => {
  const cookieValue = cookies().get(CookieKeyEnum.JWT_TOKEN)?.value;
  if (cookieValue) {
    try {
      return JSON.parse(cookieValue) as IJwtToken;
    } catch (error) {
      return undefined;
    }
  }
};

export const jwtToken = { set, get, remove };
