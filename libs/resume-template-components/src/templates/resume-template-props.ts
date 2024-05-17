import { IResume } from "@models";

export type HoverSectionType =
  | "header"
  | "summary"
  | "experience"
  | "involvement"
  | "project"
  | "education"
  | "skill"
  | "courseWork"
  | "certification"
  | "hobby"
  | "language"
  | undefined;

export interface ResumeTemplateProps {
  staticMode?: boolean;
  resume: Partial<IResume>;
  hoverSection?: HoverSectionType;
  setHoverSection?: (arg?: HoverSectionType) => void;
  hoverSubSection?: {
    section: HoverSectionType;
    subSectionIndex: number;
  };
  setHoverSubSection?: (arg?: {
    section: HoverSectionType;
    subSectionIndex: number;
  }) => void;
  hoverSubSectionPoint?: {
    section: HoverSectionType;
    subSectionIndex: number;
    pointIndex: number;
  };
  setHoverSubSectionPoint?: (arg?: {
    section: HoverSectionType;
    subSectionIndex: number;
    pointIndex: number;
  }) => void;
}
