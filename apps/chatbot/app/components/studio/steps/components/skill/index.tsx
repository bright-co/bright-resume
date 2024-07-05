"use client";

import { FC } from "react";
import { useStudioContext } from "../../../use-context";

export const Skill: FC = () => {
  const { selectedResume } = useStudioContext();
  return <h1>Skill : {selectedResume?.title}</h1>;
};
