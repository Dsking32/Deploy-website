import { ArrowRight, Shield, Star } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-400 to-yellow-100 pt-32 pb-16 md:pb-24 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center bg-white shadow-soft rounded-full px-4 py-1.5 mb-6">
              <Star size={16} className="text-primary-500 mr-2" />
              <span className="text-sm font-medium">Everything You Need</span>
            </div>
            
            <h1 className="mb-6">
              <span className="block mb-2">Innovate</span>
              <span className="gradient-text">Transform &</span>
              <span className="gradient-text"> Succeed</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Discover our suite of cutting-edge digital platforms and services designed 
              to transform your digital experience.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg"
                href="/services"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                href="/contact"
              >
                Contact Us
              </Button>
            </div>
            
            <div className="flex items-center mt-10 text-gray-600">
              <Shield className="h-5 w-5 text-success-500 mr-2" />
              <span className="text-sm">Secure • Innovative • Trusted</span>
            </div>
          </div>
          
          <div className="relative animate-on-scroll delay-300">
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Innovation" 
                className="rounded-2xl shadow-card w-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500 rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500 rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}