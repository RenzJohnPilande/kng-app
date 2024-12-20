import { CollectionCard } from "@/components/CollectionCard";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CTAButton } from "@/components/CTAButton";

export const AccessoriesCollectionSection = () => {
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
      title: "Caps",
      image: "/images/landingpage/caps.png",
      description:
        "A stylish cap that keeps the sun out of your eyes while adding a touch of flair to your game.",
    },
    {
      id: 2,
      title: "Arm Sleeves",
      image: "/images/landingpage/arm-sleeves.png",
      description:
        "Arm sleeves that provide support and comfort to enhance your performance on the course.",
    },
    {
      id: 3,
      title: "Belts",
      image: "/images/landingpage/belts.png",
      description:
        "Durable and adjustable belts that offer comfort and style for your golfing outfit.",
    },
    {
      id: 4,
      title: "Gloves",
      image: "/images/landingpage/gloves.png",
      description:
        "Performance-focused golf gloves that provide a secure grip and comfort throughout your game.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center content-center min-h-screen md:min-h-full px-6 py-20">
      <div className="flex justify-center items-center text-center flex-col flex-wrap w-full p-2">
        <h1 className="text-3xl font-bold capitalize my-1">Essentials for Your Game & Style</h1>
        <p className="max-w-[500px] my-1">
          Browse a selection of golf accessories that combine style and performance, keeping you
          comfortable and ready for every game.
        </p>
      </div>
      <div className="flex flex-wrap justify-center container p-2">
        {collectionContent.map((item) => (
          <CollectionCard
            key={item.id}
            index={item.id}
            isActive={activeCard === item.id}
            onClick={() => handleClick(item.id)}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
        <div className="flex flex-wrap items-center justify-center w-full pt-4">
          <CTAButton
            label={"See more"}
            style="bg-zinc-950 text-white"
            link="/products/category/accessories"
          />
        </div>
      </div>
    </div>
  );
};
