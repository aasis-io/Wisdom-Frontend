import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Wisdom</title>
        <meta name="description" content="Default description for Wisdom" />
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
