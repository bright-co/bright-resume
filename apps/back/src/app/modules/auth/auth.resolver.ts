import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { UserId } from "@back-common/decorators";
import { GqlAuthGuard, GqlOAuthGuard } from "@back-common/guards";
import { User } from "@back-common/db-models";
import { SignInAuthInputsGQL, SignUpAuthInputsGQL } from "@back-common/dto";
import { AuthService } from "./auth.service";

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => User, { nullable: false })
  @UseGuards(GqlAuthGuard)
  async getProfile(@UserId() userId: string) {
    return this.authService.getById(userId);
  }

  @Mutation(() => User)
  async signUp(
    @Args("signUpAuthInputs")
    inputs: SignUpAuthInputsGQL
  ): Promise<User> {
    return await this.authService.signUp(inputs);
  }

  @Mutation(() => User)
  async signIn(
    @Args("signInAuthInputs")
    inputs: SignInAuthInputsGQL
  ): Promise<User> {
    return await this.authService.signIn(inputs);
  }

  @Query(() => User, { nullable: false })
  @UseGuards(GqlOAuthGuard)
  async signInWithOAuthToken(@UserId() userId: string): Promise<User> {
    return this.authService.signInWithOauthToken(userId);
  }
}
