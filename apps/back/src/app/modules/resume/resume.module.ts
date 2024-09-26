import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ResumeResolver } from "./resume.resolver";
import { ResumeService } from "./resume.service";
import { models } from "@back-common/db-models";
import { DBModule } from "@back-common/modules/db/db.module";

@Module({
  imports: [DBModule, MongooseModule.forFeature(models)],
  providers: [ResumeService, ResumeResolver],
})
export class ResumeModule {}
