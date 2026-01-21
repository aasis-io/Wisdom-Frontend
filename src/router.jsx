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
import NotFoundPage from "./pages/NotFoundPage";
import Research from "./pages/Research";
import Services from "./pages/Services";
import Team from "./pages/Team";

// Admin

export const router = createBrowserRouter([
  // FRONTEND ROUTES
  {
    element: <Layout />,
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
      { path: "/team", element: <Team /> },

      // Admin Sign In (PUBLIC)
      // { path: "/waarcadmin/signin", element: <SignInForm /> },

      { path: "*", element: <NotFoundPage /> },
    ],
  },

  // PROTECTED ADMIN ROUTES
  // {
  //   element: <AdminProtectedRoute />,
  //   children: [
  //     {
  //       path: "/admin/*",
  //       element: <AppLayout />,
  //       children: adminRoutes,
  //     },
  //   ],
  // },
]);
