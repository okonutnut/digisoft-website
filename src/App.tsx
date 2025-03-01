import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import("./pages/home/page"));
const ProductPreview = lazy(() => import("./pages/preview/page"));
const ListOfClients = lazy(() => import("./pages/listofclients/page"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-of-clients" element={<ListOfClients />} />
        <Route path="/products/:id" element={<ProductPreview />} />
      </Routes>
    </BrowserRouter>
  );
}
