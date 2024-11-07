import { Form, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RxHamburgerMenu, RxMagnifyingGlass } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const url = searchQuery ? `/products/search/${searchQuery}` : "/products";
    navigate(url);
  };

  return (
    <div className="flex flex-wrap w-full justify-between lg:justify-center items-center  shadow py-1 px-5">
      <Link to={"/"} className="flex flex-wrap justify-center w-1/4">
        <img
          src="/images/landingpage/kng-logo.jpg"
          alt="K&G Logo"
          className="aspect-square w-[75px]"
        />
      </Link>
      <div className="hidden lg:flex flex-wrap justify-center content-center text-black font-semibold uppercase w-1/2">
        <Link to={"/products"} className="mx-2">
          All
        </Link>
        <Link to={"/products/category/men"} className="mx-2">
          Men
        </Link>
        <Link to={"/products/category/women"} className="mx-2">
          Women
        </Link>
        <Link to={"/products/category/kids"} className="mx-2">
          Kids
        </Link>
        <Link to={"/products/category/accessories"} className="mx-2">
          Accessories
        </Link>
        <Link to={"/products/category/bags"} className="mx-2">
          Bags
        </Link>
      </div>
      <div className="hidden lg:flex flex-wrap justify-center w-1/4">
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center border px-2 py-1 gap-2 rounded"
        >
          <RxMagnifyingGlass />
          <input
            type="search"
            placeholder="Search products"
            className="rounded outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="flex lg:hidden">
        <Sheet>
          <SheetTrigger className="border p-2 rounded">
            <RxHamburgerMenu className="w-5 h-5" />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col justify-between h-full">
              <div className="my-5">
                <h1 className="my-2 text-sm">Search products</h1>
                <Input type="text" placeholder="search" className=" rounded" />
              </div>
              <div className="flex flex-col my-5 font-semibold p-2 flex-grow">
                <Link className="my-1">All</Link>
                <Link className="my-1">Men</Link>
                <Link className="my-1">Women</Link>
                <Link className="my-1">Kids</Link>
                <Link className="my-1">Accessories</Link>
                <Link className="my-1">Bag</Link>
              </div>
              <div className="flex justify-center border-t pt-2">
                <Link className="text-sm">Terms and Conditions</Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
