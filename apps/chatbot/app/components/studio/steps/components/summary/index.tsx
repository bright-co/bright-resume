"use client";

import { FC } from "react";
import { useStudioContext } from "../../../use-context";

export const Summary: FC = () => {
  const { selectedResume } = useStudioContext();
  return <h1>Summary : {selectedResume?.title}</h1>;
};
