import { CTAButton } from "../components/CTAButton";
import { HERO_CONTENT, HERO_TITLE } from "../constants/Constants";

export const HeroSection = () => {
  return (
    <div className="flex flex-wrap justify-center content-end bg-black text-white min-h-[90vh] p-3 text-balance">
      <div className="flex flex-col flex-wrap justify-center items-center py-5 max-w-[500px]">
        <h1 className="text-3xl font-extrabold uppercase my-4 text-center ">{HERO_TITLE}</h1>
        <h2 className="text-center mb-4">{HERO_CONTENT}</h2>
        <CTAButton label={"Learn More"} />
      </div>
    </div>
  );
};
