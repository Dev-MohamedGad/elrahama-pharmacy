import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoriesGrid } from './components/CategoriesGrid';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ReturnPolicy } from './components/ReturnPolicy';
import { TermsConditions } from './components/TermsConditions';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { categories } from './data/categories';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Header onSearchChange={setSearchTerm} />
      <Hero />
      <CategoriesGrid categories={categories} searchTerm={searchTerm} />
      <Services />
      <About />
      <Contact />
      <PrivacyPolicy />
      <ReturnPolicy />
      <TermsConditions />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
