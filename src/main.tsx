import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const HomePage = lazy(() => import("./pages/home/page"));
const ProductPreview = lazy(() => import("./pages/preview/page"));
const ListOfClients = lazy(() => import("./pages/list-of-clients/page"));
const ReleaseNotes = lazy(() => import("./pages/release-notes/page"));
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
    path: "/release-notes",
    element: <ReleaseNotes />,
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
