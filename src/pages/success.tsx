import React from "react";
import { ProjectLayout } from "@/components/layout/ProjectLayout";

const Success: React.FC = () => {
  return (
    <ProjectLayout>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Thank you for your submission!</h1>
      </div>
    </ProjectLayout>
  );
};

export default Success;
