import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { DBModule } from "@back-common/modules/db/db.module";
import { AppController } from "./app.controller";
import { MinioModule } from "@back-common/modules/minio/minio.module";
import { BullModule } from "@back-common/modules/bull/bull.module";
import { GeneratePdfOfResumeConsumer } from "./modules/consumers/generate-pdf.consumer";
import { PdfModule } from "./modules/pdf/pdf.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DBModule,
    MinioModule,
    BullModule,
    PdfModule,
  ],
  controllers: [AppController],
  providers: [GeneratePdfOfResumeConsumer],
})
export class AppModule {}
