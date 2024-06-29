import React from "react";
import { ProjectLayout } from "@/components/layout/ProjectLayout";

const Success: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-1xl text-pink-400 font-semibold">
        Thank you for your submission!
      </h1>
    </div>
  );
};

export default Success;
