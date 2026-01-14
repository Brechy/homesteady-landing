import { type ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-cream-200 hover:border-forest-200 ${className}`}>
      <div className="w-14 h-14 rounded-xl bg-forest-100 flex items-center justify-center text-forest-600 mb-4 group-hover:bg-forest-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
