/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query signInWithOAuthToken {\n    signInWithOAuthToken {\n      id\n      name\n      token\n      username\n      email\n      picture\n    }\n  }\n": types.SignInWithOAuthTokenDocument,
    "\n  mutation signInAuth($signInAuthInputs: SignInAuthInputsGQL!) {\n    signIn(signInAuthInputs: $signInAuthInputs) {\n      id\n      name\n      username\n      email\n      token\n      picture\n      createdAt\n    }\n  }\n": types.SignInAuthDocument,
    "\n  mutation signUpAuth($signUpAuthInputs: SignUpAuthInputsGQL!) {\n    signUp(signUpAuthInputs: $signUpAuthInputs) {\n      id\n      name\n      username\n      email\n      token\n      picture\n      createdAt\n    }\n  }\n": types.SignUpAuthDocument,
    "\n  mutation updateResume(\n    $updateResumeResumeInputs: UpdateResumeResumeInputsGQL!\n  ) {\n    updateResume(updateResumeResumeInputs: $updateResumeResumeInputs) {\n      id\n      userId\n      title\n    }\n  }\n": types.UpdateResumeDocument,
    "\n  query getResumeById($getResumeByIdResumeArgs: GetResumeByIdResumeArgsGQL!) {\n    getResumeById(getResumeByIdResumeArgs: $getResumeByIdResumeArgs) {\n      id\n      userId\n      name\n      title\n      fontSize\n      fontFamily\n      color\n      role\n      isShowImage\n      isShowPhoneNumber\n      phoneNumber\n      isShowLinkedin\n      linkedin\n      isShowWebsite\n      website\n      isShowEmail\n      email\n      isShowLocation\n      location\n      isShowBirthDay\n      birthDay\n      isShowSummary\n      summaryOrder\n      summaryLabel\n      summary\n      isShowExperience\n      experienceOrder\n      experienceLabel\n      experienceRoleLabel\n      experienceCompanyLabel\n      experienceLocationLabel\n      experiences {\n        role\n        company\n        isShowLocation\n        location\n        isShowDate\n        from\n        to\n        isShowPoints\n        isShow\n        points\n      }\n      isShowProject\n      projectOrder\n      projectLabel\n      projectRoleLabel\n      projectTitleLabel\n      projectCompanyLabel\n      projectLocationLabel\n      projectUrlLabel\n      projects {\n        title\n        isShowRole\n        role\n        isShowCompany\n        company\n        isShowLocation\n        location\n        isShowUrl\n        url\n        isShowDate\n        from\n        to\n        isShowPoints\n        isShow\n        points\n      }\n      isShowEducation\n      educationLabel\n      educationOrder\n      educationDegreeLabel\n      educationInstituteLabel\n      educationLocationLabel\n      educationGpaLabel\n      educations {\n        degree\n        isShowInstitute\n        institute\n        isShowLocation\n        location\n        isShowGpa\n        gpa\n        isShowDate\n        from\n        to\n        isShowPoints\n        isShow\n        points\n      }\n      isShowCertification\n      certificationOrder\n      certificationLabel\n      certificationNameLabel\n      certificationInstituteLabel\n      certificationYearLabel\n      certifications {\n        name\n        isShowInstitute\n        institute\n        isShowDate\n        year\n        isShowPoints\n        isShow\n        points\n      }\n      isShowCourseWork\n      courseWorkLabel\n      courseWorkOrder\n      courseWorkTitleLabel\n      courseWorkNameLabel\n      courseWorkInstituteLabel\n      courseWorkYearLabel\n      courseWorkSkillsLabel\n      courseWorks {\n        name\n        isShowInstitute\n        institute\n        isShowDate\n        year\n        isShowSkills\n        isSkills\n        skills\n        isShow\n        isShowPoints\n        points\n      }\n      isShowInvolvement\n      involvementLabel\n      involvementOrder\n      involvementRoleLabel\n      involvementCompanyLabel\n      involvementLocationLabel\n      involvements {\n        role\n        isShowCompany\n        company\n        isShowLocation\n        location\n        isShowDate\n        from\n        to\n        isShowPoints\n        points\n        isShow\n      }\n      isShowSkill\n      skillLabel\n      skillOrder\n      skills {\n        point\n        isShow\n      }\n      isShowLanguage\n      languageOrder\n      languageLabel\n      languageNameLabel\n      languageLevelLabel\n      languages {\n        name\n        isShowLevel\n        level\n        isShow\n      }\n      hobbyOrder\n      hobbyLabel\n      hobbies {\n        point\n        isShow\n      }\n      isShowHobby\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetResumeByIdDocument,
    "\n  mutation createResume(\n    $createResumeResumeInputs: CreateResumeResumeInputsGQL!\n  ) {\n    createResume(createResumeResumeInputs: $createResumeResumeInputs) {\n      id\n      title\n      userId\n      updatedAt\n    }\n  }\n": types.CreateResumeDocument,
    "\n  query getResumes(\n    $getResumesResumeArgs: GetResumesResumeArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getResumes(\n      getResumesResumeArgs: $getResumesResumeArgs\n      paginationArgs: $paginationArgs\n    ) {\n      edges {\n        id\n        title\n        userId\n        updatedAt\n      }\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        totalPages\n        currentPage\n      }\n    }\n  }\n": types.GetResumesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query signInWithOAuthToken {\n    signInWithOAuthToken {\n      id\n      name\n      token\n      username\n      email\n      picture\n    }\n  }\n"): (typeof documents)["\n  query signInWithOAuthToken {\n    signInWithOAuthToken {\n      id\n      name\n      token\n      username\n      email\n      picture\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation signInAuth($signInAuthInputs: SignInAuthInputsGQL!) {\n    signIn(signInAuthInputs: $signInAuthInputs) {\n      id\n      name\n      username\n      email\n      token\n      picture\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation signInAuth($signInAuthInputs: SignInAuthInputsGQL!) {\n    signIn(signInAuthInputs: $signInAuthInputs) {\n      id\n      name\n      username\n      email\n      token\n      picture\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation signUpAuth($signUpAuthInputs: SignUpAuthInputsGQL!) {\n    signUp(signUpAuthInputs: $signUpAuthInputs) {\n      id\n      name\n      username\n      email\n      token\n      picture\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation signUpAuth($signUpAuthInputs: SignUpAuthInputsGQL!) {\n    signUp(signUpAuthInputs: $signUpAuthInputs) {\n      id\n      name\n      username\n      email\n      token\n      picture\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateResume(\n    $updateResumeResumeInputs: UpdateResumeResumeInputsGQL!\n  ) {\n    updateResume(updateResumeResumeInputs: $updateResumeResumeInputs) {\n      id\n      userId\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation updateResume(\n    $updateResumeResumeInputs: UpdateResumeResumeInputsGQL!\n  ) {\n    updateResume(updateResumeResumeInputs: $updateResumeResumeInputs) {\n      id\n      userId\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getResumeById($getResumeByIdResumeArgs: GetResumeByIdResumeArgsGQL!) {\n    getResumeById(getResumeByIdResumeArgs: $getResumeByIdResumeArgs) {\n      id\n      userId\n      name\n      title\n      fontSize\n      fontFamily\n      color\n      role\n      isShowImage\n      isShowPhoneNumber\n      phoneNumber\n      isShowLinkedin\n      linkedin\n      isShowWebsite\n      website\n      isShowEmail\n      email\n      isShowLocation\n      location\n      isShowBirthDay\n      birthDay\n      isShowSummary\n      summaryOrder\n      summaryLabel\n      summary\n      isShowExperience\n      experienceOrder\n      experienceLabel\n      experienceRoleLabel\n      experienceCompanyLabel\n      experienceLocationLabel\n      experiences {\n        role\n        company\n        isShowLocation\n        location\n        isShowDate\n        from\n        to\n        isShowPoints\n        isShow\n        points\n      }\n      isShowProject\n      projectOrder\n      projectLabel\n      projectRoleLabel\n      projectTitleLabel\n      projectCompanyLabel\n      projectLocationLabel\n      projectUrlLabel\n      projects {\n        title\n        isShowRole\n        role\n        isShowCompany\n        company\n        isShowLocation\n        location\n        isShowUrl\n        url\n        isShowDate\n        from\n        to\n        isShowPoints\n        isShow\n        points\n      }\n      isShowEducation\n      educationLabel\n      educationOrder\n      educationDegreeLabel\n      educationInstituteLabel\n      educationLocationLabel\n      educationGpaLabel\n      educations {\n        degree\n        isShowInstitute\n        institute\n        isShowLocation\n        location\n        isShowGpa\n        gpa\n        isShowDate\n        from\n        to\n        isShowPoints\n        isShow\n        points\n      }\n      isShowCertification\n      certificationOrder\n      certificationLabel\n      certificationNameLabel\n      certificationInstituteLabel\n      certificationYearLabel\n      certifications {\n        name\n        isShowInstitute\n        institute\n        isShowDate\n        year\n        isShowPoints\n        isShow\n        points\n      }\n      isShowCourseWork\n      courseWorkLabel\n      courseWorkOrder\n      courseWorkTitleLabel\n      courseWorkNameLabel\n      courseWorkInstituteLabel\n      courseWorkYearLabel\n      courseWorkSkillsLabel\n      courseWorks {\n        name\n        isShowInstitute\n        institute\n        isShowDate\n        year\n        isShowSkills\n        isSkills\n        skills\n        isShow\n        isShowPoints\n        points\n      }\n      isShowInvolvement\n      involvementLabel\n      involvementOrder\n      involvementRoleLabel\n      involvementCompanyLabel\n      involvementLocationLabel\n      involvements {\n        role\n        isShowCompany\n        company\n        isShowLocation\n        location\n        isShowDate\n        from\n        to\n        isShowPoints\n        points\n        isShow\n      }\n      isShowSkill\n      skillLabel\n      skillOrder\n      skills {\n        point\n        isShow\n      }\n      isShowLanguage\n      languageOrder\n      languageLabel\n      languageNameLabel\n      languageLevelLabel\n      languages {\n        name\n        isShowLevel\n        level\n        isShow\n      }\n      hobbyOrder\n      hobbyLabel\n      hobbies {\n        point\n        isShow\n      }\n      isShowHobby\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query getResumeById($getResumeByIdResumeArgs: GetResumeByIdResumeArgsGQL!) {\n    getResumeById(getResumeByIdResumeArgs: $getResumeByIdResumeArgs) {\n      id\n      userId\n      name\n      title\n      fontSize\n      fontFamily\n      color\n      role\n      isShowImage\n      isShowPhoneNumber\n      phoneNumber\n      isShowLinkedin\n      linkedin\n      isShowWebsite\n      website\n      isShowEmail\n      email\n      isShowLocation\n      location\n      isShowBirthDay\n      birthDay\n      isShowSummary\n      summaryOrder\n      summaryLabel\n      summary\n      isShowExperience\n      experienceOrder\n      experienceLabel\n      experienceRoleLabel\n      experienceCompanyLabel\n      experienceLocationLabel\n      experiences {\n        role\n        company\n        isShowLocation\n        location\n        isShowDate\n        from\n        to\n        isShowPoints\n        isShow\n        points\n      }\n      isShowProject\n      projectOrder\n      projectLabel\n      projectRoleLabel\n      projectTitleLabel\n      projectCompanyLabel\n      projectLocationLabel\n      projectUrlLabel\n      projects {\n        title\n        isShowRole\n        role\n        isShowCompany\n        company\n        isShowLocation\n        location\n        isShowUrl\n        url\n        isShowDate\n        from\n        to\n        isShowPoints\n        isShow\n        points\n      }\n      isShowEducation\n      educationLabel\n      educationOrder\n      educationDegreeLabel\n      educationInstituteLabel\n      educationLocationLabel\n      educationGpaLabel\n      educations {\n        degree\n        isShowInstitute\n        institute\n        isShowLocation\n        location\n        isShowGpa\n        gpa\n        isShowDate\n        from\n        to\n        isShowPoints\n        isShow\n        points\n      }\n      isShowCertification\n      certificationOrder\n      certificationLabel\n      certificationNameLabel\n      certificationInstituteLabel\n      certificationYearLabel\n      certifications {\n        name\n        isShowInstitute\n        institute\n        isShowDate\n        year\n        isShowPoints\n        isShow\n        points\n      }\n      isShowCourseWork\n      courseWorkLabel\n      courseWorkOrder\n      courseWorkTitleLabel\n      courseWorkNameLabel\n      courseWorkInstituteLabel\n      courseWorkYearLabel\n      courseWorkSkillsLabel\n      courseWorks {\n        name\n        isShowInstitute\n        institute\n        isShowDate\n        year\n        isShowSkills\n        isSkills\n        skills\n        isShow\n        isShowPoints\n        points\n      }\n      isShowInvolvement\n      involvementLabel\n      involvementOrder\n      involvementRoleLabel\n      involvementCompanyLabel\n      involvementLocationLabel\n      involvements {\n        role\n        isShowCompany\n        company\n        isShowLocation\n        location\n        isShowDate\n        from\n        to\n        isShowPoints\n        points\n        isShow\n      }\n      isShowSkill\n      skillLabel\n      skillOrder\n      skills {\n        point\n        isShow\n      }\n      isShowLanguage\n      languageOrder\n      languageLabel\n      languageNameLabel\n      languageLevelLabel\n      languages {\n        name\n        isShowLevel\n        level\n        isShow\n      }\n      hobbyOrder\n      hobbyLabel\n      hobbies {\n        point\n        isShow\n      }\n      isShowHobby\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createResume(\n    $createResumeResumeInputs: CreateResumeResumeInputsGQL!\n  ) {\n    createResume(createResumeResumeInputs: $createResumeResumeInputs) {\n      id\n      title\n      userId\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation createResume(\n    $createResumeResumeInputs: CreateResumeResumeInputsGQL!\n  ) {\n    createResume(createResumeResumeInputs: $createResumeResumeInputs) {\n      id\n      title\n      userId\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getResumes(\n    $getResumesResumeArgs: GetResumesResumeArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getResumes(\n      getResumesResumeArgs: $getResumesResumeArgs\n      paginationArgs: $paginationArgs\n    ) {\n      edges {\n        id\n        title\n        userId\n        updatedAt\n      }\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        totalPages\n        currentPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query getResumes(\n    $getResumesResumeArgs: GetResumesResumeArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getResumes(\n      getResumesResumeArgs: $getResumesResumeArgs\n      paginationArgs: $paginationArgs\n    ) {\n      edges {\n        id\n        title\n        userId\n        updatedAt\n      }\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        totalPages\n        currentPage\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;