"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@resume-template-components/shadcn-ui";
import { FC, ReactNode } from "react";

import { ResumeSectionType } from "@models";
import {
  Award as AwardIcon,
  Book as BookIcon,
  Briefcase as BriefcaseIcon,
  FileText as FileTextIcon,
  Folder as FolderIcon,
  Globe as GlobeIcon,
  GraduationCap as GraduationCapIcon,
  Heart as HeartIcon,
  User as UserIcon,
  Users as UsersIcon,
  Wrench as WrenchIcon,
} from "lucide-react";
import { useStudioContext } from "../use-context";
import {
  Certification,
  CourseWork,
  Education,
  Experience,
  Header,
  Hobby,
  Involvement,
  Language,
  Project,
  Skill,
  Summary,
} from "./components";

const sections: {
  section: ResumeSectionType;
  component: ReactNode;
  icon: ReactNode;
}[] = [
  {
    section: "header",
    component: <Header />,
    icon: <UserIcon className="w-4 h-4 mr-1" />,
  },
  {
    section: "summary",
    component: <Summary />,
    icon: <FileTextIcon className="w-4 h-4 mr-1" />,
  },
  {
    section: "experience",
    component: <Experience />,
    icon: <BriefcaseIcon className="w-4 h-4 mr-1" />,
  },
  {
    section: "involvement",
    component: <Involvement />,
    icon: <UsersIcon className="w-4 h-4 mr-1" />,
  },
  {
    section: "project",
    component: <Project />,
    icon: <FolderIcon className="w-4 h-4 mr-1" />,
  },
  {
    section: "education",
    component: <Education />,
    icon: <GraduationCapIcon className="w-4 h-4 mr-1" />,
  },
  {
    section: "skill",
    component: <Skill />,
    icon: <WrenchIcon className="w-4 h-4 mr-1" />,
  },
  {
    section: "courseWork",
    component: <CourseWork />,
    icon: <BookIcon className="w-4 h-4 mr-1" />,
  },
  {
    section: "certification",
    component: <Certification />,
    icon: <AwardIcon className="w-4 h-4 mr-1" />,
  },
  {
    section: "hobby",
    component: <Hobby />,
    icon: <HeartIcon className="w-4 h-4 mr-1" />,
  },
  {
    section: "language",
    component: <Language />,
    icon: <GlobeIcon className="w-4 h-4 mr-1" />,
  },
];

export const Steps: FC = () => {
  const { isOpenSteps, setIsOpenSteps, resumeSection, setResumeSection } =
    useStudioContext();

  return (
    <Sheet open={isOpenSteps} onOpenChange={setIsOpenSteps}>
      <SheetContent
        className="flex flex-col py-2 px-4"
        style={{ width: "80%", minWidth: "1200px" }}
        side="right"
      >
        <SheetHeader className="space-y-0">
          <SheetTitle>Edit Your Resume</SheetTitle>
          <SheetDescription>
            {"Make changes to your resume here. Click save when you're done."}
          </SheetDescription>
        </SheetHeader>

        <Tabs
          defaultValue="header"
          value={resumeSection}
          className="h-full flex flex-col w-full flex-grow overflow-hidden"
        >
          <TabsList className="flex w-max">
            {sections.map(({ section, icon }) => (
              <TabsTrigger
                key={section}
                value={section!}
                onClick={() => setResumeSection(section)}
                className="text-zinc-600 pr-2"
              >
                {icon}
                {section}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="header" className="overflow-auto">
            <Header />
          </TabsContent>
          <TabsContent value="summary" className="overflow-auto">
            <Summary />
          </TabsContent>
          <TabsContent value="experience" className="flex-grow overflow-hidden">
            <Experience />
          </TabsContent>
          <TabsContent value="involvement" className="overflow-auto">
            <Involvement />
          </TabsContent>
          <TabsContent value="project" className="overflow-auto">
            <Project />
          </TabsContent>
          <TabsContent value="education" className="overflow-auto">
            <Education />
          </TabsContent>
          <TabsContent value="skill" className="overflow-auto">
            <Skill />
          </TabsContent>
          <TabsContent value="courseWork" className="overflow-auto">
            <CourseWork />
          </TabsContent>
          <TabsContent value="certification" className="overflow-auto">
            <Certification />
          </TabsContent>
          <TabsContent value="hobby" className="overflow-auto">
            <Hobby />
          </TabsContent>
          <TabsContent value="language" className="overflow-auto">
            <Language />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};
