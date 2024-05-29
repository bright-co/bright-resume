import { Card } from "@chatbot-components/ui/card";
import ResumeTemplate from "apps/chatbot/components/TemplateMinimalist";
import { Suspense } from "react";

export default function PDFSection() {
  return (
    <Card className="overflow-auto">
      <Suspense>
        <ResumeTemplate />
      </Suspense>
    </Card>
  );
}
