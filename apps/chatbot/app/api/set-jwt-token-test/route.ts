import { cookie } from "@chatbot/cookie";

export async function GET(request: Request) {
  cookie.jwtToken.set({
    token: "token",
  });

  return Response.json("success");
}
