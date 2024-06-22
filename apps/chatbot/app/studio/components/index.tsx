"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@resume-template-components/shadcn-ui";

import { SideMenu } from "./side-menu";
import { Header } from "./header";
import { Chat } from "./chat";
import { NewResumeDialog } from "./new-resume-dialog";
import { Resume } from "./resume";
import { useData } from "./index.hook";
import { Context } from "./context";
import { IUserCookie } from "@chatbot/cookie/user";

type Props = {
  user: IUserCookie;
};

export default function Index({ user }: Props) {
  const data = useData(user);

  return (
    <Context.Provider value={data}>
      <div className="w-full h-screen flex" style={{ minWidth: 1200 }}>
        <SideMenu />
        <div className="w-full h-full flex flex-col">
          <div style={{ maxHeight: "50px", height: "50px" }}>
            <Header />
          </div>
          <div
            style={{ maxHeight: "calc( 100% - 50px)" }}
            className="w-full flex-grow flex"
          >
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={30}>
                <Chat />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={70}>
                <div className="h-full w-full overflow-auto bg-slate-100">
                  <Resume />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
      <NewResumeDialog />
    </Context.Provider>
  );
}
