import { Meta, StoryFn } from "@storybook/react";
import moment from "moment";
import { faker } from "@faker-js/faker";
import { ResumeContainer } from ".";
import { IResume, ResumeModel } from "@models";
import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";

export default {
  component: ResumeContainer,
  title: "ResumeContainer",
} as Meta<typeof ResumeContainer>;

const resumeObj: IResume = {
  userId: "userId",
  name: faker.person.fullName(),
  title: faker.person.fullName(),
  color: ResumeColorEnum.blue,
  fontFamily: ResumeFontFamilyEnum.nunito,
  fontSize: ResumeFontSizeEnum.xx_large,
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
  summaryOrder: 2,
  summary: faker.lorem.paragraph({ min: 10, max: 12 }),
  isShowExperience: faker.datatype.boolean(),
  experienceOrder: 1,
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
      fromMonth: moment(faker.date.past()).format("MMMM"),
      fromYear: moment(faker.date.past()).format("YYYY"),
      toMonth: moment(faker.date.recent()).format("MMMM"),
      toYear: moment(faker.date.recent()).format("YYYY"),
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
      fromMonth: moment(faker.date.past()).format("MMMM"),
      fromYear: moment(faker.date.past()).format("YYYY"),
      toMonth: moment(faker.date.recent()).format("MMMM"),
      toYear: moment(faker.date.recent()).format("YYYY"),
      untilNow: faker.datatype.boolean(),
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
      fromMonth: moment(faker.date.past()).format("MMMM"),
      fromYear: moment(faker.date.past()).format("YYYY"),
      toMonth: moment(faker.date.recent()).format("MMMM"),
      toYear: moment(faker.date.recent()).format("YYYY"),
      untilNow: faker.datatype.boolean(),
      isShowPoints: faker.datatype.boolean(),
      points: [faker.lorem.paragraph(), faker.lorem.paragraph()],
    },
    {
      role: faker.person.jobTitle(),
      company: faker.company.name(),
      isShowLocation: faker.datatype.boolean(),
      location: faker.location.country(),
      isShowDate: faker.datatype.boolean(),
      fromMonth: moment(faker.date.past()).format("MMMM"),
      fromYear: moment(faker.date.past()).format("YYYY"),
      toMonth: moment(faker.date.recent()).format("MMMM"),
      toYear: moment(faker.date.recent()).format("YYYY"),
      untilNow: faker.datatype.boolean(),
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
  projectOrder: 3,
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
      fromMonth: moment(faker.date.past()).format("MMMM"),
      fromYear: moment(faker.date.past()).format("YYYY"),
      toMonth: moment(faker.date.recent()).format("MMMM"),
      toYear: moment(faker.date.recent()).format("YYYY"),
      untilNow: faker.datatype.boolean(),
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
      fromMonth: moment(faker.date.past()).format("MMMM"),
      fromYear: moment(faker.date.past()).format("YYYY"),
      toMonth: moment(faker.date.recent()).format("MMMM"),
      toYear: moment(faker.date.recent()).format("YYYY"),
      untilNow: faker.datatype.boolean(),
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
  educationOrder: 4,
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
      fromMonth: moment(faker.date.past()).format("MMMM"),
      fromYear: moment(faker.date.past()).format("YYYY"),
      toMonth: moment(faker.date.recent()).format("MMMM"),
      toYear: moment(faker.date.recent()).format("YYYY"),
      untilNow: faker.datatype.boolean(),
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
  certificationOrder: 5,
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
      points: [faker.lorem.paragraph(), faker.lorem.paragraph()],
    },
  ],
  isShowCourseWork: faker.datatype.boolean(),
  courseWorkLabel: "COURSE WORK",
  courseWorkOrder: 6,
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
      points: [faker.lorem.paragraph()],
    },
  ],
  isShowInvolvement: faker.datatype.boolean(),
  involvementLabel: "INVOLVEMENTS",
  involvementOrder: 7,
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
      fromMonth: moment(faker.date.past()).format("MMMM"),
      fromYear: moment(faker.date.past()).format("YYYY"),
      toMonth: moment(faker.date.recent()).format("MMMM"),
      toYear: moment(faker.date.recent()).format("YYYY"),
      untilNow: faker.datatype.boolean(),
      isShowPoints: faker.datatype.boolean(),
      points: [faker.lorem.paragraph(), faker.lorem.paragraph()],
    },
  ],
  isShowSkill: faker.datatype.boolean(),
  skillLabel: "SKILLS",
  skillOrder: 10,
  skills: [
    {
      point: faker.lorem.paragraph(),
    },
    {
      point: faker.lorem.paragraph(),
    },
    {
      point: faker.lorem.paragraph(),
    },
    {
      point: faker.lorem.paragraph(),
    },
  ],
  isShowLanguage: faker.datatype.boolean(),
  languageLabel: "LANGUAGES",
  languageOrder: 8,
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
  hobbyOrder: 9,
  isShowHobby: faker.datatype.boolean(),
  hobbies: [
    {
      point: faker.lorem.paragraph(),
    },
    {
      point: faker.lorem.paragraph(),
    },
  ],
};

const Template: StoryFn<typeof ResumeContainer> = (args) => {
  return <ResumeContainer {...args} />;
};

export const Main = Template.bind({});
Main.args = { resumeModel: new ResumeModel(resumeObj) };
