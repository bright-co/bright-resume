"use client";

import {
  Button,
  Sheet,
  SheetContent,
} from "@resume-template-components/shadcn-ui";
import { FC } from "react";
import { clsx } from "clsx";

import { useStudioContext } from "../use-context";

const examples = [
  {
    name: "Mail",
    href: "/examples/mail",
  },
  {
    name: "Dashboard",
    href: "/examples/dashboard",
  },
  {
    name: "Cards",
    href: "/examples/cards",
  },
  {
    name: "Tasks",
    href: "/examples/tasks",
  },
  {
    name: "Playground",
    href: "/examples/playground",
  },
  {
    name: "Forms",
    href: "/examples/forms",
  },
  {
    name: "Music",
    href: "/examples/music",
  },
  {
    name: "Authentication",
    href: "/examples/authentication",
  },
];

export const Steps: FC = () => {
  const { isOpenSteps, setIsOpenSteps } = useStudioContext();

  return (
    <Sheet open={isOpenSteps} onOpenChange={setIsOpenSteps}>
      <SheetContent style={{ width: "80%", maxWidth: "80%" }} side="right">
        <div className="relative">
          <div className={clsx("mb-4 flex items-center")}>
            {examples.map((example, index) => (
              <Button
                key={example.href}
                className={clsx(
                  "flex h-7  ml-4 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-secondary bg-muted font-medium text-primary"
                )}
              >
                {example.name}
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
