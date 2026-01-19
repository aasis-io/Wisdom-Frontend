import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast"; // ✅ ADD THIS
import { RouterProvider } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        {/* ✅ Toast container */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "12px",
              background: "#17254E",
              color: "#fff",
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />

        <RouterProvider router={router} />
  </React.StrictMode>
);
