import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetail";
import Blogs from "./pages/Blogs";
import Career from "./pages/Career";
import Consulting from "./pages/Consulting";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Journals from "./pages/Journals";
import NotFoundPage from "./pages/NotFoundPage";
import Research from "./pages/Research";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Thailand from "./pages/study/Thailand";


export const router = createBrowserRouter([
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
      { path: "/gallery", element: <Gallery /> },
      { path: "/study/thailand", element: <Thailand /> },
      { path: "/career", element: <Career /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },


]);
