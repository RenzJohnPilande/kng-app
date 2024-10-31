import { AlertBar } from "../components/AlertBar";
import { HeroSection } from "../sections/HeroSection";
import { Navigation } from "../components/Navigation";
import { ProductSection } from "@/sections/ProductSection";
import { ApparelCollectionSection } from "@/sections/ApparelCollectionSection";
import { AccessoriesCollectionSection } from "@/sections/AccessoriesCollectionSection";
import { BagCollectionSection } from "@/sections/BagCollectionSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";

export const Index = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <AlertBar />
      <Navigation />
      <HeroSection />
      <ProductSection />
      <ApparelCollectionSection />
      <AccessoriesCollectionSection />
      <BagCollectionSection />
      <Footer />
    </>
  );
};
