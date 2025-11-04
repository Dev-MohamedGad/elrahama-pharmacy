import { Category } from '../types';
import category1 from '../images/cateories-1.jpeg';
import category2 from '../images/cateories-2.jpeg';
import category3 from '../images/cateories-3.jpeg';
import category4 from '../images/cateories-4.jpeg';
import category5 from '../images/cateories-5.jpeg';
import category6 from '../images/cateories-6.jpeg';
import category7 from '../images/cateories-8.jpeg';

export const categories: Category[] = [
  {
    id: '1',
    title: 'Prescription Medications',
    description: 'Comprehensive range of prescription medications for various health conditions. All medications are sourced from licensed suppliers and stored under optimal conditions.',
    imageUrl: category1,
    tags: ['Prescription', 'Licensed', 'Quality']
  },
  {
    id: '2',
    title: 'Over-the-Counter Products',
    description: 'Wide selection of OTC medications, vitamins, and supplements to support your daily health and wellness needs.',
    imageUrl: category2,
    tags: ['OTC', 'Vitamins', 'Supplements']
  },
  {
    id: '3',
    title: 'Personal Care',
    description: 'Premium personal care products including skincare, hair care, and hygiene essentials for your daily routine.',
    imageUrl: category3,
    tags: ['Skincare', 'Hair Care', 'Hygiene']
  },
  {
    id: '4',
    title: 'Baby Care',
    description: 'Gentle and safe baby care products including diapers, baby formula, and specialized infant care items.',
    imageUrl: category4,
    tags: ['Baby', 'Infant', 'Safe']
  },
  {
    id: '5',
    title: 'Medical Equipment',
    description: 'Essential medical equipment and supplies including blood pressure monitors, thermometers, and first aid kits.',
    imageUrl: category5,
    tags: ['Equipment', 'Monitoring', 'First Aid']
  },
  {
    id: '6',
    title: 'Health Supplements',
    description: 'High-quality health supplements and nutritional products to support your wellness journey and dietary needs.',
    imageUrl: category6,
    tags: ['Supplements', 'Nutrition', 'Wellness']
  },
  {
    id: '7',
    title: 'Specialty Care',
    description: 'Specialized pharmaceutical products and care solutions for specific health conditions and treatments.',
    imageUrl: category7,
    tags: ['Specialty', 'Treatment', 'Care']
  }
];
