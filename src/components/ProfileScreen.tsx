import React from 'react';
import { Quote, History, TreePine, Edit3, Heart, Plus, ExternalLink, Camera } from 'lucide-react';
import { motion } from 'motion/react';

export const ProfileScreen: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="pt-24 pb-20 max-w-7xl mx-auto px-6 lg:px-10"
    >
      <header className="mb-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Portrait Card */}
          <div className="w-full lg:w-1/3">
            <div className="relative group">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl bg-surface-container-high">
                <img 
                  alt="Member Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC-wDkmBLbiSU8aAMlSSf9ciaquJJihwWqZoRym2rAp8HOGbPyY4OhnYDVhBnupc4t3j4uQvVe1QHwP9azkpAPvZSp963auJbXtLon3wZMLmwtTxwVTLEGuAy6A_D2Y90ELZKCjdPjvyP4pnxeSrG_b2g0fwn8RdwRNgyQW1RaHwZIW-3ELUbSGi6H54SUxdHE4s4wWkAAoOvSvL6q3XqKqN-pkR5yg8bEpE5cPs0yLsSkyM56hTUQk5wC2tHCoqSj2KReN1QjXcIX"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-secondary/20">
                <div className="text-center">
                  <span className="block text-secondary font-headline font-black text-3xl">Đời XI</span>
                  <span className="text-xs font-bold text-on-surface-variant tracking-widest uppercase">Thứ bậc</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase">Trưởng Chi III</span>
              <h1 className="font-headline text-5xl font-black text-primary leading-tight">Nguyễn Bá Thành Công</h1>
              <p className="text-on-surface-variant text-xl italic font-headline opacity-80">(1945 - 2018)</p>
            </div>

            <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <History size={96} />
              </div>
              <h3 className="font-headline text-lg font-bold text-tertiary mb-4 flex items-center gap-2">
                <Quote className="text-secondary" size={24} />
                Tiểu sử sơ lược
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Ông là người có công lớn trong việc chấn hưng giáo dục tại địa phương và gìn giữ kho tàng hán nôm của dòng họ. Cả cuộc đời ông cống hiến cho sự nghiệp khai sáng và kết nối các chi họ Nguyễn Bá khắp ba miền. Một tấm gương sáng về lòng hiếu thảo và đức độ, luôn đặt lợi ích gia tộc lên hàng đầu.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="lacquered-gradient text-white px-8 py-4 rounded-md font-bold flex items-center gap-3 shadow-lg hover:opacity-90 transition-all active:scale-95">
                <TreePine size={20} />
                Xem trên cây gia phả
              </button>
              <button className="border border-outline-variant text-secondary px-8 py-4 rounded-md font-bold hover:bg-surface-container-high transition-colors flex items-center gap-2">
                <Edit3 size={20} />
                Chỉnh sửa thông tin
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid: Life Events & Relationships */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
        {/* Timeline Section */}
        <div className="md:col-span-7 bg-white p-8 rounded-xl border border-outline-variant/15">
          <h2 className="font-headline text-2xl font-bold text-primary mb-8 flex items-center gap-3">
            <History className="text-secondary" size={24} />
            Mốc thời gian quan trọng
          </h2>
          <div className="space-y-10 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/30">
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary border-4 border-white ring-4 ring-secondary/10"></div>
              <span className="text-secondary font-bold text-sm block mb-1">15/04/1945</span>
              <h4 className="font-bold text-on-surface">Chào đời tại làng Sen, Nam Đàn</h4>
              <p className="text-sm text-on-surface-variant mt-1">Là con trưởng của cụ Nguyễn Bá Tòng và bà Lê Thị Diệu.</p>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container-highest border-4 border-white ring-4 ring-outline-variant/10"></div>
              <span className="text-secondary font-bold text-sm block mb-1">1972 - 1985</span>
              <h4 className="font-bold text-on-surface">Giám đốc Sở Giáo dục & Đào tạo</h4>
              <p className="text-sm text-on-surface-variant mt-1">Giai đoạn cống hiến rực rỡ nhất cho nền giáo dục tỉnh nhà.</p>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container-highest border-4 border-white ring-4 ring-outline-variant/10"></div>
              <span className="text-secondary font-bold text-sm block mb-1">1990</span>
              <h4 className="font-bold text-on-surface">Chủ biên cuốn "Nguyễn Bá Gia Phả"</h4>
              <p className="text-sm text-on-surface-variant mt-1">Hoàn thành việc số hóa và dịch thuật toàn bộ tư liệu Hán Nôm của dòng họ.</p>
            </div>
          </div>
        </div>

        {/* Family Network */}
        <div className="md:col-span-5 space-y-8">
          <div className="bg-tertiary-container text-white p-8 rounded-xl shadow-xl">
            <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
              <TreePine className="text-secondary-fixed" size={24} />
              Quan hệ huyết thống
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/30">
                  <img 
                    alt="Father" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcsJ3IxDzOXnVFHScOJ-tgFs1ch0kRphYe8ahAefueNEMrtfYKx7Rp1yEUwoMtDBoSjahddO0bp1X_VKWY6kauki72DE_hTSCWiWrqSk1IiXFTXGpR3Je28VCx0s5ks5e3waKxcEi5nh3ZBSkeD6_7mXsclcMnperz44-MyPzUw7iOHpFkbxUA2x9RctYvBUbSwk7NuFHaw3Rtqg7VpPlFA8SnZOWATLFSGWVBYOLbqO_GERMHDOP3o9U9I36lwl1YLdB_Np7RqpG3" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-xs text-on-tertiary-container font-bold uppercase tracking-widest">Phụ thân</p>
                  <p className="font-bold hover:text-secondary-fixed transition-colors">Nguyễn Bá Tòng</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/30">
                  <img 
                    alt="Mother" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwWMLP8LL8eg3QXRtq0OnCsO1OgK5MeHvz9LgmcMfuNsL37y6QjjCqBV_xNYcuL_3vjvDAeoID_8gYknPccUgrPahCT37BsJUO2nUHOKp2j8syypkuS-gThmN4NRUEtAME1F9th_GCrXwNWwujY-ivS5YoSui9kKemx7SobEo2iPrYaA5RM2M2wreE6GZIT3_6BMmvNHlAaa38ozm7A3b7uaL4u1K1d9hoYBHP5Snw3SOQRTHDbuZoa2Yr0f22nYPfi0ci3cc9EWJB" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-xs text-on-tertiary-container font-bold uppercase tracking-widest">Mẫu thân</p>
                  <p className="font-bold hover:text-secondary-fixed transition-colors">Lê Thị Diệu</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <p className="text-xs text-on-tertiary-container font-bold uppercase tracking-widest">Phối ngẫu</p>
                <div className="flex items-center gap-3">
                  <Heart className="text-secondary-fixed fill-secondary-fixed" size={20} />
                  <span className="font-bold">Trần Thị Minh Khai</span>
                </div>
              </div>
            </div>
          </div>

          {/* Children */}
          <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/20">
            <h3 className="font-headline font-bold text-tertiary mb-4">Thế hệ kế cận (3)</h3>
            <div className="flex -space-x-3 overflow-hidden">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  alt={`Child ${i}`} 
                  className="inline-block h-12 w-12 rounded-full ring-4 ring-surface-container-high" 
                  src={`https://picsum.photos/seed/child${i}/100/100`}
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold ring-4 ring-surface-container-high">+2</div>
            </div>
          </div>
        </div>
      </div>

      {/* Media Gallery */}
      <section className="mb-20">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-headline text-3xl font-black text-primary">Ký ức & Tư liệu</h2>
          <a className="text-secondary font-bold flex items-center gap-2 hover:underline" href="#">
            Xem tất cả hình ảnh
            <ExternalLink size={18} />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden relative group">
              <img 
                alt={`Memory ${i}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                src={`https://picsum.photos/seed/memory${i}/400/400`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
          <div className="aspect-square rounded-lg overflow-hidden bg-surface-container-high flex items-center justify-center border-2 border-dashed border-outline-variant/50 cursor-pointer hover:bg-surface-container-highest transition-colors group">
            <div className="text-center">
              <Camera className="mx-auto text-outline-variant group-hover:text-primary transition-colors" size={40} />
              <p className="text-xs font-bold text-on-surface-variant mt-2">Thêm ảnh</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
