"use client";

import { FC } from "react";
import { useStudioContext } from "../../../use-context";

export const Involvement: FC = () => {
  const { selectedResume } = useStudioContext();
  return <h1>Involvement : {selectedResume?.title}</h1>;
};
