import { cookie } from "@chatbot/cookie";
import { redirect } from "next/navigation";
import { SignUpPage } from "./components";

export default async function Page() {
  const userCookie = await cookie.user.get();

  if (userCookie?.id) {
    redirect("/studio");
  }

  return <SignUpPage />;
}
