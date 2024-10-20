import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { models } from "@back-common/db-models";
import { DBModule } from "@back-common/modules/db/db.module";
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
