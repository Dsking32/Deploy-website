import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      <h2 className={cn(
        'mb-4 font-semibold animate-on-scroll',
        centered ? 'mx-auto max-w-3xl' : ''
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg text-gray-600 animate-on-scroll',
          centered ? 'mx-auto max-w-2xl' : ''
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}