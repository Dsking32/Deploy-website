import { cn } from '../../lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  company?: string;
  image?: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  position,
  company,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn(
      'card p-6 md:p-8 animate-on-scroll',
      className
    )}>
      <Quote className="text-primary-300 h-8 w-8 mb-4" />
      <p className="text-lg mb-6 italic text-gray-700">{quote}</p>
      <div className="flex items-center">
        {image && (
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          {(position || company) && (
            <p className="text-sm text-gray-500">
              {position}{position && company && ', '}{company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}