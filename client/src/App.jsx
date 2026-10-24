import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import ResumePage from "./pages/ResumePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
