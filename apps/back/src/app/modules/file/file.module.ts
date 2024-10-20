import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { models } from "@back-common/db-models";
import { FileResolver } from "./file.resolver";
import { FileService } from "./file.service";
import { DBModule } from "@back-common/modules/db/db.module";
import { MinioModule } from "@back-common/modules/minio/minio.module";
import { BullModule } from "@back-common/modules/bull/bull.module";

@Module({
  imports: [
    DBModule,
    MongooseModule.forFeature(models),
    BullModule,
    MinioModule,
  ],
  providers: [FileResolver, FileService],
  exports: [FileService],
})
export class FileModule {}
