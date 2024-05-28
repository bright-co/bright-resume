import { Card } from "@chatbot-components/ui/card";
import ResumeTemplate from "apps/chatbot/components/TemplateMinimalist";
import { Suspense } from "react";

export default function PDFSection() {
  return (
    <Card className="overflow-auto">
      <div className="w-[800px] overflow-x-hidden overflow-y-auto flex items-center justify-center">
        <Suspense>
          <ResumeTemplate />
        </Suspense>
      </div>
    </Card>
  );
}
