import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CTAButton } from "@/components/CTAButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CollectionSection = () => {
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleClick = (index) => {
    console.log("you clicked index " + index);
    setActiveCard(index);

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  const collectionContent = [
    {
      id: 1,
      title: "Stand Bags",
      image: "/images/landingpage/standbag.png",
      description:
        "Our Stand Bags offer the perfect combination of portability and functionality. Lightweight and easy to carry, they keep your gear organized and accessible throughout your round.",
    },
    {
      id: 2,
      title: "Boston Bags",
      image: "/images/landingpage/bostonbag.png",
      description:
        "With the Boston Bags, you get stylish storage for all your essentials. Perfect for on-the-go, these spacious bags are designed to hold everything you need with ease and class.",
    },
    {
      id: 3,
      title: "Pouches",
      image: "/images/landingpage/pouch.png",
      description:
        "Our Pouches offer convenient and compact storage for your smaller essentials. Whether it's tees, balls, or accessories, these pouches keep everything secure and easily accessible.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center content-center min-h-screen md:min-h-full px-6 py-20 bg-zinc-100">
      <div className="flex justify-center items-center text-center flex-col flex-wrap w-full p-2">
        <h1 className="text-3xl font-bold capitalize my-1">Functional & Stylish Golf Bags</h1>
        <p className="max-w-[500px] my-1">
          Discover stylish and functional golf bags that keep your gear organized and ready for any
          game.
        </p>
      </div>
      <div className="flex flex-wrap justify-center w-full container p-2">
        <div className="flex flex-wrap items-center justify-center w-full pt-4">
          <Carousel
            opts={{
              align: "center",
            }}
            className="flex flex-wrap w-full items-center content-center justify-center"
          >
            <CarouselContent className="flex container max-w-[1000px]">
              {collectionContent.map((item) => (
                <CarouselItem className="flex justify-center px-1 rounded bg-black ">
                  <div className="grid grid-cols-1 md:grid-cols-2 justify-center px-2 py-6 gap-6">
                    <div className="flex justify-center p-2">
                      <img src={item.image} alt={item.title} className="w-full max-w-[400px]" />
                    </div>
                    <div className="flex flex-wrap content-center w-full text-center md:text-start gap-2 p-2 text-white">
                      <p className="text-center text-4xl md:text-5xl font-semibold uppercase w-full md:text-start">
                        {item.title}
                      </p>
                      <p className="text-center text-sm md:text-xl w-full md:text-justify">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full pt-4">
          <CTAButton
            label={"See more"}
            style="bg-zinc-950 text-white"
            link="/products/category/bags"
          />
        </div>
      </div>
    </div>
  );
};
