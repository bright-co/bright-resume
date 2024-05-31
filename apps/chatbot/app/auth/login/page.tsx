"use client";

import React from "react";
import { setJwtTokenTest } from "@chatbot/app/api/set-jwt-token-test/client";
import { useData } from "./useData";

export default function Page() {
  useData();
  return (
    <div>
      <h1>{"auth/login"}</h1>

      <button
        onClick={async () => {
          const response = await setJwtTokenTest();
          console.log({ response });
        }}
      >
        {"Set JWT Token"}
      </button>
    </div>
  );
}
