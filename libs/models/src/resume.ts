import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";

import { CertificationModel, ICertification } from "./certification";
import { CourseWorkModel, ICourseWork } from "./course-work";
import { IEducation, EducationModel } from "./education";
import { ExperienceModel, IExperience } from "./experience";
import { IProject, ProjectModel } from "./project";
import { IInvolvement, InvolvementModel } from "./involvement";
import { ILanguage, LanguageModel } from "./language";
import { ISkill, SkillModel } from "./skill";
import { IHobby, HobbyModel } from "./hobby";

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

export interface IResume {
  id?: string;
  userId: string;
  name?: string;
  title?: string;
  fontSize?: ResumeFontSizeEnum;
  fontFamily?: ResumeFontFamilyEnum;
  color?: ResumeColorEnum;
  role?: string;
  isShowImage?: boolean;
  isShowPhoneNumber?: boolean;
  phoneNumber?: string;
  isShowLinkedin?: boolean;
  linkedin?: string;
  isShowWebsite?: boolean;
  website?: string;
  isShowEmail?: boolean;
  email?: string;
  isShowLocation?: boolean;
  location?: string;
  isShowBirthDay?: boolean;
  birthDay?: string;
  isShowSummary?: boolean;
  summaryOrder?: number;
  summaryLabel?: string;
  summary?: string;
  isShowExperience?: boolean;
  experienceOrder?: number;
  experienceLabel?: string;
  experienceRoleLabel?: string;
  experienceCompanyLabel?: string;
  experienceLocationLabel?: string;
  experiences?: IExperience[];
  isShowProject?: boolean;
  projectOrder?: number;
  projectLabel?: string;
  projectRoleLabel?: string;
  projectTitleLabel?: string;
  projectCompanyLabel?: string;
  projectLocationLabel?: string;
  projectUrlLabel?: string;
  projects?: IProject[];
  isShowEducation?: boolean;
  educationLabel?: string;
  educationOrder?: number;
  educationDegreeLabel?: string;
  educationInstituteLabel?: string;
  educationLocationLabel?: string;
  educationGpaLabel?: string;
  educations?: IEducation[];
  isShowCertification?: boolean;
  certificationOrder?: number;
  certificationLabel?: string;
  certificationNameLabel?: string;
  certificationInstituteLabel?: string;
  certificationYearLabel?: string;
  certifications?: ICertification[];
  isShowCourseWork?: boolean;
  courseWorkLabel?: string;
  courseWorkOrder?: number;
  courseWorkTitleLabel?: string;
  courseWorkNameLabel?: string;
  courseWorkInstituteLabel?: string;
  courseWorkYearLabel?: string;
  courseWorkSkillsLabel?: string;
  courseWorks?: ICourseWork[];
  isShowInvolvement?: boolean;
  involvementLabel?: string;
  involvementOrder?: number;
  involvementRoleLabel?: string;
  involvementCompanyLabel?: string;
  involvementLocationLabel?: string;
  involvements?: IInvolvement[];
  isShowSkill?: boolean;
  skillLabel?: string;
  skillOrder?: number;
  skills?: ISkill[];
  isShowLanguage?: boolean;
  languageOrder?: number;
  languageLabel?: string;
  languageNameLabel?: string;
  languageLevelLabel?: string;
  languages?: ILanguage[];
  hobbyOrder?: number;
  hobbyLabel?: string;
  hobbies?: IHobby[];
  isShowHobby?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ResumeModel {
  constructor(public input: Partial<IResume>) {}

  getUserId(): string | undefined {
    return this.input.userId;
  }

  getName(): string | undefined {
    return this.input.name;
  }

  setName(name: string | undefined): void {
    this.input.name = name;
  }

  getTitle(): string | undefined {
    return this.input.title;
  }

  setTitle(title: string | undefined): void {
    this.input.title = title;
  }

  getFontSize(): ResumeFontSizeEnum | undefined {
    return this.input.fontSize;
  }

  setFontSize(fontSize: ResumeFontSizeEnum | undefined): void {
    this.input.fontSize = fontSize;
  }

  getFontFamily(): ResumeFontFamilyEnum | undefined {
    return this.input.fontFamily;
  }

  setFontFamily(fontFamily: ResumeFontFamilyEnum | undefined): void {
    this.input.fontFamily = fontFamily;
  }

  getColor(): ResumeColorEnum | undefined {
    return this.input.color;
  }

  getColorValue(color: ResumeColorEnum): string {
    if (color === ResumeColorEnum.red) return "#ff0000";
    if (color === ResumeColorEnum.black) return "#000000";
    if (color === ResumeColorEnum.blue) return "#0000ff";
    if (color === ResumeColorEnum.yellow) return "#CD9D00";
    if (color === ResumeColorEnum.green) return "#008000";
    if (color === ResumeColorEnum.gray) return "#808080";
    if (color === ResumeColorEnum.purple) return "#800080";
    if (color === ResumeColorEnum.orange) return "#ffa500";
    if (color === ResumeColorEnum.brown) return "#a52a2a";
    return "#000";
  }

  setColor(color: ResumeColorEnum | undefined): void {
    this.input.color = color;
  }

  getRole(): string | undefined {
    return this.input.role;
  }

  setRole(role: string | undefined): void {
    this.input.role = role;
  }

  getIsShowImage(): boolean | undefined {
    return this.input.isShowImage;
  }

  setIsShowImage(isShowImage: boolean | undefined): void {
    this.input.isShowImage = isShowImage;
  }

  getIsShowPhoneNumber(): boolean | undefined {
    return this.input.isShowPhoneNumber;
  }

  setIsShowPhoneNumber(isShowPhoneNumber: boolean | undefined): void {
    this.input.isShowPhoneNumber = isShowPhoneNumber;
  }

  getPhoneNumber(): string | undefined {
    return this.input.phoneNumber;
  }

  setPhoneNumber(phoneNumber: string | undefined): void {
    this.input.phoneNumber = phoneNumber;
  }

  getIsShowLinkedin(): boolean | undefined {
    return this.input.isShowLinkedin;
  }

  setIsShowLinkedin(isShowLinkedin: boolean | undefined): void {
    this.input.isShowLinkedin = isShowLinkedin;
  }

  getLinkedin(): string | undefined {
    return this.input.linkedin;
  }

  setLinkedin(linkedin: string | undefined): void {
    this.input.linkedin = linkedin;
  }

  getIsShowWebsite(): boolean | undefined {
    return this.input.isShowWebsite;
  }

  setIsShowWebsite(isShowWebsite: boolean | undefined): void {
    this.input.isShowWebsite = isShowWebsite;
  }

  getWebsite(): string | undefined {
    return this.input.website;
  }

  setWebsite(website: string | undefined): void {
    this.input.website = website;
  }

  getIsShowEmail(): boolean | undefined {
    return this.input.isShowEmail;
  }

  setIsShowEmail(isShowEmail: boolean | undefined): void {
    this.input.isShowEmail = isShowEmail;
  }

  getEmail(): string | undefined {
    return this.input.email;
  }

  setEmail(email: string | undefined): void {
    this.input.email = email;
  }

  getIsShowLocation(): boolean | undefined {
    return this.input.isShowLocation;
  }

  getIsShowBirthDay(): boolean | undefined {
    return this.input.isShowBirthDay;
  }

  setIsShowLocation(isShowLocation: boolean | undefined): void {
    this.input.isShowLocation = isShowLocation;
  }

  getLocation(): string | undefined {
    return this.input.location;
  }

  setLocation(location: string | undefined): void {
    this.input.location = location;
  }

  setIsShowBirthDay(isShowBirthDay: boolean | undefined): void {
    this.input.isShowBirthDay = isShowBirthDay;
  }

  getBirthDay(): string | undefined {
    return this.input.birthDay;
  }

  setBirthDay(birthDay: string | undefined): void {
    this.input.birthDay = birthDay;
  }

  getIsShowSummary(): boolean | undefined {
    return this.input.isShowSummary;
  }

  setIsShowSummary(isShowSummary: boolean | undefined): void {
    this.input.isShowSummary = isShowSummary;
  }

  getSummaryLabel(): string | undefined {
    return this.input.summaryLabel;
  }

  setSummaryLabel(summaryLabel: string | undefined): void {
    this.input.summaryLabel = summaryLabel;
  }

  getSummary(): string | undefined {
    return this.input.summary;
  }

  setSummary(summary: string | undefined): void {
    this.input.summary = summary;
  }

  getIsShowExperience(): boolean | undefined {
    return this.input.isShowExperience;
  }

  setIsShowExperience(isShowExperience: boolean | undefined): void {
    this.input.isShowExperience = isShowExperience;
  }

  getExperienceLabel(): string | undefined {
    return this.input.experienceLabel;
  }

  setExperienceLabel(experienceLabel: string | undefined): void {
    this.input.experienceLabel = experienceLabel;
  }

  getExperienceRoleLabel(): string | undefined {
    return this.input.experienceRoleLabel;
  }

  setExperienceRoleLabel(experienceRoleLabel: string | undefined): void {
    this.input.experienceRoleLabel = experienceRoleLabel;
  }

  getExperienceCompanyLabel(): string | undefined {
    return this.input.experienceCompanyLabel;
  }

  setExperienceCompanyLabel(experienceCompanyLabel: string | undefined): void {
    this.input.experienceCompanyLabel = experienceCompanyLabel;
  }

  getExperienceLocationLabel(): string | undefined {
    return this.input.experienceLocationLabel;
  }

  setExperienceLocationLabel(
    experienceLocationLabel: string | undefined
  ): void {
    this.input.experienceLocationLabel = experienceLocationLabel;
  }

  getIsShowProject(): boolean | undefined {
    return this.input.isShowProject;
  }

  setIsShowProject(isShowProject: boolean | undefined): void {
    this.input.isShowProject = isShowProject;
  }

  getProjectLabel(): string | undefined {
    return this.input.projectLabel;
  }

  setProjectLabel(projectLabel: string | undefined): void {
    this.input.projectLabel = projectLabel;
  }

  getProjectRoleLabel(): string | undefined {
    return this.input.projectRoleLabel;
  }

  setProjectRoleLabel(projectRoleLabel: string | undefined): void {
    this.input.projectRoleLabel = projectRoleLabel;
  }

  getProjectTitleLabel(): string | undefined {
    return this.input.projectTitleLabel;
  }

  setProjectTitleLabel(projectTitleLabel: string | undefined): void {
    this.input.projectTitleLabel = projectTitleLabel;
  }
  getProjectCompanyLabel(): string | undefined {
    return this.input.projectCompanyLabel;
  }

  setProjectCompanyLabel(projectCompanyLabel: string | undefined): void {
    this.input.projectCompanyLabel = projectCompanyLabel;
  }

  getProjectLocationLabel(): string | undefined {
    return this.input.projectLocationLabel;
  }

  setProjectLocationLabel(projectLocationLabel: string | undefined): void {
    this.input.projectLocationLabel = projectLocationLabel;
  }

  getProjectUrlLabel(): string | undefined {
    return this.input.projectUrlLabel;
  }

  setProjectUrlLabel(projectUrlLabel: string | undefined): void {
    this.input.projectUrlLabel = projectUrlLabel;
  }
  getIsShowEducation(): boolean | undefined {
    return this.input.isShowEducation;
  }

  setIsShowEducation(isShowEducation: boolean | undefined): void {
    this.input.isShowEducation = isShowEducation;
  }

  getEducationLabel(): string | undefined {
    return this.input.educationLabel;
  }

  setEducationLabel(educationLabel: string | undefined): void {
    this.input.educationLabel = educationLabel;
  }

  getEducationDegreeLabel(): string | undefined {
    return this.input.educationDegreeLabel;
  }

  setEducationDegreeLabel(educationDegreeLabel: string | undefined): void {
    this.input.educationDegreeLabel = educationDegreeLabel;
  }

  getEducationInstituteLabel(): string | undefined {
    return this.input.educationInstituteLabel;
  }

  setEducationInstituteLabel(
    educationInstituteLabel: string | undefined
  ): void {
    this.input.educationInstituteLabel = educationInstituteLabel;
  }

  getEducationLocationLabel(): string | undefined {
    return this.input.educationLocationLabel;
  }

  setEducationLocationLabel(educationLocationLabel: string | undefined): void {
    this.input.educationLocationLabel = educationLocationLabel;
  }

  getEducationGpaLabel(): string | undefined {
    return this.input.educationGpaLabel;
  }

  setEducationGpaLabel(educationGpaLabel: string | undefined): void {
    this.input.educationGpaLabel = educationGpaLabel;
  }

  getEducations(): EducationModel[] {
    return (
      this.input.educations?.map(
        (education) => new EducationModel(education)
      ) || []
    );
  }

  getIsShowCertification(): boolean | undefined {
    return this.input.isShowCertification;
  }

  setIsShowCertification(isShowCertification: boolean | undefined): void {
    this.input.isShowCertification = isShowCertification;
  }

  getCertificationLabel(): string | undefined {
    return this.input.certificationLabel;
  }

  setCertificationLabel(certificationLabel: string | undefined): void {
    this.input.certificationLabel = certificationLabel;
  }

  getCertificationNameLabel(): string | undefined {
    return this.input.certificationNameLabel;
  }

  setCertificationNameLabel(certificationNameLabel: string | undefined): void {
    this.input.certificationNameLabel = certificationNameLabel;
  }

  getCertificationInstituteLabel(): string | undefined {
    return this.input.certificationInstituteLabel;
  }

  setCertificationInstituteLabel(
    certificationInstituteLabel: string | undefined
  ): void {
    this.input.certificationInstituteLabel = certificationInstituteLabel;
  }

  getCertificationYearLabel(): string | undefined {
    return this.input.certificationYearLabel;
  }

  setCertificationYearLabel(certificationYearLabel: string | undefined): void {
    this.input.certificationYearLabel = certificationYearLabel;
  }

  getIsShowCourseWork(): boolean | undefined {
    return this.input.isShowCourseWork;
  }

  setIsShowCourseWork(isShowCourseWork: boolean | undefined): void {
    this.input.isShowCourseWork = isShowCourseWork;
  }

  getCourseWorkLabel(): string | undefined {
    return this.input.courseWorkLabel;
  }

  setCourseWorkLabel(courseWorkLabel: string | undefined): void {
    this.input.courseWorkLabel = courseWorkLabel;
  }

  getCourseWorkTitleLabel(): string | undefined {
    return this.input.courseWorkTitleLabel;
  }

  setCourseWorkTitleLabel(courseWorkTitleLabel: string | undefined): void {
    this.input.courseWorkTitleLabel = courseWorkTitleLabel;
  }

  getCourseWorkNameLabel(): string | undefined {
    return this.input.courseWorkNameLabel;
  }

  setCourseWorkNameLabel(courseWorkNameLabel: string | undefined): void {
    this.input.courseWorkNameLabel = courseWorkNameLabel;
  }
  getCourseWorkInstituteLabel(): string | undefined {
    return this.input.courseWorkInstituteLabel;
  }

  setCourseWorkInstituteLabel(
    courseWorkInstituteLabel: string | undefined
  ): void {
    this.input.courseWorkInstituteLabel = courseWorkInstituteLabel;
  }

  getCourseWorkYearLabel(): string | undefined {
    return this.input.courseWorkYearLabel;
  }

  setCourseWorkYearLabel(courseWorkYearLabel: string | undefined): void {
    this.input.courseWorkYearLabel = courseWorkYearLabel;
  }

  getCourseWorkSkillsLabel(): string | undefined {
    return this.input.courseWorkSkillsLabel;
  }

  setCourseWorkSkillsLabel(courseWorkSkillsLabel: string | undefined): void {
    this.input.courseWorkSkillsLabel = courseWorkSkillsLabel;
  }

  getIsShowInvolvement(): boolean | undefined {
    return this.input.isShowInvolvement;
  }
  setIsShowInvolvement(isShowInvolvement: boolean | undefined): void {
    this.input.isShowInvolvement = isShowInvolvement;
  }
  getInvolvementLabel(): string | undefined {
    return this.input.involvementLabel;
  }
  setInvolvementLabel(involvementLabel: string | undefined): void {
    this.input.involvementLabel = involvementLabel;
  }

  getInvolvementRoleLabel(): string | undefined {
    return this.input.involvementRoleLabel;
  }
  setInvolvementRoleLabel(involvementRoleLabel: string | undefined): void {
    this.input.involvementRoleLabel = involvementRoleLabel;
  }

  getInvolvementCompanyLabel(): string | undefined {
    return this.input.involvementCompanyLabel;
  }
  setInvolvementCompanyLabel(
    involvementCompanyLabel: string | undefined
  ): void {
    this.input.involvementCompanyLabel = involvementCompanyLabel;
  }

  getInvolvementLocationLabel(): string | undefined {
    return this.input.involvementLocationLabel;
  }
  setInvolvementLocationLabel(
    involvementLocationLabel: string | undefined
  ): void {
    this.input.involvementLocationLabel = involvementLocationLabel;
  }

  getIsShowSkill(): boolean | undefined {
    return this.input.isShowSkill;
  }
  setIsShowSkill(isShowSkill: boolean | undefined): void {
    this.input.isShowSkill = isShowSkill;
  }

  getSkillLabel(): string | undefined {
    return this.input.skillLabel;
  }

  getSkills(): SkillModel[] {
    return this.input.skills?.map((skill) => new SkillModel(skill)) || [];
  }

  setSkillLabel(skillLabel: string | undefined): void {
    this.input.skillLabel = skillLabel;
  }

  getIsShowLanguage(): boolean | undefined {
    return this.input.isShowLanguage;
  }

  setIsShowLanguage(isShowLanguage: boolean | undefined): void {
    this.input.isShowLanguage = isShowLanguage;
  }
  getLanguageLabel(): string | undefined {
    return this.input.languageLabel;
  }

  setLanguageLabel(languageLabel: string | undefined): void {
    this.input.languageLabel = languageLabel;
  }

  getLanguageNameLabel(): string | undefined {
    return this.input.languageNameLabel;
  }

  setLanguageNameLabel(languageNameLabel: string | undefined): void {
    this.input.languageNameLabel = languageNameLabel;
  }

  getLanguageLevelLabel(): string | undefined {
    return this.input.languageLevelLabel;
  }
  setLanguageLevelLabel(languageLevelLabel: string | undefined): void {
    this.input.languageLevelLabel = languageLevelLabel;
  }

  setLanguages(languages: ILanguage[] | undefined): void {
    this.input.languages = languages;
  }

  getHobbyLabel(): string | undefined {
    return this.input.hobbyLabel;
  }

  setHobbyLabel(hobbyLabel: string | undefined): void {
    this.input.hobbyLabel = hobbyLabel;
  }

  getSummaryOrder(): number | undefined {
    return this.input.summaryOrder;
  }

  setSummaryOrder(order: number | undefined): void {
    this.input.summaryOrder = order;
  }

  getSectionByOrder(order: number): ResumeSectionType | undefined {
    if (order === this.getExperienceOrder()) {
      return "experience";
    } else if (order === this.getProjectOrder()) {
      return "project";
    } else if (order === this.getSummaryOrder()) {
      return "summary";
    } else if (order === this.getEducationOrder()) {
      return "education";
    } else if (order === this.getCertificationOrder()) {
      return "certification";
    } else if (order === this.getCourseWorkOrder()) {
      return "courseWork";
    } else if (order === this.getInvolvementOrder()) {
      return "involvement";
    } else if (order === this.getSkillOrder()) {
      return "skill";
    } else if (order === this.getLanguageOrder()) {
      return "language";
    } else if (order === this.getHobbyOrder()) {
      return "hobby";
    }

    return undefined;
  }

  setSectionOrder(section: ResumeSectionType, order: number): void {
    if (section === "experience") {
      this.setExperienceOrder(order);
    } else if (section === "project") {
      this.setProjectOrder(order);
    } else if (section === "summary") {
      this.setSummaryOrder(order);
    } else if (section === "education") {
      this.setEducationOrder(order);
    } else if (section === "certification") {
      this.setCertificationOrder(order);
    } else if (section === "courseWork") {
      this.setCourseWorkOrder(order);
    } else if (section === "involvement") {
      this.setInvolvementOrder(order);
    } else if (section === "skill") {
      this.setSkillOrder(order);
    } else if (section === "language") {
      this.setLanguageOrder(order);
    } else if (section === "hobby") {
      this.setHobbyOrder(order);
    }
  }

  getSectionOrder(section: ResumeSectionType): number | undefined {
    if (section === "experience") {
      return this.getExperienceOrder();
    } else if (section === "project") {
      return this.getProjectOrder();
    } else if (section === "summary") {
      return this.getSummaryOrder();
    } else if (section === "education") {
      return this.getEducationOrder();
    } else if (section === "certification") {
      return this.getCertificationOrder();
    } else if (section === "courseWork") {
      return this.getCourseWorkOrder();
    } else if (section === "involvement") {
      return this.getInvolvementOrder();
    } else if (section === "skill") {
      return this.getSkillOrder();
    } else if (section === "language") {
      return this.getLanguageOrder();
    } else if (section === "hobby") {
      return this.getHobbyOrder();
    }

    return undefined;
  }

  getSectionIsShow(section: ResumeSectionType): boolean {
    if (section === "experience") {
      return !!this.getIsShowExperience();
    } else if (section === "project") {
      return !!this.getIsShowProject();
    } else if (section === "summary") {
      return !!this.getIsShowSummary();
    } else if (section === "education") {
      return !!this.getIsShowEducation();
    } else if (section === "certification") {
      return !!this.getIsShowCertification();
    } else if (section === "courseWork") {
      return !!this.getIsShowCourseWork();
    } else if (section === "involvement") {
      return !!this.getIsShowInvolvement();
    } else if (section === "skill") {
      return !!this.getIsShowSkill();
    } else if (section === "language") {
      return !!this.getIsShowLanguage();
    } else if (section === "hobby") {
      return !!this.getIsShowHobby();
    }
    return false;
  }

  getUpperAndVisibleSection(
    section: ResumeSectionType
  ): ResumeSectionType | undefined {
    const order = this.getSectionOrder(section);

    if (order === undefined || order <= 1) {
      return;
    }

    let output = order - 1;

    while (output >= 1) {
      const section = this.getSectionByOrder(output);
      const isShow = section && this.getSectionIsShow(section);

      if (isShow) {
        return section;
      }
      output--;
    }

    return undefined;
  }

  getLowerAndVisibleSection(
    section: ResumeSectionType
  ): ResumeSectionType | undefined {
    const order = this.getSectionOrder(section);

    if (order === undefined || order >= 10) {
      return;
    }

    let output = order + 1;

    while (output <= 10) {
      const section = this.getSectionByOrder(output);
      const isShow = section && this.getSectionIsShow(section);

      if (isShow) {
        return section;
      }
      output++;
    }

    return undefined;
  }

  changeOrderOfTwoSections(
    section1: ResumeSectionType,
    section2: ResumeSectionType
  ) {
    const order1 = this.getSectionOrder(section1);
    const order2 = this.getSectionOrder(section2);

    if (order1 === undefined || order2 === undefined) {
      return;
    }

    this.setSectionOrder(section1, order2);
    this.setSectionOrder(section2, order1);
  }

  getExperienceOrder(): number | undefined {
    return this.input.experienceOrder;
  }

  setExperienceOrder(order: number | undefined): void {
    this.input.experienceOrder = order;
  }

  getExperiences(): ExperienceModel[] {
    return (
      this.input.experiences?.map(
        (experience) => new ExperienceModel(experience)
      ) || []
    );
  }

  changeExperiencesIndex(index1: number, index2: number) {
    if (!this.input.experiences) {
      return;
    }
    const length = this.getExperiences()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.experiences[index1];
    const item2 = this.input.experiences[index2];

    this.input.experiences[index2] = item1;
    this.input.experiences[index1] = item2;
  }

  changeExperiencesPointIndex(
    experienceIndex: number,
    index1: number,
    index2: number
  ) {
    const length = this.getExperiences()?.length || 0;
    if (experienceIndex >= length) {
      return;
    }

    const experience = this.getExperiences()[experienceIndex];
    experience.changePointsIndex(index1, index2);
  }

  getProjectOrder(): number | undefined {
    return this.input.projectOrder;
  }

  setProjectOrder(order: number | undefined): void {
    this.input.projectOrder = order;
  }

  getProjects(): ProjectModel[] {
    return (
      this.input.projects?.map((project) => new ProjectModel(project)) || []
    );
  }

  changeProjectsIndex(index1: number, index2: number) {
    if (!this.input.projects) {
      return;
    }
    const length = this.getProjects()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.projects[index1];
    const item2 = this.input.projects[index2];

    this.input.projects[index2] = item1;
    this.input.projects[index1] = item2;
  }

  changeProjectsPointIndex(
    projectIndex: number,
    index1: number,
    index2: number
  ) {
    const length = this.getProjects()?.length || 0;
    if (projectIndex >= length) {
      return;
    }

    const project = this.getProjects()[projectIndex];
    project.changePointsIndex(index1, index2);
  }

  getEducationOrder(): number | undefined {
    return this.input.educationOrder;
  }

  setEducationOrder(order: number | undefined): void {
    this.input.educationOrder = order;
  }

  changeEducationsIndex(index1: number, index2: number) {
    if (!this.input.educations) {
      return;
    }
    const length = this.getEducations()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.educations[index1];
    const item2 = this.input.educations[index2];

    this.input.educations[index2] = item1;
    this.input.educations[index1] = item2;
  }

  changeEducationsPointIndex(
    educationIndex: number,
    index1: number,
    index2: number
  ) {
    const length = this.getEducations()?.length || 0;
    if (educationIndex >= length) {
      return;
    }

    const education = this.getEducations()[educationIndex];
    education.changePointsIndex(index1, index2);
  }

  getCertificationOrder(): number | undefined {
    return this.input.certificationOrder;
  }
  setCertificationOrder(order: number | undefined): void {
    this.input.certificationOrder = order;
  }

  getCertifications(): CertificationModel[] {
    return (
      this.input.certifications?.map(
        (certification) => new CertificationModel(certification)
      ) || []
    );
  }

  changeCertificationsIndex(index1: number, index2: number) {
    if (!this.input.certifications) {
      return;
    }
    const length = this.getCertifications()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.certifications[index1];
    const item2 = this.input.certifications[index2];

    this.input.certifications[index2] = item1;
    this.input.certifications[index1] = item2;
  }

  changeCertificationsPointIndex(
    certificationIndex: number,
    index1: number,
    index2: number
  ) {
    const length = this.getCertifications()?.length || 0;
    if (certificationIndex >= length) {
      return;
    }

    const certification = this.getCertifications()[certificationIndex];
    certification.changePointsIndex(index1, index2);
  }

  getCourseWorkOrder(): number | undefined {
    return this.input.courseWorkOrder;
  }
  setCourseWorkOrder(order: number | undefined): void {
    this.input.courseWorkOrder = order;
  }

  getCourseWorks(): CourseWorkModel[] {
    return (
      this.input.courseWorks?.map(
        (courseWork) => new CourseWorkModel(courseWork)
      ) || []
    );
  }

  changeCourseWorksIndex(index1: number, index2: number) {
    if (!this.input.courseWorks) {
      return;
    }
    const length = this.getCourseWorks()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.courseWorks[index1];
    const item2 = this.input.courseWorks[index2];

    this.input.courseWorks[index2] = item1;
    this.input.courseWorks[index1] = item2;
  }

  changeCourseWorksPointIndex(
    courseWorkIndex: number,
    index1: number,
    index2: number
  ) {
    const length = this.getCourseWorks()?.length || 0;
    if (courseWorkIndex >= length) {
      return;
    }

    const courseWork = this.getCourseWorks()[courseWorkIndex];
    courseWork.changePointsIndex(index1, index2);
  }

  getInvolvementOrder(): number | undefined {
    return this.input.involvementOrder;
  }
  setInvolvementOrder(order: number | undefined): void {
    this.input.involvementOrder = order;
  }

  getInvolvements(): InvolvementModel[] {
    return (
      this.input.involvements?.map(
        (involvement) => new InvolvementModel(involvement)
      ) || []
    );
  }

  changeInvolvementsIndex(index1: number, index2: number) {
    if (!this.input.involvements) {
      return;
    }
    const length = this.getInvolvements()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.involvements[index1];
    const item2 = this.input.involvements[index2];

    this.input.involvements[index2] = item1;
    this.input.involvements[index1] = item2;
  }

  changeInvolvementsPointIndex(
    involvementIndex: number,
    index1: number,
    index2: number
  ) {
    const length = this.getInvolvements()?.length || 0;
    if (involvementIndex >= length) {
      return;
    }

    const involvement = this.getInvolvements()[involvementIndex];
    involvement.changePointsIndex(index1, index2);
  }

  getSkillOrder(): number | undefined {
    return this.input.skillOrder;
  }
  setSkillOrder(order: number | undefined): void {
    this.input.skillOrder = order;
  }

  changeSkillsIndex(index1: number, index2: number) {
    if (!this.input.skills) {
      return;
    }
    const length = this.getSkills()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.skills[index1];
    const item2 = this.input.skills[index2];

    this.input.skills[index2] = item1;
    this.input.skills[index1] = item2;
  }

  getLanguageOrder(): number | undefined {
    return this.input.languageOrder;
  }
  setLanguageOrder(order: number | undefined): void {
    this.input.languageOrder = order;
  }

  getLanguages(): LanguageModel[] {
    return (
      this.input.languages?.map((language) => new LanguageModel(language)) || []
    );
  }

  changeLanguagesIndex(index1: number, index2: number) {
    if (!this.input.languages) {
      return;
    }
    const length = this.getLanguages()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.languages[index1];
    const item2 = this.input.languages[index2];

    this.input.languages[index2] = item1;
    this.input.languages[index1] = item2;
  }

  getHobbyOrder(): number | undefined {
    return this.input.hobbyOrder;
  }
  setHobbyOrder(order: number | undefined): void {
    this.input.hobbyOrder = order;
  }

  getHobbies(): HobbyModel[] {
    return this.input.hobbies?.map((hobby) => new HobbyModel(hobby)) || [];
  }

  changeHobbiesIndex(index1: number, index2: number) {
    if (!this.input.hobbies) {
      return;
    }
    const length = this.getHobbies()?.length || 0;

    if (index1 >= length || index2 >= length) {
      return;
    }

    const item1 = this.input.hobbies[index1];
    const item2 = this.input.hobbies[index2];

    this.input.hobbies[index2] = item1;
    this.input.hobbies[index1] = item2;
  }

  getIsShowHobby(): boolean | undefined {
    return this.input.isShowHobby;
  }

  setIsShowHobby(isShowHobby: boolean | undefined) {
    this.input.isShowHobby = isShowHobby;
  }

  getCreatedAt(): Date | undefined {
    return this.input.createdAt;
  }
  getUpdatedAt(): Date | undefined {
    return this.input.updatedAt;
  }

  setHiddenSection(section: ResumeSectionType) {
    if (section === "summary") {
      this.setIsShowSummary(false);
    } else if (section === "education") {
      this.setIsShowEducation(false);
    } else if (section === "project") {
      this.setIsShowProject(false);
    } else if (section === "experience") {
      this.setIsShowExperience(false);
    } else if (section === "skill") {
      this.setIsShowSkill(false);
    } else if (section === "certification") {
      this.setIsShowCertification(false);
    } else if (section === "courseWork") {
      this.setIsShowCourseWork(false);
    } else if (section === "involvement") {
      this.setIsShowInvolvement(false);
    } else if (section === "language") {
      this.setIsShowLanguage(false);
    } else if (section === "hobby") {
      this.setIsShowHobby(false);
    }
  }

  setShowSection = (section: ResumeSectionType) => {
    if (section === "summary") {
      this.setIsShowSummary(true);
    } else if (section === "education") {
      this.setIsShowEducation(true);
    } else if (section === "project") {
      this.setIsShowProject(true);
    } else if (section === "experience") {
      this.setIsShowExperience(true);
    } else if (section === "skill") {
      this.setIsShowSkill(true);
    } else if (section === "certification") {
      this.setIsShowCertification(true);
    } else if (section === "courseWork") {
      this.setIsShowCourseWork(true);
    } else if (section === "involvement") {
      this.setIsShowInvolvement(true);
    } else if (section === "language") {
      this.setIsShowLanguage(true);
    } else if (section === "hobby") {
      this.setIsShowHobby(true);
    }
  };

  setMethod<M extends ResumeModelSetMethodsKeyType>(
    methodName: ResumeModelSetMethodsKeyType,
    ...args: Parameters<ResumeModel[M]>
  ): ReturnType<ResumeModel[M]> {
    if (!this[methodName]) {
      throw new Error(`Method '${methodName}' does not exist on ResumeModel`);
    }

    return (
      this[methodName] as (
        ...args: Parameters<ResumeModel[M]>
      ) => ReturnType<ResumeModel[M]>
    )(...(args as Parameters<ResumeModel[M]>));
  }

  getMethod<M extends ResumeModelGetMethodsKeyType>(
    methodName: ResumeModelGetMethodsKeyType,
    ...args: Parameters<ResumeModel[M]>
  ): ReturnType<ResumeModel[M]> {
    if (!this[methodName]) {
      throw new Error(`Method '${methodName}' does not exist on ResumeModel`);
    }

    return (
      this[methodName] as (
        ...args: Parameters<ResumeModel[M]>
      ) => ReturnType<ResumeModel[M]>
    )(...(args as Parameters<ResumeModel[M]>));
  }
}

export type ResumeModelSetMethodsKeyType =
  | "setName"
  | "setTitle"
  | "setFontSize"
  | "setFontFamily"
  | "setColor"
  | "setRole"
  | "setIsShowImage"
  | "setIsShowPhoneNumber"
  | "setPhoneNumber"
  | "setIsShowLinkedin"
  | "setLinkedin"
  | "setIsShowWebsite"
  | "setWebsite"
  | "setIsShowEmail"
  | "setEmail"
  | "setIsShowLocation"
  | "setLocation"
  | "setIsShowBirthDay"
  | "setBirthDay"
  | "setIsShowSummary"
  | "setSummaryLabel"
  | "setSummary"
  | "setIsShowExperience"
  | "setExperienceLabel"
  | "setExperienceRoleLabel"
  | "setExperienceCompanyLabel"
  | "setExperienceLocationLabel"
  | "setIsShowProject"
  | "setProjectLabel"
  | "setProjectRoleLabel"
  | "setProjectTitleLabel"
  | "setProjectCompanyLabel"
  | "setProjectLocationLabel"
  | "setProjectUrlLabel"
  | "setIsShowEducation"
  | "setEducationLabel"
  | "setEducationDegreeLabel"
  | "setEducationInstituteLabel"
  | "setEducationLocationLabel"
  | "setEducationGpaLabel"
  | "setIsShowCertification"
  | "setCertificationLabel"
  | "setCertificationNameLabel"
  | "setCertificationInstituteLabel"
  | "setCertificationYearLabel"
  | "setIsShowCourseWork"
  | "setCourseWorkLabel"
  | "setCourseWorkTitleLabel"
  | "setCourseWorkNameLabel"
  | "setCourseWorkInstituteLabel"
  | "setCourseWorkYearLabel"
  | "setCourseWorkSkillsLabel"
  | "setLanguageLabel"
  | "setIsShowInvolvement"
  | "setInvolvementLabel"
  | "setInvolvementRoleLabel"
  | "setSkillLabel"
  | "setHobbyLabel"
  | "getUpperAndVisibleSection"
  | "getLowerAndVisibleSection"
  | "setHiddenSection"
  | "setShowSection";

export type ResumeModelGetMethodsKeyType =
  | "getUpperAndVisibleSection"
  | "getLowerAndVisibleSection";
