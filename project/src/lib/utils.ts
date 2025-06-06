import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names or class name objects into a single string,
 * resolving conflicts using Tailwind's class priority system
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Observe elements with a specific class and add the 'animated' class 
 * when they enter the viewport for scroll animations
 */
export function setupScrollAnimations(): void {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      element.classList.add('animated');
    });
  }
}