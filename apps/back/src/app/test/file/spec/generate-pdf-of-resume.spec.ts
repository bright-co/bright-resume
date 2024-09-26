import { BullService } from "@back-common/modules/bull/bull.service";
import { GeneratePdfOfResumeFileInputsGQL } from "@back-common/dto";
import { generateAuthorizationHeader } from "@back-common/test/helpers";
import { GeneratePdfOfResumeFileInputs } from "@dto";
import { FileReasonEnum, FileStatusEnum, FileTypeEnum } from "@enums";
import gql from "graphql-tag";
import mongoose from "mongoose";
import request from "supertest-graphql";
import { HelperDB, IntegrationTestManager } from "../helper";

describe("microservice:file GeneratePdfOfResume", () => {
  const integrationTestManager = new IntegrationTestManager();
  let helperDB: HelperDB;
  let bullService: BullService;

  beforeAll(async () => {
    await integrationTestManager.beforeAll();
    bullService = integrationTestManager.app.get(BullService);
    helperDB = integrationTestManager.helperDB;
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

  it("should nothings! 🤪 but create a file and add request to queue", async () => {
    const getStatusSpy = jest
      .spyOn(bullService, "addToGeneratePdfOfResumeQueue")
      .mockReturnValue(Promise.resolve());

    const generatePdfOfResumeFileInputs: GeneratePdfOfResumeFileInputsGQL = {
      resumeId: new mongoose.Types.ObjectId().toString(),
    };

    const authHeader = generateAuthorizationHeader({});

    const { errors } = await request<
      null,
      {
        generatePdfOfResumeFileInputs: GeneratePdfOfResumeFileInputs;
      }
    >(integrationTestManager.httpServer)
      .set(authHeader.key, authHeader.value)
      .mutate(
        gql`
          mutation (
            $generatePdfOfResumeFileInputs: GeneratePdfOfResumeFileInputsGQL!
          ) {
            generatePdfOfResume(
              generatePdfOfResumeFileInputs: $generatePdfOfResumeFileInputs
            ) {
              id
            }
          }
        `
      )
      .variables({
        generatePdfOfResumeFileInputs,
      });

    expect(errors).toBeUndefined();

    const file = await helperDB.dbService.fileModel.findOne({
      resumeId: generatePdfOfResumeFileInputs.resumeId,
    });

    expect(file).toBeDefined();
    expect(file.userId).toBe(authHeader.token.id);
    expect(file.isVerified).toBe(false);
    expect(file.type).toBe(FileTypeEnum.Pdf);
    expect(file.reason).toBe(FileReasonEnum.ResumePdf);
    expect(file.status).toBe(FileStatusEnum.Waiting);
    expect(getStatusSpy).toHaveBeenCalled();
  });
});
