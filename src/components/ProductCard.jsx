import { useState } from "react";
import { Link } from "react-router-dom";
export const ProductCard = ({ label, category, price, colors, image, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={link}
      className="flex flex-wrap flex-col max-w-[300px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={label} className="py-6 bg-zinc-100  border" />
      <div className="flex gap-1 items-center py-2">
        {colors.map((color, index) => {
          if (color.includes("/")) {
            const [color1, color2] = color.split("/");
            return (
              <div
                key={index}
                className="w-4 h-4 border border-zinc-300 rounded-full shadow-lg"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${color1} 50%, ${color2} 50%)`,
                }}
              />
            );
          } else {
            return (
              <div
                key={index}
                className="w-4 h-4 border border-zinc-300 rounded-full shadow-lg"
                style={{ backgroundColor: color }}
              />
            );
          }
        })}
      </div>
      <div className="flex flex-wrap flex-col">
        <p className="text-zinc-400 uppercase font-light text-sm">{category}</p>
        <h3 className="text-lg">{label}</h3>
        <p className="text-lg font-semibold">PHP {price}</p>
      </div>
    </Link>
  );
};
