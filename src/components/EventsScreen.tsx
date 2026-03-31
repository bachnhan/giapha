import React from 'react';
import { Calendar, MapPin, Clock, Info, BookOpen, Plus, Filter } from 'lucide-react';
import { motion } from 'motion/react';

export const EventsScreen: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:ml-64 pt-32 pb-12 px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Hero Section & Countdown */}
      <section className="mb-20 relative overflow-hidden rounded-3xl bg-white p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 border border-slate-100 shadow-xl shadow-slate-100/50">
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none -translate-y-1/2 translate-x-1/2">
          <Calendar size={600} />
        </div>
        <div className="relative z-10 flex-1">
          <div className="inline-flex items-center gap-3 px-4 py-1 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
            <span className="text-[10px] font-black text-secondary tracking-[0.4em] uppercase">SỰ KIỆN SẮP TỚI</span>
          </div>
          <h1 className="font-headline text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">NGÀY GIỖ <br/>THỦY TỔ</h1>
          <p className="font-body text-slate-500 max-w-lg mb-10 text-xl leading-relaxed italic border-l-2 border-secondary/20 pl-6">
            Đại lễ tưởng niệm công đức tổ tiên, dịp để con cháu muôn phương hội ngộ, thắp nén tâm hương hướng về cội nguồn dòng tộc.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-primary px-10 py-5 rounded-2xl text-white font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-4 hover:shadow-primary/40 transition-all hover:-translate-y-1">
              <MapPin size={18} className="text-secondary" />
              Vị trí Nhà thờ Chi tộc
            </button>
          </div>
        </div>

        {/* Countdown Card */}
        <div className="relative z-10 w-full md:w-[24rem] bg-white rounded-[2.5rem] p-12 shadow-2xl border-2 border-primary/5 ring-[12px] ring-primary/5">
          <h3 className="text-center font-headline font-black text-slate-400 tracking-widest uppercase mb-10 text-xs">ĐẾM NGƯỢC SỰ KIỆN</h3>
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div className="text-center">
              <div className="text-5xl font-headline font-black text-slate-900">12</div>
              <div className="text-[9px] uppercase font-black text-slate-400 tracking-[0.2em] mt-2">Ngày</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-headline font-black text-slate-900">05</div>
              <div className="text-[9px] uppercase font-black text-slate-400 tracking-[0.2em] mt-2">Giờ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-headline font-black text-slate-900">42</div>
              <div className="text-[9px] uppercase font-black text-slate-400 tracking-[0.2em] mt-2">Phút</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-headline font-black text-slate-900">18</div>
              <div className="text-[9px] uppercase font-black text-slate-400 tracking-[0.2em] mt-2">Giây</div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 text-center">
            <p className="text-xs font-black text-secondary tracking-widest uppercase mb-1">15 THÁNG 03 GIÁP THÌN</p>
            <p className="text-[10px] text-slate-400 font-medium">(Tức 23/04/2024 Dương lịch)</p>
          </div>
        </div>
      </section>

      {/* Timeline & Events Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        {/* Left Column: Chronological List */}
        <div className="xl:col-span-2 space-y-16">
          <div className="flex justify-between items-end border-b border-slate-100 pb-8">
            <h2 className="font-headline text-2xl font-black text-slate-900 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/5 flex items-center justify-center text-secondary">
                <Calendar size={24} />
              </div>
              NIÊN BIỂU SỰ KIỆN
            </h2>
            <div className="flex gap-4">
              <button className="p-3 bg-white border border-slate-100 rounded-xl hover:bg-slate-50 transition-all shadow-sm text-slate-400 hover:text-slate-900">
                <Filter size={20} />
              </button>
            </div>
          </div>

          {/* Event Item 1 */}
          <div className="group relative flex gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-slate-50 flex flex-col items-center justify-center border border-slate-100 group-hover:border-secondary transition-all duration-500 shadow-inner group-hover:shadow-secondary/20 group-hover:-translate-y-1">
                <span className="text-2xl font-headline font-black text-slate-900 group-hover:text-secondary transition-colors">23</span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">THÁNG 4</span>
              </div>
              <div className="w-px flex-1 bg-slate-100 my-6"></div>
            </div>
            <div className="flex-1 pb-16">
              <div className="bg-white rounded-3xl p-10 shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-slate-50 group-hover:-translate-y-2">
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 mb-8">
                  <div>
                    <h3 className="font-headline text-2xl font-black text-slate-900 mb-2 group-hover:text-secondary transition-colors tracking-tight">Ngày Giỗ Thủy Tổ</h3>
                    <div className="flex items-center gap-3 text-slate-400 text-[10px] font-black tracking-widest uppercase">
                      <MapPin size={14} className="text-secondary" />
                      NHÀ THỜ TỘC - TỔ CHỨC ĐẠI LỄ
                    </div>
                  </div>
                  <span className="self-start px-4 py-1.5 bg-slate-900 text-white text-[9px] font-black rounded-full tracking-[0.2em] uppercase">ĐẠI LỄ TỘC</span>
                </div>
                <p className="font-body text-slate-500 text-lg leading-relaxed mb-10 italic">
                  Tập trung con cháu dòng họ, tế lễ tại nhà thờ tổ, báo cáo công việc dòng tộc năm qua và tuyên dương con cháu đạt thành tích cao trong học tập, công tác.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                      <BookOpen size={14} className="text-secondary" />
                      CHUẨN BỊ LỄ NGHI
                    </h4>
                    <ul className="font-body text-sm text-slate-500 space-y-3 italic">
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-sm shadow-secondary/50"></span> Lễ vật dâng hương gia tiên</li>
                      <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-sm shadow-secondary/50"></span> Sớ cầu an (Ông Trưởng họ soạn)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                      <Clock size={14} className="text-secondary" />
                      CHƯƠNG TRÌNH
                    </h4>
                    <p className="font-body text-sm text-slate-500 italic space-y-1">
                      <span className="block italic">08:00 - Đại lễ dâng hương</span>
                      <span className="block italic">10:30 - Họp tộc & Vinh danh</span>
                      <span className="block italic">11:30 - Thụ lộc dòng tộc</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Widgets */}
        <div className="space-y-12">
          <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-100/50 group">
            <h3 className="font-headline text-lg font-black text-slate-900 mb-8 tracking-widest uppercase">NHÀ THỜ TỔ</h3>
            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-50 mb-8 border border-slate-100 flex items-center justify-center relative inner-shadow group-hover:border-secondary/30 transition-colors">
              <BookOpen size={80} className="text-slate-100 group-hover:text-secondary/10 transition-colors duration-700" />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-secondary mt-1" size={18} />
                <p className="text-[11px] font-black text-slate-400 leading-relaxed uppercase tracking-wider">VỊ TRÍ NHÀ THỜ CHI TỘC <br/> (HÀNH CHÍNH & VĂN HÓA)</p>
              </div>
            </div>
            <button className="w-full mt-10 py-4 bg-slate-900 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.2em] hover:bg-secondary transition-all shadow-xl hover:-translate-y-1">
              CHỈ ĐƯỜNG CHI TIẾT
            </button>
          </div>

          <div className="bg-slate-50/50 rounded-3xl p-10 border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-[0.05] pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
              <Info size={100} />
            </div>
            <h3 className="font-headline font-black text-slate-800 flex items-center gap-4 mb-8">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                <Info size={20} />
              </div>
              LỄ NGHI
            </h3>
            <div className="space-y-6">
              <div className="text-xs">
                <strong className="text-slate-900 block mb-2 uppercase tracking-widest font-black text-[9px]">TRANG PHỤC HÀNH LỄ:</strong>
                <p className="font-body text-slate-500 italic leading-relaxed text-sm">Con cháu tham gia lễ tế nên mặc áo dài truyền thống hoặc trang phục công sở chỉnh tề để giữ gìn sự tôn nghiêm.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
