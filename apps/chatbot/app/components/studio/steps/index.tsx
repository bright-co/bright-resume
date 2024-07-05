"use client";

import {
  Button,
  Separator,
  Sheet,
  SheetContent,
} from "@resume-template-components/shadcn-ui";
import { FC, ReactNode } from "react";
import { clsx } from "clsx";

import { useStudioContext } from "../use-context";
import {
  Header,
  Summary,
  Experience,
  Involvement,
  Project,
  Education,
  Skill,
  CourseWork,
  Certification,
  Hobby,
  Language,
} from "./components";
import { ResumeSectionType } from "@models";

const sections: { section: ResumeSectionType; component: ReactNode }[] = [
  {
    section: "header",
    component: <Header />,
  },
  {
    section: "summary",
    component: <Summary />,
  },
  {
    section: "experience",
    component: <Experience />,
  },
  {
    section: "involvement",
    component: <Involvement />,
  },
  {
    section: "project",
    component: <Project />,
  },
  {
    section: "education",
    component: <Education />,
  },
  {
    section: "skill",
    component: <Skill />,
  },
  {
    section: "courseWork",
    component: <CourseWork />,
  },
  {
    section: "certification",
    component: <Certification />,
  },
  {
    section: "hobby",
    component: <Hobby />,
  },
  {
    section: "language",
    component: <Language />,
  },
];

export const Steps: FC = () => {
  const { isOpenSteps, setIsOpenSteps, resumeSection, setResumeSection } =
    useStudioContext();

  return (
    <Sheet open={isOpenSteps} onOpenChange={setIsOpenSteps}>
      <SheetContent style={{ width: "80%", maxWidth: "80%" }} side="right">
        <div className="relative">
          <div className={clsx("mb-4 flex items-center")}>
            {sections.map(({ section }, index) => (
              <Button
                key={section}
                onClick={() => setResumeSection(section)}
                className={clsx(
                  "flex h-7  ml-4 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-secondary bg-muted font-medium text-primary"
                )}
              >
                {section}
              </Button>
            ))}
          </div>
        </div>
        <Separator />
        <div>{!resumeSection && <Header />}</div>
        {resumeSection === "header" && <Header />}
        {resumeSection === "summary" && <Summary />}
        {resumeSection === "experience" && <Experience />}
        {resumeSection === "involvement" && <Involvement />}
        {resumeSection === "project" && <Project />}
        {resumeSection === "education" && <Education />}
        {resumeSection === "skill" && <Skill />}
        {resumeSection === "courseWork" && <CourseWork />}
        {resumeSection === "certification" && <Certification />}
        {resumeSection === "hobby" && <Hobby />}
        {resumeSection === "language" && <Language />}
      </SheetContent>
    </Sheet>
  );
};
