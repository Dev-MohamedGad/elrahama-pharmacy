import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export const Contact = () => {
  // Google Maps coordinates from the provided URL
  const mapLat = 26.5602451;
  const mapLng = 31.697856;
  const googleMapsUrl = `https://www.google.com/maps?q=${mapLat},${mapLng}`;

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-pink-700 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at our location or get in touch through any of the following ways
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information Cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Location</h4>
                  <p className="text-gray-600 mb-3">
                    Alrahma Pharmacies
                  </p>
                  <a 
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all font-medium text-sm shadow-sm hover:shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Phone Numbers</h4>
                  <div className="space-y-2">
                    <a 
                      href="tel:01282715411" 
                      className="block px-4 py-2 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors text-gray-700 hover:text-pink-700 font-medium"
                    >
                      01282715411
                    </a>
                    <a 
                      href="tel:01287044442" 
                      className="block px-4 py-2 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors text-gray-700 hover:text-pink-700 font-medium"
                    >
                      01287044442
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Email</h4>
                  <a 
                    href="mailto:alrahm730@gmail.com" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors text-gray-700 hover:text-pink-700 font-medium"
                  >
                    alrahm730@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Opening Hours</h4>
                  <div className="px-4 py-2 bg-pink-50 rounded-lg">
                    <p className="text-gray-700 font-medium">
                      Daily: <span className="text-pink-600">9:00 AM - 10:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed - Enhanced Design */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-2xl border border-pink-100 overflow-hidden">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-pink-600 to-pink-700 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white" />
                  <h3 className="text-white font-bold text-lg">Our Location</h3>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm font-medium transition-all backdrop-blur-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Open Map</span>
                </a>
              </div>

              {/* Map Container */}
              <div className="relative w-full" style={{ height: '500px' }}>
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1234567890123!2d${mapLng}!3d${mapLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMzJzM2LjkiTiAzMcKwNDEnNTIuMyJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alrahma Pharmacies Location"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
                
                {/* Map Overlay Gradient */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-pink-50/10"></div>
              </div>

              {/* Map Footer */}
              <div className="bg-pink-50 px-6 py-4 border-t border-pink-100">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-semibold text-pink-700">Find us easily</span> - Click the map to get directions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

