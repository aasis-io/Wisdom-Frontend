import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Career from "./pages/Career";
import Collaborate from "./pages/Collaborate";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Journals from "./pages/Journals";
import NotFoundPage from "./pages/NotFoundPage";
import Research from "./pages/Research";
import ServicesPage from "./pages/ServicesPage";
import Consulting from "./pages/StudyAdvisory";
import Team from "./pages/Team";
import Thailand from "./pages/study/Thailand";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/services/research", element: <Research /> },
      { path: "/services/study-advisory", element: <Consulting /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/journals", element: <Journals /> },
      { path: "/team", element: <Team /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/study/thailand", element: <Thailand /> },
      { path: "/career", element: <Career /> },
      { path: "/collaborate", element: <Collaborate /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
