"use client";

import { FC } from "react";
import { useStudioContext } from "../../../use-context";

export const Education: FC = () => {
  const { selectedResume } = useStudioContext();
  return <h1>Education : {selectedResume?.title}</h1>;
};
