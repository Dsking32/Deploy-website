import { 
  MessageSquare, 
  CreditCard, 
  Trophy,
  Play,
  Brain,
  Sparkles
} from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import FeatureCard from '../ui/FeatureCard';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring"
    }
  })
};

export default function Features() {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-primary-500" />,
      title: 'Mesaj',
      description: 'Powerful bulk SMS messaging platform for seamless communication with your audience.'
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary-500" />,
      title: 'BillMagic',
      description: 'Streamlined digital payment platform making transactions effortless and secure.'
    },
    {
      icon: <Trophy className="h-6 w-6 text-primary-500" />,
      title: 'Turnaj',
      description: 'Immersive fantasy sports platform for the ultimate gaming experience.'
    },
    {
      icon: <Play className="h-6 w-6 text-primary-500" />,
      title: 'BingeBay',
      description: 'Premium video streaming platform delivering endless entertainment.'
    },
    {
      icon: <Brain className="h-6 w-6 text-primary-500" />,
      title: 'Finsigt',
      description: 'AI-powered financial analyzer for intelligent decision making.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary-500" />,
      title: 'And More',
      description: 'Discover our full suite of innovative digital solutions and services.'
    }
  ];

  return (
    <section className="section bg-white">
      <Container>
        <SectionHeading
          title="Digital Solutions for Modern Needs"
          subtitle="Experience our comprehensive suite of innovative platforms and services designed to enhance your digital life."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="delay-100"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}