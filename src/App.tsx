import React from 'react';
import { Sparkles, ShoppingBag, Heart, ShieldCheck, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import ChatInterface from './components/ChatInterface';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-[#f5f2ed]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={24} className="text-amber-600" />
            <span className="text-xl font-serif tracking-widest uppercase font-light">Lamuse Silver</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium">
            <a href="#" className="hover:text-amber-600 transition-colors">Bộ sưu tập</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Sản phẩm</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Chính sách</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Liên hệ</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2070" 
            alt="Silver Jewelry" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f2ed]/0 via-[#f5f2ed]/50 to-[#f5f2ed]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[12px] uppercase tracking-[0.4em] mb-6 text-amber-700 font-semibold"
          >
            Trang sức bạc Ý S925 cao cấp
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-light leading-tight mb-8"
          >
            Tỏa sáng trong <br />
            <span className="italic">từng khoảnh khắc</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="http://lamusesilver.id.vn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-[12px] uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all group"
            >
              Khám phá ngay
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute left-10 bottom-20 hidden lg:block">
          <p className="writing-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.3em] opacity-40">
            EST. 2024 — LAMUSE SILVER JEWELRY
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#f5f2ed] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={24} className="text-amber-600" />
            </div>
            <h3 className="font-serif text-2xl">Thiết kế Tinh xảo</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Mỗi sản phẩm là một tác phẩm nghệ thuật, được chế tác tỉ mỉ để tôn vinh vẻ đẹp của bạn.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#f5f2ed] rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={24} className="text-amber-600" />
            </div>
            <h3 className="font-serif text-2xl">Bảo hành Trọn đời</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Cam kết chất lượng bạc S925 cao cấp cùng dịch vụ làm sáng, đánh bóng trọn đời sản phẩm.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#f5f2ed] rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles size={24} className="text-amber-600" />
            </div>
            <h3 className="font-serif text-2xl">Quà tặng Ý nghĩa</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Gói trọn yêu thương trong từng hộp quà sang trọng, là lựa chọn hoàn hảo cho mọi dịp đặc biệt.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-2">
            <h2 className="text-3xl font-serif mb-6">Lamuse Silver</h2>
            <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
              Chuyên trang sức nhẫn nữ, lắc tay nữ, dây chuyền nữ, khuyên tai nữ, lắc chân nữ, chất liệu bạc ý s925 cao cấp.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] mb-6 text-amber-500">Liên kết</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><a href="http://lamusesilver.id.vn/" className="hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sản phẩm mới</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo hành</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] mb-6 text-amber-500">Theo dõi</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.1em] text-neutral-500">
          <p>© 2024 Lamuse Silver. All rights reserved.</p>
          <p>Designed for Elegance</p>
        </div>
      </footer>

      {/* Chatbot Interface */}
      <ChatInterface />
    </div>
  );
}
