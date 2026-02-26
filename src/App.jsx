import { Helmet } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function App() {
  return (
    <>
      {/* Fallback / default SEO */}
      <Helmet>
        <title>Wisdom Academy & Research Center</title>
        <meta
          name="description"
          content="A Nepal-based research and consulting institution connecting local
          insight with global knowledge."
        />
      </Helmet>

      <RouterProvider router={router} />
    </>
  );
}
