import { cookie } from "@chatbot/cookie";

export async function POST() {
  cookie.user.remove();
}
