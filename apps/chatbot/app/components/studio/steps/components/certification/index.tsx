"use client";

import { FC } from "react";
import { useStudioContext } from "../../../use-context";

export const Certification: FC = () => {
  const { selectedResume } = useStudioContext();
  return <h1>certification : {selectedResume?.title}</h1>;
};
