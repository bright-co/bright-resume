import { cookie } from "@chatbot/cookie";
import Index from "./components";

export default async function RootLayout() {
  const userCookie = await cookie.user.get();

  return <Index />;
}
