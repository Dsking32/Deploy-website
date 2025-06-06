import React, { useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cardImages = [
  "/images/card1.png",
  "/images/card2.png",
  "/images/card3.png",
  "/images/card4.png",
  "/images/card5.png",
  "/images/card6.png",
];

// Define the target paths for each card
const cardLinks = [
  "/platforms/mesaj",
  "/platforms/turnaj",
  "/platforms/billmagic",
  "/platforms/bingebay",
  "/platforms/finsight",
  "/platforms/pocket-legal",
];

const cardCount = cardImages.length;

export default function CardShowcase() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isDesktop = windowWidth >= 1024;
  const cardWidth = isDesktop ? 320 : windowWidth >= 640 ? 220 : 140;
  const cardHeight = isDesktop ? 210 : windowWidth >= 640 ? 140 : 90;
  const carouselRadius = isDesktop ? 370 : windowWidth >= 640 ? 220 : 120;
  const [rotation, setRotation] = useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useAnimationFrame(() => {
    setRotation((prev) => (prev + 0.2) % 360);
  });

  return (
    <div className="relative w-full h-[600px] flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-100">
      {/* Title and description */}
      <div className="absolute top-8 text-center z-10 px-4">
        <h2 className="text-4xl font-bold text-blue-900">Everywhere You Go</h2>
        <p className="mt-2 text-blue-700 text-lg max-w-lg mx-auto">
          Venix revolutionizing tech, so you're always connected to your dreams.
        </p>
      </div>

      {/* Rotating card container */}
      <div
        className="relative w-full flex justify-center items-center"
        style={{
          height: isDesktop ? 500 : windowWidth >= 640 ? 340 : 180,
          perspective: 1500,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            rotateY: rotation,
          }}
        >
          {cardImages.map((src, i) => {
            const angle = (360 / cardCount) * i;
            return (
              <img
                key={i}
                src={src}
                alt={`Card ${i + 1}`}
                className="absolute rounded-xl shadow-lg object-contain cursor-pointer transition-transform hover:scale-105"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `rotateY(${angle}deg) translateZ(${carouselRadius}px)`,
                  top: "50%",
                  left: "50%",
                  marginTop: `-${cardHeight / 2}px`,
                  marginLeft: `-${cardWidth / 2}px`,
                  backfaceVisibility: "hidden",
                }}
                onClick={() => navigate(cardLinks[i])}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}