import { Link } from "react-router-dom";

export const CTAButton = ({ label, style, link }) => {
  return (
    <Link
      to={link}
      className={`bg-white py-2 px-5 my-2 text-black text-center text-sm font-semibold rounded-full w-32 capitalize ${style}`}
    >
      {label}
    </Link>
  );
};
