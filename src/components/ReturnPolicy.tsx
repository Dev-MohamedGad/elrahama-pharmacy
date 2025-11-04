export const ReturnPolicy = () => {
  return (
    <section id="return-policy" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-pink-700 mb-8">Return Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700 bg-white p-8 rounded-xl shadow-sm">
          <p className="text-lg font-semibold text-pink-700">
            All returns must be within fourteen (14) days of the purchase date.
          </p>

          <div className="space-y-4">
            <p>
              All returned items must be in a new and unused condition. With all original tags and labels attached and its original packaging.
            </p>

            <p>
              For returned item proof of purchase is required.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-pink-700 mt-8 mb-4">Exceptions</h2>
          <p className="font-semibold mb-2">The following items cannot be returned or exchanged:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>After offer or discount date time for purchases with offer or discount.</li>
            <li>Products that are kept in the refrigerator, cosmetic products or easy to open are not returned or exchanged</li>
          </ul>

          <div className="mt-8 p-4 bg-pink-50 rounded-lg border border-pink-200">
            <p className="font-semibold text-pink-700 mb-2">Refund Process:</p>
            <p>
              As soon as the sales branch receives the product and in the event that the terms of return and acceptance apply to the product, the amount will be refunded to the customer's credit card.
            </p>
            <p className="mt-2">
              Our customer will receive a refund within a certain number of days depending on his/her credit card issuer's policies, up to 21 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

