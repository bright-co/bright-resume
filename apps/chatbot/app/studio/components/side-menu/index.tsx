"use client";

import { FC } from "react";
import { Menu, Plus, Loader2, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  ScrollArea,
  Separator,
} from "@resume-template-components/shadcn-ui";

import { client } from "@chatbot/app/api/client";

import { useData } from "./index.hook";
import { useStudioContext } from "../use-context";

export const SideMenu: FC = () => {
  const {
    isCollapsed,
    setIsCollapsed,
    form,
    onSubmit,
    resumes,
    loading,
    selectedResume,
    setSelectedResumeId,
  } = useData();

  const { setIsNewResumeDialog } = useStudioContext();
  const router = useRouter();

  const renderBurgerButton = () => {
    return (
      <div className="flex">
        <Button
          variant="ghost"
          size="icon"
          className="p-2"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>
    );
  };

  const renderNewButton = () => {
    return (
      <div>
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => setIsNewResumeDialog(true)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    );
  };

  const renderResumes = () => {
    return (
      <div className="bg-blue-300 flex-grow flex flex-col">
        <div className="border-2 border-green-700">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="pb-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Search ..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <ScrollArea className="border-2 border-red-500 flex-1 basis-0">
          {loading && (
            <div className="flex justify-center items-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </div>
          )}
          {!loading && resumes.length === 0 && <p> Not Found!</p>}
          {!loading &&
            resumes.map(({ title, id }) => (
              <>
                <div
                  key={id}
                  className={clsx("text-sm cursor-pointer", {
                    "bg-red-400": selectedResume && selectedResume.id === id,
                  })}
                  onClick={() => {
                    setSelectedResumeId(id!);
                  }}
                >
                  {title}
                </div>
                <Separator className="my-2" />
              </>
            ))}
        </ScrollArea>
      </div>
    );
  };

  const renderSignOut = () => {
    return (
      <div>
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => {
            client.signOut();
            router.push("/auth/sign-in");
          }}
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    );
  };
  return (
    <div
      style={{ width: isCollapsed ? 60 : 200 }}
      className="bg-red-300 flex flex-col gap-1 p-2"
    >
      {renderBurgerButton()}
      {renderNewButton()}
      {renderResumes()}
      {renderSignOut()}
    </div>
  );
};
