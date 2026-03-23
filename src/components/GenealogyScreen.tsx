import React from 'react';
import { Plus, Minus, RotateCcw, Search, UserPlus, GitBranch, Users, Calendar, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

export const GenealogyScreen: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="lg:pl-64 pt-20 min-h-screen ancestral-bg overflow-hidden flex flex-col"
    >
      {/* Canvas Controls */}
      <div className="sticky top-20 z-30 p-6 flex justify-between items-start pointer-events-none">
        <div className="bg-surface/90 backdrop-blur shadow-sm p-2 rounded-xl border border-outline-variant/30 flex flex-col gap-2 pointer-events-auto">
          <button className="p-2 hover:bg-surface-container-low rounded-lg text-secondary transition-colors" title="Zoom In">
            <Plus size={20} />
          </button>
          <div className="h-px bg-outline-variant/20 mx-2"></div>
          <button className="p-2 hover:bg-surface-container-low rounded-lg text-secondary transition-colors" title="Zoom Out">
            <Minus size={20} />
          </button>
          <div className="h-px bg-outline-variant/20 mx-2"></div>
          <button className="p-2 hover:bg-surface-container-low rounded-lg text-secondary transition-colors" title="Reset View">
            <RotateCcw size={20} />
          </button>
        </div>

        <div className="bg-surface/90 backdrop-blur shadow-sm px-6 py-3 rounded-full border border-outline-variant/30 pointer-events-auto flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            <span className="text-xs font-semibold text-on-surface-variant">Trực hệ</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border border-dashed border-primary"></span>
            <span className="text-xs font-semibold text-on-surface-variant">Bàng hệ</span>
          </div>
          <div className="h-4 w-px bg-outline-variant/30"></div>
          <span className="text-xs font-bold text-secondary uppercase tracking-widest">Nguyễn Bá Tộc - Thế hệ thứ 12</span>
        </div>
      </div>

      {/* Genealogy Tree Structure */}
      <div className="flex-grow overflow-auto p-12 scrollbar-hide">
        <div className="min-w-max flex flex-col items-center gap-12">
          {/* Level 1: Patriarch */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="w-48 p-4 bg-surface-container-low rounded-xl border-t-4 border-secondary shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 bg-surface-container-highest rounded-full mx-auto mb-3 overflow-hidden border-2 border-secondary/20 p-1">
                  <img 
                    alt="Patriarch" 
                    className="w-full h-full object-cover rounded-full" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQrqSfVfbqx-9XfAbVVq52f52gPeFpPaVZ6tCQPDWB4lYVIn0APEc_O5e5vrwKtAgxfO2gc-6ulHbTMHP9VxzIxWyGFJzSdVpQLn4RaAc_veeT2S6xUvULW-aUPgKkNP4Fel9ZIeISPGcQXRYcgGGuTKo97O4KsKm32QZta0QyiWT6uI-HUhH9FpuSTXbYnrs_s1PzVUJ7-LicKvVIqbjottSnFW5_8e9bF-PBgfCxpJ9t2JKoxI87ryoVn5D7Nv32719OOKOjZLyY" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-headline font-bold text-primary text-lg leading-tight">Nguyễn Bá Khởi</h3>
                <p className="text-[10px] text-on-surface-variant font-medium mt-1 uppercase tracking-tighter">1842 - 1912</p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary text-white text-[8px] px-2 py-0.5 rounded-full font-bold uppercase">Thủy Tổ</div>
              </div>
            </div>
            <div className="w-[1px] bg-outline-variant h-8 mt-4"></div>
          </div>

          {/* Level 2: Children */}
          <div className="relative pt-8">
            <div className="absolute top-0 left-[25%] right-[25%] h-[1px] bg-outline-variant"></div>
            <div className="flex justify-center gap-32">
              {/* Child 1 Cluster */}
              <div className="flex flex-col items-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[1px] bg-outline-variant h-8"></div>
                <div className="w-40 p-3 bg-white rounded-xl shadow-sm text-center border border-outline-variant/20 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 bg-surface-container-highest rounded-full mx-auto mb-2 overflow-hidden border border-outline-variant">
                    <img alt="Child 1" className="w-full h-full object-cover" src="https://picsum.photos/seed/c1/100/100" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="font-headline font-bold text-on-surface text-sm">Nguyễn Bá Tường</h4>
                  <p className="text-[9px] text-on-surface-variant">1870 - 1945</p>
                </div>
                <div className="w-[1px] bg-outline-variant h-8 mt-4"></div>
                {/* Level 3: Grandchildren 1 */}
                <div className="relative pt-8">
                  <div className="absolute top-0 left-[30%] right-[30%] h-[1px] bg-outline-variant"></div>
                  <div className="flex gap-12">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[1px] bg-outline-variant h-8"></div>
                      <div className="w-36 p-3 bg-surface rounded-lg shadow-sm text-center border border-outline-variant/10">
                        <h5 className="font-headline font-bold text-on-surface text-xs">Nguyễn Bá Hải</h5>
                        <p className="text-[8px] text-on-surface-variant">1905 - 1980</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[1px] bg-outline-variant h-8"></div>
                      <div className="w-36 p-3 bg-surface rounded-lg shadow-sm text-center border border-outline-variant/10">
                        <h5 className="font-headline font-bold text-on-surface text-xs">Nguyễn Bá Sơn</h5>
                        <p className="text-[8px] text-on-surface-variant">1908 - 1972</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Child 2 Cluster (Main Line) */}
              <div className="flex flex-col items-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[1px] bg-outline-variant h-8"></div>
                <div className="w-44 p-4 bg-surface-container-high rounded-xl shadow-md text-center border-l-4 border-primary transform scale-105">
                  <div className="w-14 h-14 bg-surface-container-highest rounded-full mx-auto mb-2 overflow-hidden border-2 border-primary/10">
                    <img alt="Child 2" className="w-full h-full object-cover" src="https://picsum.photos/seed/c2/100/100" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="font-headline font-bold text-primary text-base">Nguyễn Bá Minh</h4>
                  <p className="text-[9px] text-on-surface-variant font-bold">1875 - 1950</p>
                </div>
                <div className="w-[1px] bg-primary/30 h-8 mt-4"></div>
                {/* Level 3: Grandchildren 2 */}
                <div className="relative pt-8">
                  <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-primary/20"></div>
                  <div className="flex gap-16">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[1px] bg-primary/20 h-8"></div>
                      <div className="w-40 p-3 bg-white rounded-xl shadow-sm text-center border border-primary/20">
                        <h5 className="font-headline font-bold text-primary text-sm">Nguyễn Bá Trọng</h5>
                        <p className="text-[8px] text-on-surface-variant font-semibold">1912 - 1995</p>
                      </div>
                      <div className="w-[1px] bg-primary/20 h-12 mt-4"></div>
                      {/* Level 4: Current Generation */}
                      <div className="w-40 p-3 bg-primary-fixed text-primary rounded-xl shadow-sm text-center border-b-2 border-primary/40">
                        <h6 className="font-headline font-bold text-sm">Nguyễn Bá Thành</h6>
                        <p className="text-[8px] font-bold">1955 - Hiện tại</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[1px] bg-primary/20 h-8"></div>
                      <div className="w-36 p-3 bg-surface rounded-lg shadow-sm text-center border border-outline-variant/10">
                        <h5 className="font-headline font-bold text-on-surface text-xs">Nguyễn Thị Hoa</h5>
                        <p className="text-[8px] text-on-surface-variant">1915 - 2002</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
