import React from "react";
import WorksSection from "../components/sections/WorksSection";
import LetsConnect from "../components/sections/LetsConnect";

export default function WorksPage() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <WorksSection isPage={true} />
      <LetsConnect />
    </div>
  );
}
