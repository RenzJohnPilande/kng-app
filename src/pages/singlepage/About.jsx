import { AlertBar } from "@/components/AlertBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export const About = () => {
  const crumbs = [
    { link: "/", label: "home" },
    { link: "/about", label: "about us" },
  ];

  return (
    <div className="flex flex-col items-center content-center justify-center min-h-screen w-full">
      <AlertBar />
      <Navigation />
      <div className="flex flex-wrap grow w-full content-center justify-center items-center py-10">
        <Breadcrumbs crumbs={crumbs} />
        <div className="flex flex-wrap container content-center gap-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 items-center ">
            <div className="flex flex-wrap w-full gap-4">
              <h1 className="text-xl font-bold text-center uppercase">about us</h1>
              <p className="text-base text-justify">
                K&G Golf Fashion Co., Ltd. is a diverse high-class fashion sports apparel for golf
                that was established in the year 2016. As one of the Top 3 leading high-class
                fashion sports apparel and accessories for golf, K&G has been satisfying golf
                enthusiasts with comfort and fashion through its diverse golf products not just in
                the Philippines but also abroad. As we strive to be trusted golf wear, K&G Golf aims
                to continue to be the leading choice for golf apparel worldwide, recognized for our
                commitment to quality, style, and performance.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <img
                src="/images/others/event-picture.jpg"
                alt="event booth photo"
                className="w-full max-w-[550px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
