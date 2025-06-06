import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [showMessage, setShowMessage] = useState(false);

    // Generate random positions for stars once
    const [starPositions] = useState(() =>
        Array.from({ length: 16 }, () => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: 18 + Math.random() * 24,
            delay: Math.random() * 1.2,
            rotate: Math.random() * 360,
            opacity: 0.5 + Math.random() * 0.5,
        }))
    );

    useEffect(() => {
        const timer1 = setTimeout(() => setShowMessage(true), 1000);
        const timer2 = setTimeout(() => onFinish(), 2200);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onFinish]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-100 overflow-hidden">
            {/* Scattered stars */}
            {starPositions.map((pos, i) => (
                <Star
                    key={i}
                    className="fixed pointer-events-none text-yellow-400 animate-spin-slow"
                    size={pos.size}
                    style={{
                        left: `${pos.left}%`,
                        top: `${pos.top}%`,
                        opacity: pos.opacity,
                        transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`,
                        animationDelay: `${pos.delay}s`,
                        zIndex: 40,
                    }}
                />
            ))}
            <div className="relative flex flex-col items-center z-50">
                <img
                    src="/images/logo.png"
                    alt="Venix Logo"
                    className="w-32 h-32 mb-4 animate-fadeIn"
                />
                {/* Message */}
                {showMessage && (
                    <div className="mt-10 text-2xl font-bold text-yellow-900 animate-fadeIn">
                        Come make a difference
                    </div>
                )}
            </div>
        </div>
    );
}