import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const HomePage = lazy(() => import("./pages/home/page"));
const ProductPreview = lazy(() => import("./pages/preview/page"));
const ListOfClients = lazy(() => import("./pages/listofclients/page"));
import "./index.css";

const routes = createBrowserRouter([
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
