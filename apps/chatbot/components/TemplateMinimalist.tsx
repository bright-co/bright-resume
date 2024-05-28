"use client";
import React from "react";
import { TemplateMinimalist } from "@resume-template-components/templates/minimalist";
import { resumeObj } from "./data";
import { Card } from "@chatbot-components/ui/card";

export default function ResumeTemplate() {
  return (
    <Card className="h-screen w-full -scale-50">
      <TemplateMinimalist staticMode={true} resume={resumeObj} />
    </Card>
  );
}
