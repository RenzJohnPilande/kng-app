import { CTAButton } from "@/components/CTAButton";
import { Link } from "react-router-dom";

const apparelCollection = [
  {
    title: "Men's Collection",
    link: "/products/category/men",
    image: "/images/landingpage/Men.jpg",
  },
  {
    title: "Women's Collection",
    link: "/products/category/women",
    image: "/images/landingpage/Women.jpg",
  },
  {
    title: "Kid's Collection",
    link: "/products/category/kids",
    image: "/images/landingpage/Kids.jpg",
  },
];

export const ApparelCollectionSection = () => {
  return (
    <div className="flex flex-wrap justify-center content-center bg-zinc-50 min-h-screen md:min-h-full  px-6 py-20 w-full">
      <div className="flex justify-center items-center text-center flex-col flex-wrap w-full pb-2">
        <h1 className="text-3xl font-bold capitalize my-1">Find your perfect style</h1>
        <p className="max-w-[500px] my-1">
          Choose from our diverse collections to discover the looks that resonate with your game on
          and off the course.
        </p>
      </div>
      <div className="flex flex-wrap grid grid-cols-1 md:grid-cols-3 max-w-[1200px] gap-4">
        {apparelCollection.map((category, index) => {
          return (
            <Link
              key={index}
              to={category.link}
              className="flex items-center justify-center w-full min-h-[400px] group"
            >
              <div className="flex flex-col items-center w-full max-w-[400px] overflow-hidden">
                <div className="w-[400px] h-[400px] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col w-full items-center p-5">
                  <h2 className="text-lg font-semibold">{category.title}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
