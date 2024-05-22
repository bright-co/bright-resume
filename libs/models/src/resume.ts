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

export interface IResume {
  id?: string;
  userId: string;
  name?: string;
  title?: string;
  fontSize?: ResumeFontSizeEnum;
  fontFamily?: ResumeFontFamilyEnum;
  color?: ResumeColorEnum;
  role?: string;
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

  setColor(color: ResumeColorEnum | undefined): void {
    this.input.color = color;
  }

  getRole(): string | undefined {
    return this.input.role;
  }

  setRole(role: string | undefined): void {
    this.input.role = role;
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

  changeSummaryOrder(newOrder: number) {
    const oldOrder = this.input.summaryOrder;

    if (newOrder === this.getExperienceOrder()) {
      this.setExperienceOrder(oldOrder);
    } else if (newOrder === this.getProjectOrder()) {
      this.setProjectOrder(oldOrder);
    } else if (newOrder === this.getEducationOrder()) {
      this.setEducationOrder(oldOrder);
    } else if (newOrder === this.getCertificationOrder()) {
      this.setCertificationOrder(oldOrder);
    } else if (newOrder === this.getCourseWorkOrder()) {
      this.setCourseWorkOrder(oldOrder);
    } else if (newOrder === this.getInvolvementOrder()) {
      this.setInvolvementOrder(oldOrder);
    } else if (newOrder === this.getSkillOrder()) {
      this.setSkillOrder(oldOrder);
    } else if (newOrder === this.getLanguageOrder()) {
      this.setLanguageOrder(oldOrder);
    } else if (newOrder === this.getHobbyOrder()) {
      this.setHobbyOrder(oldOrder);
    }
    this.setSummaryOrder(newOrder);
  }

  getExperienceOrder(): number | undefined {
    return this.input.experienceOrder;
  }

  setExperienceOrder(order: number | undefined): void {
    this.input.experienceOrder = order;
  }

  changeExperienceOrder(newOrder: number) {
    const oldOrder = this.input.experienceOrder;

    if (newOrder === this.getSummaryOrder()) {
      this.setSummaryOrder(oldOrder);
    } else if (newOrder === this.getProjectOrder()) {
      this.setProjectOrder(oldOrder);
    } else if (newOrder === this.getEducationOrder()) {
      this.setEducationOrder(oldOrder);
    } else if (newOrder === this.getCertificationOrder()) {
      this.setCertificationOrder(oldOrder);
    } else if (newOrder === this.getCourseWorkOrder()) {
      this.setCourseWorkOrder(oldOrder);
    } else if (newOrder === this.getInvolvementOrder()) {
      this.setInvolvementOrder(oldOrder);
    } else if (newOrder === this.getSkillOrder()) {
      this.setSkillOrder(oldOrder);
    } else if (newOrder === this.getLanguageOrder()) {
      this.setLanguageOrder(oldOrder);
    } else if (newOrder === this.getHobbyOrder()) {
      this.setHobbyOrder(oldOrder);
    }
    this.setExperienceOrder(newOrder);
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

  changeProjectOrder(newOrder: number) {
    const oldOrder = this.input.projectOrder;

    if (newOrder === this.getSummaryOrder()) {
      this.setSummaryOrder(oldOrder);
    } else if (newOrder === this.getExperienceOrder()) {
      this.setExperienceOrder(oldOrder);
    } else if (newOrder === this.getEducationOrder()) {
      this.setEducationOrder(oldOrder);
    } else if (newOrder === this.getCertificationOrder()) {
      this.setCertificationOrder(oldOrder);
    } else if (newOrder === this.getCourseWorkOrder()) {
      this.setCourseWorkOrder(oldOrder);
    } else if (newOrder === this.getInvolvementOrder()) {
      this.setInvolvementOrder(oldOrder);
    } else if (newOrder === this.getSkillOrder()) {
      this.setSkillOrder(oldOrder);
    } else if (newOrder === this.getLanguageOrder()) {
      this.setLanguageOrder(oldOrder);
    } else if (newOrder === this.getHobbyOrder()) {
      this.setHobbyOrder(oldOrder);
    }
    this.setProjectOrder(newOrder);
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

  changeEducationOrder(newOrder: number) {
    const oldOrder = this.input.educationOrder;

    if (newOrder === this.getSummaryOrder()) {
      this.setSummaryOrder(oldOrder);
    } else if (newOrder === this.getExperienceOrder()) {
      this.setExperienceOrder(oldOrder);
    } else if (newOrder === this.getProjectOrder()) {
      this.setProjectOrder(oldOrder);
    } else if (newOrder === this.getCertificationOrder()) {
      this.setCertificationOrder(oldOrder);
    } else if (newOrder === this.getCourseWorkOrder()) {
      this.setCourseWorkOrder(oldOrder);
    } else if (newOrder === this.getInvolvementOrder()) {
      this.setInvolvementOrder(oldOrder);
    } else if (newOrder === this.getSkillOrder()) {
      this.setSkillOrder(oldOrder);
    } else if (newOrder === this.getLanguageOrder()) {
      this.setLanguageOrder(oldOrder);
    } else if (newOrder === this.getHobbyOrder()) {
      this.setHobbyOrder(oldOrder);
    }
    this.setEducationOrder(newOrder);
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
  changeCertificationOrder(newOrder: number) {
    const oldOrder = this.input.certificationOrder;

    if (newOrder === this.getSummaryOrder()) {
      this.setSummaryOrder(oldOrder);
    } else if (newOrder === this.getExperienceOrder()) {
      this.setExperienceOrder(oldOrder);
    } else if (newOrder === this.getProjectOrder()) {
      this.setProjectOrder(oldOrder);
    } else if (newOrder === this.getEducationOrder()) {
      this.setEducationOrder(oldOrder);
    } else if (newOrder === this.getCourseWorkOrder()) {
      this.setCourseWorkOrder(oldOrder);
    } else if (newOrder === this.getInvolvementOrder()) {
      this.setInvolvementOrder(oldOrder);
    } else if (newOrder === this.getSkillOrder()) {
      this.setSkillOrder(oldOrder);
    } else if (newOrder === this.getLanguageOrder()) {
      this.setLanguageOrder(oldOrder);
    } else if (newOrder === this.getHobbyOrder()) {
      this.setHobbyOrder(oldOrder);
    }
    this.setCertificationOrder(newOrder);
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
  changeCourseWorkOrder(newOrder: number) {
    const oldOrder = this.input.courseWorkOrder;

    if (newOrder === this.getSummaryOrder()) {
      this.setSummaryOrder(oldOrder);
    } else if (newOrder === this.getExperienceOrder()) {
      this.setExperienceOrder(oldOrder);
    } else if (newOrder === this.getProjectOrder()) {
      this.setProjectOrder(oldOrder);
    } else if (newOrder === this.getEducationOrder()) {
      this.setEducationOrder(oldOrder);
    } else if (newOrder === this.getCertificationOrder()) {
      this.setCertificationOrder(oldOrder);
    } else if (newOrder === this.getInvolvementOrder()) {
      this.setInvolvementOrder(oldOrder);
    } else if (newOrder === this.getSkillOrder()) {
      this.setSkillOrder(oldOrder);
    } else if (newOrder === this.getLanguageOrder()) {
      this.setLanguageOrder(oldOrder);
    } else if (newOrder === this.getHobbyOrder()) {
      this.setHobbyOrder(oldOrder);
    }
    this.setCourseWorkOrder(newOrder);
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

  changeInvolvementOrder(newOrder: number) {
    const oldOrder = this.input.involvementOrder;

    if (newOrder === this.getSummaryOrder()) {
      this.setSummaryOrder(oldOrder);
    } else if (newOrder === this.getExperienceOrder()) {
      this.setExperienceOrder(oldOrder);
    } else if (newOrder === this.getProjectOrder()) {
      this.setProjectOrder(oldOrder);
    } else if (newOrder === this.getEducationOrder()) {
      this.setEducationOrder(oldOrder);
    } else if (newOrder === this.getCertificationOrder()) {
      this.setCertificationOrder(oldOrder);
    } else if (newOrder === this.getCourseWorkOrder()) {
      this.setCourseWorkOrder(oldOrder);
    } else if (newOrder === this.getSkillOrder()) {
      this.setSkillOrder(oldOrder);
    } else if (newOrder === this.getLanguageOrder()) {
      this.setLanguageOrder(oldOrder);
    } else if (newOrder === this.getHobbyOrder()) {
      this.setHobbyOrder(oldOrder);
    }
    this.setInvolvementOrder(newOrder);
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

  changeSkillOrder(newOrder: number) {
    const oldOrder = this.input.skillOrder;

    if (newOrder === this.getSummaryOrder()) {
      this.setSummaryOrder(oldOrder);
    } else if (newOrder === this.getExperienceOrder()) {
      this.setExperienceOrder(oldOrder);
    } else if (newOrder === this.getProjectOrder()) {
      this.setProjectOrder(oldOrder);
    } else if (newOrder === this.getEducationOrder()) {
      this.setEducationOrder(oldOrder);
    } else if (newOrder === this.getCertificationOrder()) {
      this.setCertificationOrder(oldOrder);
    } else if (newOrder === this.getCourseWorkOrder()) {
      this.setCourseWorkOrder(oldOrder);
    } else if (newOrder === this.getInvolvementOrder()) {
      this.setInvolvementOrder(oldOrder);
    } else if (newOrder === this.getLanguageOrder()) {
      this.setLanguageOrder(oldOrder);
    } else if (newOrder === this.getHobbyOrder()) {
      this.setHobbyOrder(oldOrder);
    }
    this.setSkillOrder(newOrder);
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

  changeLanguageOrder(newOrder: number) {
    const oldOrder = this.input.languageOrder;

    if (newOrder === this.getSummaryOrder()) {
      this.setSummaryOrder(oldOrder);
    } else if (newOrder === this.getExperienceOrder()) {
      this.setExperienceOrder(oldOrder);
    } else if (newOrder === this.getProjectOrder()) {
      this.setProjectOrder(oldOrder);
    } else if (newOrder === this.getEducationOrder()) {
      this.setEducationOrder(oldOrder);
    } else if (newOrder === this.getCertificationOrder()) {
      this.setCertificationOrder(oldOrder);
    } else if (newOrder === this.getCourseWorkOrder()) {
      this.setCourseWorkOrder(oldOrder);
    } else if (newOrder === this.getInvolvementOrder()) {
      this.setInvolvementOrder(oldOrder);
    } else if (newOrder === this.getSkillOrder()) {
      this.setSkillOrder(oldOrder);
    } else if (newOrder === this.getHobbyOrder()) {
      this.setHobbyOrder(oldOrder);
    }
    this.setLanguageOrder(newOrder);
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

  changeHobbyOrder(newOrder: number) {
    const oldOrder = this.input.hobbyOrder;

    if (newOrder === this.getSummaryOrder()) {
      this.setSummaryOrder(oldOrder);
    } else if (newOrder === this.getExperienceOrder()) {
      this.setExperienceOrder(oldOrder);
    } else if (newOrder === this.getProjectOrder()) {
      this.setProjectOrder(oldOrder);
    } else if (newOrder === this.getEducationOrder()) {
      this.setEducationOrder(oldOrder);
    } else if (newOrder === this.getCertificationOrder()) {
      this.setCertificationOrder(oldOrder);
    } else if (newOrder === this.getCourseWorkOrder()) {
      this.setCourseWorkOrder(oldOrder);
    } else if (newOrder === this.getInvolvementOrder()) {
      this.setInvolvementOrder(oldOrder);
    } else if (newOrder === this.getSkillOrder()) {
      this.setSkillOrder(oldOrder);
    } else if (newOrder === this.getLanguageOrder()) {
      this.setLanguageOrder(oldOrder);
    }
    this.setHobbyOrder(newOrder);
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

  callSetMethod<M extends ResumeModelSetMethodsKeyType>(
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
}

export type ResumeModelSetMethodsKeyType =
  | "setName"
  | "setTitle"
  | "setFontSize"
  | "setFontFamily"
  | "setColor"
  | "setRole"
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
  | "setHobbyLabel";
