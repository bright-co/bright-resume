"use client";

import { FC } from "react";
import { useStudioContext } from "../use-context";

export const Header: FC = () => {
  const { user, selectedResume } = useStudioContext();
  return (
    <div style={{ height: "50px" }} className="bg-gray-400 w-full">
      Hi, {user && (user.name || user.email || user.username)}
      <br />
      {selectedResume && "Resume: " + selectedResume.name}
    </div>
  );
};
