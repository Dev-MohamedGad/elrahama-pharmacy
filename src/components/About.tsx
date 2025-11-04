import { Shield, Users, Award, Clock } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Certified',
      description: 'Fully licensed pharmacy with certified pharmacists on staff.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced healthcare professionals dedicated to your well-being.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'All products sourced from trusted manufacturers and suppliers.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Emergency services and prescription refills available round the clock.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-pink-700 mb-4">
            About Alrahma Pharmacies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted healthcare partner committed to providing quality pharmaceutical services and products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-pink-700 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Alrahma Pharmacies, we are dedicated to providing exceptional pharmaceutical care and services to our community. We believe in accessible, quality healthcare for everyone.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of licensed pharmacists is committed to ensuring that every prescription is filled accurately and that our customers receive personalized care and expert advice.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-pink-700 mb-4">Why Choose Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-pink-600 font-bold">•</span>
                <span>Comprehensive range of prescription and over-the-counter medications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 font-bold">•</span>
                <span>Professional consultation and medication counseling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 font-bold">•</span>
                <span>Competitive pricing and insurance acceptance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 font-bold">•</span>
                <span>Convenient location with ample parking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 font-bold">•</span>
                <span>Home delivery and prescription refill services</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-pink-600" />
                </div>
                <h4 className="text-lg font-bold text-pink-700 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

