import { motion } from 'motion/react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const countries = [
  { name: 'الكل', value: 'all' },
  { name: 'تركيا', value: 'turkey' },
  { name: 'مصر', value: 'egypt' },
  { name: 'ألمانيا', value: 'germany' },
  { name: 'بريطانيا', value: 'uk' },
  { name: 'فرنسا', value: 'france' },
  { name: 'الإمارات', value: 'uae' },
  { name: 'ماليزيا', value: 'malaysia' },
  { name: 'كندا', value: 'canada' },
];

const universities = [
  {
    name: 'جامعة إسطنبول التقنية',
    country: 'turkey',
    city: 'إسطنبول',
    ranking: 'المرتبة 101 عالمياً',
    programs: 150,
    students: '35,000',
    image: 'https://i.pinimg.com/736x/77/f6/91/77f6917389cb5eced1272a23ed93a6fc.jpg',
    flag: '🇹🇷',
  },
  {
    name: 'جامعة القاهرة',
    country: 'egypt',
    city: 'القاهرة',
    ranking: 'المرتبة 501-600 عالمياً',
    programs: 180,
    students: '155,000',
    image: 'https://i.pinimg.com/736x/27/71/57/277157a5755cfab9d6b384ddb66f41d0.jpg',
    flag: '🇪🇬',
  },
  {
    name: 'جامعة برلين التقنية',
    country: 'germany',
    city: 'برلين',
    ranking: 'المرتبة 151-200 عالمياً',
    programs: 100,
    students: '35,000',
    image: 'https://i.pinimg.com/736x/65/4f/cd/654fcd445ebd257d3ae14879507ca712.jpg',
    flag: '🇩🇪',
  },
  {
    name: 'جامعة كامبريدج',
    country: 'uk',
    city: 'كامبريدج',
    ranking: 'المرتبة 3 عالمياً',
    programs: 80,
    students: '25,000',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400',
    flag: '🇬🇧',
  },
  {
    name: 'جامعة السوربون',
    country: 'france',
    city: 'باريس',
    ranking: 'المرتبة 72 عالمياً',
    programs: 120,
    students: '55,000',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400',
    flag: '🇫🇷',
  },
  {
    name: 'جامعة خليفة',
    country: 'uae',
    city: 'أبوظبي',
    ranking: 'المرتبة 181 عالمياً',
    programs: 60,
    students: '7,000',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400',
    flag: '🇦🇪',
  },
  {
    name: 'جامعة ملايا',
    country: 'malaysia',
    city: 'كوالالمبور',
    ranking: 'المرتبة 70 عالمياً',
    programs: 140,
    students: '20,000',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400',
    flag: '🇲🇾',
  },
  {
    name: 'جامعة تورنتو',
    country: 'canada',
    city: 'تورنتو',
    ranking: 'المرتبة 21 عالمياً',
    programs: 200,
    students: '95,000',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400',
    flag: '🇨🇦',
  },
  {
    name: 'جامعة أنقرة',
    country: 'turkey',
    city: 'أنقرة',
    ranking: 'المرتبة 601-650 عالمياً',
    programs: 130,
    students: '45,000',
    image: 'https://images.unsplash.com/photo-1646400592074-85592294304e?w=400',
    flag: '🇹🇷',
  },
  {
    name: 'الجامعة الأمريكية بالقاهرة',
    country: 'egypt',
    city: 'القاهرة',
    ranking: 'المرتبة 411 عالمياً',
    programs: 85,
    students: '6,700',
    image: 'https://i.pinimg.com/1200x/53/b9/f6/53b9f64cc063146bca3b2d5d026d0e86.jpg',
    flag: '🇪🇬',
  },
  {
    name: 'جامعة ميونخ التقنية',
    country: 'germany',
    city: 'ميونخ',
    ranking: 'المرتبة 50 عالمياً',
    programs: 165,
    students: '45,000',
    image: 'https://i.pinimg.com/1200x/d5/c9/ed/d5c9ed2c59247a156185020bbfc505cd.jpg',
    flag: '🇩🇪',
  },
  {
    name: 'جامعة أكسفورد',
    country: 'uk',
    city: 'أكسفورد',
    ranking: 'المرتبة 1 عالمياً',
    programs: 90,
    students: '24,000',
    image: 'https://i.pinimg.com/736x/a9/72/80/a97280ac463bc111a075c36418206547.jpg',
    flag: '🇬🇧',
  },
];

export function UniversitiesSection() {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3); // أول 3 بطاقات فقط

  const filteredUniversities = universities.filter((uni) => {
    const query = searchQuery.trim().toLowerCase();

    // فلتر الدولة من dropdown أو كلمة البحث
    let matchesCountry = selectedCountry === 'all' || uni.country === selectedCountry;
    const countryFromQuery = countries.find(
      (c) => c.value !== 'all' && c.name.toLowerCase() === query
    );
    if (countryFromQuery) matchesCountry = uni.country === countryFromQuery.value;

    // البحث في اسم الجامعة، المدينة، الترتيب
    const matchesSearch =
      (uni.name && uni.name.toLowerCase().includes(query)) ||
      (uni.city && uni.city.toLowerCase().includes(query)) ||
      (uni.ranking && uni.ranking.toLowerCase().includes(query));

    return matchesCountry && (query === '' || matchesSearch);
  });

  // البطاقات المرئية حاليا
  const visibleUniversities = filteredUniversities.slice(0, visibleCount);

  return (
    <div className="py-16 bg-white" id="universities">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            الجامعات المتعاقدة
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            شراكات مع أفضل الجامعات العالمية لضمان قبولك الأكاديمي
          </p>
        </motion.div>

        {/* Search + Country Dropdown */}
        <div className="max-w-5xl mx-auto mb-12 flex flex-col md:flex-row gap-4 items-start">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث عن جامعة، مدينة، أو دولة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 pl-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
          </div>

          {/* Dropdown Filter */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl border-2 border-gray-200 hover:bg-gray-200 transition-all"
            >
              <Filter className="w-5 h-5 text-gray-600" />
              {countries.find(c => c.value === selectedCountry)?.name || 'اختر الدولة'}
            </button>

            {dropdownOpen && (
              <ul className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-auto">
                {countries.map((country) => (
                  <li
                    key={country.value}
                    className="px-4 py-3 hover:bg-blue-100 cursor-pointer transition-all"
                    onClick={() => {
                      setSelectedCountry(country.value);
                      setDropdownOpen(false);
                      setVisibleCount(3); // إعادة تعيين عرض البطاقات
                    }}
                  >
                    {country.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Universities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleUniversities.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={university.image}
                  alt={university.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full text-xl">
                  {university.flag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2 line-clamp-2">
                  {university.name}
                </h3>

                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <div className="text-sm text-blue-900 font-semibold">
                    {university.ranking}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="font-bold text-blue-900 text-lg">{university.programs}+</div>
                    <div className="text-gray-600 text-xs">برنامج دراسي</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-gray-600 text-xs">{university.students} طالب</div>
                  </div>
                </div>

                <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold">
                  تفاصيل الجامعة
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر Load More */}
        {visibleCount < filteredUniversities.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount(visibleCount + 3)}
              className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition-all font-semibold"
            >
              عرض المزيد
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        )}

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">لم يتم العثور على جامعات</p>
          </div>
        )}
      </div>
    </div>
  );
}
