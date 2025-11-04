import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-pink-800 text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Alrahma Pharmacies</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for quality pharmaceutical products and healthcare solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#categories" className="text-gray-400 hover:text-white transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:alrahm730@gmail.com" className="hover:text-white transition-colors">
                  alrahm730@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:01282715411" className="hover:text-white transition-colors">
                  01282715411
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:01287044442" className="hover:text-white transition-colors">
                  01287044442
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <a 
                  href="https://www.google.com/maps?q=26.5602451,31.697856"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  View Location
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="font-semibold">Hours:</span>
                <span>Daily 9:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/1Bj21xNH2b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-700 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/alrahmapharmacies?igsh=MWM3eDhxcG94ZGpsMg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-700 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@alrahmapharmacies?_r=1&_t=ZS-917iV5iIxFs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-700 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://t.me/alrhamapharmacies01282715411" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-700 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Telegram"
                title="عروض صيدليات الرحمة - Telegram Channel"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.06 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.787z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-pink-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2025 Alrahma Pharmacies. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#return-policy" className="text-gray-400 hover:text-white transition-colors">
                Return Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
