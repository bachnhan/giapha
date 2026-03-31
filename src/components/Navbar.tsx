import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../types';

interface NavbarProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentScreen, setScreen }) => {
  return (
    <nav className="fixed top-0 w-full z-[60] bg-background/90 backdrop-blur-xl border-b border-primary/10 shadow-sm">
      <div className="flex justify-between items-center px-10 py-5 max-w-full mx-auto">
        <div 
          className="font-headline text-2xl font-black text-primary tracking-tighter cursor-pointer hover:text-secondary transition-colors"
          onClick={() => setScreen('genealogy')}
        >
          GiaPhả<span className="text-secondary ml-1">NguyễnBá</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-12">
          {[
            { id: 'genealogy', label: 'Bản đồ gia phả' },
            { id: 'profile', label: 'Thành viên' },
            { id: 'events', label: 'Ngày giỗ chạp' },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setScreen(item.id as Screen)}
              className={`
                font-headline text-sm font-black transition-all relative py-2
                ${currentScreen === item.id 
                  ? 'text-primary' 
                  : 'text-primary/40 hover:text-primary'}
              `}
            >
              {item.label}
              {currentScreen === item.id && (
                <motion.div 
                  layoutId="nav-underline-fixed"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary shadow-[0_0_8px_rgba(197,160,89,0.5)]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {/* Static Archival Mode - All interactive controls removed */}
        </div>
      </div>
    </nav>
  );
};
