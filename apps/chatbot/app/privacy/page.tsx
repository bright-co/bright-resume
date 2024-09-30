import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Bright-Resume",
  description:
    "Privacy Policy for Bright-Resume, the free open-source resume builder.",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4">
        <p>
          At Bright-Resume, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and safeguard your
          personal information.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Information We Collect</h2>
        <p>
          We collect only the information necessary to provide our resume
          building service. This may include:
        </p>
        <ul className="list-disc pl-6">
          <li>Personal details you provide for your resume</li>
          <li>Usage data to improve our service</li>
          <li>Email address for account creation (if applicable)</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-4">
          How We Use Your Information
        </h2>
        <p>
          We use your information solely for the purpose of providing and
          improving our resume building service. We do not sell or share your
          personal data with third parties.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data.
          However, as an open-source project, we encourage users to review our
          security practices and contribute to their improvement.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information. Please contact us if you wish to exercise these rights.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. We will notify users of
          any significant changes.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:privacy@bright-resume.com"
            className="text-blue-600 hover:underline"
          >
            info@bright-resume.com
          </a>
          .
        </p>
      </div>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
