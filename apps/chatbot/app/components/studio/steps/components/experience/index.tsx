"use client";

import { FC } from "react";
import { useStudioContext } from "../../../use-context";

export const Experience: FC = () => {
  const { selectedResume } = useStudioContext();
  return <h1>Experience : {selectedResume?.title}</h1>;
};
