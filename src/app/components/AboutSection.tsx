import { motion } from 'motion/react';
import { GraduationCap, FileCheck, Award, Plane, Users, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';

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

const partners = [
  { name: 'شريك 1', logo: 'https://via.placeholder.com/150x80/2563eb/ffffff?text=Partner+1' },
  { name: 'شريك 2', logo: 'https://via.placeholder.com/150x80/2563eb/ffffff?text=Partner+2' },
  { name: 'شريك 3', logo: 'https://via.placeholder.com/150x80/2563eb/ffffff?text=Partner+3' },
  { name: 'شريك 4', logo: 'https://via.placeholder.com/150x80/2563eb/ffffff?text=Partner+4' },
];

const universities = [
  { name: 'جامعة القاهرة', logo: 'https://via.placeholder.com/120/1e3a8a/ffffff?text=Cairo+Uni' },
  { name: 'جامعة إسطنبول', logo: 'https://via.placeholder.com/120/1e3a8a/ffffff?text=Istanbul' },
  { name: 'جامعة برلين', logo: 'https://via.placeholder.com/120/1e3a8a/ffffff?text=Berlin' },
  { name: 'جامعة لندن', logo: 'https://via.placeholder.com/120/1e3a8a/ffffff?text=London' },
  { name: 'جامعة باريس', logo: 'https://via.placeholder.com/120/1e3a8a/ffffff?text=Paris' },
  { name: 'جامعة دبي', logo: 'https://via.placeholder.com/120/1e3a8a/ffffff?text=Dubai' },
];

const team = [
  {
    name: 'د. أحمد محمد',
    position: 'المدير التنفيذي',
    image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?w=400',
    isOwner: true,
  },
  {
    name: 'سارة إبراهيم',
    position: 'مستشارة تعليمية',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300',
  },
  {
    name: 'محمد علي',
    position: 'منسق قبولات',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
  },
  {
    name: 'فاطمة حسن',
    position: 'مسؤولة خدمة عملاء',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300',
  },
  {
    name: 'عمر يوسف',
    position: 'مستشار منح دراسية',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
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
                src="https://images.unsplash.com/photo-1760246964044-1384f71665b9?w=800"
                alt="مقر شركة ريتال"
                className="w-full h-96 object-cover"
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            شركاؤنا
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <img src={partner.logo} alt={partner.name} className="w-full h-auto" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Universities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            الجامعات المتعاقدة
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {universities.map((uni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
              >
                <img src={uni.logo} alt={uni.name} className="w-full h-auto" />
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

          {/* Team Members */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.slice(1).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="font-bold text-blue-900 mb-1">{member.name}</h4>
                  <p className="text-gray-600 text-sm">{member.position}</p>
                </div>
              </motion.div>
            ))}
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
                {isVisible && <CountUpNumber end={120} />}
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
                {isVisible && <CountUpNumber end={5} />}
              </div>
              <div className="text-blue-100 text-lg">سنوات خبرة</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}