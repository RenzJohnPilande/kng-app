import { CTAButton } from "@/components/CTAButton";

export const ApparelCollectionSection = () => {
  return (
    <div className="flex flex-wrap justify-center content-center bg-zinc-100 min-h-screen p-6">
      <div className="flex justify-center items-center text-center flex-col flex-wrap w-full pb-2">
        <h1 className="text-3xl font-bold capitalize my-1">Find your perfect style</h1>
        <p className="max-w-[500px] my-1">
          Choose from our diverse collections to discover the looks that resonate with your game on
          and off the course.
        </p>
      </div>
      <div className="flex flex-wrap grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] p-2">
        <div className="flex flex-col justify-end w-full text-white bg-[url(/images/landingpage/golfer.jpg)] bg-cover bg-center shadow-lg rounded min-h-[300px] text-shadow">
          <div className="bg-gradient-to-b from-black/10 to-black/95 p-5">
            <h2 className="text-3xl font-semibold">Special Editions</h2>
            <p className="text-base max-w-[500px]">
              Discover our custom-made golf shirts that blend style and versatility! Perfect as team
              uniforms or for casual outings, these unique designs let you stand out on the course
              or anywhere. Elevate your game and showcase your team spirit with our exclusive
              pieces!
            </p>
            <CTAButton label={"See more"} />
          </div>
        </div>
        <div className="flex flex-wrap grid grid-rows-2 gap-4 justify-center w-full">
          <div className="flex flex-col justify-end border text-white rounded min-h-[300px] bg-gradient-to-b from-black/30 to-black/90 text-shadow">
            <div className="p-5">
              <h2 className="text-3xl font-semibold">Classic Hues</h2>
              <p className="text-base max-w-[500px]">
                Timeless designs in basic colors create a foundation for effortless style. Discover
                the elegance of simplicity with our collection that never goes out of fashion!
              </p>
              <CTAButton label={"See more"} />
            </div>
          </div>
          <div className="flex flex-col justify-end border text-white rounded min-h-[300px] bg-gradient-to-b from-black/30 to-black/90 text-shadow">
            <div className="p-5">
              <h2 className="text-3xl font-semibold">Playful Patterns</h2>
              <p className="text-base max-w-[500px]">
                Bright shapes and playful characters come together in vibrant designs. Discover
                patterns that bring joy and showcase your unique style!
              </p>
              <CTAButton label={"See more"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
