import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DbService } from "./db.service";
import { models } from "../../db-models";
import { EnvironmentVariablesEnum } from "./environment-variable.enum";

@Module({
  imports: [
    MongooseModule.forRoot(process.env[EnvironmentVariablesEnum.MONGO_URL], {
      dbName: process.env[EnvironmentVariablesEnum.DATABASE_NAME],
    }),
    MongooseModule.forFeature(models),
  ],
  providers: [DbService],
  exports: [DbService, MongooseModule.forFeature(models)],
})
export class DBModule {}
