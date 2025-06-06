import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/logo.png",
    title: "Venix stars.",
    description:
      "Taking technology to the next stage.",
    button: "Find out more",
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    title: "Collaboration at its best.",
    description:
      "Bringing pleasure and comfort to your door step.",
    button: "Explore Now",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-yellow-400 to-yellow-100 p-8 md:p-16 min-h-screen">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              {slides[index].title}
            </h1>
            <p className="text-lg text-blue-900 mb-6">{slides[index].description}</p>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-md text-lg">
              {slides[index].button}
            </button>
          </motion.div>
        </AnimatePresence>
        <p className="mt-8 text-sm text-blue-900">
          We are licensed by the NCC 
          <span role="img" aria-label="Nigeria coat of arms"></span> <strong></strong>
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].image}
            src={slides[index].image}
            alt="Slide image"
            className="w-[90%] max-w-md h-auto object-contain rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}