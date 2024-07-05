"use client";

import { FC } from "react";
import { useStudioContext } from "../../../use-context";

export const CourseWork: FC = () => {
  const { selectedResume } = useStudioContext();
  return <h1>courseWork : {selectedResume?.title}</h1>;
};
