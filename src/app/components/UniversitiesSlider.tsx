import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const universities = [
  { name: 'مصر', image: 'https://i.pinimg.com/736x/b5/b1/ae/b5b1ae0ea9440f6fe54339a11154ddd6.jpg' },
  { name: 'السعوديه', image: 'https://i.pinimg.com/736x/19/04/1d/19041dec3eb72a27fa4db659449ec366.jpg' },
  { name: 'تركيا', image: 'https://i.pinimg.com/1200x/84/ce/4f/84ce4fd54f3f9e81cdf8536e0b822dd9.jpg' },
  { name: 'رواندا', image: 'https://i.pinimg.com/1200x/cd/82/f8/cd82f8c97e550c37b000b2482fee003e.jpg' },
  { name: 'الفلبين', image: 'https://i.pinimg.com/1200x/0d/c1/05/0dc105ce2791a28a726828e58f92fd87.jpg' },
  { name: 'الهند', image: 'https://i.pinimg.com/736x/e6/db/22/e6db22d8dc84cd25b5977292bc5ac2a0.jpg' },
  { name: 'روسيا ', image: 'https://i.pinimg.com/736x/79/2f/23/792f2376e87c4de2d9006204bbaaa3d8.jpg' },
  { name: 'الصين', image: 'https://i.pinimg.com/1200x/72/5e/91/725e9191e2a99e2bd728305c49601ea4.jpg' },
];



export function UniversitiesSlider() {
  // Duplicate the array to create seamless loop
  const duplicatedUniversities = [...universities, ...universities, ...universities];

  return (
    <div className="py-10 bg-gray-50 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, 100 * universities.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
          style={{ width: 'max-content' }}
        >
          {duplicatedUniversities.map((uni, index) => (
            <div
              key={`${uni.name}-${index}`}
              className="flex-shrink-0 w-54 relative group"
            >
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <ImageWithFallback
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-30">
                  <span className="text-white font-semibold text-lg ">
                    {uni.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}