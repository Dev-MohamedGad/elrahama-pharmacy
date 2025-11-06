export const ReturnPolicy = () => {
  return (
    <section id="return-policy" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-pink-700 mb-8">Service Cancellation & Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700 bg-white p-8 rounded-xl shadow-sm">
          <p className="text-lg font-semibold text-pink-700">
            Service cancellation requests must be made within 24 hours of service booking.
          </p>

          <div className="space-y-4">
            <p>
              If you need to cancel or reschedule a medical service appointment, please contact us as soon as possible. We understand that circumstances may change, and we will work with you to accommodate your needs.
            </p>

            <p>
              For service cancellation, proof of booking confirmation is required.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-pink-700 mt-8 mb-4">Service-Specific Policies</h2>
          <p className="font-semibold mb-2">The following policies apply to our services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Appointment bookings can be cancelled or rescheduled up to 24 hours before the scheduled time.</li>
            <li>Vaccination services that have been administered cannot be refunded, as the service has been completed.</li>
            <li>Prescription reading and consultation services are non-refundable once the consultation has been provided.</li>
            <li>Medication delivery services can be cancelled before dispatch, subject to our delivery schedule.</li>
          </ul>

          <div className="mt-8 p-4 bg-pink-50 rounded-lg border border-pink-200">
            <p className="font-semibold text-pink-700 mb-2">Refund Process:</p>
            <p>
              If a service cancellation is approved and a refund is applicable, the amount will be processed to the original payment method.
            </p>
            <p className="mt-2">
              Refunds will be processed within 5-10 business days, depending on your payment method and financial institution's processing times.
            </p>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-700 mb-2">Contact Us:</p>
            <p>
              For any questions about service cancellation or refunds, please contact us through our contact information provided on this website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

