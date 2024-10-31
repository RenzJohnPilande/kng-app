import { BagCollectionCard } from "@/components/BagCollectionCard";
import React, { useState } from "react";

export const BagCollectionSection = () => {
  const [activeCard, setActiveCard] = useState(1);
  const handleMouseEnter = (index) => {
    setActiveCard(index);
  };
  const bagContent = [
    {
      id: 1,
      title: "Stand Bags",
      description:
        "Our stand bags blend style and practicality, featuring sturdy legs and ample space for clubs and essentials. Perfect for a day on the course!",
    },
    {
      id: 2,
      title: "Boston Bags",
      description:
        "The Boston bag combines elegance and functionality, offering a spacious interior for weekend getaways and trips to the course. Travel in style!",
    },
    {
      id: 3,
      title: "Pouches",
      description:
        "Compact and stylish, our pouches keep your essentials organized. Perfect for tees, balls, and personal items, they fit seamlessly into any bag.",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center content-center min-h-screen bg-zinc-100 p-6">
      <div className="flex justify-center items-center text-center flex-col flex-wrap w-full p-2">
        <h1 className="text-3xl font-bold capitalize my-1">Stylish Bags for Every Adventure</h1>
        <p className="max-w-[500px] my-1">
          Check out our versatile stand bags, Boston bags, and pouches to suit your lifestyle on and
          off the course.
        </p>
      </div>
      <div className="flex flex-wrap justify-center container p-2">
        {bagContent.map((bag) => (
          <BagCollectionCard
            key={bag.id}
            index={bag.id}
            isActive={activeCard === bag.id}
            onMouseEnter={() => handleMouseEnter(bag.id)}
            title={bag.title}
            description={bag.description}
          />
        ))}
      </div>
    </div>
  );
};
