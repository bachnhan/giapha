import React from 'react';
import { GitBranch, Users, Calendar, Wallet, UserPlus } from 'lucide-react';
import { Screen } from '../types';

interface SidebarProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentScreen, setScreen }) => {
  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 border-r border-outline-variant/30 bg-surface z-40 pt-24 overflow-y-auto">
      <div className="px-6 mb-8 text-center">
        <div className="w-20 h-20 bg-surface-container-highest rounded-full mx-auto mb-3 flex items-center justify-center border border-outline-variant/30 overflow-hidden">
          <img 
            alt="Emblem" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-I0cDnGEIGgVHODLP3Wm6aiZ1Hj_CzvGXG9rn-YJrSyXB2NCb1sBLhH5Ok4BLoqfjkcKuTrdfcmR37nZACceLtRbIYfUKOVwvuxjKj3FH60Uhr5szY7pI2enM1x7WQFVuPoJvRejd5-Hjtdg7mhKoDO1so2CR5CToPEsfsybyHrajuuVhtHNSUT-DqiD7SYeLGsD_ytxzqiz7_mJLEbhaKVMtKkAdJ-QbJUp1f1Wd5bfwXwWNIb7Tjn5Kl3exdejrluB-1iVx9XTj" 
            referrerPolicy="no-referrer"
          />
        </div>
        <h2 className="font-headline text-xl font-bold text-primary">Nguyễn Bá Gia Tộc</h2>
        <p className="font-body text-xs text-on-surface-variant">Hành trình di sản</p>
      </div>

      <nav className="flex flex-col gap-1 px-2">
        <button 
          onClick={() => setScreen('genealogy')}
          className={`rounded-lg mx-2 my-1 px-4 py-3 flex items-center gap-3 transition-all ${currentScreen === 'genealogy' ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
        >
          <GitBranch size={20} />
          <span className="font-body text-sm font-medium">Cây gia phả</span>
        </button>
        <button 
          onClick={() => setScreen('profile')}
          className={`rounded-lg mx-2 my-1 px-4 py-3 flex items-center gap-3 transition-all ${currentScreen === 'profile' ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
        >
          <Users size={20} />
          <span className="font-body text-sm font-medium">Danh sách thành viên</span>
        </button>
        <button 
          onClick={() => setScreen('events')}
          className={`rounded-lg mx-2 my-1 px-4 py-3 flex items-center gap-3 transition-all ${currentScreen === 'events' ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
        >
          <Calendar size={20} />
          <span className="font-body text-sm font-medium">Lịch sử kiện</span>
        </button>
        <button 
          onClick={() => setScreen('contributions')}
          className={`rounded-lg mx-2 my-1 px-4 py-3 flex items-center gap-3 transition-all ${currentScreen === 'contributions' ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
        >
          <Wallet size={20} />
          <span className="font-body text-sm font-medium">Đóng góp</span>
        </button>
      </nav>

      <div className="mt-auto p-4">
        <button className="w-full py-3 bg-surface-container-high border border-outline-variant text-primary rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors">
          <UserPlus size={18} />
          Thêm thành viên mới
        </button>
      </div>
    </aside>
  );
};
