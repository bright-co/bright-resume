import { cookie } from "@chatbot/cookie";
import Index from "./components";
import { redirect } from "next/navigation";

export default async function RootLayout() {
  const userCookie = await cookie.user.get();

  if (!userCookie?.id) {
    redirect("/auth/sign-in");
  }

  return <Index user={userCookie} />;
}
