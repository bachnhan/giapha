import React from 'react';
import { Calendar, MapPin, Clock, Info, BookOpen, ArrowRight, Video, Plus, Filter } from 'lucide-react';
import { motion } from 'motion/react';

export const EventsScreen: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:ml-64 pt-28 pb-12 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Hero Section & Countdown */}
      <section className="mb-12 relative overflow-hidden rounded-xl bg-surface-container-low p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Calendar size={300} />
        </div>
        <div className="relative z-10 flex-1">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold uppercase tracking-widest mb-4">Sự kiện sắp tới</span>
          <h1 className="font-headline text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">Ngày Giỗ Tổ <br/>Nguyễn Bá Phổ</h1>
          <p className="text-on-surface-variant max-w-lg mb-8 leading-relaxed">
            Đại lễ tưởng niệm công đức tổ tiên, dịp để con cháu muôn phương hội ngộ, thắp nén tâm hương hướng về cội nguồn gia tộc Nguyễn Bá.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="lacquered-gradient px-8 py-3 rounded-lg text-white font-bold shadow-xl flex items-center gap-2">
              <Plus size={18} />
              Đăng ký tham dự
            </button>
            <button className="border border-outline px-8 py-3 rounded-lg font-bold text-primary flex items-center gap-2 hover:bg-white/50 transition-all">
              <MapPin size={18} />
              Xem vị trí
            </button>
          </div>
        </div>

        {/* Countdown Bento Card */}
        <div className="relative z-10 w-full md:w-80 bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/50">
          <h3 className="text-center font-headline font-bold text-tertiary mb-6">Đếm ngược sự kiện</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-4xl font-headline font-black text-primary">12</div>
              <div className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter">Ngày</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-headline font-black text-primary">05</div>
              <div className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter">Giờ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-headline font-black text-primary">42</div>
              <div className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter">Phút</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-headline font-black text-primary">18</div>
              <div className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter">Giây</div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-outline-variant/30 text-center">
            <p className="text-sm font-medium text-secondary">15 Tháng 03 Giáp Thìn</p>
            <p className="text-xs text-on-surface-variant">(Tức 23/04/2024 Dương lịch)</p>
          </div>
        </div>
      </section>

      {/* Timeline & Events Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Left Column: Chronological List */}
        <div className="xl:col-span-2 space-y-12">
          <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
            <h2 className="font-headline text-2xl font-bold text-tertiary">Niên Biểu Sự Kiện</h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg hover:bg-surface-container-high transition-all">
                <Filter size={20} />
              </button>
              <button className="p-2 rounded-lg hover:bg-surface-container-high transition-all">
                <Calendar size={20} />
              </button>
            </div>
          </div>

          {/* Event Item 1 */}
          <div className="group relative flex gap-6 md:gap-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex flex-col items-center justify-center border-2 border-transparent group-hover:border-primary transition-all duration-300">
                <span className="text-lg font-black text-primary">23</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">Th4</span>
              </div>
              <div className="w-px flex-1 bg-outline-variant/30 my-4"></div>
            </div>
            <div className="flex-1 pb-12">
              <div className="bg-white rounded-2xl p-6 shadow-sm group-hover:shadow-md transition-shadow duration-300 border border-outline-variant/10">
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-tertiary mb-1">Ngày Giỗ Tổ Nguyễn Bá Phổ</h3>
                    <div className="flex items-center gap-2 text-secondary text-sm font-semibold">
                      <MapPin size={14} />
                      Nhà thờ họ Nguyễn Bá - Từ Sơn, Bắc Ninh
                    </div>
                  </div>
                  <span className="self-start px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full">ĐẠI LỄ TỘC</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Tập trung con cháu dòng họ, tế lễ tại nhà thờ tổ, báo cáo công việc gia tộc năm qua và tuyên dương con cháu đạt thành tích cao trong học tập, công tác.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-surface rounded-xl border border-outline-variant/20">
                  <div>
                    <h4 className="text-xs font-bold text-tertiary uppercase mb-2 flex items-center gap-2">
                      <BookOpen size={12} />
                      Chuẩn bị
                    </h4>
                    <ul className="text-xs text-on-surface-variant space-y-1">
                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-secondary"></span> Lễ vật dâng hương (Ban Trị sự)</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-secondary"></span> Sớ cầu an (Ông Trưởng họ)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-tertiary uppercase mb-2 flex items-center gap-2">
                      <Clock size={12} />
                      Chương trình
                    </h4>
                    <p className="text-xs text-on-surface-variant">08:00 - Lễ dâng hương<br/>10:30 - Họp tộc & Khen thưởng<br/>11:30 - Thụ lộc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Widgets */}
        <div className="space-y-10">
          <div className="bg-surface-container-low rounded-2xl p-6">
            <h3 className="font-headline font-bold text-tertiary mb-4">Nhà thờ tổ</h3>
            <div className="aspect-square w-full rounded-xl overflow-hidden bg-surface-variant mb-4 border border-outline-variant/20">
              <img 
                alt="Temple" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpch2R7hKwfivXlgq-ffNmsvn-nLbptSujl18wIogKZ9MsAyZ-o68XNL1mpq8JDNCOhzSkMLUtvttXGCSmH12jyaE1BkjE-3Q9FwYTiUw1yy_eE9WPFecqOwqUjFO5Qst0AKMwaiS_EogeFoPg8s2nrs8tzHGtt9s1ygQ1HiDbySUnWOH8cUlWjXbVe9BycpNMcSQt0aRx7bFgSoEoDV7GdpXMecJQ66UxX4nLHlYpg0__wKyCbyA4OM-_C6lfkklTkNA_grlhv6l3" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary" size={16} />
                <p className="text-xs text-on-surface-variant leading-tight">Thôn Hạ, Xã Từ Sơn, Tỉnh Bắc Ninh</p>
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-primary text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
              Chỉ đường chi tiết
            </button>
          </div>

          <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
            <h3 className="font-headline font-bold text-primary flex items-center gap-2 mb-4">
              <Info size={18} />
              Ghi nhớ lễ nghi
            </h3>
            <div className="space-y-4">
              <div className="text-xs">
                <strong className="text-tertiary block mb-1">Trang phục:</strong>
                <p className="text-on-surface-variant">Con cháu tham gia lễ tế nên mặc áo dài truyền thống hoặc trang phục công sở chỉnh tề.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
