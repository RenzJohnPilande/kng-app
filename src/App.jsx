import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import "./App.css";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { About } from "./pages/singlepage/About";
import { Contact } from "./pages/singlepage/Contact";
import { Faqs } from "./pages/singlepage/Faqs";
import { Terms } from "./pages/singlepage/Terms";
import { NotFound } from "./pages/errors/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/products/category/:category" element={<Products />} />
        <Route path="/products/search/:searchTerm" element={<Products />} />
        <Route path="/products/:category/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
