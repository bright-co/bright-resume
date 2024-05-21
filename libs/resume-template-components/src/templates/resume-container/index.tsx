"use client";

import { ResumeModel } from "@models";
import { TemplateMinimalist } from "../minimalist";
import { useResume } from "./useResume";

export interface TemplateMinimalistProps {
  resumeModel: ResumeModel;
}

export function ResumeContainer(props: TemplateMinimalistProps) {
  const data = useResume({ resumeMode: props.resumeModel });

  return (
    <div style={{ paddingBottom: "30px" }}>
      <TemplateMinimalist {...data} resume={data.resumeModel.input} />
    </div>
  );
}
