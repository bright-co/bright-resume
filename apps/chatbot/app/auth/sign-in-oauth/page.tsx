"use client";

import { useData } from "./useData";

export default function Page() {
  const { loading } = useData();

  return (
    <div className="flex flex-col justify-center items-center w-100 h-screen gap-1  px-4">
      {loading && "Loading..."}
    </div>
  );
}
