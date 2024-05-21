import {
  CertificationModel,
  CertificationModelSetMethodsKeyType,
  CourseWorkModel,
  CourseWorkModelSetMethodsKeyType,
  EducationModel,
  EducationModelSetMethodsKeyType,
  ExperienceModel,
  ExperienceModelSetMethodsKeyType,
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
import {
  ResumeSectionType,
  ResumeTemplateProps,
} from "../resume-template-props";
import { useState } from "react";

export const useResume = (props: { resumeMode: ResumeModel }) => {
  const [resumeModel, setResumeModel] = useState(props.resumeMode);

  const [hoverSection, setHoverSection] =
    useState<ResumeTemplateProps["hoverSection"]>();

  const [hoverSubSectionPoint, setHoverSubSectionPoint] =
    useState<ResumeTemplateProps["hoverSubSectionPoint"]>();

  const [hoverSubSection, setHoverSubSection] =
    useState<ResumeTemplateProps["hoverSubSection"]>();

  const onChangeSectionOrder = (
    section: ResumeSectionType,
    newOrder: number
  ) => {
    if (newOrder <= 0 || newOrder > 10) return;

    if (section === "summary") {
      resumeModel.changeSummaryOrder(newOrder);
    } else if (section === "education") {
      resumeModel.changeEducationOrder(newOrder);
    } else if (section === "project") {
      resumeModel.changeProjectOrder(newOrder);
    } else if (section === "experience") {
      resumeModel.changeExperienceOrder(newOrder);
    } else if (section === "skill") {
      resumeModel.changeSkillOrder(newOrder);
    } else if (section === "certification") {
      resumeModel.changeCertificationOrder(newOrder);
    } else if (section === "courseWork") {
      resumeModel.changeCourseWorkOrder(newOrder);
    } else if (section === "involvement") {
      resumeModel.changeInvolvementOrder(newOrder);
    } else if (section === "language") {
      resumeModel.changeLanguageOrder(newOrder);
    } else if (section === "hobby") {
      resumeModel.changeHobbyOrder(newOrder);
    }

    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const onChangeSubSectionIndex = (
    section: ResumeSectionType,
    subSectionIndex: number,
    newIndex: number
  ) => {
    if (section === "education") {
      resumeModel.changeEducationsIndex(subSectionIndex, newIndex);
    } else if (section === "project") {
      resumeModel.changeProjectsIndex(subSectionIndex, newIndex);
    } else if (section === "experience") {
      resumeModel.changeExperiencesIndex(subSectionIndex, newIndex);
    } else if (section === "skill") {
      resumeModel.changeSkillsIndex(subSectionIndex, newIndex);
    } else if (section === "certification") {
      resumeModel.changeCertificationsIndex(subSectionIndex, newIndex);
    } else if (section === "courseWork") {
      resumeModel.changeCourseWorksIndex(subSectionIndex, newIndex);
    } else if (section === "involvement") {
      resumeModel.changeInvolvementsIndex(subSectionIndex, newIndex);
    } else if (section === "language") {
      resumeModel.changeLanguagesIndex(subSectionIndex, newIndex);
    } else if (section === "hobby") {
      resumeModel.changeHobbiesIndex(subSectionIndex, newIndex);
    }
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const onChangeSubSectionPointIndex = (
    section: ResumeSectionType,
    subSectionIndex: number,
    pointIndex: number,
    newIndex: number
  ) => {
    if (section === "education") {
      resumeModel.changeEducationsPointIndex(
        subSectionIndex,
        pointIndex,
        newIndex
      );
    } else if (section === "project") {
      resumeModel.changeProjectsPointIndex(
        subSectionIndex,
        pointIndex,
        newIndex
      );
    } else if (section === "experience") {
      resumeModel.changeExperiencesPointIndex(
        subSectionIndex,
        pointIndex,
        newIndex
      );
    } else if (section === "certification") {
      resumeModel.changeCertificationsPointIndex(
        subSectionIndex,
        pointIndex,
        newIndex
      );
    } else if (section === "courseWork") {
      resumeModel.changeCourseWorksPointIndex(
        subSectionIndex,
        pointIndex,
        newIndex
      );
    } else if (section === "involvement") {
      resumeModel.changeInvolvementsPointIndex(
        subSectionIndex,
        pointIndex,
        newIndex
      );
    }
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const updateResume = <M extends ResumeModelSetMethodsKeyType>(
    methodName: M,
    ...args: Parameters<ResumeModel[M]>
  ) => {
    resumeModel.callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const updateResumeProject = <M extends ProjectModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<ProjectModel[M]>
  ) => {
    if (index >= resumeModel.getProjects().length) return;

    resumeModel.getProjects()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const updateResumeCertification = <
    M extends CertificationModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<CertificationModel[M]>
  ) => {
    if (index >= resumeModel.getCertifications().length) return;

    resumeModel.getCertifications()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const updateResumeCourseWork = <M extends CourseWorkModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<CourseWorkModel[M]>
  ) => {
    if (index >= resumeModel.getCourseWorks().length) return;

    resumeModel.getCourseWorks()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const updateResumeEducation = <M extends EducationModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<EducationModel[M]>
  ) => {
    if (index >= resumeModel.getEducations().length) return;

    resumeModel.getEducations()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const updateResumeExperience = <M extends ExperienceModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<ExperienceModel[M]>
  ) => {
    if (index >= resumeModel.getExperiences().length) return;

    resumeModel.getExperiences()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const updateResumeInvolvement = <M extends InvolvementModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<InvolvementModel[M]>
  ) => {
    if (index >= resumeModel.getInvolvements().length) return;

    resumeModel.getInvolvements()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const updateResumeLanguage = <M extends LanguageModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<LanguageModel[M]>
  ) => {
    if (index >= resumeModel.getLanguages().length) return;

    resumeModel.getLanguages()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const updateResumeSkill = <M extends SkillModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<SkillModel[M]>
  ) => {
    if (index >= resumeModel.getSkills().length) return;

    resumeModel.getSkills()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  return {
    resumeModel,
    hoverSection,
    setHoverSection,
    hoverSubSectionPoint,
    setHoverSubSectionPoint,
    hoverSubSection,
    setHoverSubSection,
    onChangeSectionOrder,
    onChangeSubSectionIndex,
    onChangeSubSectionPointIndex,
    updateResume,
    updateResumeProject,
    updateResumeCertification,
    updateResumeCourseWork,
    updateResumeEducation,
    updateResumeExperience,
    updateResumeInvolvement,
    updateResumeLanguage,
    updateResumeSkill,
  };
};
