import { File } from "@back-common/db-models";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { GetUploadLinkForProfileImageFileInputs } from "@dto";
import { FileReasonEnum, FileTypeEnum } from "@enums";
import gql from "graphql-tag";
import mongoose from "mongoose";
import request from "supertest-graphql";
import { IntegrationTestManager } from "../helper";

describe("microservice:file GetUploadLinkForProfileImage", () => {
  const integrationTestManager = new IntegrationTestManager();

  beforeAll(async () => {
    await integrationTestManager.beforeAll();
  });

  afterEach(async () => {
    await integrationTestManager.afterEach();
  });

  beforeEach(async () => {
    await integrationTestManager.beforeEach();
  });

  afterAll(async () => {
    await integrationTestManager.afterAll();
  });

  it("should return an instance of file with upload link", async () => {
    const authHeader = generateAuthorizationHeader({});

    const resumeId = new mongoose.Types.ObjectId().toString();

    const { data, errors } = await request<
      { getUploadLinkForProfileImage: File },
      {
        getUploadLinkForProfileImageFileInputs: GetUploadLinkForProfileImageFileInputs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation (
            $getUploadLinkForProfileImageFileInputs: GetUploadLinkForProfileImageFileInputsGQL!
          ) {
            getUploadLinkForProfileImage(
              getUploadLinkForProfileImageFileInputs: $getUploadLinkForProfileImageFileInputs
            ) {
              id
              userId
              resumeId
              path
              type
              reason
              status
              isVerified
              size
              hash
              name
              uploadLink
            }
          }
        `
      )
      .variables({
        getUploadLinkForProfileImageFileInputs: {
          resumeId,
        },
      });

    expect(errors).toBeUndefined();

    expect(data.getUploadLinkForProfileImage.uploadLink).toBeDefined();
    expect(data.getUploadLinkForProfileImage.userId).toBe(authHeader.token.id);
    expect(data.getUploadLinkForProfileImage.resumeId).toBe(resumeId);
    expect(data.getUploadLinkForProfileImage.reason).toBe(
      FileReasonEnum.ResumeProfileImage
    );
    expect(data.getUploadLinkForProfileImage.type).toBe(FileTypeEnum.Image);
    expect(data.getUploadLinkForProfileImage.isVerified).toBeFalsy();
  });
});
