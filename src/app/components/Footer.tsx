import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-blue-950 to-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="text-right">
<div className="text-2xl font-bold text">
  Rit<span className="text-red-500">al</span>
</div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              شريكك الموثوق في رحلتك التعليمية نحو مستقبل أفضل
            </p>
            <button
              onClick={() => onNavigate('apply')}
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-full"
            >
              قدّم الآن
            </button>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                { label: 'الرئيسية', id: 'home' },
                { label: 'الخدمات', id: 'services' },
                { label: 'المنح', id: 'scholarships' },
                { label: 'الجامعات', id: 'universities' },
                { label: 'تواصل معنا', id: 'contact' },
                { label: 'اعرف عنا', id: 'about' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          

          {/* Social Media */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-6">تابعنا</h3>
            <div className="flex gap-3 justify-end flex-wrap">
              <a
                href="https://www.instagram.com/soo_249"
                className="w-12 h-12 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/soo_249"
                className="w-12 h-12 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/soo_249?"
                className="w-12 h-12 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/soo_249"
                className="w-12 h-12 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-blue-200 text-sm">
            <p>© 2026 ريتال للخدمات التعليمية. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
