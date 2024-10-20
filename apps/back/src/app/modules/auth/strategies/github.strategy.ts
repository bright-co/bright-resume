import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { Strategy } from "passport-github2";
import { EnvironmentVariablesEnum } from "../../../enums";
import { User } from "@back-common/db-models";

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy, "github") {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly configService: ConfigService
  ) {
    super({
      clientID: configService.get(EnvironmentVariablesEnum.GITHUB_CLIENT_ID),
      clientSecret: configService.get(
        EnvironmentVariablesEnum.GITHUB_CLIENT_SECRET
      ),
      callbackURL:
        configService.get(EnvironmentVariablesEnum.BACK_URL) +
        "/back/auth/sign-in/github/callback",
      scope: ["user:email"], // Request only the necessary scope
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: {
      id: string;
      username: string;
      displayName: string;
      email: string;
      emails: { value: string }[];
      photos: { value: string }[];
      avatar_url: string;
      // _json: any;
    }
  ) {
    const {
      emails: [{ value: email }],
      photos: [{ value: photo }],
      displayName,
    } = profile;

    let user = await this.userModel.findOne({ email });

    if (!user) {
      user = await this.userModel.create({ email });
    }

    user.name = displayName;
    user.picture = photo;

    await user.save();
    return user;
  }
}
