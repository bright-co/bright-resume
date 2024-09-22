import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  health() {
    return "Bright Resume Back Service 🚀🚀";
  }
}
