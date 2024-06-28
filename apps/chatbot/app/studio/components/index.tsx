"use client";

import clsx from "clsx";

import { IUserCookie } from "@chatbot/cookie/user";
import { Chat } from "./chat";
import { Context } from "./context";
import { Header } from "./header";
import { useData } from "./index.hook";
import { NewResumeDialog } from "./new-resume-dialog";
import { Resume } from "./resume";
import { SideMenu } from "./side-menu";

type Props = {
  user: IUserCookie;
};

export default function Index({ user }: Props) {
  const data = useData(user);

  return (
    <Context.Provider value={data}>
      <div
        className="max-w-full w-full h-screen flex border-4 border-blue-600"
        style={{ minWidth: 1200 }}
      >
        <div
          className={clsx({
            "w-[60px]": data.isCollapsedSideMenu,
            "w-[200px]": !data.isCollapsedSideMenu,
            "max-w-[60px]": data.isCollapsedSideMenu,
            "max-w-[200px]": !data.isCollapsedSideMenu,
            "min-w-[60px]": data.isCollapsedSideMenu,
            "min-w-[200px]": !data.isCollapsedSideMenu,
          })}
        >
          <SideMenu />
        </div>
        <div
          style={{
            width: data.isCollapsedSideMenu
              ? "calc( 100% - 60px)"
              : "calc( 100% - 200px)",
            minWidth: data.isCollapsedSideMenu
              ? "calc( 100% - 60px)"
              : "calc( 100% - 200px)",
            maxWidth: data.isCollapsedSideMenu
              ? "calc( 100% - 60px)"
              : "calc( 100% - 200px)",
          }}
          className="flex-grow h-full flex flex-col border-4 border-green-500"
        >
          <div style={{ maxHeight: "50px", height: "50px" }}>
            <Header />
          </div>
          <div
            style={{ maxHeight: "calc( 100% - 50px)" }}
            className="w-full flex-grow flex border border-red-500"
          >
            <div className="h-full w-full overflow-auto bg-slate-100 relative">
              <Chat />
              <Resume />
            </div>
          </div>
        </div>
      </div>
      <NewResumeDialog />
    </Context.Provider>
  );
}
