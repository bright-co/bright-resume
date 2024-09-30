import { Metadata } from "next";
import { Index } from "./components/landing-page";

export const metadata: Metadata = {
  title: {
    template: "%s | Bright-Resume: Free Open-Source Resume Builder",
    default: "Bright-Resume: Free Open-Source Resume Builder",
  },
  description:
    "Create professional resumes for free with Bright-Resume, an free, open-source AI-powered resume builder.",
  keywords: [
    "resume builder",
    "free resume",
    "open source",
    "AI resume",
    "job application",
  ],
  openGraph: {
    title: "Bright-Resume: Free Open-Source Resume Builder",
    description:
      "Create professional resumes for free with Bright-Resume, an open-source AI-powered resume builder.",
    images: [
      {
        url: "https://bright-resume.com/assets/image/logo-with-typography-horizontal-dark.png",
      },
    ],
    url: "https://bright-resume.com",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <Index />;
}
