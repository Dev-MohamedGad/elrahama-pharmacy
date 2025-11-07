import { Calendar, Syringe, Truck, FileText } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'Book appointments for medical consultations and health services. Schedule your visit conveniently through our service.'
    },
    {
      icon: Syringe,
      title: 'Vaccination Services',
      description: 'Receive vaccinations and immunization services. Professional vaccination administration by licensed healthcare professionals.'
    },
    {
      icon: Truck,
      title: 'Medication Delivery',
      description: 'Home delivery service for prescribed medications. We deliver your medications safely to your doorstep.'
    },
    {
      icon: FileText,
      title: 'Prescription Reading',
      description: 'Professional prescription reading and consultation services. Get expert guidance on your prescribed medications.'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-pink-700 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional medical services focused on providing healthcare support and consultation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-700 transition-colors">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pink-700 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Service Disclaimer */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-2xl p-6 lg:p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  تنبيه مهم / Important Notice
                </h3>
                <div className="space-y-3 text-gray-800">
                  <p className="font-semibold text-lg border-b border-yellow-300 pb-2">
                    الخدمات المقدمة غير متعلقة بالبيع أو الدعاية لأي منتجات
                  </p>
                  <p className="leading-relaxed">
                    جميع الخدمات المقدمة من خلال هذا الموقع هي خدمات استشارية وطبية فقط. نحن <strong className="text-red-600">لا نقوم ببيع</strong> أو <strong className="text-red-600">الترويج</strong> لأي منتجات طبية أو دوائية. هدفنا هو تقديم الاستشارات الطبية والخدمات الصحية فقط.
                  </p>
                  <p className="font-semibold text-lg border-b border-yellow-300 pb-2 pt-4">
                    Services are not related to selling or advertising products
                  </p>
                  <p className="leading-relaxed">
                    All services provided through this website are <strong>advisory and medical services only</strong>. We <strong className="text-red-600">do not sell</strong> or <strong className="text-red-600">promote</strong> any medical or pharmaceutical products. Our goal is to provide medical consultations and health services only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

