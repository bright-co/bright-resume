"use client";

import { client } from "@chatbot/app/api/client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
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
import clsx from "clsx";
import {
  ChevronLeft,
  ChevronRight,
  Edit,
  Loader2,
  LogOutIcon,
  Plus,
  Search,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

import { useStudioContext } from "../use-context";
import { useData } from "./index.hook";
import { TEXTS } from "./texts";

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
              isCollapsedSideMenu
                ? TEXTS.expandSideMenu
                : TEXTS.collapseSideMenu
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
                variant="outline"
                size={isCollapsedSideMenu ? "icon" : "default"}
                className="w-full"
                onClick={() => setIsOpenNewResumeDialog(true)}
                aria-label={TEXTS.logoutAriaLabel}
              >
                <Plus className="h-4 w-4 mr-2" />
                {!isCollapsedSideMenu && ` ${TEXTS.addNewResume}`}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{TEXTS.addNewResume}</p>
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
                                placeholder={TEXTS.searchResumesPlaceholder}
                                className="pl-8"
                                aria-label={TEXTS.searchResumesAriaLabel}
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
                              aria-label={TEXTS.clearSearchAriaLabel}
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
                <ul className="space-y-2">
                  {resumes.map((resume, index) => (
                    <li
                      key={resume.id}
                      onClick={() => {
                        setSelectedResumeId(resume.id!);
                      }}
                      className={clsx(
                        "p-2 rounded-md shadow flex items-center justify-between",
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
                          <p>{resume.title}</p>
                        </TooltipContent>
                      </Tooltip>

                      <div className="flex space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setSelectedResumeId(resume.id!);
                          }}
                          aria-label={TEXTS.editAriaLabel(resume.title!)}
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="w-full" size={"icon"}>
                <LogOutIcon className="mr-2 h-4 w-4" />
                {!isCollapsedSideMenu && TEXTS.logout}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{TEXTS.logoutDialogTitle}</AlertDialogTitle>
                <AlertDialogDescription>
                  {TEXTS.logoutDialogWarning}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{TEXTS.cancel}</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    client.signOut();
                    router.push("/");
                  }}
                >
                  {TEXTS.logout}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </TooltipProvider>
  );
};
