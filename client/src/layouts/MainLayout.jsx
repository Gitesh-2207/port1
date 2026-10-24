import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useScrollReveal from "../hooks/useScrollReveal";

export default function MainLayout() {
  const location = useLocation();

  // Initialize smooth reveal system across route transitions
  useScrollReveal();

  // Scroll to top immediately when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="paper-grid min-h-screen flex flex-col justify-between relative">
      <div className="noise" aria-hidden="true" />

      {/* Persistent Global Navbar */}
      <Navbar />

      {/* Routed Page Content */}
      <div className="flex-1 flex flex-col w-full">
        <Outlet />
      </div>

      {/* Persistent Global Footer */}
      <Footer theme="dark" />
    </div>
  );
}
