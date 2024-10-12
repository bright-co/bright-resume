"use client";

import {
  ChevronLeft,
  ChevronRight,
  Edit,
  Loader2,
  LogOut,
  Plus,
  Search,
  X,
} from "lucide-react";
import { FC } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  ScrollArea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@resume-template-components/shadcn-ui";
import { client } from "@chatbot/app/api/client";

import { useStudioContext } from "../use-context";
import { useData } from "./index.hook";

export const SideMenu: FC = () => {
  const {
    form,
    onSubmit,
    resumes,
    loading,
    selectedResume,
    setSelectedResumeId,
  } = useData();

  const { isCollapsedSideMenu, setIsCollapsedSideMenu } = useStudioContext();

  const { setIsOpenNewResumeDialog } = useStudioContext();
  const router = useRouter();

  return (
    <TooltipProvider>
      <div
        className={` flex flex-col transition-all duration-300  w-full h-full`}
      >
        <div className="p-2 flex justify-end items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsedSideMenu(!isCollapsedSideMenu)}
            aria-label={
              isCollapsedSideMenu ? "Expand side menu" : "Collapse side menu"
            }
          >
            {isCollapsedSideMenu ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="default"
                size={isCollapsedSideMenu ? "icon" : "default"}
                className="w-full"
                onClick={() => setIsOpenNewResumeDialog(true)}
                aria-label="Logout"
              >
                <Plus className="h-4 w-4 mr-2" />
                {!isCollapsedSideMenu && " Add New Resume"}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p> Add New Resume</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex-grow overflow-hidden">
          {!isCollapsedSideMenu && (
            <div className="p-2">
              <div className="mb-4 relative">
                <Search
                  className="absolute left-2 top-2.5 h-4 w-4 text-gray-500"
                  aria-hidden="true"
                />
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="pb-2">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Search resumes..."
                                className="pl-8"
                                aria-label="Search resumes"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                          {!loading && field.value && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-0 top-0"
                              onClick={() => {
                                field.onChange("");
                                form.handleSubmit(onSubmit)();
                              }}
                              aria-label="Clear search"
                              type="button"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                          {loading && (
                            <Loader2 className="absolute right-2 top-2.5 h-4 w-4 animate-spin" />
                          )}
                        </>
                      )}
                    />
                  </form>
                </Form>
              </div>
              <ScrollArea className="h-[calc(100vh-180px)]">
                <ul className="space-y-2 mt-1">
                  {resumes.map((resume, index) => (
                    <li
                      key={resume.id}
                      onClick={() => {
                        setSelectedResumeId(resume.id!);
                      }}
                      className={clsx(
                        "p-2 mx-1 rounded-md shadow flex items-center justify-between",
                        {
                          "bg-primary/10":
                            selectedResume && selectedResume.id === resume.id,
                        }
                      )}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span
                            className="text-sm font-medium truncate max-w-[120px]"
                            title={resume.title!}
                          >
                            {resume.title}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p> {resume.title} </p>
                        </TooltipContent>
                      </Tooltip>

                      <div className="flex space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setSelectedResumeId(resume.id!);
                          }}
                          aria-label={`Edit ${resume.title}`}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          )}
        </div>
        <div className="p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="destructive"
                size={isCollapsedSideMenu ? "icon" : "default"}
                className="w-full"
                onClick={() => {
                  client.signOut();
                  router.push("/auth/sign-in");
                }}
                aria-label="Logout"
              >
                <LogOut className="h-4 w-4 mr-2" />
                {!isCollapsedSideMenu && "Logout"}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Logout</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
};
