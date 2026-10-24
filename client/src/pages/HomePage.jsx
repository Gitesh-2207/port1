import React from "react";
import HeroSection from "../components/sections/HeroSection";
import MovingText from "../components/sections/MovingText";
import AboutStory from "../components/sections/AboutStory";
import Timeline from "../components/sections/Timeline";
import MyApproach from "../components/sections/MyApproach";
import WorksSection from "../components/sections/WorksSection";
import StatsSection from "../components/sections/StatsSection";
import NextPhase from "../components/sections/NextPhase";
import ContactSection from "../components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <MovingText />
      <AboutStory />
      <Timeline />
      <MyApproach />
      <WorksSection isPage={false} />
      <StatsSection />
      <NextPhase />
      <ContactSection />
    </div>
  );
}
