import React from "react";

export const CollectionCard = ({ index, isActive, onClick, title, description, image }) => {
  return (
    <div
      className={`bg-zinc-950 rounded m-2 transition-all duration-300 cursor-pointer ${
        isActive
          ? "w-full md:w-[300px] lg:w-[300px] xl:w-[400px] h-[400px]"
          : "w-full md:w-[100px] lg:w-[150px] xl:w-[200px] h-[200px] md:h-[400px]"
      }`}
      onClick={onClick}
    >
      {isActive ? (
        <div className="flex flex-col flex-wrap justify-center content-end w-full h-full p-4">
          <div className="grow w-full content-center">
            <img data-aos="zoom-in" src={image} className="w-full" />
          </div>
          <div className="flex flex-wrap w-full p-2">
            <p className="text-white text-lg font-semibold">{title}</p>
            <p className="text-white text-sm line-clamp-2">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-between content-center w-full h-full">
          <div className="hidden xl:flex grow w-full justify-center lg:h-4/5 items-center">
            <img data-aos="zoom-in" src={image} className="w-full h-max" />
          </div>
          <div className="flex grow-0 flex-wrap w-full text-center justify-center p-6 h- lg:h-1/5 content-center">
            <p className="text-white text-lg font-semibold">{title}</p>
          </div>
        </div>
      )}
    </div>
  );
};
