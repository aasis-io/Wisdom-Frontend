import { createBrowserRouter } from "react-router-dom";

// Frontend Layout
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetail";
import Blogs from "./pages/Blogs";
import Consulting from "./pages/Consulting";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Journals from "./pages/Journals";
import NotFoundPage from "./pages/NotFoundPage"; // ✅ Import 404 page
import Research from "./pages/Research";
import Services from "./pages/Services";

// Admin Layout + Routes
import { adminRoutes } from "./admin/AdminRoutes";
import AppLayout from "./admin/layout/AppLayout";
import SignInForm from "./pages/Auth/SignInForm";

export const router = createBrowserRouter([
  // FRONTEND ROUTES
  {
    element: <Layout />, // Main website layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/services/research", element: <Research /> },
      { path: "/services/consulting", element: <Consulting /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:slug", element: <BlogDetail /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/journals", element: <Journals /> },
      { path: "/waarcadmin/signin", element: <SignInForm /> },

      // Catch-all route for 404
      { path: "*", element: <NotFoundPage /> },
    ],
  },

  // ADMIN ROUTES
  {
    path: "/admin/*", // All admin pages
    element: <AppLayout />,
    children: adminRoutes,
  },
]);
