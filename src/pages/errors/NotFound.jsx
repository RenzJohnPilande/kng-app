import { CTAButton } from "@/components/CTAButton";
import { AlertBar } from "@/components/AlertBar";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { MdErrorOutline } from "react-icons/md";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center content-center justify-center min-h-screen w-full">
      <AlertBar />
      <Navigation />
      <div className="flex py-40 flex-wrap content-center justify-center gap-4 w-full bg-zinc-100">
        <div className="grid grid-cols-2 gap-4 bg-white shadow-lg p-8 border rounded w-full max-w-[800px] content-center items-center">
          <div className="w-full">
            <MdErrorOutline className="w-full h-full" />
          </div>
          <div className="flex flex-wrap gap-4 w-full">
            <h2 className="text-5xl font-semibold uppercase">oops! page not found.</h2>
            <p className="text-base">
              We couldn't find the page you were looking for. It may have been moved, or the URL
              might be incorrect.
            </p>
            <CTAButton
              label={"back to home"}
              style="!bg-black text-white font-semibold w-fit"
              link="/"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
