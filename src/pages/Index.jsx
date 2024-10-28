import { AlertBar } from "../components/AlertBar";
import { HeroSection } from "../sections/HeroSection";
import { Navigation } from "../components/Navigation";
import { ProductSection } from "@/sections/ProductSection";
import { CollectionSection } from "@/sections/CollectionSection";

export const Index = () => {
  return (
    <>
      <AlertBar />
      <Navigation />
      <HeroSection />
      <ProductSection />
      <CollectionSection />
    </>
  );
};
