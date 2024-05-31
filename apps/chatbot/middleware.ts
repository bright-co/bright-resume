import { NextResponse, type NextRequest } from "next/server";
import { cookie } from "./cookie";
import { getNestedValue, removeKeyFromObject } from "@utils";

export async function middleware(request: NextRequest) {
  const jwtToken = cookie.jwtToken.get();
  const requestHeaders = new Headers(request.headers);

  let body: object | undefined;
  try {
    body = await request.json();
  } catch (error) {
    console.log("error request");
  }

  console.log({ body });

  if (body) {
    try {
      const response = await fetch(
        "https://back-development.bright-resume.com/graphql",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: jwtToken
              ? "Bearer " + jwtToken.token
              : requestHeaders.get("Authorization") || "",
          },
          body: JSON.stringify(body),
        }
      );

      const responseBody = await response.json();

      const tokenValue = getNestedValue(responseBody, "token");
      if (tokenValue) {
        cookie.jwtToken.set({ token: tokenValue });
      }

      return NextResponse.json(removeKeyFromObject(responseBody, "token"));
    } catch (error) {
      console.log({ error });
      return NextResponse.error();
    }
  }

  return NextResponse.next();
}

// // See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/graphql",
};
