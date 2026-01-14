import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // ✅ needed for <Helmet>
import { RouterProvider } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { ThemeProvider } from "./admin/context/ThemeContext"; // Theme context for admin
import "./index.css";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
