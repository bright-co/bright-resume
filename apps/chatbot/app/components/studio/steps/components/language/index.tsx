"use client";

import { FC } from "react";
import { useStudioContext } from "../../../use-context";

export const Language: FC = () => {
  const { selectedResume } = useStudioContext();
  return <h1>language : {selectedResume?.title}</h1>;
};
