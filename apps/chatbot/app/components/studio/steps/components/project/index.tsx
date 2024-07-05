"use client";

import { FC } from "react";
import { useStudioContext } from "../../../use-context";

export const Project: FC = () => {
  const { selectedResume } = useStudioContext();
  return <h1>Project : {selectedResume?.title}</h1>;
};
