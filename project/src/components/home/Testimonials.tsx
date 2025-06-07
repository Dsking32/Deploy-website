import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Billmagic is the best digital payment plartform, with 24/7 Customer support.",
      author: "Sarah Johnson",
      position: "Small Business Owner",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Mesaj just transformed my business from 100 customers to 2000 customers via SMS campaign",
      author: "Michael Ben",
      position: "CEO Michael stiches",
      company: "Michael stiches.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "I got the opportunity to watch Davido's weeding on Bingebay with just a little token. Thank you Bingebay.",
      author: "Nduka Jessica",
      position: "Student",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  return (
    <section className="section bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full opacity-5 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full opacity-5 -ml-48 -mb-48"></div>
      
      <Container>
        <SectionHeading
          title="What our customers are saying"
          subtitle="Join thousands of satisfied customers to enjoy our Services."
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
                className={`delay-${index * 100}`}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            className="inline-flex items-center bg-white shadow-soft rounded-full px-6 py-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-medium">Trusted by over <span className="text-primary-500">250,000</span> customers nationwide across all plartforms</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}