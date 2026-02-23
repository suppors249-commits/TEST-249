import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface FormData {
  destination: string;
  country: string;
  major: string;
  subMajor: string;
  fullName: string;
  phone: string;
  email: string;
  grade: string;
  cvFile: File | null;
}

const majors = {
  'هندسة': ['هندسة مدنية', 'هندسة كهربائية', 'هندسة ميكانيكية', 'هندسة معمارية', 'هندسة حاسوب'],
  'طب': ['طب بشري', 'طب أسنان', 'صيدلة', 'تمريض', 'علاج طبيعي'],
  'إدارة': ['إدارة أعمال', 'محاسبة', 'تسويق', 'إدارة موارد بشرية', 'اقتصاد'],
  'علوم': ['علوم حاسوب', 'رياضيات', 'فيزياء', 'كيمياء', 'أحياء'],
  'حقوق': ['قانون عام', 'قانون خاص', 'قانون دولي', 'قانون تجاري'],
  'فنون': ['تصميم جرافيك', 'تصميم داخلي', 'فنون جميلة', 'عمارة'],
};

const countries = {
  

  ' الوطن العربي': [
    'رواندا',
    ' السعودية',
    'الإمارات  ',
    'قطر',
    'الكويت',
    'البحرين',
    ' عُمان',
    'الأردن',
    'لبنان',
    'العراق',
    'المغرب',
    'الجزائر',
    'السودان',
    'تونس'
  ],

  'دول أوروبا': [
    'ألمانيا',
    'فرنسا',
    'إيطاليا',
    'إسبانيا',
    'المملكة المتحدة',
    'هولندا',
    'السويد',
    'سويسرا',
    'النمسا',
    'تركيا'
  ]
};

export function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    destination: '',
    country: '',
    major: '',
    subMajor: '',
    fullName: '',
    phone: '',
    email: '',
    grade: '',
    cvFile: null,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    setShowSuccess(true);
  };

  return (
    <div className="py-11 bg-gradient-to-b from-gray-50 to-white" id="apply">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          ابدأ رحلتك الدراسية
        </h2>
        <p className="text-center text-gray-600 mb-8">
          املأ البيانات خطوة بخطوة وسيتم تواصل فريقنا معك
        </p>

     

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            {!showSuccess ? (
              <>
                {step === 1 && (
                  <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -20 }}
  className="space-y-6"
>
  

  <h3 className="text-2xl font-bold text-blue-900 text-center mb-10">
    اختر الوجهة
  </h3>

  <div className="flex gap-6 justify-center">
    {[
      {
        name: " الوطن العربي",
        image: "https://i.pinimg.com/736x/ab/01/53/ab01536873e3bf60a68b7d194e015555.jpg"
      },
      {
        name: "دول أوروبا",
        image: "https://i.pinimg.com/1200x/7b/29/f0/7b29f0d759e7d812f62602b80318242c.jpg"
      }
    ].map((dest) => (
      <button
        key={dest.name}
        onClick={() => {
          setFormData({ ...formData, destination: dest.name, country: '' });
          setStep(2);
        }}
        className="relative w-64 h-40 rounded-xl overflow-hidden group shadow-md"
      >
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>

        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
          {dest.name}
        </span>
      </button>
    ))}
  </div>
</motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between mb-4">
  <button
    onClick={() => setStep(prev => prev - 1)}
    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
  >
     <ArrowRight className="w-4 h-4" />
    رجوع
   
  </button>

  <h3 className="text-2xl font-bold text-blue-900 text-center mb-4">اختر الدولة</h3>
</div>
                 
                    
                    <div className="grid grid-cols-2 gap-4">
                      {countries[formData.destination as keyof typeof countries].map((country) => (
                        <button
                          key={country}
                          onClick={() => setFormData({...formData, country}) || setStep(3)}
                          className="p-4 rounded-xl bg-blue-50 hover:bg-blue-100 border border-gray-200 hover:border-blue-400 transition-all"
                        >
                          {country}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                          <div className="flex items-center justify-between mb-4">
  <button
    onClick={() => setStep(prev => prev - 1)}
    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
  >
     <ArrowRight className="w-4 h-4" />
    
                     رجوع
   
  </button>

  <h3 className="text-2xl font-bold text-blue-900 text-center mb-4">اختر التخصص</h3>
</div>

                       
                     
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {Object.keys(majors).map((major) => (
                        <button
                          key={major}
                          onClick={() => setFormData({...formData, major, subMajor: ''}) || setStep(4)}
                          className={`p-3 rounded-xl border-2 transition-all ${formData.major===major?'bg-blue-900 text-white border-blue-900':'bg-white border-gray-200 hover:border-blue-400'}`}
                        >
                          {major}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                                            <div className="flex items-center justify-between mb-4">
  <button
    onClick={() => setStep(prev => prev - 1)}
    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
  >
     <ArrowRight className="w-4 h-4" />
    
                     رجوع
   
  </button>

<h3 className="text-2xl font-bold text-blue-900 text-center flex-1">
     التخصص الفرعي
  </h3></div>
  
     


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {majors[formData.major as keyof typeof majors].map((sub) => (
                        <button
                          key={sub}
                          onClick={() => setFormData({...formData, subMajor: sub}) || setStep(5)}
                          className="p-3 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                                    <div className="flex items-center justify-between mb-4">
  <button
    onClick={() => setStep(prev => prev - 1)}
    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
  >
     <ArrowRight className="w-4 h-4" />
    
                     رجوع
   
  </button>

<h3 className="text-2xl font-bold text-blue-900 text-center flex-1">
    البيانات الشخصية
  </h3></div>

  

                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="الاسم الكامل"
                        value={formData.fullName}
                        onChange={(e)=>setFormData({...formData, fullName:e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-right"
                      />
                      <input
                        type="tel"
                        placeholder="رقم الهاتف"
                        value={formData.phone}
                        onChange={(e)=>setFormData({...formData, phone:e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-right"
                      />
                      <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        value={formData.email}
                        onChange={(e)=>setFormData({...formData, email:e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-right"
                      />
                      <button
                        onClick={()=>setStep(6)}
                        className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        التالي
                      </button>
                    </div>
                  </motion.div>
                )}

              {step === 6 && (
  <motion.div
    initial={{ opacity:0, x:20 }}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:-20}}
    className="space-y-6"
  >
    {/* رأس الصفحة مع زر الرجوع */}
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={() => setStep(prev => prev - 1)}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
      >
        <ArrowRight className="w-4 h-4" />
        رجوع
      </button>

      <h3 className="text-2xl font-bold text-blue-900 text-center flex-1">
        النسبة
      </h3>
    </div>

    <div className="space-y-4">
      <input
        type="text"
        placeholder="النسبة / المعدل"
        value={formData.grade}
        onChange={(e)=>setFormData({...formData, grade:e.target.value})}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-right"
      />

      <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">صورة الشهادة</h3>

      {/* مربع رفع الصورة مع معاينة */}
      <div className="flex flex-col items-center gap-2">
        <label className="w-58 h-28 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-colors">
          {formData.cvFile ? (
            <img
              src={URL.createObjectURL(formData.cvFile)}
              alt="معاينة الشهادة"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-gray-400 text-center p-4">اضغط هنا لرفع الصورة</span>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e)=>setFormData({...formData, cvFile:e.target.files?.[0] || null})}
            className="hidden"
          />
        </label>
        {formData.cvFile && (
          <span className="text-gray-700 text-sm">{formData.cvFile.name}</span>
        )}
      </div>

      <button
        onClick={()=>setStep(7)}
        className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors"
      >
        التالي
      </button>
    </div>
  </motion.div>
)}

                {step === 7 && (
                  <motion.div
                    initial={{ opacity:0, x:20 }}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:0, x:-20}}
                    className="space-y-6"
                  >
                     <div className="flex items-center justify-between mb-4">
      <button
        onClick={() => setStep(prev => prev - 1)}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
      >
        <ArrowRight className="w-4 h-4" />
        رجوع
      </button>
<h3 className="text-2xl font-bold text-blue-900 text-center mb-4">مراجعة البيانات</h3>
      
    </div>
                    
                    <div className="space-y-3">
                      {Object.entries(formData).map(([key, value])=>(
                        <div key={key} className="flex justify-between border-b py-1">
                          <span className="font-semibold text-gray-700">{key}</span>
                          <span className="text-gray-900">{value instanceof File ? value.name : value}</span>
                        </div>
                      ))}
                      <button
                        onClick={handleSubmit}
                        className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors mt-4"
                      >
                        إرسال الطلب
                      </button>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity:0, scale:0.8 }}
                animate={{opacity:1, scale:1}}
                className="text-center py-12"
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-blue-900 mb-3">تم استلام طلبك بنجاح!</h3>
                <p className="text-gray-600 text-lg">فريقنا سيتواصل معك قريباً</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}