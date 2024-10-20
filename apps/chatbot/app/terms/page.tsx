import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Bright-Resume",
  description:
    "Terms of Service for Bright-Resume, the free open-source resume builder.",
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-4">
        <p>
          Welcome to Bright-Resume. By using our service, you agree to these
          Terms of Service. Please read them carefully.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Use of Service</h2>
        <p>
          Bright-Resume is an open-source resume builder. You may use our
          service to create and manage your resumes. You are responsible for the
          content you create and share using our service.
        </p>
        <h2 className="text-2xl font-semibold mt-4">User Responsibilities</h2>
        <p>
          You agree to use Bright-Resume only for lawful purposes and in
          accordance with these Terms. You will not use our service to violate
          any applicable laws or regulations.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Intellectual Property</h2>
        <p>
          The Bright-Resume software is open-source and licensed under MIT
          License. Your resume content remains your property.
        </p>
        <h2 className="text-2xl font-semibold mt-4">
          Disclaimer of Warranties
        </h2>
        <p>
          Bright-Resume is provided "as is" without any warranties, express or
          implied. We do not guarantee that our service will be uninterrupted or
          error-free.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Limitation of Liability</h2>
        <p>
          Bright-Resume and its contributors shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages
          resulting from your use of our service.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. We will notify users of any
          significant changes.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of [specify jurisdiction].
        </p>
        <h2 className="text-2xl font-semibold mt-4">Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:legal@bright-resume.com"
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
