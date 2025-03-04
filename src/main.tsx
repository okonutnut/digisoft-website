import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
const HomePage = lazy(() => import("./pages/home/page"));
const ProductPreview = lazy(() => import("./pages/preview/page"));
const ListOfClients = lazy(() => import("./pages/listofclients/page"));

const routes = createHashRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/list-of-clients",
      element: <ListOfClients />,
    },
    {
      path: "/products/:id",
      element: <ProductPreview />,
    },
  ],
  {
    window: window,
    basename: "/digisoft-redesign",
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
