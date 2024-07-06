import { Meta, StoryFn } from "@storybook/react";
import moment from "moment";
import { faker } from "@faker-js/faker";
import { TemplateMinimalist } from ".";
import { IResume } from "@models";
import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";

export default {
  component: TemplateMinimalist,
  title: "TemplateMinimalist",
} as Meta<typeof TemplateMinimalist>;

const resumeObj: IResume = {
  userId: "userId",
  name: faker.person.fullName(),
  title: faker.person.fullName(),
  color: ResumeColorEnum.Blue,
  fontFamily: ResumeFontFamilyEnum.Roboto,
  fontSize: ResumeFontSizeEnum.Large,
  role: faker.person.jobTitle(),
  isShowPhoneNumber: faker.datatype.boolean(),
  phoneNumber: faker.phone.number(),
  isShowLinkedin: faker.datatype.boolean(),
  linkedin: faker.internet.url(),
  isShowWebsite: faker.datatype.boolean(),
  website: faker.internet.url(),
  isShowEmail: faker.datatype.boolean(),
  email: faker.internet.email(),
  isShowLocation: faker.datatype.boolean(),
  location: faker.location.county() + " " + faker.location.city(),
  isShowBirthDay: faker.datatype.boolean(),
  birthDay: moment(faker.date.birthdate()).format("YYYY"),
  isShowSummary: faker.datatype.boolean(),
  summaryLabel: "MY SUMMARY",
  summary: faker.lorem.paragraph({ min: 10, max: 12 }),
  isShowExperience: faker.datatype.boolean(),
  experienceLabel: "EXPERIENCE",
  experienceRoleLabel: faker.lorem.word(),
  experienceCompanyLabel: faker.lorem.word(),
  experienceLocationLabel: faker.lorem.word(),
  experiences: [
    {
      role: faker.person.jobTitle(),
      company: faker.company.name(),
      isShowLocation: faker.datatype.boolean(),
      location: faker.location.country(),
      isShowDate: faker.datatype.boolean(),
      from: moment(faker.date.past()).format("YYYY"),
      to: moment(faker.date.recent()).format("YYYY"),
      untilNow: faker.datatype.boolean(),
      isShowPoints: faker.datatype.boolean(),
      points: [
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
      ],
    },
    {
      role: faker.person.jobTitle(),
      company: faker.company.name(),
      isShowLocation: faker.datatype.boolean(),
      location: faker.location.country(),
      isShowDate: faker.datatype.boolean(),
      from: moment(faker.date.past()).format("YYYY"),
      to: moment(faker.date.recent()).format("YYYY"),
      isShow: faker.datatype.boolean(),
      isShowPoints: faker.datatype.boolean(),
      points: [
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
      ],
    },
    {
      role: faker.person.jobTitle(),
      company: faker.company.name(),
      isShowLocation: faker.datatype.boolean(),
      location: faker.location.country(),
      isShowDate: faker.datatype.boolean(),
      from: moment(faker.date.past()).format("YYYY"),
      to: moment(faker.date.recent()).format("YYYY"),
      isShow: faker.datatype.boolean(),
      isShowPoints: faker.datatype.boolean(),
      points: [faker.lorem.paragraph(), faker.lorem.paragraph()],
    },
    {
      role: faker.person.jobTitle(),
      company: faker.company.name(),
      isShowLocation: faker.datatype.boolean(),
      location: faker.location.country(),
      isShowDate: faker.datatype.boolean(),
      from: moment(faker.date.past()).format("YYYY"),
      to: moment(faker.date.recent()).format("YYYY"),
      isShow: faker.datatype.boolean(),
      isShowPoints: faker.datatype.boolean(),
      points: [
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
      ],
    },
  ],
  isShowProject: faker.datatype.boolean(),
  projectLabel: "PROJECTS",
  projectRoleLabel: faker.lorem.word(),
  projectTitleLabel: faker.lorem.word(),
  projectCompanyLabel: faker.lorem.word(),
  projectLocationLabel: faker.lorem.word(),
  projectUrlLabel: faker.lorem.word(),
  projects: [
    {
      title: faker.lorem.word(),
      isShowRole: faker.datatype.boolean(),
      role: faker.person.jobTitle(),
      isShowCompany: faker.datatype.boolean(),
      company: faker.company.name(),
      isShowLocation: faker.datatype.boolean(),
      location: faker.location.country(),
      isShowUrl: faker.datatype.boolean(),
      url: faker.internet.url(),
      isShowDate: faker.datatype.boolean(),
      from: moment(faker.date.past()).format("YYYY"),
      to: moment(faker.date.recent()).format("YYYY"),
      isShow: faker.datatype.boolean(),
      isShowPoints: faker.datatype.boolean(),
      points: [
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
      ],
    },
    {
      title: faker.lorem.word(),
      isShowRole: faker.datatype.boolean(),
      role: faker.person.jobTitle(),
      isShowCompany: faker.datatype.boolean(),
      company: faker.company.name(),
      isShowLocation: faker.datatype.boolean(),
      location: faker.location.country(),
      isShowUrl: faker.datatype.boolean(),
      url: faker.internet.url(),
      isShowDate: faker.datatype.boolean(),
      from: moment(faker.date.past()).format("YYYY"),
      to: moment(faker.date.recent()).format("YYYY"),
      isShow: faker.datatype.boolean(),
      isShowPoints: faker.datatype.boolean(),
      points: [
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
      ],
    },
  ],
  isShowEducation: faker.datatype.boolean(),
  educationLabel: "EDUCATION",
  educationDegreeLabel: faker.lorem.word(),
  educationInstituteLabel: faker.lorem.word(),
  educationLocationLabel: faker.lorem.word(),
  educationGpaLabel: faker.lorem.word(),
  educations: [
    {
      degree: faker.lorem.word(),
      isShowInstitute: faker.datatype.boolean(),
      institute: faker.company.name(),
      isShowLocation: faker.datatype.boolean(),
      location: faker.location.country(),
      isShowGpa: faker.datatype.boolean(),
      gpa: faker.number.float({ precision: 0.1, min: 0, max: 20 }).toString(),
      isShowDate: faker.datatype.boolean(),
      from: moment(faker.date.past()).format("YYYY"),
      to: moment(faker.date.recent()).format("YYYY"),
      isShow: faker.datatype.boolean(),
      isShowPoints: faker.datatype.boolean(),
      points: [
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
      ],
    },
  ],
  isShowCertification: faker.datatype.boolean(),
  certificationLabel: "CERTIFICATIONS",
  certificationNameLabel: faker.lorem.word(),
  certificationInstituteLabel: faker.lorem.word(),
  certificationYearLabel: faker.lorem.word(),
  certifications: [
    {
      name: faker.lorem.word(),
      isShowInstitute: faker.datatype.boolean(),
      institute: faker.company.name(),
      isShowDate: faker.datatype.boolean(),
      year: moment(faker.date.past()).format("YYYY"),
      isShowPoints: faker.datatype.boolean(),
      isShow: faker.datatype.boolean(),
      points: [faker.lorem.paragraph(), faker.lorem.paragraph()],
    },
  ],
  isShowCourseWork: faker.datatype.boolean(),
  courseWorkLabel: "COURSE WORK",
  courseWorkTitleLabel: faker.lorem.word(),
  courseWorkNameLabel: faker.lorem.word(),
  courseWorkInstituteLabel: faker.lorem.word(),
  courseWorkYearLabel: faker.lorem.word(),
  courseWorkSkillsLabel: faker.lorem.word(),
  courseWorks: [
    {
      name: faker.lorem.word(),
      isShowInstitute: faker.datatype.boolean(),
      institute: faker.company.name(),
      isShowDate: faker.datatype.boolean(),
      year: moment(faker.date.past()).format("YYYY"),
      isShowSkills: faker.datatype.boolean(),
      skills: faker.lorem.words(10),
      isShowPoints: faker.datatype.boolean(),
      isShow: faker.datatype.boolean(),
      points: [faker.lorem.paragraph()],
    },
  ],
  isShowInvolvement: faker.datatype.boolean(),
  involvementLabel: "INVOLVEMENTS",
  involvementRoleLabel: faker.lorem.word(),
  involvementCompanyLabel: faker.lorem.word(),
  involvementLocationLabel: faker.lorem.word(),
  involvements: [
    {
      role: faker.person.jobTitle(),
      isShowCompany: faker.datatype.boolean(),
      company: faker.company.name(),
      isShowLocation: faker.datatype.boolean(),
      location: faker.location.country(),
      isShowDate: faker.datatype.boolean(),
      from: moment(faker.date.past()).format("YYYY"),
      to: moment(faker.date.recent()).format("YYYY"),
      isShow: faker.datatype.boolean(),
      isShowPoints: faker.datatype.boolean(),
      points: [faker.lorem.paragraph(), faker.lorem.paragraph()],
    },
  ],
  isShowSkill: faker.datatype.boolean(),
  skillLabel: "SKILLS",
  skills: [
    { point: faker.lorem.paragraph(), isShow: faker.datatype.boolean() },
    { point: faker.lorem.paragraph(), isShow: faker.datatype.boolean() },
    { point: faker.lorem.paragraph(), isShow: faker.datatype.boolean() },
    { point: faker.lorem.paragraph(), isShow: faker.datatype.boolean() },
  ],
  isShowLanguage: faker.datatype.boolean(),
  languageLabel: "LANGUAGES",
  languageNameLabel: faker.lorem.word(),
  languageLevelLabel: faker.lorem.word(),
  languages: [
    {
      name: faker.lorem.word(),
      level: faker.lorem.word(),
      isShowLevel: faker.datatype.boolean(),
    },
    {
      name: faker.lorem.word(),
      level: faker.lorem.word(),
      isShowLevel: faker.datatype.boolean(),
    },
  ],
  hobbyLabel: "HOBBIES",
  isShowHobby: faker.datatype.boolean(),
  hobbies: [
    { point: faker.lorem.paragraph(), isShow: faker.datatype.boolean() },
    { point: faker.lorem.paragraph(), isShow: faker.datatype.boolean() },
  ],
};

const Template: StoryFn<typeof TemplateMinimalist> = (args) => {
  return <TemplateMinimalist {...args} />;
};

export const Dynamic = Template.bind({});
Dynamic.args = { resume: resumeObj };

export const Static = Template.bind({});
Static.args = { resume: resumeObj, staticMode: true };
