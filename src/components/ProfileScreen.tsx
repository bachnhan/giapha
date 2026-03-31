import React from 'react';
import { Quote, History, TreePine, Camera, User, UserCheck, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { familyTree } from '../data/mockData';

export const ProfileScreen: React.FC = () => {
  // Focus on the Patriarch (Ông Nội) who is marked as deceased in mockData
  const patriarch = familyTree;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="lg:ml-0 pt-32 pb-20 max-w-7xl mx-auto px-8 lg:px-12"
    >
      <header className="mb-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Portrait Card */}
          <div className="w-full lg:w-1/3">
            <div className="relative group">
              <div className={`aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(107,0,8,0.3)] bg-white flex flex-col items-center justify-center border-2 border-secondary/20 p-2 ${patriarch.isDeceased ? 'grayscale' : ''}`}>
                <div className={`
                  w-28 h-28 rounded-full bg-primary/5 border-2 border-secondary/30
                  p-1 flex items-center justify-center relative shadow-inner z-20 mb-8 transition-transform group-hover:scale-110
                `}>
                  <User className="text-primary/40" size={64} />
                  {/* Memorial Badge */}
                  {patriarch.isDeceased && (
                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-slate-900 border-2 border-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-5 h-5 bg-secondary rotate-45 flex items-center justify-center">
                         <div className="w-full h-[1px] bg-primary"></div>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className={`font-headline font-black tracking-tight text-center text-4xl text-primary uppercase`}>
                   {patriarch.name}
                </h3>
              </div>
              <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-slate-900 border-4 border-secondary/40 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-105">
                <div className="text-center">
                  <span className="block text-secondary font-headline font-black text-4xl tracking-tighter">ĐỜI {patriarch.generation}</span>
                  <span className="text-[10px] font-black text-white/50 tracking-[0.4em] uppercase whitespace-nowrap">HƯƠNG LINH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary rounded-full shadow-xl shadow-primary/20">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(197,160,89,1)]"></div>
                <span className="text-[10px] font-black text-white tracking-[0.4em] uppercase">VỊ TIỀN KHỞI TỔ</span>
              </div>
              <h1 className="font-headline text-7xl font-black text-primary leading-none">
                {patriarch.name}
              </h1>
              <p className="text-primary/60 text-2xl italic font-headline opacity-80 border-l-4 border-secondary pl-8">
                {patriarch.isDeceased ? `Húy kỵ: ${patriarch.deathDate || '---'}` : '"Lấy đức làm gốc, lấy hiếu làm đầu"'}
              </p>
            </div>

            <div className="bg-white border-2 border-primary/5 p-10 rounded-3xl relative overflow-hidden group shadow-xl">
              <div className="absolute -top-10 -right-10 text-primary/5 group-hover:rotate-12 transition-transform duration-1000">
                <History size={200} />
              </div>
              <h3 className="font-headline text-xl font-black text-primary mb-6 flex items-center gap-4">
                <Quote className="text-secondary" size={32} />
                TIỂU SỬ SƠ LƯỢC
              </h3>
              <p className="font-body text-primary/80 leading-relaxed text-xl relative z-10 italic">
                Người đặt nền móng cho đại gia đình, luôn giữ vững truyền thống hiếu học và đoàn kết giữa các thành viên. Một đời cần kiệm, đức độ, là tấm gương sáng cho con cháu các thế hệ mai sau noi theo. Những giá trị ông để lại là kim chỉ nam cho sự hưng thịnh của dòng họ Hùng Tộc.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <button className="bg-primary px-10 py-5 rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] flex items-center gap-4 shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-1">
                <TreePine size={18} className="text-secondary" />
                Truy nguyên huyết thống
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid: Life Events & Relationships */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-24">
        {/* Timeline Section */}
        <div className="md:col-span-12 lg:col-span-7 bg-white p-12 rounded-[2.5rem] border-2 border-primary/5 shadow-2xl">
          <h2 className="font-headline text-3xl font-black text-primary mb-12 flex items-center gap-4">
             <div className="p-2 bg-primary/5 rounded-xl text-secondary">
               <History size={28} />
             </div>
             MỐC THỜI GIAN QUAN TRỌNG
          </h2>
          <div className="space-y-12 relative before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-secondary/50 before:to-transparent">
            <div className="relative pl-12 group">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-xl group-hover:scale-125 transition-transform"></div>
              <span className="text-secondary font-black text-xs tracking-widest block mb-1">GIAI ĐOẠN KHỞI LẬP</span>
              <h4 className="font-headline font-black text-xl text-primary">XÂY DỰNG CƠ NGHIỆP GIA ĐÌNH</h4>
              <p className="font-body text-primary/60 mt-2 text-lg italic leading-relaxed">Những ngày đầu gian khó kiến thiết gia đình và giáo dục con cái tại quê quán.</p>
            </div>
          </div>
        </div>

        {/* Family Network */}
        <div className="md:col-span-12 lg:col-span-5 space-y-10">
          <div className="bg-primary text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden border-4 border-secondary/20 group">
            <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
               <TreePine size={300} className="text-secondary" />
            </div>
            <h2 className="font-headline text-3xl font-black mb-10 flex items-center gap-4 relative z-10">
              <Heart className="text-secondary" size={28} />
              QUAN HỆ PHỐI NGẪU
            </h2>
            <div className="space-y-10 relative z-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border-2 border-secondary/40 shadow-inner group-hover:bg-white/20 transition-all">
                  <UserCheck className="text-secondary" size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.4em] mb-1">BẠN ĐỜI</p>
                  <p className="font-headline text-2xl font-black hover:text-secondary transition-colors">{patriarch.spouse || 'BÀ NỘI'}</p>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.4em]">TÌNH TRẠNG</p>
                <div className="flex items-center gap-4">
                  <div className="px-5 py-2 bg-secondary/20 border border-secondary/40 rounded-full text-secondary text-xs font-black uppercase tracking-widest shadow-lg">
                    ĐỒNG HÀNH TRỌN ĐỜI
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Children Summary */}
          <div className="bg-white p-10 rounded-[2.5rem] border-2 border-primary/5 shadow-xl">
            <h3 className="font-headline font-black text-primary mb-8 tracking-widest text-lg uppercase flex items-center gap-4">
               <div className="w-2 h-8 bg-secondary rounded-full"></div>
               CÁC CON ({(patriarch.children?.length || 0)} NGƯỜI)
            </h3>
            <div className="flex -space-x-4 overflow-hidden mb-6">
               {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="inline-block h-14 w-14 rounded-full ring-4 ring-white bg-primary/5 flex items-center justify-center border border-primary/10 shadow-lg hover:-translate-y-2 transition-transform cursor-pointer" 
                >
                  <User className="text-primary/30" size={24} />
                </div>
              ))}
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-secondary text-xs font-black ring-4 ring-white shadow-xl hover:scale-110 transition-transform cursor-pointer">
                +{(patriarch.children?.length || 9) - 4}
              </div>
            </div>
            <p className="text-xs font-body text-primary/40 italic">Nhấp vào icon để xem thông tin chi tiết từng thành viên</p>
          </div>
        </div>
      </div>

      {/* Media Gallery - Static View */}
      <section className="mb-20">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="font-headline text-4xl font-black text-primary tracking-tight">KÝ ỨC & TƯ LIỆU</h2>
          <div className="flex-1 h-px bg-primary/10"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[4/5] rounded-[2rem] bg-white border-2 border-primary/5 p-4 shadow-xl group hover:shadow-primary/10 transition-all cursor-pointer">
               <div className="w-full h-full rounded-[1.5rem] bg-primary/5 flex items-center justify-center border border-primary/5 transition-all group-hover:scale-[0.98]">
                  <Camera className="text-primary/10 group-hover:text-primary/20 transition-colors" size={48} />
               </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
