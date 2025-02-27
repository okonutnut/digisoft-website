import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/page";
import ProductPreview from "./pages/preview/page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPreview />} />
      </Routes>
    </BrowserRouter>
  );
}
