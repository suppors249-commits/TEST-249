import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle } from 'lucide-react';

interface FormData {
  destination: string;
  major: string;
  subMajor: string;
  fullName: string;
  phone: string;
  countryCode: string;
  email: string;
}

const majors = {
  'هندسة': ['هندسة مدنية', 'هندسة كهربائية', 'هندسة ميكانيكية', 'هندسة معمارية', 'هندسة حاسوب'],
  'طب': ['طب بشري', 'طب أسنان', 'صيدلة', 'تمريض', 'علاج طبيعي'],
  'إدارة': ['إدارة أعمال', 'محاسبة', 'تسويق', 'إدارة موارد بشرية', 'اقتصاد'],
  'علوم': ['علوم حاسوب', 'رياضيات', 'فيزياء', 'كيمياء', 'أحياء'],
  'حقوق': ['قانون عام', 'قانون خاص', 'قانون دولي', 'قانون تجاري'],
  'فنون': ['تصميم جرافيك', 'تصميم داخلي', 'فنون جميلة', 'عمارة'],
};

export function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    destination: '',
    major: '',
    subMajor: '',
    fullName: '',
    phone: '',
    countryCode: '+249',
    email: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would send data to backend/Google Sheets/WhatsApp
    console.log('Form submitted:', formData);
    
    setShowSuccess(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setStep(1);
      setFormData({
        destination: '',
        major: '',
        subMajor: '',
        fullName: '',
        phone: '',
        countryCode: '+249',
        email: '',
      });
    }, 5000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
              اختر الوجهة
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setFormData({ ...formData, destination: 'مصر' });
                  setStep(2);
                }}
                className="p-8 bg-gradient-to-br from-blue-50 to-blue-40 hover:from-blue-100 hover:to-blue-200 rounded-xl border-2 border-transparent hover:border-blue-400 transition-all shadow-md hover:shadow-lg"
              >
                <div className="text-2xl mb-1">جامعات مصرية</div>
                <div className="text-xl font-semibold text-blue-900">مصر</div>
              </button>
              <button
                onClick={() => {
                  setFormData({ ...formData, destination: 'خارج مصر' });
                  setStep(2);
                }}
                className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl border-2 border-transparent hover:border-blue-400 transition-all shadow-md hover:shadow-lg"
              >
                <div className="text-2xl mb-3">جامعات عالمية</div>
                <div className="text-xl font-semibold text-blue-900">خارج </div>
              </button>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
              اختر التخصص
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.keys(majors).map((major) => (
                <button
                  key={major}
                  onClick={() => {
                    setFormData({ ...formData, major, subMajor: '' });
                  }}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.major === major
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400'
                  }`}
                >
                  {major}
                </button>
              ))}
            </div>

            {formData.major && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-3 pt-4"
              >
                <h4 className="text-lg font-semibold text-gray-700">التخصصات الفرعية:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {majors[formData.major as keyof typeof majors].map((subMajor) => (
                    <button
                      key={subMajor}
                      onClick={() => {
                        setFormData({ ...formData, subMajor });
                        setStep(3);
                      }}
                      className="p-3 text-right rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all"
                    >
                      {subMajor}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            <button
              onClick={() => setStep(1)}
              className="mt-6 text-blue-900 hover:text-blue-700 flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4" />
              رجوع
            </button>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
              البيانات الشخصية
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-right">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-right"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-right">
                  رقم الهاتف
                </label>
                <div className="flex gap-2" dir="ltr">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="px-3 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  >
                    <option value="+249">+249 🇸🇩</option>
                    <option value="+20">+20 🇪🇬</option>
                    <option value="+966">+966 🇸🇦</option>
                    <option value="+971">+971 🇦🇪</option>
                  </select>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="123456789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-right">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  رجوع
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-900 text-white py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors text-lg font-semibold"
                >
                  إرسال الطلب
                </button>
              </div>
            </form>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white" id="apply">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            ابدأ رحلتك الدراسية
          </h2>
          <p className="text-center text-gray-600 mb-12">
            املأ البيانات وسيتواصل معك فريقنا خلال 24 ساعة
          </p>

          {/* Progress Steps */}
          <div className="flex justify-center items-center gap-4 mb-12">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step >= num
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-12 md:w-24 h-1 mx-2 transition-all ${
                      step > num ? 'bg-blue-900' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              {!showSuccess ? (
                renderStep()
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    تم استلام طلبك بنجاح!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    فريقنا سيتواصل معك قريباً
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
