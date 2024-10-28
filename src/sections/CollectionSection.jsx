import { CTAButton } from "@/components/CTAButton";

export const CollectionSection = () => {
  return (
    <div className="flex flex-wrap justify-center content-center bg-black min-h-screen ">
      <div className="flex flex-wrap grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] p-4">
        <div className="flex flex-col justify-end w-full text-white bg-[url(/images/landingpage/golfer.jpg)] bg-cover bg-center shadow-lg rounded min-h-[400px] text-shadow p-5">
          <h1 className="text-3xl font-semibold">Special Editions</h1>
          <p className="text-base max-w-[500px]">
            Discover our custom-made golf shirts that blend style and versatility! Perfect as team
            uniforms or for casual outings, these unique designs let you stand out on the course or
            anywhere. Elevate your game and showcase your team spirit with our exclusive pieces!
          </p>
          <CTAButton label={"See more"} />
        </div>
        <div className="flex flex-wrap grid grid-rows-2 gap-4 justify-center w-full">
          <div className="flex flex-col justify-end border text-white rounded min-h-[400px]  text-shadow">
            <div className="p-5">
              <h1 className="text-3xl font-semibold">Classic Hues</h1>
              <p className="text-base max-w-[500px]">
                Timeless designs in basic colors create a foundation for effortless style. Discover
                the elegance of simplicity with our collection that never goes out of fashion!
              </p>
              <CTAButton label={"See more"} />
            </div>
          </div>
          <div className="flex flex-col justify-end border p-5 text-white rounded min-h-[400px]  text-shadow">
            <div className="p-5">
              <h1 className="text-3xl font-semibold">Playful Patterns</h1>
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
