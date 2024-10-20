import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { File, PaginatedFile } from "@back-common/db-models";
import { DbService } from "@back-common/modules/db/db.service";
import { MinioService } from "@back-common/modules/minio/minio.service";
import { BullService } from "@back-common/modules/bull/bull.service";
import { paginate } from "@back-common/pagination";
import {
  GeneratePdfOfResumeFileInputs,
  GetDownloadLinkFileInputs,
  GetFileByIdFileInputs,
  GetFilesFileInputs,
  GetUploadLinkForProfileImageFileInputs,
  PaginationArgs,
  VerifyUploadedFileFileInputs,
} from "@dto";
import { FileReasonEnum, FileStatusEnum, FileTypeEnum } from "@enums";
import {
  CustomError,
  FILE_NOT_FOUND,
  THE_FILE_HAS_ALREADY_BEEN_APPROVED,
  THE_FILE_HAS_NOT_BEEN_UPLOADED_YET,
} from "@errors";

@Injectable()
export class FileService {
  constructor(
    @InjectModel(File.name) private fileModel: Model<File>,
    private minioService: MinioService,
    private dbService: DbService,
    private bullService: BullService
  ) {}

  async getUploadLinkForProfileImage(
    userId: string,
    inputs: GetUploadLinkForProfileImageFileInputs
  ): Promise<File> {
    const { resumeId } = inputs;

    let file = await this.fileModel.findOne({
      resumeId,
      userId,
      isVerified: false,
      type: FileTypeEnum.Image,
      reason: FileReasonEnum.ResumeProfileImage,
    });

    if (!file) {
      file = await this.fileModel.create({
        resumeId,
        userId,
        isVerified: false,
        type: FileTypeEnum.Image,
        reason: FileReasonEnum.ResumeProfileImage,
      });
    }

    let uploadLink = "";
    await this.dbService.transaction(async () => {
      await file.save();
      uploadLink = await this.minioService.getUploadLink(file.id);
    });

    file.uploadLink = uploadLink;
    return file;
  }

  async verifyUploadedFile(
    userId: string,
    inputs: VerifyUploadedFileFileInputs
  ): Promise<File> {
    const { fileId } = inputs;

    const file = await this.fileModel.findOne({
      userId,
      id: fileId,
    });

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    if (file.isVerified) {
      throw new CustomError(THE_FILE_HAS_ALREADY_BEEN_APPROVED);
    }

    const status = await this.minioService.getStatus(fileId);

    if (!status) {
      throw new CustomError(THE_FILE_HAS_NOT_BEEN_UPLOADED_YET);
    }

    file.isVerified = true;
    file.size = status.size;
    file.status = FileStatusEnum.Uploaded;

    await file.save();

    return file;
  }

  async generatePdfOfResume(
    userId: string,
    inputs: GeneratePdfOfResumeFileInputs
  ): Promise<File> {
    const { resumeId } = inputs;

    let file: File;
    await this.dbService.transaction(async () => {
      file = await this.fileModel.create({
        resumeId,
        userId,
        isVerified: false,
        type: FileTypeEnum.Pdf,
        reason: FileReasonEnum.ResumePdf,
        status: FileStatusEnum.Waiting,
      });

      await this.bullService.addToGeneratePdfOfResumeQueue({
        fileId: file.id,
        resumeId,
      });
    });

    return file;
  }

  async getDownloadLink(
    userId: string,
    args: GetDownloadLinkFileInputs
  ): Promise<string> {
    const { fileId } = args;

    const file = await this.fileModel.findOne({
      id: fileId,
      userId,
      isVerified: true,
      status: FileStatusEnum.Uploaded,
    });

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    return await this.minioService.getDownloadLink(fileId);
  }

  async getList(
    userId: string,
    args: GetFilesFileInputs,
    paginationArgs: PaginationArgs
  ): Promise<PaginatedFile> {
    const { resumeId, reason } = args;
    const { limit, page } = paginationArgs;

    const queryBuilder: FilterQuery<File> = {
      userId,
      isVerified: true,
    };

    if (resumeId) {
      queryBuilder.resumeId = resumeId;
    }

    if (reason) {
      queryBuilder.reason = reason;
    }

    return paginate(this.fileModel, queryBuilder, page, limit);
  }

  async getById(userId: string, args: GetFileByIdFileInputs): Promise<File> {
    const { fileId } = args;

    const file = await this.fileModel.findOne({
      userId,
      id: fileId,
      isVerified: true,
    });

    if (!file) {
      throw new CustomError(FILE_NOT_FOUND);
    }

    return file;
  }
}
