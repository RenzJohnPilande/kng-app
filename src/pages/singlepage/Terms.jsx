import { AlertBar } from "@/components/AlertBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export const Terms = () => {
  const crumbs = [
    { link: "/", label: "home" },
    { link: "/terms", label: "terms and conditions" },
  ];

  return (
    <div className="flex flex-col items-start justify-center min-h-screen w-full">
      <AlertBar />
      <Navigation />
      <div class="flex flex-wrap grow w-full min-h-[800px] justify-center items-center py-10">
        <Breadcrumbs crumbs={crumbs} />
        <div class="max-w-4xl w-full bg-white p-6">
          <div class="flex justify-center w-full py-5 mb-6">
            <h1 class="text-xl font-bold text-center uppercase">Terms and Conditions</h1>
          </div>

          <div class="space-y-8">
            <div>
              <h2 class="text-lg font-semibold mb-4">
                Return Policy for K&G Golf Fashion Co., Ltd Apparel:
              </h2>
              <p class="text-base text-gray-600 leading-relaxed">
                At K&G Golf Fashion Co., Ltd, we strive to provide our customers with high-quality
                golf apparel that exceeds expectations. However, if you're not entirely satisfied
                with your purchase, we're here to help.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">Eligibility:</h3>
              <p class="text-base text-gray-600 leading-relaxed">
                To be eligible for a return, your item must be unused, unworn, and in the same
                condition that you received it. Returns must be initiated within 30 days of the
                original purchase date.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">Refunds:</h3>
              <p class="text-base text-gray-600 leading-relaxed">
                Once your return is received and inspected, we will send you an email to notify you
                that we have received your returned item. We will also notify you of the approval or
                rejection of your refund. If your return is approved, your refund will be processed,
                and a credit will automatically be applied to your original method of payment within
                5-7 days.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">Exchanges:</h3>
              <p class="text-base text-gray-600 leading-relaxed">
                If you need to exchange an item for a different size or color, please contact us to
                arrange the exchange. Exchanges are subject to availability.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">Shipping:</h3>
              <p class="text-base text-gray-600 leading-relaxed">
                Customers are responsible for paying the shipping costs associated with returning
                their item. Shipping costs are non-refundable.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">How to Initiate a Return:</h3>
              <p class="text-base text-gray-600 leading-relaxed">
                To initiate a return, please contact our customer service team at mycie@golftime.ph
                / +63 995 396 4667. Our team will provide you with further instructions on how to
                proceed with your return.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">Damaged or Defective Items:</h3>
              <p class="text-base text-gray-600 leading-relaxed">
                If you receive a damaged or defective item, please contact us immediately so that we
                can resolve the issue promptly.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">Final Sale Items:</h3>
              <p class="text-base text-gray-600 leading-relaxed">
                Please note that final sale items are not eligible for return or exchange unless
                they are damaged or defective upon receipt.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">Contact Us:</h3>
              <p class="text-base text-gray-600 leading-relaxed">
                If you have any questions about our return policy or need assistance with a return,
                please don't hesitate to contact us at mycie@golftime.ph / +63 995 396 4667. Thank
                you for choosing K&G Golf Fashion Co., Ltd. We appreciate your business and are
                committed to ensuring your satisfaction with every purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
