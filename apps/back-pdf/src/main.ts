import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { checkEnv } from "@back-common/check-env";
import { EnvironmentVariablesEnum } from "./app/enums";
import { AppModule } from "./app/app.module";
import { setupApp } from "./setup-app";
import session from "express-session";

async function bootstrap() {
  checkEnv(EnvironmentVariablesEnum);
  const app = await NestFactory.create(AppModule);
  setupApp(app);
  const globalPrefix = "pdf";
  app.use(session({ secret: "secret" }));
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 4001;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
