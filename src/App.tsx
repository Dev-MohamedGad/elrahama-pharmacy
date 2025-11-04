import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoriesGrid } from './components/CategoriesGrid';
import { Footer } from './components/Footer';
import { categories } from './data/categories';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoriesGrid categories={categories} />
      <Footer />
    </div>
  );
}

export default App;
