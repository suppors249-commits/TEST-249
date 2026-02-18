import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const students = [
  { id: 1, name: 'محمد أحمد', country: 'تركيا', image: 'https://images.unsplash.com/photo-1657272961558-ff351514d265?w=400', rating: 5 },
  { id: 2, name: 'فاطمة إبراهيم', country: 'مصر', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400', rating: 5 },
  { id: 3, name: 'عمر حسن', country: 'ألمانيا', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', rating: 5 },
  { id: 4, name: 'سارة محمود', country: 'بريطانيا', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400', rating: 5 },
  { id: 5, name: 'يوسف علي', country: 'كندا', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400', rating: 5 },
];

export function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 5000,           // السرعة: كل بطاقة تأخذ 5 ثواني تقريبًا لتصل للوسط
    autoplay: true,
    autoplaySpeed: 0,      // 0 لتكون الحركة مستمرة بدون توقف
    cssEase: "linear",     // حركة سلسة مستمرة
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          قصص نجاح طلابنا
        </h2>

        <Slider ref={sliderRef} {...settings}>
          {students.map((student, index) => {
            const isCenter = index === currentSlide;

            return (
              <div key={student.id} className="px-4">
                <div
                  className={`bg-white rounded-2xl overflow-hidden shadow-xl w-full max-w-sm mx-auto h-96 flex flex-col transform transition-transform duration-500 ${
                    isCenter ? "scale-105" : "scale-95 opacity-70"
                  }`}
                >
                  <div className="relative h-2/3 overflow-hidden">
                    <ImageWithFallback
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center h-1/3 p-4">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-1">{student.name}</h3>
                    <p className="text-gray-600 text-lg">{student.country}</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(student.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
