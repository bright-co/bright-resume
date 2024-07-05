"use client";

import { FC } from "react";
import { useStudioContext } from "../../../use-context";

export const Header: FC = () => {
  const { selectedResume } = useStudioContext();
  return <h1>header : {selectedResume?.title}</h1>;
};
