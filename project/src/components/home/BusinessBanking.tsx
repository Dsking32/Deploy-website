import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function BusinessBanking() {
  const benefits = [
    'Digital payment',
    'Bulk messaging , Voice , IVR ',
    'Video streaming and live streamig services',
    'Fantasy sports',
    'Finacial Insights with powered A.I plartform'
  ];

  return (
    <section className="section bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll delay-200">
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-card"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Business Banking" 
                className="w-full h-96 object-cover"
              />
            </motion.div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="mb-6">
              <span className="bg-secondary-100 text-secondary-700 text-sm font-medium px-3 py-1 rounded-full">
                Business Banking
              </span>
            </div>
            
            <h2 className="mb-6">Our Services</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              From startups to established enterprises, our business solutions provide the 
             foundation you need to succeed in today's competitive marketplace.
            </p>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant="primary" 
              href="/business"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}