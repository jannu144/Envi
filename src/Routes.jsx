import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Transportation2 = React.lazy(() => import("pages/Transportation2"));
const WaterUsage = React.lazy(() => import("pages/WaterUsage"));
const Transportation1 = React.lazy(() => import("pages/Transportation1"));
const GeneralWaste = React.lazy(() => import("pages/GeneralWaste"));
const SettingsLogout = React.lazy(() => import("pages/SettingsLogout"));
const Dashboardwithwaterusage = React.lazy(
  () => import("pages/Dashboardwithwaterusage"),
);
const Dashboardwithgeneralwaste = React.lazy(
  () => import("pages/Dashboardwithgeneralwaste"),
);
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/dashboardwithgeneralwaste"
            element={<Dashboardwithgeneralwaste />}
          />
          <Route
            path="/dashboardwithwaterusage"
            element={<Dashboardwithwaterusage />}
          />
          <Route path="/settingslogout" element={<SettingsLogout />} />
          <Route path="/generalwaste" element={<GeneralWaste />} />
          <Route path="/transportation1" element={<Transportation1 />} />
          <Route path="/waterusage" element={<WaterUsage />} />
          <Route path="/transportation2" element={<Transportation2 />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
