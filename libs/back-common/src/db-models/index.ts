import { ModelDefinition } from "@nestjs/mongoose";

import { User, UserSchema } from "./user.model";
import { Resume, ResumeSchema } from "./resume.model";
import { File, FileSchema } from "./file.model";

export * from "./user.model";
export * from "./file.model";
export * from "./resume.model";
export * from "./certification.model";
export * from "./course-work.model";
export * from "./education.model";
export * from "./experience.model";
export * from "./involvement.model";
export * from "./language.model";
export * from "./project.model";
export * from "./hobby.model";
export * from "./skill.model";
export * from "./resume.model";

export const models: ModelDefinition[] = [
  { name: User.name, schema: UserSchema },
  { name: Resume.name, schema: ResumeSchema },
  { name: File.name, schema: FileSchema },
];
