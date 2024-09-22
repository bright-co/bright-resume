import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { models } from "../../models";
import { DBModule } from "../db/db.module";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { GoogleStrategy, GitHubStrategy, LinkedInStrategy } from "./strategies";

@Module({
  imports: [DBModule, MongooseModule.forFeature(models)],
  providers: [
    AuthService,
    AuthResolver,
    JwtService,
    GoogleStrategy,
    GitHubStrategy,
    LinkedInStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
