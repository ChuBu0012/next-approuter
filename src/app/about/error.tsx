"use client";
import React from "react";

type Props = {
  error: {
    message: string;
  };
};

const Error = ({ error }: Props) => {
  return (
    <div className="w-full text-center">
      <div className="text-2xl text-red-500">
        Error due to: {error.message}{" "}
      </div>
      <p>Handle by error.tsx in AppRouter</p>
    </div>
  );
};

export default Error;
