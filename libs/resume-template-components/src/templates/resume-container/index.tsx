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
    <div className="border border-black flex justify-center flex-col items-center bg-slate-100">
      <div className="my-10 border border-red">toolbar</div>
      <div className="shadow-md my-10">
        <TemplateMinimalist {...data} resume={data.resumeModel.input} />
      </div>
    </div>
  );
}
