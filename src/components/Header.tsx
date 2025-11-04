import { useState } from 'react';
import { Search, Menu, X, Phone } from 'lucide-react';
import logoImage from '../images/image-logo.jpeg';

interface HeaderProps {
  onSearchChange?: (searchTerm: string) => void;
}

export const Header = ({ onSearchChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Alrahma Pharmacies Logo" 
              className="w-12 h-12 object-contain rounded-lg"
            />
            <span className="text-xl md:text-2xl font-bold text-pink-700">Alrahma Pharmacies</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products, medications..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#categories" className="text-sm font-medium text-gray-700 hover:text-pink-700 transition-colors">
              Categories
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-pink-700 transition-colors">
              About
            </a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-pink-700 transition-colors">
              Services
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-pink-700 transition-colors">
              Contact
            </a>
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-pink-700 transition-colors flex items-center gap-1">
                Policies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-pink-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="#privacy-policy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors">
                  Privacy Policy
                </a>
                <a href="#return-policy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors">
                  Return Policy
                </a>
                <a href="#terms-conditions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
            <div className="relative group">
              <a href="tel:01282715411" className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-lg hover:bg-pink-700 transition-all">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Call Us</span>
              </a>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-pink-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="tel:01282715411" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors">
                  <Phone className="w-4 h-4 inline mr-2" />
                  01282715411
                </a>
                <a href="tel:01287044442" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors">
                  <Phone className="w-4 h-4 inline mr-2" />
                  01287044442
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-pink-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products, medications..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-pink-100 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#categories" className="text-sm font-medium text-gray-700 hover:text-pink-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Categories
              </a>
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-pink-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-pink-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-pink-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <div className="border-t border-pink-100 pt-4 mt-2">
                <p className="text-xs font-semibold text-gray-500 mb-2 uppercase">Legal</p>
                <a href="#privacy-policy" className="block text-sm font-medium text-gray-700 hover:text-pink-700 transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
                  Privacy Policy
                </a>
                <a href="#return-policy" className="block text-sm font-medium text-gray-700 hover:text-pink-700 transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
                  Return Policy
                </a>
                <a href="#terms-conditions" className="block text-sm font-medium text-gray-700 hover:text-pink-700 transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
                  Terms & Conditions
                </a>
              </div>
              <div className="space-y-2">
                <a href="tel:01282715411" className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-lg hover:bg-pink-700 transition-all w-full">
                  <Phone className="w-4 h-4" />
                  Call: 01282715411
                </a>
                <a href="tel:01287044442" className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-lg hover:bg-pink-700 transition-all w-full">
                  <Phone className="w-4 h-4" />
                  Call: 01287044442
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
