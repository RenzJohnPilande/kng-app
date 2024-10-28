import { NavigationButton } from "@/components/NavigationButton";
import { ProductCard } from "@/components/ProductCard";
import FetchProducts from "@/constants/FetchProducts";
import React, { useEffect, useState } from "react";
export const ProductSection = () => {
  const [activeButton, setActiveButton] = useState("Apparel");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  useEffect(() => {
    const getProducts = async () => {
      const result = await FetchProducts();
      let fetchedProducts;
      if (result) {
        if (activeButton == "Apparel") {
          fetchedProducts = result.filter((product) => product.category === "apparel");
        } else if (activeButton == "Accessories") {
          fetchedProducts = result.filter((product) => product.category === "accessories");
        } else {
          fetchedProducts = result.filter((product) => product.category === "bags");
        }
        const filteredProducts = fetchedProducts.slice(0, 8);
        setProducts(filteredProducts);
      } else {
        setError("Error fetching products");
      }
    };
    getProducts();
  }, [activeButton]);

  return (
    <div className="flex flex-wrap justify-center content-center bg-black min-h-screen p-3 text-balance bg-white">
      <div className="flex flex-wrap justify-center w-full p-4">
        <NavigationButton
          label="Apparel"
          active={activeButton === "Apparel"}
          onClick={() => handleButtonClick("Apparel")}
        />
        <NavigationButton
          label="Accessories"
          active={activeButton === "Accessories"}
          onClick={() => handleButtonClick("Accessories")}
        />
        <NavigationButton
          label="Bags"
          active={activeButton === "Bags"}
          onClick={() => handleButtonClick("Bags")}
        />
      </div>
      <div className="flex flex-wrap justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            label={product.name}
            image={`/images/products/${product.images[0]}`}
            link={`/products/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
};