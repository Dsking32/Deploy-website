import { cn } from '../../lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Container({ 
  children, 
  className,
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component className={cn('container px-4 mx-auto max-w-7xl', className)}>
      {children}
    </Component>
  );
}