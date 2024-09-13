import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { checkEnv } from "@back-common/check-env";
import { EnvironmentVariablesEnum } from "./app/enums";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  checkEnv(EnvironmentVariablesEnum);
  const app = await NestFactory.create(AppModule);
  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 4000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/graphql and http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
