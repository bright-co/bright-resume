import { cookie } from "@chatbot/cookie";
import { redirect } from "next/navigation";
import StudioComponents from "../../../components/studio";

export default async function Page(props: { params: { resumeId: string } }) {
  const {
    params: { resumeId },
  } = props;

  const userCookie = await cookie.user.get();

  if (!userCookie?.id) {
    redirect("/auth/sign-in");
  }

  return <StudioComponents user={userCookie} resumeId={resumeId} />;
}
