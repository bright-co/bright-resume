"use client";

import { FC } from "react";
import { useStudioContext } from "../../../use-context";

export const Hobby: FC = () => {
  const { selectedResume } = useStudioContext();
  return <h1>hobby : {selectedResume?.title}</h1>;
};
