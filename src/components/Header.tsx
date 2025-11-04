import { Briefcase } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">PortfolioCo</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm font-medium text-gray-700 hover:text-slate-900 transition-colors">
              Our Work
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-slate-900 transition-colors">
              Contact
            </a>
          </div>

          <button className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};
