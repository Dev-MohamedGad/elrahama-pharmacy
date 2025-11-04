import { Category } from '../types';
import { CategoryCard } from './CategoryCard';

interface CategoriesGridProps {
  categories: Category[];
}

export const CategoriesGrid = ({ categories }: CategoriesGridProps) => {
  return (
    <section id="categories" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-pink-700 mb-4">
            Our Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of pharmaceutical products and healthcare solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
