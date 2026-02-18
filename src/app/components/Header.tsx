import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'الرئيسية', id: 'home' },
    { label: 'الخدمات', id: 'services' },
    { label: 'المنح', id: 'scholarships' },
    { label: 'الجامعات', id: 'universities' },
    { label: 'تواصل معنا', id: 'contact' },
    { label: 'اعرف عنا', id: 'about' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="القائمة"
            >
              <Menu className="w-6 h-6 text-slate-700" />
            </button>

            <div className="text-2xl font-bold text-blue-900">
              Rit<span className="text-red-500">al</span>
              </div>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
<div className="text-2xl font-bold text-blue-900">
  Rit<span className="text-red-500">al</span>
</div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="إغلاق"
                  >
                    <X className="w-6 h-6 text-slate-700" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto py-6">
                  <ul className="space-y-2 px-4">
                    {menuItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            onNavigate(item.id);
                            setIsMenuOpen(false);
                          }}
                          className="w-full text-right px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Menu Footer */}
                <div className="p-6 border-t border-gray-100 space-y-3">
                  <button
                    onClick={() => {
                      onNavigate('apply');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    قدّم الآن
                  </button>
                  <button
                    onClick={() => window.open('https://wa.me/', '_blank')}
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    واتساب
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
