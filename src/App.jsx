import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import "./App.css";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/category/:category" element={<Products />} />
        <Route path="/products/search/:searchTerm" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
