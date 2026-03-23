import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface border-t border-outline-variant/15 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center px-10 py-12 gap-6 max-w-7xl mx-auto">
        <div className="space-y-2 text-center md:text-left">
          <div className="font-headline text-sm font-bold text-tertiary">NGUYỄN BÁ GIA TỘC</div>
          <p className="font-body text-xs tracking-wide text-on-surface-variant">
            © 2024 Nguyễn Bá Gia Tộc - Gìn giữ cội nguồn, phát huy bản sắc
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-body text-xs tracking-wide text-on-surface-variant hover:text-primary transition-colors" href="#">Ban liên lạc</a>
          <a className="font-body text-xs tracking-wide text-on-surface-variant hover:text-primary transition-colors" href="#">Điều khoản gia tộc</a>
          <a className="font-body text-xs tracking-wide text-on-surface-variant hover:text-primary transition-colors" href="#">Hướng dẫn đóng góp</a>
          <a className="font-body text-xs tracking-wide text-on-surface-variant hover:text-primary transition-colors" href="#">Liên hệ hỗ trợ</a>
        </div>
      </div>
    </footer>
  );
};
