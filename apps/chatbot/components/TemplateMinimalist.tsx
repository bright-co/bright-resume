"use client";
import React from "react";
import { ResumeContainer } from "@resume-template-components/templates/resume-container";
import { resumeObj } from "./data";
import { Card } from "@chatbot-components/ui/card";
import { ResumeModel } from "@models";

export default function ResumeTemplate() {
  return (
    <Card className="h-screen w-full -scale-50">
      <ResumeContainer resumeModel={new ResumeModel(resumeObj)} />
    </Card>
  );
}
