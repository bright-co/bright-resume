import { Module } from "@nestjs/common";
import { BullModule as BullModuleOriginal } from "@nestjs/bull";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { EnvironmentVariablesEnum } from "./environment-variable.enum";
import { BullService } from "./bull.service";
import { GENERATE_PDF_OF_RESUME_QUEUE } from "./constants";
import { MinioModule } from "../minio/minio.module";
import { DBModule } from "../db/db.module";
import { models } from "../../db-models";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    BullModuleOriginal.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get(EnvironmentVariablesEnum.REDIS_HOST),
          port: configService.get(EnvironmentVariablesEnum.REDIS_PORT),
        },
      }),
      inject: [ConfigService],
    }),
    BullModuleOriginal.registerQueue({
      name: GENERATE_PDF_OF_RESUME_QUEUE,
    }),
    MongooseModule.forFeature(models),
    MinioModule,
    DBModule,
  ],
  providers: [BullService],
  exports: [BullService],
})
export class BullModule {}
