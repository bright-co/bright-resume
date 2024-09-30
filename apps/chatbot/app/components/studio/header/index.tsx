"use client";

import { FC } from "react";
import { FileTextIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@resume-template-components/shadcn-ui";

import { useStudioContext } from "../use-context";

export const Header: FC = () => {
  const { user, selectedResume } = useStudioContext();
  return (
    <header className="bg-background border-b w-full h-full">
      <div className="max-h-full mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FileTextIcon className="h-8 w-8 text-primary" />
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-primary">bright-resume</h1>
            {selectedResume?.title && (
              <p className="text-sm text-accent-foreground">
                {selectedResume?.title}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="md:flex items-center space-x-4">
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
              <p className="font-medium">{user.name}</p>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
