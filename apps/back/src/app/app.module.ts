import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { GraphQLModule } from "./modules/graphql/graphql.module";
import { DBModule } from "./modules/db/db.module";
import { ResumeModule } from "./modules/resume/resume.module";
import { PassportModule } from "@nestjs/passport";
import { FileModule } from "./modules/file/file.module";
import { AuthModule } from "./modules/auth/auth.module";

import { AppController } from "./app.controller";

import { JWTStrategy } from "@back-common/strategies";
import { MinioModule } from "./modules/minio/minio.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule,
    PassportModule,
    DBModule,
    ResumeModule,
    FileModule,
    AuthModule,
    MinioModule,
  ],
  controllers: [AppController],
  providers: [JWTStrategy],
})
export class AppModule {}
