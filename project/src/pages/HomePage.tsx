import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import PersonalBanking from '../components/home/PersonalBanking';
import BusinessBanking from '../components/home/BusinessBanking';
import AppPromo from '../components/home/AppPromo';
import Testimonials from '../components/home/Testimonials';
import NewSection from '../components/home/NewSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <PersonalBanking />
      <BusinessBanking />
      <NewSection />
      <Testimonials />
      <AppPromo />
    </>
  );
}