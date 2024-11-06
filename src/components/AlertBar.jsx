import { ALERT_MESSAGE } from "../constants/Constants";
export const AlertBar = () => {
  return (
    <div className="flex flex-wrap justify-center bg-black text-white w-full">
      <h1 className="text-xs md:text-base p-2">{ALERT_MESSAGE}</h1>
    </div>
  );
};
