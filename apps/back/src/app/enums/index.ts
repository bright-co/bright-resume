import { registerEnumType } from "@nestjs/graphql";

import {
  FileReasonEnum,
  FileTypeEnum,
  FileStatusEnum,
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";

registerEnumType(FileReasonEnum, {
  name: "FileReasonEnum",
});

registerEnumType(FileTypeEnum, {
  name: "FileTypeEnum",
});

registerEnumType(FileStatusEnum, {
  name: "FileStatusEnum",
});

registerEnumType(ResumeColorEnum, {
  name: "ResumeColorEnum",
});

registerEnumType(ResumeFontFamilyEnum, {
  name: "ResumeFontFamilyEnum",
});

registerEnumType(ResumeFontSizeEnum, {
  name: "ResumeFontSizeEnum",
});

export * from "@enums";
export * from "./environment-variable.enum";
