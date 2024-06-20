"use client";

import { Resizable } from "re-resizable";

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
      <div
        className="w-full h-screen bg-amber-100 flex"
        style={{ minWidth: 1200 }}
      >
        <SideMenu />
        <div className="w-full h-full flex flex-col ">
          <div style={{ maxHeight: "50px" }}>
            <Header />
          </div>
          <div
            style={{ maxHeight: "calc( 100% - 50px)" }}
            className="w-full flex-grow flex border-3 border-blue-800"
          >
            <Resizable
              className="h-full"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "solid 1px #ddd",
                background: "#f0f0f0",
              }}
              defaultSize={{
                width: "400px",
              }}
              enable={{ right: true }}
              maxWidth="100%"
              minWidth="1"
            >
              <Chat />
            </Resizable>
            <div className="h-full w-full overflow-auto">
              <Resume />
            </div>
          </div>
        </div>
      </div>
      <NewResumeDialog />
    </Context.Provider>
  );
}
