import { motion } from 'motion/react';
import { GraduationCap, FileCheck, Award, Plane, Users, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';
import MosabImage from '../pilden/mosab.jpg';
import mostfImage from '../pilden/mostf.jpg';

const services = [
  {
    icon: GraduationCap,
    title: 'الاستشارات الدراسية',
    description: 'نساعدك في اختيار التخصص والجامعة المناسبة'
  },
  {
    icon: FileCheck,
    title: 'التقديم على الجامعات',
    description: 'نتابع معك كافة إجراءات التقديم والقبول'
  },
  {
    icon: Award,
    title: 'المنح الدراسية',
    description: 'نوفر لك فرص منح دراسية كاملة وجزئية'
  },
  {
    icon: Plane,
    title: 'متابعة حتى السفر',
    description: 'نبقى معك من التقديم حتى وصولك للجامعة'
  },
];

const universities = [
  { name: 'جامعة القاهرة', logo: 'https://i.pinimg.com/736x/87/88/be/8788be8848f6be42891703ba35bf9245.jpg' },
  { name: 'جامعة إسطنبول', logo: 'https://i.pinimg.com/736x/36/cc/c6/36ccc6f5d598aa0ef985f1e79fdc90fb.jpg' },
  { name: 'جامعة برلين', logo: 'https://i.pinimg.com/736x/a5/4a/5e/a54a5eed95690797c0f5f2dfaf8a30e5.jpg' },
  { name: 'جامعة لندن', logo: 'https://i.pinimg.com/736x/6b/24/eb/6b24eb0848aa188b7b3d64e0d8eed221.jpg' },
  { name: 'جامعة باريس', logo: 'https://i.pinimg.com/736x/73/42/2b/73422b163560447990c0f284cc887b7b.jpg' },
  { name: 'جامعة دبي', logo: 'https://i.pinimg.com/736x/b7/e3/f3/b7e3f3209367db756aa8727b48371635.jpg   ' },
];

const team = [
 
  {
    name: 'المهندس: مصعب محمد',
    position: 'المدير التنفيذي',
    image: MosabImage,
    isOwner: true,
  },
  {
    name: 'مصطفي باريس',
    position: 'المستشار التعليمي',
    image: mostfImage,
  },
  {
    name: 'مريم',
    position: 'منسق قبولات',
    image: 'https://i.pinimg.com/736x/51/cb/39/51cb394deaf0b8976dcff76361ba872b.jpg',
  },
  {
    name: 'هديل عثمان ',
    position: 'مسؤولة خدمة عملاء',
    image: 'https://i.pinimg.com/736x/fb/ba/ab/fbbaab0deba2338629ec4e7db65b15bc.jpg',
  },
  {
    name: 'الاء منزر',
    position: 'مستشار منح دراسية',
    image: 'https://i.pinimg.com/736x/67/f7/a3/67f7a3df69ad06a19afcbc19716a3cf5.jpg',
  },
  {
    name: 'سماح احمد',
    position: 'تسويق ',
    image: 'https://i.pinimg.com/1200x/ae/59/0d/ae590d66406ef09ddbeb228354c8e268.jpg',
  },
];

function CountUpNumber({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}+</span>;
}

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://i.pinimg.com/736x/9c/a6/a9/9ca6a97bb0974a375af48a677289045b.jpg"
                alt="مقر شركة ريتال"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="space-y-6 text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                من نحن
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                ريتال للخدمات التعليمية شركة متخصصة في تسهيل إجراءات الدراسة بالخارج
                وتقديم الاستشارات الأكاديمية للطلاب السودانيين، ونسعى لمساعدتهم في تحقيق
                طموحاتهم التعليمية بأعلى مستوى من الاحترافية.
              </p>
              <p className="text-gray-600 leading-relaxed">
                نفخر بخبرتنا الممتدة لأكثر من 5 سنوات في مجال الخدمات التعليمية،
                ونلتزم بتقديم أفضل الحلول التعليمية لطلابنا.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-20"
  id="services"
>
  <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
    خدماتنا
  </h2>

  <div className="grid grid-cols-2 gap-4">
    {services.map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center"
      >
        <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600">
          {service.description}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>

        
      

        
        {/* Team */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-20"
>
  <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
    فريق العمل
  </h2>

  {/* Owner */}
  <div className="max-w-md mx-auto mb-12">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl overflow-hidden shadow-2xl"
    >
      <ImageWithFallback
        src={team[0].image}
        alt={team[0].name}
        className="w-full h-80 object-cover"
      />
      <div className="p-6 text-center text-white">
        <h3 className="text-2xl font-bold mb-2">{team[0].name}</h3>
        <p className="text-blue-100 text-lg">{team[0].position}</p>
      </div>
    </motion.div>
  </div>

  {/* Team Members Grid */}
  <div className="grid grid-cols-2 gap-6 justify-items-center">
    {/* الأعضاء 2-5 */}
    {team.slice(1, 5).map((member, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow w-40"
      >
        <ImageWithFallback
          src={member.image}
          alt={member.name}
          className="w-22 h-30 mx-auto mt-4 object-cover rounded-full"
        />
        <div className="p-4 text-center">
          <h4 className="font-bold text-blue-900 mb-1">{member.name}</h4>
          <p className="text-gray-600 text-sm">{member.position}</p>
        </div>
      </motion.div>
    ))}

    {/* العضو السادس في الوسط */}
    <div className="col-span-2 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow w-40"
      >
        <ImageWithFallback
          src={team[5]?.image || ''}
          alt={team[5]?.name || 'Member 6'}
          className="w-22 h-32 mx-auto mt-4 object-cover rounded-full"
        />
        <div className="p-4 text-center">
          <h4 className="font-bold text-blue-900 mb-1">{team[5]?.name}</h4>
          <p className="text-gray-600 text-sm">{team[5]?.position}</p>
        </div>
      </motion.div>
    </div>
  </div>
      </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setIsVisible(true)}
          className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-12 shadow-2xl"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-3">
                {isVisible && <CountUpNumber end={220} />}
              </div>
              <div className="text-blue-100 text-lg">طالب سافر</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-3">
                {isVisible && <CountUpNumber end={350} />}
              </div>
              <div className="text-blue-100 text-lg">معاملة مكتمل��</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-3">
                {isVisible && <CountUpNumber end={7} />}
              </div>
              <div className="text-blue-100 text-lg">سنوات خبرة</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}