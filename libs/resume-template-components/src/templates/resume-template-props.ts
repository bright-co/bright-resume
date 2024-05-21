import {
  CertificationModel,
  CertificationModelSetMethodsKeyType,
  CourseWorkModel,
  CourseWorkModelSetMethodsKeyType,
  EducationModel,
  EducationModelSetMethodsKeyType,
  ExperienceModel,
  ExperienceModelSetMethodsKeyType,
  IResume,
  InvolvementModel,
  InvolvementModelSetMethodsKeyType,
  LanguageModel,
  LanguageModelSetMethodsKeyType,
  ProjectModel,
  ProjectModelSetMethodsKeyType,
  ResumeModel,
  ResumeModelSetMethodsKeyType,
  SkillModel,
  SkillModelSetMethodsKeyType,
} from "@models";

export type ResumeSectionType =
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
  hoverSection?: ResumeSectionType;
  setHoverSection?: (arg?: ResumeSectionType) => void;
  hoverSubSection?: {
    section: ResumeSectionType;
    subSectionIndex: number;
  };
  setHoverSubSection?: (arg?: {
    section: ResumeSectionType;
    subSectionIndex: number;
  }) => void;
  hoverSubSectionPoint?: {
    section: ResumeSectionType;
    subSectionIndex: number;
    pointIndex: number;
  };
  setHoverSubSectionPoint?: (arg?: {
    section: ResumeSectionType;
    subSectionIndex: number;
    pointIndex: number;
  }) => void;
  onChangeSectionOrder?: (section: ResumeSectionType, newOrder: number) => void;
  onChangeSubSectionIndex?: (
    section: ResumeSectionType,
    subSectionIndex: number,
    newIndex: number
  ) => void;
  onChangeSubSectionPointIndex: (
    section: ResumeSectionType,
    subSectionIndex: number,
    pointIndex: number,
    newIndex: number
  ) => void;
  updateResume?: <M extends ResumeModelSetMethodsKeyType>(
    methodName: M,
    ...args: Parameters<ResumeModel[M]>
  ) => void;
  updateResumeProject?: <M extends ProjectModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<ProjectModel[M]>
  ) => void;
  updateResumeCertification: <M extends CertificationModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<CertificationModel[M]>
  ) => void;
  updateResumeCourseWork: <M extends CourseWorkModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<CourseWorkModel[M]>
  ) => void;
  updateResumeEducation: <M extends EducationModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<EducationModel[M]>
  ) => void;
  updateResumeExperience: <M extends ExperienceModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<ExperienceModel[M]>
  ) => void;
  updateResumeInvolvement: <M extends InvolvementModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<InvolvementModel[M]>
  ) => void;

  updateResumeLanguage: <M extends LanguageModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<LanguageModel[M]>
  ) => void;
  updateResumeSkill: <M extends SkillModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<SkillModel[M]>
  ) => void;
}
