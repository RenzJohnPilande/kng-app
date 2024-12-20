import { CTAButton } from "@/components/CTAButton";

export const ApparelCollectionSection = () => {
  return (
    <div className="flex flex-wrap justify-center content-center bg-zinc-100 min-h-screen md:min-h-full  px-6 py-20 w-full">
      <div className="flex justify-center items-center text-center flex-col flex-wrap w-full pb-2">
        <h1 className="text-3xl font-bold capitalize my-1">Find your perfect style</h1>
        <p className="max-w-[500px] my-1">
          Choose from our diverse collections to discover the looks that resonate with your game on
          and off the course.
        </p>
      </div>
      <div className="flex flex-wrap grid grid-cols-1 md:grid-cols-2 max-w-[1200px] gap-4">
        <div className="flex items-end justify-end w-full text-white bg-[url(/images/landingpage/golfer.jpg)] bg-cover bg-center shadow-lg rounded min-h-[300px]">
          <div className="flex flex-col p-5 w-full min-w-[350px] lg:min-w-[450px]">
            <h2 className="text-3xl font-semibold text-shadow">Men's Collection</h2>
            <CTAButton
              label={"See more"}
              style="bg-white text-zinc-950"
              link="/products/category/men"
            />
          </div>
        </div>
        <div className="flex flex-wrap grid grid-rows-2 gap-4 justify-center w-full">
          <div className="flex flex-col justify-end border text-white rounded min-h-[300px] bg-gradient-to-b from-black/30 to-black/90 w-full min-w-[350px] lg:min-w-[450px]">
            <div className="flex flex-col  p-5 w-full">
              <h2 className="text-3xl font-semibold text-shadow">Women's Collection</h2>
              <CTAButton
                label={"See more"}
                style="bg-white text-zinc-950"
                link="/products/category/women"
              />
            </div>
          </div>
          <div className="flex flex-col justify-end border text-white rounded min-h-[300px] bg-gradient-to-b from-black/30 to-black/90 w-full min-w-[350px] lg:min-w-[450px]">
            <div className="flex flex-col  p-5 w-full">
              <h2 className="text-3xl font-semibold text-shadow">Kids' Collection</h2>
              <CTAButton
                label={"See more"}
                style="bg-white text-zinc-950"
                link="/products/category/kids"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
