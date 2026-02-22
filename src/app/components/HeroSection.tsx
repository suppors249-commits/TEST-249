import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, MessageCircle } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const images = [
    "https://images.unsplash.com/photo-1692750789034-8edc1e464a4f?w=1920",
    "https://images.unsplash.com/photo-1547817651-7fb0cc360536?w=1920"
  ];

  const [current, setCurrent] = useState(0);

  // تغيير الصورة تلقائياً كل 4 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden" id="home">
      {/* Image Background */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-200" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue via-blue-900/60 " />
        </div>
      ))}

      {/* Content */}
    <div className="relative z-10 h-full flex items-center justify-center">
  <div className="container mx-auto px-6 text-center text-white max-w-4xl">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-4xl md:text-6xl font-bold mb-12 leading-tight"
    >
      مستقبلك الدراسي يبدأ بخطوة واثقة مع <span className="text-red-500">ريتال</span>
    </motion.h1>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="flex flex-row gap-4 justify-center items-center mt-6"
    >
      {/* الزر الكبير */}
      <button
        onClick={() => onNavigate("apply")}
        className="group bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
      >
        قدّم الآن
        <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* الزر الصغير */}
      <button
        onClick={() => onNavigate("about")}
        className="group bg-transparent text-white px-6 py-2 rounded-xl font-semibold text-base border-2 border-white hover:bg-white hover:text-blue-900 transition-all flex items-center gap-2"
      >
        اعرف عنا
      </button>
    </motion.div>
  </div>
</div>


      {/* Scroll Indicator */}
     
       
    </div>
  );
}
