import { EnvironmentVariablesEnum } from "../../enums";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { join } from "path";
import puppeteer from "puppeteer";
import * as fs from "fs";
import * as fsPromises from "fs/promises";

@Injectable()
export class PdfService {
  constructor(private readonly configService: ConfigService) {}

  async generatePdf(fileId: string, resumeId: string) {
    try {
      const browser = await puppeteer.launch({
        args: ["--no-sandbox"],
        ignoreDefaultArgs: ["--disable-extensions"],
      });

      const page = await browser.newPage();
      await page.setJavaScriptEnabled(false);

      await page.goto(
        this.configService.get(EnvironmentVariablesEnum.RESUME_URL) +
          "/resume/" +
          resumeId
      );

      await page.emulateMediaType("print");

      const filename = fileId + ".pdf";
      const directoryPath = join(process.cwd(), "./files");
      const filePath = join(directoryPath, filename);

      if (!fs.existsSync(directoryPath)) {
        await fsPromises.mkdir(directoryPath, { recursive: true });
      }

      await page.pdf({
        path: filePath,
        format: "A4",
        printBackground: true,
        width: "21cm",
        height: "29.7cm",
        margin: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      });

      await browser.close();

      return filePath;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  }
}
