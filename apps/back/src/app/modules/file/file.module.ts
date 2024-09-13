import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { models } from "../../models";
import { FileResolver } from "./file.resolver";
import { FileService } from "./file.service";
import { DBModule } from "../db/db.module";
import { MinioModule } from "../minio/minio.module";
import { BullModule } from "../bull/bull.module";
import { PdfModule } from "../pdf/pdf.module";

@Module({
  imports: [
    DBModule,
    MongooseModule.forFeature(models),
    BullModule,
    PdfModule,
    MinioModule,
  ],
  providers: [FileResolver, FileService],
  exports: [FileService],
})
export class FileModule {}
