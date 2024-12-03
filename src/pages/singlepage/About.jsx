import { AlertBar } from "@/components/AlertBar";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export const About = () => {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen w-full">
      <AlertBar />
      <Navigation />
      <div className="flex justify-center grow w-full p-5">
        <div className="flex flex-wrap p-5 container content-center border rounded shadow">
          <h1>about</h1>
          <p>
            K&G Golf Fashion Co., Ltd. is a diverse high-class fashion sports apparel for golf that
            was established in the year 2016. As one of the Top 3 leading high-class fashion sports
            apparel and accessories for golf, K&G has been satisfying golf enthusiasts with comfort
            and fashion through its diverse golf products not just in the Philippines but also
            abroad. As we strive to be trusted golf wear, K&G Golf aims to continue to be the
            leading choice for golf apparel worldwide, recognized for our commitment to quality,
            style, and performance.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
