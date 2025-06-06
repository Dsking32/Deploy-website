import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
  className?: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  image,
  category,
  slug,
  className,
}: BlogCardProps) {
  return (
    <div className={cn(
      'card group overflow-hidden animate-on-scroll',
      className
    )}>
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`} 
          className="text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}