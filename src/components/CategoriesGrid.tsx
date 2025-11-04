import { useMemo } from 'react';
import { Category } from '../types';
import { CategoryCard } from './CategoryCard';

interface CategoriesGridProps {
  categories: Category[];
  searchTerm?: string;
}

export const CategoriesGrid = ({ categories, searchTerm = '' }: CategoriesGridProps) => {
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) {
      return categories;
    }
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return categories.filter(category => 
      category.title.toLowerCase().includes(lowerSearchTerm) ||
      category.description.toLowerCase().includes(lowerSearchTerm) ||
      category.tags?.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
    );
  }, [categories, searchTerm]);

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
          {searchTerm && (
            <p className="mt-4 text-sm text-gray-500">
              Found {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'} for "{searchTerm}"
            </p>
          )}
        </div>

        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No categories found matching your search.</p>
            <p className="text-gray-400 text-sm mt-2">Try a different search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
