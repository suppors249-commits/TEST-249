import { motion } from 'motion/react';
import { Award, TrendingUp, Globe, DollarSign } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const scholarships = [
  {
    title: 'منحة  جامعات مصرية',
    country: 'تركيا',
    type: 'منحة كاملة',
  
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400',
   
  },
  {
    title: 'منحة جامعات عالمية',
    country: 'مصر',
    type: 'منحة كاملة',
  
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400',
   
  },
 

];

export function ScholarshipsSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50" id="scholarships">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            المنح الدراسية 
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نوفر لك أفضل الفرص للحصول على منح دراسية كاملة وجزئية في أفضل الجامعات العالمية
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <Award className="w-10 h-10 text-blue-900 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-900 mb-1">90+</div>
            <div className="text-gray-600">منحة متاحة</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <Globe className="w-10 h-10 text-blue-900 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-900 mb-1">15+</div>
            <div className="text-gray-600">دولة</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <TrendingUp className="w-10 h-10 text-blue-900 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-900 mb-1">95%</div>
            <div className="text-gray-600">نسبة قبول</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <DollarSign className="w-10 h-10 text-blue-900 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-900 mb-1">90%</div>
            <div className="text-gray-600">منح مجانية</div>
          </motion.div>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {scholarships.map((scholarship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={scholarship.image}
                  alt={scholarship.title}
                  className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-2xl">
                  
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {scholarship.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {scholarship.title}
                </h3>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  
                </div>
                <button className="w-full mt-4 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold">
                  تقدم الآن
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
       
      </div>
    </div>
  );
}
