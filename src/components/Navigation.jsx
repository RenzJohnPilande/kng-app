import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navigation = () => {
  return (
    <div className="flex flex-wrap w-full justify-between lg:justify-center items-center  shadow py-1 px-5">
      <div className="flex flex-wrap justify-center w-1/4">
        <img
          src="/images/landingpage/kng-logo.jpg"
          alt="K&G Logo"
          className="aspect-square w-[75px]"
        />
      </div>
      <div className="hidden lg:flex flex-wrap justify-center content-center text-black font-semibold uppercase w-1/2">
        <Link className="mx-2">All</Link>
        <Link className="mx-2">Men</Link>
        <Link className="mx-2">Women</Link>
        <Link className="mx-2">Kids</Link>
        <Link className="mx-2">Accessories</Link>
        <Link className="mx-2">Bag</Link>
      </div>
      <div className="hidden lg:flex flex-wrap justify-center w-1/4">
        <Input type="text" placeholder="search" className=" rounded" />
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
