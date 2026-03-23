import React from 'react';
import { Menu, Search, User, LogIn } from 'lucide-react';
import { Screen } from '../types';

interface NavbarProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentScreen, setScreen }) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-header shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div 
          className="font-headline text-2xl font-black text-primary tracking-tight cursor-pointer"
          onClick={() => setScreen('genealogy')}
        >
          Nguyễn Bá Gia Tộc
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setScreen('genealogy')}
            className={`font-headline text-lg font-bold transition-colors ${currentScreen === 'genealogy' ? 'text-primary border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Cây gia phả
          </button>
          <button 
            onClick={() => setScreen('profile')}
            className={`font-headline text-lg font-bold transition-colors ${currentScreen === 'profile' ? 'text-primary border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Thành viên
          </button>
          <button 
            onClick={() => setScreen('events')}
            className={`font-headline text-lg font-bold transition-colors ${currentScreen === 'events' ? 'text-primary border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Lịch sử kiện
          </button>
          <button 
            onClick={() => setScreen('contributions')}
            className={`font-headline text-lg font-bold transition-colors ${currentScreen === 'contributions' ? 'text-primary border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Đóng góp
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="px-4 py-2 text-primary font-headline font-bold hover:bg-surface-container-low transition-colors duration-300 flex items-center gap-2">
            <LogIn size={18} />
            <span className="hidden sm:inline">Đăng nhập</span>
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
            <img 
              alt="User" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6-5erBUh4DPm8fDQuCVNqGz1Y4sYqIP3GDPLPsFOU_cqXkDUG6rS2Yl9bhoMKUq5jwP2l9bmKDYUerTjjwvWSulYumw4WxpOBHrEErPBjmjz9d6c90cwDpcr3h_aiI65D8ho09PipqG52gLNMr-ppcJsvcpjDo8O7z-4hyHU9RBm5hcb-1ljiTVvFxh3TK_4FeQI68heboqDAF2fqgOBhiZVt2PygfAD-OdL4QHUBdQVq_ZtNZjteJiAw2uPk7B08KT8ftSZWrliB" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
