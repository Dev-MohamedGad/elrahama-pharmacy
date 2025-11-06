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
      </div>
    </section>
  );
};

