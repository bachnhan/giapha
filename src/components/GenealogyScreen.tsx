import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus, Maximize2, BookOpen } from "lucide-react";
import { motion, useAnimation } from "motion/react";
import { familyTree } from "../data/mockData";
import { MemberCard } from "./MemberCard";

export const GenealogyScreen: React.FC = () => {
  const [scale, setScale] = useState(0.3);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({ scale, transition: { duration: 0.4, ease: "easeOut" } });
  }, [scale, controls]);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.05));
  
  const handleReset = () => {
    setScale(0.3);
    controls.start({ 
      x: 0, 
      y: 0, 
      scale: 0.3,
      transition: { duration: 0.8, ease: "circOut" } 
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="lg:pl-64 h-screen bg-[#FDF9F3] flex flex-col relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-32 left-10 pointer-events-none opacity-[0.015] select-none z-0">
         <h1 className="font-headline font-black text-[12vw] leading-none text-primary uppercase">NGUYỄN BÁ</h1>
      </div>

      {/* Top Header Badge */}
      <div className="absolute top-24 inset-x-0 flex justify-center z-50 pointer-events-none">
         <div className="px-10 py-3 bg-white/80 backdrop-blur-md border border-primary/10 rounded-full shadow-2xl flex items-center gap-6 pointer-events-auto">
            <div className="flex items-center gap-2 text-primary">
               <BookOpen size={16} />
               <span className="text-xs font-black uppercase tracking-widest">Bản Đồ Gia Phả</span>
            </div>
            <div className="h-4 w-px bg-primary/10"></div>
            <span className="text-[10px] font-bold text-primary/40"> {(scale * 100).toFixed(0)}%</span>
         </div>
      </div>

      {/* Tree Canvas */}
      <div 
        ref={containerRef}
        className="flex-grow w-full h-full relative cursor-grab active:cursor-grabbing overflow-hidden outline-none flex items-center justify-center z-10"
      >
        <motion.div
           drag
           dragConstraints={{ left: -10000, right: 10000, top: -10000, bottom: 10000 }}
           dragElastic={0.05}
           animate={controls}
           className="min-w-max flex justify-center items-center cursor-auto"
           style={{ transformOrigin: "center center" }}
        >
          <div className="p-80 pointer-events-auto" onPointerDown={(e) => e.stopPropagation()}>
            <MemberCard member={familyTree} isPatriarch={true} />
          </div>
        </motion.div>
      </div>

      {/* HUD - Floating Right Buttons */}
      <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-6">
         <div className="bg-white/95 backdrop-blur-xl shadow-2xl border border-primary/10 rounded-3xl p-3 flex flex-col gap-3">
            <button 
              onClick={handleZoomIn}
              className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary text-secondary shadow-lg hover:scale-110 active:scale-95 transition-all"
            >
              <Plus size={28} strokeWidth={3} />
            </button>
            <div className="h-px bg-primary/5"></div>
            <button 
              onClick={handleZoomOut}
              className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/5 text-primary shadow-md hover:bg-primary/10 transition-all"
            >
              <Minus size={28} strokeWidth={3} />
            </button>
            <div className="h-px bg-primary/5"></div>
            <button 
              onClick={handleReset}
              className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white text-primary hover:bg-primary hover:text-white transition-all shadow-sm border border-primary/10"
              title="Quay về Ông Bà Nội"
            >
              <Maximize2 size={24} />
            </button>
         </div>
      </div>
    </motion.div>
  );
};
