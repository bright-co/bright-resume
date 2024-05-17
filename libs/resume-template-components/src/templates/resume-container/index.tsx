"use client";

import { ResumeModel } from "@models";
import { TemplateMinimalist } from "../minimalist";
import { useState } from "react";
import { ResumeTemplateProps } from "../resume-template-props";

export interface TemplateMinimalistProps {
  resumeModel: ResumeModel;
}

export function ResumeContainer(props: TemplateMinimalistProps) {
  const [resumeModel] = useState(props.resumeModel);

  const [hoverSection, setHoverSection] =
    useState<ResumeTemplateProps["hoverSection"]>();

  const [hoverSubSectionPoint, setHoverSubSectionPoint] =
    useState<ResumeTemplateProps["hoverSubSectionPoint"]>();

  const [hoverSubSection, setHoverSubSection] =
    useState<ResumeTemplateProps["hoverSubSection"]>();

  return (
    <TemplateMinimalist
      resume={resumeModel.input}
      hoverSection={hoverSection}
      setHoverSection={setHoverSection}
      hoverSubSection={hoverSubSection}
      setHoverSubSection={setHoverSubSection}
      hoverSubSectionPoint={hoverSubSectionPoint}
      setHoverSubSectionPoint={setHoverSubSectionPoint}
    />
  );
}
