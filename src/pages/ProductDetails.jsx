import { AlertBar } from "@/components/AlertBar";
import { Navigation } from "@/components/Navigation";
import FetchProducts from "@/constants/FetchProducts";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const ProductDetails = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeImage, setActiveImage] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [activeSize, setActiveSize] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsLoading(true);
        const result = await FetchProducts();

        const shuffledProducts = [...result].sort(() => Math.random() - 0.5);

        const foundProduct = shuffledProducts.find((prod) => prod.id === id);

        if (foundProduct) {
          setProduct(foundProduct);
          setActiveImage(foundProduct.images[0]);
          setActiveColor(foundProduct.colors[0]);
          setActiveSize(foundProduct.sizes[0]);
        } else {
          setProduct(null);
        }

        const filterRelatedProducts = shuffledProducts
          .filter((prod) => prod.category === category && prod.id !== id)
          .slice(0, 8);

        setRelatedProducts(filterRelatedProducts);
      } catch (error) {
        setError("Failed to fetch product data");
      } finally {
        setIsLoading(false);
      }
    };

    getProduct();
  }, [id, category]);

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

  const crumbs = [
    { link: "/", label: "home" },
    { link: "/products", label: "products" },
    { link: `/products/category/${category}`, label: category },
    { link: `/products/category/${id}`, label: product.name },
  ];

  return (
    <div className="flex flex-col items-start justify-center min-h-screen w-full">
      <AlertBar />
      <Navigation />
      <div className="flex flex-col flex-wrap justify-center items-center w-full  grow">
        <div className="flex flex-wrap justify-center w-full max-w-[1300px] p-5">
          <Breadcrumbs crumbs={crumbs} />
          <div className="flex flex-wrap items-start content-start justify-center grid grid-cols-1 lg:grid-cols-2 gap-5 w-full container">
            <div className="p-10">
              <div className="flex w-full bg-zinc-200 py-10">
                <img
                  className="max-w-[700px] w-full"
                  src={`/images/products/${activeImage}`}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap gap-3 px-4 py-10 w-full">
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
              <p className="text-sm capitalize text-zinc-400">color: {activeColor}</p>
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
                    <div className="gap-4">
                      <span className="text-xs text-zinc-400 font-medium">Product ID</span>
                      <p className="text-zinc-600 uppercase p-1">{product.id}</p>
                      <span className="text-xs text-zinc-400 font-medium">Category</span>
                      <p className="text-zinc-600 capitalize p-1">{product.subcategory}</p>
                    </div>
                    <div className="flex flex-col flex-wrap text-base">
                      <span className="text-xs text-zinc-400 font-medium">Description</span>
                      <p className=" text-sm text-justify text-zinc-600 p-1">
                        {product.description}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base uppercase">Materials</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col text-base">
                      {product.material.map((material) => (
                        <p className="p-1 text-sm capitalize text-zinc-600">{material}</p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex flex-col gap-4">
                <p className="text-xl font-bold">PHP {product.price}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start w-full container p-5 gap-4">
            <h4 className="text-lg font-semibold uppercase">You might also like</h4>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
            >
              <CarouselContent>
                {relatedProducts.length > 0 ? (
                  relatedProducts.map((relatedProduct) => (
                    <CarouselItem key={relatedProduct.id} className="w-[300px]">
                      <ProductCard
                        id={relatedProduct.id}
                        label={relatedProduct.name}
                        category={relatedProduct.category}
                        price={relatedProduct.price}
                        colors={relatedProduct.colors}
                        image={`/images/products/${relatedProduct.images[0]}`}
                        link={`/products/${relatedProduct.category}/${relatedProduct.id}`}
                      />
                    </CarouselItem>
                  ))
                ) : (
                  <div>No related products available</div>
                )}
              </CarouselContent>
              <div className="flex gap-4 py-10 w-full justify-end">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
