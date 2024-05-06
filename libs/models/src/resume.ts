import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";

import { ICertification } from "./certification";
import { ICourseWork } from "./course-work";
import { IEducation } from "./education";
import { IExperience } from "./experience";
import { IProject } from "./project";
import { IInvolvement } from "./involvement";
import { ILanguage } from "./language";

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
  summaryLabel?: string;
  summary?: string;
  isShowExperience?: boolean;
  experienceLabel?: string;
  experienceRoleLabel?: string;
  experienceCompanyLabel?: string;
  experienceLocationLabel?: string;
  experiences?: IExperience[];
  isShowProject?: boolean;
  projectLabel?: string;
  projectRoleLabel?: string;
  projectTitleLabel?: string;
  projectCompanyLabel?: string;
  projectLocationLabel?: string;
  projectUrlLabel?: string;
  projects?: IProject[];
  isShowEducation?: boolean;
  educationLabel?: string;
  educationDegreeLabel?: string;
  educationInstituteLabel?: string;
  educationLocationLabel?: string;
  educationGpaLabel?: string;
  educations?: IEducation[];
  isShowCertification?: boolean;
  certificationLabel?: string;
  certificationNameLabel?: string;
  certificationInstituteLabel?: string;
  certificationYearLabel?: string;
  certifications?: ICertification[];
  isShowCourseWork?: boolean;
  courseWorkLabel?: string;
  courseWorkTitleLabel?: string;
  courseWorkNameLabel?: string;
  courseWorkInstituteLabel?: string;
  courseWorkYearLabel?: string;
  courseWorkSkillsLabel?: string;
  courseWorks?: ICourseWork[];
  isShowInvolvement?: boolean;
  involvementLabel?: string;
  involvementRoleLabel?: string;
  involvementCompanyLabel?: string;
  involvementLocationLabel?: string;
  involvements?: IInvolvement[];
  isShowSkill?: boolean;
  skillLabel?: string;
  skills?: string[];
  isShowLanguage?: boolean;
  languageLabel?: string;
  languageNameLabel?: string;
  languageLevelLabel?: string;
  languages?: ILanguage[];
  hobbyLabel?: string;
  hobbies?: string[];
  isShowHobby?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Resume {
  constructor(private input: Partial<IResume>) {}

  getUserId(): string | undefined {
    return this.input.userId;
  }

  getName(): string | undefined {
    return this.input.name;
  }

  getTitle(): string | undefined {
    return this.input.title;
  }

  getFontSize(): ResumeFontSizeEnum | undefined {
    return this.input.fontSize;
  }

  getFontFamily(): ResumeFontFamilyEnum | undefined {
    return this.input.fontFamily;
  }

  getColor(): ResumeColorEnum | undefined {
    return this.input.color;
  }

  getRole(): string | undefined {
    return this.input.role;
  }

  getIsShowPhoneNumber(): boolean | undefined {
    return this.input.isShowPhoneNumber;
  }

  getPhoneNumber(): string | undefined {
    return this.input.phoneNumber;
  }

  getIsShowLinkedin(): boolean | undefined {
    return this.input.isShowLinkedin;
  }

  getLinkedin(): string | undefined {
    return this.input.linkedin;
  }

  getIsShowWebsite(): boolean | undefined {
    return this.input.isShowWebsite;
  }

  getWebsite(): string | undefined {
    return this.input.website;
  }

  getIsShowEmail(): boolean | undefined {
    return this.input.isShowEmail;
  }

  getEmail(): string | undefined {
    return this.input.email;
  }

  getIsShowLocation(): boolean | undefined {
    return this.input.isShowLocation;
  }

  getLocation(): string | undefined {
    return this.input.location;
  }

  getIsShowBirthDay(): boolean | undefined {
    return this.input.isShowBirthDay;
  }

  getBirthDay(): string | undefined {
    return this.input.birthDay;
  }

  getIsShowSummary(): boolean | undefined {
    return this.input.isShowSummary;
  }

  getSummaryLabel(): string | undefined {
    return this.input.summaryLabel;
  }

  getSummary(): string | undefined {
    return this.input.summary;
  }

  getIsShowExperience(): boolean | undefined {
    return this.input.isShowExperience;
  }

  getExperienceLabel(): string | undefined {
    return this.input.experienceLabel;
  }

  getExperienceRoleLabel(): string | undefined {
    return this.input.experienceRoleLabel;
  }

  getExperienceCompanyLabel(): string | undefined {
    return this.input.experienceCompanyLabel;
  }

  getExperienceLocationLabel(): string | undefined {
    return this.input.experienceLocationLabel;
  }

  getExperiences(): IExperience[] | undefined {
    return this.input.experiences;
  }

  getIsShowProject(): boolean | undefined {
    return this.input.isShowProject;
  }

  getProjectLabel(): string | undefined {
    return this.input.projectLabel;
  }

  getProjectRoleLabel(): string | undefined {
    return this.input.projectRoleLabel;
  }

  getProjectTitleLabel(): string | undefined {
    return this.input.projectTitleLabel;
  }

  getProjectCompanyLabel(): string | undefined {
    return this.input.projectCompanyLabel;
  }

  getProjectLocationLabel(): string | undefined {
    return this.input.projectLocationLabel;
  }

  getProjectUrlLabel(): string | undefined {
    return this.input.projectUrlLabel;
  }

  getProjects(): IProject[] | undefined {
    return this.input.projects;
  }
  getIsShowEducation(): boolean | undefined {
    return this.input.isShowEducation;
  }
  getEducationLabel(): string | undefined {
    return this.input.educationLabel;
  }
  getEducationDegreeLabel(): string | undefined {
    return this.input.educationDegreeLabel;
  }
  getEducationInstituteLabel(): string | undefined {
    return this.input.educationInstituteLabel;
  }
  getEducationLocationLabel(): string | undefined {
    return this.input.educationLocationLabel;
  }
  getEducationGpaLabel(): string | undefined {
    return this.input.educationGpaLabel;
  }
  getEducations(): IEducation[] | undefined {
    return this.input.educations;
  }
  getIsShowCertification(): boolean | undefined {
    return this.input.isShowCertification;
  }
  getCertificationLabel(): string | undefined {
    return this.input.certificationLabel;
  }
  getCertificationNameLabel(): string | undefined {
    return this.input.certificationNameLabel;
  }
  getCertificationInstituteLabel(): string | undefined {
    return this.input.certificationInstituteLabel;
  }
  getCertificationYearLabel(): string | undefined {
    return this.input.certificationYearLabel;
  }
  getCertifications(): ICertification[] | undefined {
    return this.input.certifications;
  }
  getIsShowCourseWork(): boolean | undefined {
    return this.input.isShowCourseWork;
  }
  getCourseWorkLabel(): string | undefined {
    return this.input.courseWorkLabel;
  }
  getCourseWorkTitleLabel(): string | undefined {
    return this.input.courseWorkTitleLabel;
  }
  getCourseWorkNameLabel(): string | undefined {
    return this.input.courseWorkNameLabel;
  }
  getCourseWorkInstituteLabel(): string | undefined {
    return this.input.courseWorkInstituteLabel;
  }
  getCourseWorkYearLabel(): string | undefined {
    return this.input.courseWorkYearLabel;
  }
  getCourseWorkSkillsLabel(): string | undefined {
    return this.input.courseWorkSkillsLabel;
  }
  getCourseWorks(): ICourseWork[] | undefined {
    return this.input.courseWorks;
  }
  getIsShowInvolvement(): boolean | undefined {
    return this.input.isShowInvolvement;
  }
  getInvolvementLabel(): string | undefined {
    return this.input.involvementLabel;
  }
  getInvolvementRoleLabel(): string | undefined {
    return this.input.involvementRoleLabel;
  }
  getInvolvementCompanyLabel(): string | undefined {
    return this.input.involvementCompanyLabel;
  }
  getInvolvementLocationLabel(): string | undefined {
    return this.input.involvementLocationLabel;
  }
  getInvolvements(): IInvolvement[] | undefined {
    return this.input.involvements;
  }
  getIsShowSkill(): boolean | undefined {
    return this.input.isShowSkill;
  }
  getSkillLabel(): string | undefined {
    return this.input.skillLabel;
  }
  getSkills(): string[] | undefined {
    return this.input.skills;
  }
  getIsShowLanguage(): boolean | undefined {
    return this.input.isShowLanguage;
  }
  getLanguageLabel(): string | undefined {
    return this.input.languageLabel;
  }
  getLanguageNameLabel(): string | undefined {
    return this.input.languageNameLabel;
  }
  getLanguageLevelLabel(): string | undefined {
    return this.input.languageLevelLabel;
  }
  getLanguages(): ILanguage[] | undefined {
    return this.input.languages;
  }
  getHobbyLabel(): string | undefined {
    return this.input.hobbyLabel;
  }
  getHobbies(): string[] | undefined {
    return this.input.hobbies;
  }
  getIsShowHobby(): boolean | undefined {
    return this.input.isShowHobby;
  }
  getCreatedAt(): Date | undefined {
    return this.input.createdAt;
  }
  getUpdatedAt(): Date | undefined {
    return this.input.updatedAt;
  }
}
