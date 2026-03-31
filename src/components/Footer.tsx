import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FDFBF7] border-t border-primary/10 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center px-10 py-12 gap-6 max-w-7xl mx-auto">
        <div className="space-y-1 text-center md:text-left">
          <div className="font-headline text-sm font-black text-primary">GIA PHẢ NGUYỄN BÁ</div>
          <p className="font-label text-[10px] tracking-widest text-primary/40 uppercase">
            © 2026 Nguyễn Bá Dòng Tộc - Gìn giữ cội nguồn, phát huy bản sắc
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          <a 
            className="font-headline text-xs font-black tracking-widest text-primary/60 hover:text-secondary transition-colors uppercase" 
            href="mailto:nhannhb92@gmail.com"
          >
            Ban liên lạc
          </a>
          <a 
            className="font-headline text-xs font-black tracking-widest text-primary/60 hover:text-secondary transition-colors uppercase" 
            href="mailto:nhannhb92@gmail.com"
          >
            Liên hệ hỗ trợ
          </a>
        </div>
      </div>
    </footer>
  );
};
