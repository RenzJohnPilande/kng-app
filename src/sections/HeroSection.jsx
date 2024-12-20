import { CTAButton } from "../components/CTAButton";
import {
  FEATURED_IMAGE,
  FEATURED_ITEM_LINK,
  HERO_CONTENT,
  HERO_TITLE,
} from "../constants/Constants";

export const HeroSection = () => {
  return (
    <div className="flex flex-wrap justify-center content-center bg-black text-white min-h-[87vh] md:min-h-full  px-6 py-20 text-balance">
      <div className="flex flex-col h-full">
        <div className="flex flex-wrap justify-center items-center py-5 max-w-[700px] grow">
          <img src={FEATURED_IMAGE} alt="Featured Product" className="w-[600px]" />
        </div>

        <div className="flex flex-wrap justify-center items-center py-5 max-w-[700px]">
          <h1 className="text-xl md:text-3xl font-extrabold uppercase my-4 text-center ">
            {HERO_TITLE}
          </h1>
          <h2 className="text-sm md:text-base text-center mb-4">{HERO_CONTENT}</h2>
          <CTAButton label={"See more"} style="bg-white text-zinc-950" link={FEATURED_ITEM_LINK} />
        </div>
      </div>
    </div>
  );
};
