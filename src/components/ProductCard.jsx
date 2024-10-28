import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export const ProductCard = ({ label, image, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={link}
      className="flex flex-wrap flex-col max-w-[300px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={label} className="py-6 border rounded-xl bg-zinc-100" />
      <div
        className={`
            trainsition-all ease-linear duration-200 flex justify-between items-center my-2 px-6 py-3 border rounded-xl text-sm text-black font-semibold ${
              isHovered ? `bg-black text-white` : ` `
            }`}
      >
        <p>{label}</p>
        <ArrowRight className="w-5 h-5" />
      </div>
    </Link>
  );
};
