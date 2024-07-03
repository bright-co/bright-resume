import { gql } from "@apollo/client";

export const MUTATION_UPDATE_RESUME_RESUME = gql`
  mutation updateResume(
    $updateResumeResumeInputs: UpdateResumeResumeInputsGQL!
  ) {
    updateResume(updateResumeResumeInputs: $updateResumeResumeInputs) {
      id
      userId
    }
  }
`;

export const QUERY_GET_RESUME_BY_ID_RESUME = gql`
  query getResumeById($getResumeByIdResumeArgs: GetResumeByIdResumeArgsGQL!) {
    getResumeById(getResumeByIdResumeArgs: $getResumeByIdResumeArgs) {
      id
      userId
      name
      title
      fontSize
      fontFamily
      color
      role
      isShowImage
      isShowPhoneNumber
      phoneNumber
      isShowLinkedin
      linkedin
      isShowWebsite
      website
      isShowEmail
      email
      isShowLocation
      location
      isShowBirthDay
      birthDay
      isShowSummary
      summaryOrder
      summaryLabel
      summary
      isShowExperience
      experienceOrder
      experienceLabel
      experienceRoleLabel
      experienceCompanyLabel
      experienceLocationLabel
      experiences {
        role
        company
        isShowLocation
        location
        isShowDate
        fromMonth
        fromYear
        toMonth
        toYear
        untilNow
        isShowPoints
        points
      }
      isShowProject
      projectOrder
      projectLabel
      projectRoleLabel
      projectTitleLabel
      projectCompanyLabel
      projectLocationLabel
      projectUrlLabel
      projects {
        title
        isShowRole
        role
        isShowCompany
        company
        isShowLocation
        location
        isShowUrl
        url
        isShowDate
        fromMonth
        fromYear
        toMonth
        toYear
        untilNow
        isShowPoints
        points
      }
      isShowEducation
      educationLabel
      educationOrder
      educationDegreeLabel
      educationInstituteLabel
      educationLocationLabel
      educationGpaLabel
      educations {
        degree
        isShowInstitute
        institute
        isShowLocation
        location
        isShowGpa
        gpa
        isShowDate
        fromMonth
        fromYear
        toMonth
        toYear
        untilNow
        isShowPoints
        points
      }
      isShowCertification
      certificationOrder
      certificationLabel
      certificationNameLabel
      certificationInstituteLabel
      certificationYearLabel
      certifications {
        name
        isShowInstitute
        institute
        isShowDate
        year
        isShowPoints
        points
      }
      isShowCourseWork
      courseWorkLabel
      courseWorkOrder
      courseWorkTitleLabel
      courseWorkNameLabel
      courseWorkInstituteLabel
      courseWorkYearLabel
      courseWorkSkillsLabel
      courseWorks {
        name
        isShowInstitute
        institute
        isShowDate
        year
        isShowSkills
        isSkills
        skills
        isShowPoints
        points
      }
      isShowInvolvement
      involvementLabel
      involvementOrder
      involvementRoleLabel
      involvementCompanyLabel
      involvementLocationLabel
      involvements {
        role
        isShowCompany
        company
        isShowLocation
        location
        isShowDate
        fromMonth
        fromYear
        toMonth
        toYear
        untilNow
        isShowPoints
        points
      }
      isShowSkill
      skillLabel
      skillOrder
      skills {
        point
      }
      isShowLanguage
      languageOrder
      languageLabel
      languageNameLabel
      languageLevelLabel
      languages {
        name
        isShowLevel
        level
      }
      hobbyOrder
      hobbyLabel
      hobbies {
        point
      }
      isShowHobby
      createdAt
      updatedAt
    }
  }
`;
