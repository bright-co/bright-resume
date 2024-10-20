import { cookie } from "@chatbot/cookie";
import { redirect } from "next/navigation";
import { SignInPage } from "./components";

export default async function Page() {
  const userCookie = await cookie.user.get();

  if (userCookie?.id) {
    redirect("/studio");
  }

  return <SignInPage BACK_URL={process.env["BACK_URL"]!} />;
}
