import React from "react";

export const BagCollectionCard = ({ index, isActive, onMouseEnter, title, description }) => {
  return (
    <div
      className={`bg-black rounded m-2 transition-all duration-300 ${
        isActive
          ? "w-full md:w-[300px] lg:w-[400px] xl:w-[700px] h-[400px]"
          : "w-full md:w-[100px] lg:w-[200px] h-[100px] md:h-[400px]"
      }`}
      onMouseEnter={onMouseEnter}
    >
      {isActive ? (
        <div className="flex flex-wrap w-full h-full justify-start content-end p-6 overflow-hidden">
          <p className="text-white text-lg font-semibold">{title}</p>
          <p className="text-white text-sm">{description}</p>
        </div>
      ) : (
        <div className="flex flex-wrap w-full h-full justify-center content-center md:content-end p-6">
          <p className="text-white text-lg font-semibold">{title}</p>
        </div>
      )}
    </div>
  );
};
