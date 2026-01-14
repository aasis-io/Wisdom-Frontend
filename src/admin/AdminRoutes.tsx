// src/admin/AdminRoutes.jsx
import AdminNotFound from "./pages/AdminNotFound";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import Blank from "./pages/Blank";
import Calendar from "./pages/Calendar";
import BarChart from "./pages/Charts/BarChart";
import LineChart from "./pages/Charts/LineChart";
import Home from "./pages/Dashboard/Home";
import FormElements from "./pages/Forms/FormElements";
import BasicTables from "./pages/Tables/BasicTables";
import Alerts from "./pages/UiElements/Alerts";
import Avatars from "./pages/UiElements/Avatars";
import Badges from "./pages/UiElements/Badges";
import Buttons from "./pages/UiElements/Buttons";
import Images from "./pages/UiElements/Images";
import Videos from "./pages/UiElements/Videos";
import UserProfiles from "./pages/UserProfiles";

export const adminRoutes = [
  // Admin main pages under AppLayout
  { index: true, element: <Home /> },
  { path: "profile", element: <UserProfiles /> },
  { path: "calendar", element: <Calendar /> },
  { path: "blank", element: <Blank /> },
  { path: "form-elements", element: <FormElements /> },
  { path: "basic-tables", element: <BasicTables /> },
  { path: "alerts", element: <Alerts /> },
  { path: "avatars", element: <Avatars /> },
  { path: "badge", element: <Badges /> },
  { path: "buttons", element: <Buttons /> },
  { path: "images", element: <Images /> },
  { path: "videos", element: <Videos /> },
  { path: "line-chart", element: <LineChart /> },
  { path: "bar-chart", element: <BarChart /> },

  // Auth pages (still under /admin)
  { path: "signin", element: <SignIn /> },
  { path: "signup", element: <SignUp /> },

  // Fallback for admin routes
  { path: "*", element: <AdminNotFound /> },
];
