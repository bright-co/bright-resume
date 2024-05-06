import { GeneratePdfOfResumeFileInputs } from "@dto";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { join } from "path";
import hbs from "handlebars";
import fs from "fs/promises";
import puppeteer from "puppeteer";

@Injectable()
export class PdfService {
  constructor(private readonly configService: ConfigService) {}

  async generatePdf(fileId: string, htmlContent: string): Promise<string> {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"],
      ignoreDefaultArgs: ["--disable-extensions"],
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent);

    await page.emulateMediaType("print");

    const filename = fileId + ".pdf";
    const path = join(process.cwd(), "./files/" + filename);

    await page.pdf({
      path,
      format: "A4",
    });

    await browser.close();

    return path;
  }

  async generatePdfOfResume(
    fileId: string,
    inputs: GeneratePdfOfResumeFileInputs
  ): Promise<string> {
    const { resumeId } = inputs;

    const html = await fs.readFile(
      join(
        process.cwd(),
        "./apps/back-file/src/app/modules/pdf/templates/resume.hbs"
      ),
      { encoding: "utf-8" }
    );

    const template = hbs.compile(html);
    const htmlContent = template({ resumeId, fileId });

    return await this.generatePdf(fileId, htmlContent);
  }

  async generateFromUrl() {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"],
      ignoreDefaultArgs: ["--disable-extensions"],
    });

    const page = await browser.newPage();
    await page.setJavaScriptEnabled(false);
    await page.goto("http://localhost:4200");

    await page.emulateMediaType("print");

    const filename = "test1" + ".pdf";
    const path = join(process.cwd(), "./files/" + filename);

    await page.pdf({
      path,
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

    return path;
  }
}
