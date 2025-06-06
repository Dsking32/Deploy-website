import { CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

export default function AppPromo() {
  const appFeatures = [
    'Turn ideas into reality',
    'Make a mark in the digital world',
  ];

  return (
    <section className="section bg-gradient-to-br from-yellow-400 to-yellow-100 text-blue-900 relative overflow-hidden">
      {/* Abstract shapes in background */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" fill="none" viewBox="0 0 404 404" preserveAspectRatio="none">
          <defs>
            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="3" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>
      
      <Container className="relative z-10">
        <SectionHeading
          title="Inovate. Transform. Succeed"
          subtitle="Download our award-winning mobile app and take control of your finances from anywhere, anytime."
          className="text-blue-900"
        />
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <ul className="space-y-4 mb-8">
              {appFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-blue-900/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center animate-on-scroll delay-300">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7821714/pexels-photo-7821714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Venix Bank Mobile App" 
                className="rounded-3xl shadow-lg max-w-xs mx-auto animate-float relative z-10"
              />
              
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-accent-500 rounded-full opacity-30 animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary-500 rounded-full opacity-20 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}