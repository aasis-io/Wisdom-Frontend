// src/components/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col">
      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
