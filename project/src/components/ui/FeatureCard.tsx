import { cn } from '../../lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon,
  className 
}: FeatureCardProps) {
  return (
    <div className={cn(
      'card p-6 md:p-8 flex flex-col animate-on-scroll',
      className
    )}>
      <div className="bg-primary-50 p-3 rounded-lg inline-flex items-center justify-center w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}