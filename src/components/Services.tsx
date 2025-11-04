import { Pill, Heart, Stethoscope, Truck, FileText, Calendar } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Pill,
      title: 'Prescription Filling',
      description: 'Fast and accurate prescription processing with professional consultation.'
    },
    {
      icon: Heart,
      title: 'Health Consultations',
      description: 'Expert advice from licensed pharmacists on medications and health conditions.'
    },
    {
      icon: Stethoscope,
      title: 'Health Screenings',
      description: 'Blood pressure monitoring, glucose testing, and other health check services.'
    },
    {
      icon: Truck,
      title: 'Home Delivery',
      description: 'Convenient delivery service for your medications and health products.'
    },
    {
      icon: FileText,
      title: 'Prescription Refills',
      description: 'Easy online and phone prescription refill services.'
    },
    {
      icon: Calendar,
      title: 'Medication Management',
      description: 'Help organizing and tracking your medications for optimal health outcomes.'
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
            Comprehensive pharmaceutical services tailored to meet all your healthcare needs
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

