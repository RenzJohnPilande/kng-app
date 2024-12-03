import { Mail, Map, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="flex flex-wrap justify-center min-h-[400px] bg-black text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 container gap-4">
        <div className="flex flex-wrap flex-col">
          <h1 className="text-xl font-semibold my-2 uppercase">Categories</h1>
          <Link to="/products/category/men" className="text-sm my-1">
            Men
          </Link>
          <Link to="/products/category/women" className="text-sm my-1">
            Women
          </Link>
          <Link to="/products/category/kids" className="text-sm my-1">
            Kids
          </Link>
          <Link to="/products/category/accessories" className="text-sm my-1">
            Accessories
          </Link>
          <Link to="/products/category/bags" className="text-sm my-1">
            Bags
          </Link>
        </div>
        <div className="flex flex-wrap flex-col">
          <h1 className="text-xl font-semibold my-2 uppercase">Company Info</h1>
          <Link to="/about" className="text-sm my-1">
            About Us
          </Link>
          <Link to="/contact" className="text-sm my-1">
            Contact Us
          </Link>
          <Link to="/faqs" className="text-sm my-1">
            Faqs
          </Link>
          <Link to="/terms" className="text-sm my-1">
            Terms and Conditions
          </Link>
        </div>
        <div className="flex flex-wrap flex-col">
          <h1 className="text-xl font-semibold my-2 uppercase">Socials</h1>
          <Link to="/" className="text-sm my-1">
            Facebook
          </Link>
          <Link to="/" className="text-sm my-1">
            Twitter
          </Link>
          <Link to="/" className="text-sm my-1">
            Instagram
          </Link>
        </div>
        <div className="flex flex-wrap flex-col">
          <h1 className="text-xl font-semibold my-2 uppercase">Contact Us</h1>
          <p className="text-sm my-1">
            Thank you for visiting our website! If you have any questions or inquiries, feel free to
            reach out to us using the contact information below.
          </p>
          <div className="my-2">
            <div className="flex flex-nowrap items-center w-full my-2 text-justify">
              <Mail className="flex-shrink-0" />
              <p className="text-sm mx-3">inquiries@keepgoinggolf.com</p>
            </div>
            <div className="flex flex-nowrap items-center w-full my-2 text-justify">
              <Map className="flex-shrink-0" />
              <p className="text-sm mx-3">
                Room 1605, Ho King Commercial Centre,2-16 Fa Yuen Street, Mongkok, Kowloon, Hong
                Kong
              </p>
            </div>
            <div className="flex flex-nowrap items-center w-full my-2 text-justify">
              <Smartphone className="flex-shrink-0" />
              <p className="text-sm mx-3">00852-61588111</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
