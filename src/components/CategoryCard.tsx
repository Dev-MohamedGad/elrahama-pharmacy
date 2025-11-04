import { ArrowUpRight } from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={category.imageUrl}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-lg">
          <ArrowUpRight className="w-5 h-5 text-pink-700" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-pink-700 mb-3 group-hover:text-pink-600 transition-colors">
          {category.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {category.description}
        </p>

        {category.tags && category.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {category.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-pink-700 bg-pink-50 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
