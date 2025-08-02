import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import JobPage from "../pages/JobPage";
import ViewPage from "../pages/ViewPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/job" element={<JobPage />} />
      <Route path="/view" element={<ViewPage />} />
    </Routes>
  );
}
