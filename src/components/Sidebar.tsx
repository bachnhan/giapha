import React from 'react';
import { GitBranch, Users, Calendar, Wallet, UserPlus } from 'lucide-react';
import { Screen } from '../types';

interface SidebarProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentScreen, setScreen }) => {
  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 border-r border-primary/10 bg-background z-50 pt-28 overflow-y-auto">
      <div className="px-8 mb-12">
        <div className="w-16 h-16 bg-primary rounded-2xl mb-4 flex items-center justify-center border-4 border-secondary/20 shadow-xl overflow-hidden group">
           <GitBranch className="text-secondary group-hover:scale-110 transition-transform" size={32} />
        </div>
        <h2 className="font-headline text-2xl font-black text-primary leading-[1] tracking-tighter">
          GIA PHẢ <br/>
          <span className="text-secondary text-3xl">NGUYỄN BÁ</span>
        </h2>
        <div className="w-12 h-1 bg-secondary mt-3 rounded-full"></div>
      </div>

      <nav className="flex flex-col gap-2 px-4">
        {[
          { id: 'genealogy', label: 'Bản đồ gia phả', icon: GitBranch },
          { id: 'profile', label: 'Thành viên', icon: Users },
          { id: 'events', label: 'Ngày giỗ chạp', icon: Calendar },
        ].map((item) => (
          <button 
            key={item.id}
            onClick={() => setScreen(item.id as Screen)}
            className={`
              rounded-xl px-5 py-4 flex items-center gap-4 transition-all duration-300
              ${currentScreen === item.id 
                ? 'bg-primary text-white shadow-[0_8px_20px_-4px_rgba(107,0,8,0.4)] translate-x-1' 
                : 'text-primary/60 hover:bg-primary/5 hover:text-primary'}
            `}
          >
            <item.icon size={20} strokeWidth={currentScreen === item.id ? 2.5 : 2} />
            <span className="font-headline text-sm font-bold">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-8 text-center">
        <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.4em]">Di Sản Dòng Tộc &copy; 2026</p>
      </div>
    </aside>
  );
};
