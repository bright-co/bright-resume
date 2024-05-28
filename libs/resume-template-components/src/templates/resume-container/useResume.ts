import {
  CertificationModel,
  CertificationModelSetMethodsKeyType,
  CourseWorkModel,
  CourseWorkModelSetMethodsKeyType,
  EducationModel,
  EducationModelSetMethodsKeyType,
  ExperienceModel,
  ExperienceModelSetMethodsKeyType,
  HobbyModel,
  HobbyModelSetMethodsKeyType,
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
  ResumeSectionType,
  ResumeModelGetMethodsKeyType,
} from "@models";
import { ResumeTemplateProps } from "../resume-template-props";
import { useState } from "react";

export const useResume = (props: { resumeMode: ResumeModel }) => {
  const [resumeModel, setResumeModel] = useState(props.resumeMode);

  const [hoverSection, setHoverSection] =
    useState<ResumeTemplateProps["hoverSection"]>();

  const [hoverSubSectionPoint, setHoverSubSectionPoint] =
    useState<ResumeTemplateProps["hoverSubSectionPoint"]>();

  const [hoverSubSection, setHoverSubSection] =
    useState<ResumeTemplateProps["hoverSubSection"]>();

  const onMoveUpSection = (section1: ResumeSectionType) => {
    const section2 = resumeModel.getUpperAndVisibleSection(section1);

    if (section2 === undefined) return;
    resumeModel.changeOrderOfTwoSections(section1, section2);

    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const onMoveDownSection = (section1: ResumeSectionType) => {
    const section2 = resumeModel.getLowerAndVisibleSection(section1);

    if (section2 === undefined) return;
    resumeModel.changeOrderOfTwoSections(section1, section2);

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

  const callResumeSetMethod = <M extends ResumeModelSetMethodsKeyType>(
    methodName: M,
    ...args: Parameters<ResumeModel[M]>
  ) => {
    resumeModel.setMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeGetMethod = <M extends ResumeModelGetMethodsKeyType>(
    methodName: M,
    ...args: Parameters<ResumeModel[M]>
  ): ReturnType<ResumeModel[M]> => {
    return resumeModel.getMethod(methodName, ...args);
  };

  const callResumeProjectSetMethod = <M extends ProjectModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<ProjectModel[M]>
  ) => {
    if (index >= resumeModel.getProjects().length) return;

    resumeModel.getProjects()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeCertificationSetMethod = <
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

  const callResumeCourseWorkSetMethod = <
    M extends CourseWorkModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<CourseWorkModel[M]>
  ) => {
    if (index >= resumeModel.getCourseWorks().length) return;

    resumeModel.getCourseWorks()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeEducationSetMethod = <
    M extends EducationModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<EducationModel[M]>
  ) => {
    if (index >= resumeModel.getEducations().length) return;

    resumeModel.getEducations()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeExperienceSetMethod = <
    M extends ExperienceModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<ExperienceModel[M]>
  ) => {
    if (index >= resumeModel.getExperiences().length) return;

    resumeModel.getExperiences()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeInvolvementSetMethod = <
    M extends InvolvementModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<InvolvementModel[M]>
  ) => {
    if (index >= resumeModel.getInvolvements().length) return;

    resumeModel.getInvolvements()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeLanguageSetMethod = <
    M extends LanguageModelSetMethodsKeyType
  >(
    index: number,
    methodName: M,
    ...args: Parameters<LanguageModel[M]>
  ) => {
    if (index >= resumeModel.getLanguages().length) return;

    resumeModel.getLanguages()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeSkillSetMethod = <M extends SkillModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<SkillModel[M]>
  ) => {
    if (index >= resumeModel.getSkills().length) return;

    resumeModel.getSkills()[index].callSetMethod(methodName, ...args);
    setResumeModel(new ResumeModel(resumeModel.input));
  };

  const callResumeHobbySetMethod = <M extends HobbyModelSetMethodsKeyType>(
    index: number,
    methodName: M,
    ...args: Parameters<HobbyModel[M]>
  ) => {
    if (index >= resumeModel.getHobbies().length) return;

    resumeModel.getHobbies()[index].callSetMethod(methodName, ...args);
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
    onChangeSubSectionIndex,
    onChangeSubSectionPointIndex,
    callResumeSetMethod,
    callResumeGetMethod,
    callResumeProjectSetMethod,
    callResumeCertificationSetMethod,
    callResumeCourseWorkSetMethod,
    callResumeEducationSetMethod,
    callResumeExperienceSetMethod,
    callResumeInvolvementSetMethod,
    callResumeLanguageSetMethod,
    callResumeSkillSetMethod,
    callResumeHobbySetMethod,
    onMoveUpSection,
    onMoveDownSection,
  };
};
