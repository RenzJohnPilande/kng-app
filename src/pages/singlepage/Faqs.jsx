import { AlertBar } from "@/components/AlertBar";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faqs = () => {
  const faqs = [
    {
      title: "What sizes do you offer?",
      description:
        "We offer a wide range of sizes to accommodate all golfers, from XS to XXXL. Please refer to our size chart for detailed measurements.",
    },
    {
      title: "Do you offer customization or personalization services?",
      description: "Yes, we offer customization or personalization services.",
    },
    {
      title: "Do you offer gift cards?",
      description:
        "Yes, we offer gift cards for purchase. They make the perfect gift for any golf enthusiast and giveaways to any golf tournament. Gift cards are available in various denominations and can be redeemed through partner ProShops. Please refer to the list of partner Pro Shops.",
    },
    {
      title: "Are your golf apparel items suitable for both men and women?",
      description:
        "Yes, we offer a diverse selection of golf apparel tailored for both men and women. Each item is designed with attention to fit, style, and performance for respective genders.",
    },
    {
      title: "How can I stay updated on new arrivals and special collections of golf apparel?",
      description:
        "You can follow us on social media platforms such as Facebook, where we regularly post updates on new arrivals, special collections, promotions, and more. Specifically, you can find us on our Facebook page named K&G Golf Fashion Co., Ltd, where we share the latest news and releases related to our products. Additionally, regularly visiting our website will keep you informed about the latest offerings.",
    },
    {
      title: "What materials are used in your golf apparel?",
      description:
        "We typically incorporate a variety of materials to provide comfort, performance, and style on the course. Materials used were Polyester and Spandex.",
    },
    {
      title: "Do you offer any warranty or guarantees on your golf apparel?",
      description:
        "We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, we accept returns within 30 days of purchase. Please ensure the items are unworn, unwashed, and in their original condition with tags attached.",
    },
    {
      title: "Do you offer any discounts or promotions for bulk purchases of golf apparel?",
      description: "Yes, we do offer discounts and promotions. Terms and conditions apply.",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center min-h-screen w-full">
      <AlertBar />
      <Navigation />
      <div className="flex flex-col items-center w-full py-5">
        <div className="max-w-4xl w-full bg-white p-6">
          <div className="flex justify-center w-full py-5 mb-6">
            <h1 className="text-xl font-bold text-center uppercase">Frequently Asked Questions</h1>
          </div>
          <Accordion type="single" collapsible className="flex flex-col gap-4 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border p-5 bg-gray-100 shadow-md hover:bg-gray-200 transition duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold">{faq.title}</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  {faq.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};
