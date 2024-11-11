import { AlertBar } from "@/components/AlertBar";
import { Navigation } from "@/components/Navigation";
import FetchProducts from "@/constants/FetchProducts";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [activeSize, setActiveSize] = useState("");

  const getProduct = async () => {
    const result = await FetchProducts();
    const foundProduct = result.find((prod) => prod.id === id);
    setProduct(foundProduct);
    setActiveImage(foundProduct.images[0]);
    setActiveColor(foundProduct.colors[0]);
    setActiveSize(foundProduct.sizes[0]);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleColorChange = (colorIndex) => {
    setActiveImage(product.images[colorIndex]);
    setActiveColor(product.colors[colorIndex]);
  };

  const handleSizeChange = (size) => {
    setActiveSize(size);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-start justify-center min-h-screen w-full">
      <AlertBar />
      <Navigation />
      <div className="flex flex-col flex-wrap justify-center items-center w-full grow">
        <div className="flex flex-wrap items-start content-start justify-center grid grid-cols-1 lg:grid-cols-2 p-5 gap-5 w-full container">
          <div className="flex w-full bg-zinc-200 py-10">
            <img
              className="max-w-[700px] w-full"
              src={`/images/products/${activeImage}`}
              alt={product.name}
            />
          </div>
          <div className="flex flex-col flex-wrap gap-3 px-4 w-full">
            <h1 className="text-lg font-medium uppercase">{product.name}</h1>
            <div className="flex gap-2">
              {product.hexcode.map((color, index) => {
                if (color.includes("/")) {
                  const [color1, color2] = color.split("/");
                  return (
                    <button
                      key={index}
                      className="w-10 h-10 border border-zinc-400 rounded-full"
                      style={{
                        backgroundImage: `linear-gradient(to bottom right, ${color1} 50%, ${color2} 50%)`,
                      }}
                      onClick={() => {
                        handleColorChange(index);
                      }}
                    />
                  );
                } else {
                  return (
                    <button
                      key={index}
                      className="w-10 h-10 border border-zinc-400 rounded-full"
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        handleColorChange(index);
                      }}
                    />
                  );
                }
              })}
            </div>
            <p className="text-sm capitalize text-zinc-400">colors: {activeColor}</p>
            <div className="flex gap-2">
              {product.sizes.map((size, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleSizeChange(size)}
                    className={`w-10 h-10 border border-zinc-400 text-sm ${
                      activeSize === size ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base uppercase">Details</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col flex-wrap text-base">
                    <p className="p-1 text-sm text-justify text-zinc-600">{product.description}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base uppercase">Materials</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col flex-wrap text-base">
                    <p className="p-1 text-sm capitalize text-zinc-600">{product.material}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col gap-4">
              <p className="text-zinc-400 uppercase">
                product id: <span>{product.id}</span>
              </p>
              <p className="text-xl font-bold">PHP {product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
