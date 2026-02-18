import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            تواصل معنا
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نحن هنا لمساعدتك في كل خطوة من رحلتك التعليمية
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                معلومات التواصل
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8  rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div className="text-right">
                    
                    <p className="text-gray-600">
                       4 محي الدين ابو العز/ الدقي
                    القاهرة، مصر<br />
                     
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8  rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-900" />
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600" dir="ltr">
                      +249 XXX XXX XXX<br />
                      +249 YYY YYY YYY
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8  rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">
                      Ritaloffice22@gmail.com
                     
                    </p>
                  </div>
                </div>

                
              </div>

              <button
                onClick={() => window.open('https://wa.me/', '_blank')}
                className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل عبر واتساب
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 overflow-hidden">
              <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0541078527062!2d31.20429786126471!3d30.03530551911025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846ceee49d8a5%3A0x51646d143f23564e!2z2aQg2YXYrdmK2Yog2KfZhNiv2YrZhiDYo9io2Ygg2KfZhNi52LLYjCDYp9mE2K_ZgtmK2Iwg2YLYs9mFINin2YTYr9mC2YrYjCDZhdit2KfZgdi42Kkg2KfZhNis2YrYstipIDM3NTAxNjE!5e0!3m2!1sar!2seg!4v1771248193048!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="موقع الشركة"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              أرسل لنا رسالة
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">
                  تم إرسال رسالتك بنجاح!
                </h4>
                <p className="text-gray-600">
                  سنتواصل معك في أقرب وقت ممكن
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-right">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-right"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-right">
                      البريد الإلكتروني *
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

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-right">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="123456789"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-right">
                    الموضوع *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-right"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="admission">استفسار عن القبول</option>
                    <option value="scholarship">استفسار عن المنح</option>
                    <option value="visa">استفسار عن التأشيرة</option>
                    <option value="other">استفسار آخر</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-right">
                    الرسالة *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-right resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  إرسال الرسالة
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
