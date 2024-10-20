"use client";

import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";

import { Logo } from "@@chatbot/app/components/logo";
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
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@resume-template-components/shadcn-ui";

import { useStudioContext } from "../use-context";
import { TEXTS } from "./texts";

export const Header: FC = () => {
  const { user, selectedResume } = useStudioContext();
  const router = useRouter();

  return (
    <header className="bg-background border-b w-full h-full">
      <div className="max-h-full mx-auto px-4 py-3 flex items-center justify-between relative">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Logo width={25} height={25} />
          </Link>
          <div className="hidden md:block">
            <h1 className="text-1xl font-bold text-primary">
              {TEXTS.siteTitle}
            </h1>
            {selectedResume?.title && (
              <p className="text-sm text-accent-foreground">
                {selectedResume?.title}
              </p>
            )}
          </div>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="md:flex items-center space-x-4 ring-0 border-none"
              variant={"outline"}
            >
              <Avatar>
                <AvatarImage
                  src={user.picture || undefined}
                  alt={(user.username || user.name || user.email)!}
                />
                <AvatarFallback>
                  {(user.username || user.email || user.name || " ")!
                    .charAt(0)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">{user.username || user.name}</p>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="flex flex-col items-center space-y-4 p-4">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={user.picture || undefined}
                  alt={(user.username || user.name || user.email)!}
                />
                <AvatarFallback className="text-2xl">
                  {(user.username || user.email || user.name || " ")!
                    .charAt(0)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-xl font-semibold">
                  {TEXTS.hi(user.name || user.username || "")}
                </p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    {TEXTS.logOut}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      {TEXTS.logOutConfirmationTitle}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      {TEXTS.logOutConfirmationDescription}
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
                      {TEXTS.logOut}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
