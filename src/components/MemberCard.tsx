import React from "react";
import { User } from "lucide-react";
import { motion } from "motion/react";
import { Member } from "../types";

interface MemberCardProps {
  member: Member;
  isPatriarch?: boolean;
  chiIndex?: number;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, isPatriarch, chiIndex }) => {
  const hasChildren = member.children && member.children.length > 0;
  const isDivorced = !!member.isDivorced;
  const hasPreviousMarriage = (member.previousSpouses?.length || 0) > 0;

  return (
    <div className="flex flex-row items-center">
      <motion.div 
        whileHover={{ scale: 1.05, y: -8 }}
        className={`
          relative group cursor-pointer
          ${isPatriarch ? "w-full max-w-[32rem] p-1.5" : (member.spouse && hasPreviousMarriage) ? "min-w-[28rem] lg:min-w-[32rem] p-1" : "min-w-[22rem] lg:min-w-[20rem] p-1"}
          rounded-[2.5rem] bg-gradient-to-br from-primary via-primary-container to-primary-fixed
          ${isPatriarch ? "shadow-[0_50px_100px_-20px_rgba(107,0,8,0.5)] scale-90 lg:scale-110" : "shadow-lg lg:shadow-2xl scale-75 lg:scale-100"}
          transition-all duration-500 overflow-hidden
        `}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[4px] rounded-[calc(2.5rem-2px)]"></div>
        <div className={`
          relative bg-white/95 rounded-[calc(2.5rem-4px)] overflow-hidden
          ${isPatriarch ? "p-8 lg:p-12" : "p-6 lg:p-8 flex flex-col items-center"}
          border border-white/40
        `}>
          {/* Decorative Gold Corners */}
          <div className="absolute top-0 left-0 w-8 lg:w-12 h-8 lg:h-12 border-t-4 border-l-4 border-secondary/40 rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-8 lg:w-12 h-8 lg:h-12 border-t-4 border-r-4 border-secondary/40 rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-secondary/20 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-secondary/20 rounded-br-xl"></div>
          
          {/* Labeling */}
          <div className="absolute top-3 lg:top-4 left-6 lg:left-10 text-[8px] lg:text-[9px] font-headline font-black text-primary tracking-widest uppercase">
            {isPatriarch ? "Khởi Tổ" : (member.generation === 2 ? `Chi thứ ${chiIndex != null ? chiIndex + 1 : "---"}` : `Đời thứ ${member.generation}`)}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
             <div className="flex flex-col items-center gap-3 lg:gap-4">
                <div className={`
                  ${isPatriarch ? "w-20 lg:w-24 h-20 lg:h-24" : "w-16 lg:w-18 h-16 lg:h-18"}
                  rounded-full bg-primary/5 border-2 border-secondary/30
                  p-1 flex items-center justify-center relative shadow-inner z-20 group-hover:scale-110 transition-transform
                  ${member.isDeceased ? "grayscale-[100%] opacity-80" : ""}
                `}>
                  <User className="text-primary/60 group-hover:text-primary transition-colors" size={isPatriarch ? 48 : 32} />
                  
                  {/* Memorial Badge */}
                  {member.isDeceased && (
                    <div className="absolute -top-1 -right-1 w-6 lg:w-8 h-6 lg:h-8 bg-slate-900 border-2 border-white rounded-full flex items-center justify-center shadow-xl ring-2 ring-secondary/20 scale-110">
                       <div className="w-1.5 h-3 lg:h-4 bg-secondary rotate-45 rounded-full shadow-[0_0_8px_rgba(197,160,89,0.8)]"></div>
                    </div>
                  )}

                  <div className={`absolute -bottom-1 lg:-bottom-2 -right-1 lg:-right-2 bg-primary text-white text-[8px] lg:text-[10px] w-6 lg:w-7 h-6 lg:h-7 flex items-center justify-center rounded-full font-black border-2 border-white shadow-xl`}>
                    {member.generation}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3 className={`font-headline font-black tracking-tight text-center ${isPatriarch ? "text-3xl lg:text-4xl text-primary" : "text-lg lg:text-xl text-primary"}`}>
                    {member.name}
                  </h3>
                  {member.isDeceased && (
                    <span className="text-[9px] lg:text-[10px] font-black text-secondary tracking-widest uppercase opacity-70">
                      Húy kỵ: {member.deathDate || "---"}
                    </span>
                  )}
                </div>
             </div>

             {/* Spouses Timeline */}
             {(member.spouse || hasPreviousMarriage) && (
               <div className="flex flex-row lg:flex-row items-center gap-6 lg:gap-8 border-t-2 lg:border-t-0 lg:border-l-2 border-primary/5 pt-6 lg:pt-0 lg:pl-8 mt-4 lg:mt-0">
                  {member.previousSpouses?.map((ex, idx) => (
                    <div key={idx} className="flex items-center gap-4 lg:gap-6">
                      <div className="flex flex-col items-center gap-2 opacity-40 grayscale hover:opacity-70 transition-all translate-y-2">
                         <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                            <User className="text-slate-400" size={18} />
                         </div>
                         <h4 className="text-[10px] lg:text-[11px] font-bold text-primary/60 whitespace-nowrap">{ex}</h4>
                         <span className="text-[7px] uppercase font-bold tracking-widest text-primary/40">Chồng trước</span>
                      </div>
                      <div className="w-4 lg:w-6 h-[2px] border-t-2 border-dashed border-primary/20 mt-2"></div>
                    </div>
                  ))}
                  {member.spouse && (
                    <div className="flex items-center gap-6 lg:gap-8">
                      <div className="flex flex-col items-center gap-2 mt-2">
                         <div className={`w-6 lg:w-8 h-[3px] rounded-full ${isDivorced ? "bg-primary/5 border-t-2 border-dashed border-primary/20" : "bg-secondary/40"}`}></div>
                         {isDivorced ? (
                           <span className="text-[8px] font-black text-primary/30 uppercase tracking-widest">Ly hôn</span>
                         ) : (
                           <span className="text-[8px] font-black text-secondary/60 uppercase tracking-widest whitespace-nowrap">Đang phối</span>
                         )}
                      </div>
                      <div className={`flex flex-col items-center gap-3 lg:gap-4 ${isDivorced ? "opacity-30 grayscale" : ""}`}>
                         <div className={`
                           ${isPatriarch ? "w-20 lg:w-24 h-20 lg:h-24" : "w-16 lg:w-18 h-16 lg:h-18"}
                           rounded-full bg-white border-2 border-secondary/20 shadow-md
                           p-1 flex items-center justify-center relative shadow-inner z-10 transition-all
                         `}>
                           <User className="text-secondary/60" size={isPatriarch ? 48 : 32} />
                         </div>
                         <h3 className={`font-headline font-black tracking-tight ${isPatriarch ? "text-3xl lg:text-4xl text-primary/80" : "text-lg lg:text-xl text-primary/80"}`}>
                            {member.spouse}
                         </h3>
                      </div>
                    </div>
                  )}
               </div>
             )}
          </div>
          <div className="mt-6 lg:mt-8 px-6 lg:px-8 py-3 rounded-2xl bg-primary shadow-lg border border-secondary/30 text-center w-full group-hover:shadow-primary/30 transition-shadow">
             <span className="text-[10px] lg:text-[11px] font-headline font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">
               {isPatriarch ? "VỊ TIỀN KHỞI TỔ DÒNG TỘC" : (member.role || `SƠ ĐỒ CHI HỆ ĐỜI ${member.generation}`)}
             </span>
          </div>
        </div>
      </motion.div>

      {hasChildren && (
        <>
          {/* Connector to the right */}
          <div className="w-12 lg:w-24 h-[2px] bg-gradient-to-r from-secondary to-secondary/30 self-center hidden lg:block"></div>
          
          <div className="relative flex flex-col justify-center pl-10 lg:pl-16 border-l-2 border-primary/10 space-y-12 lg:space-y-24">
            {member.children!.map((child, idx) => (
              <div key={child.id} className="relative flex items-center">
                {/* Horizontal connector into the left of each child */}
                <div className="absolute left-[-40px] lg:left-[-64px] w-10 lg:w-16 h-[2px] bg-gradient-to-r from-primary/20 to-transparent"></div>
                
                <MemberCard member={child} chiIndex={member.generation === 1 ? idx : chiIndex} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
