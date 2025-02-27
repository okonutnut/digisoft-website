import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/page";
import ProductPreview from "./pages/preview/page";
import ListOfClients from "./pages/listofclients/page";

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
