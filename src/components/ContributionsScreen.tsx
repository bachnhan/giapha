import React from 'react';
import { Wallet, History, CreditCard, Heart, Plus, Search, Filter, ArrowUpRight, ShieldCheck, Info } from 'lucide-react';
import { motion } from 'motion/react';

export const ContributionsScreen: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="lg:ml-64 pt-28 pb-12 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Header & Stats Bento */}
      <header className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-surface-container-low rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 border border-outline-variant/20">
          <div className="flex-1">
            <h1 className="font-headline text-4xl font-black text-primary mb-4">Quỹ Gia Tộc <br/>Nguyễn Bá</h1>
            <p className="text-on-surface-variant max-w-md text-sm leading-relaxed">
              Mọi đóng góp của con cháu đều được ghi nhận công đức, phục vụ cho việc duy tu nhà thờ, tổ chức đại lễ và khuyến học cho thế hệ trẻ.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col gap-3">
            <button className="lacquered-gradient px-8 py-4 rounded-xl text-white font-bold shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all">
              <Plus size={20} />
              Đóng góp ngay
            </button>
            <button className="bg-white border border-outline-variant px-8 py-4 rounded-xl text-primary font-bold shadow-sm hover:bg-surface-container-high transition-all flex items-center justify-center gap-3">
              <History size={20} />
              Lịch sử của tôi
            </button>
          </div>
        </div>

        <div className="bg-tertiary-container text-white rounded-2xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Wallet size={200} />
          </div>
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-on-tertiary-container">Tổng quỹ hiện tại</span>
            <div className="text-4xl font-headline font-black mt-2">1.250.000.000đ</div>
            <div className="mt-4 flex items-center gap-2 text-secondary-fixed font-bold text-sm">
              <ArrowUpRight size={16} />
              +12% so với năm ngoái
            </div>
          </div>
          <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
            <div className="flex justify-between text-xs font-medium">
              <span className="opacity-70">Mục tiêu năm 2024:</span>
              <span>1.500.000.000đ</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="w-[83%] h-full bg-secondary-fixed"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
        {/* Left: Transaction History */}
        <div className="xl:col-span-3 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant/20 pb-6">
            <h2 className="font-headline text-2xl font-bold text-tertiary flex items-center gap-3">
              <History className="text-secondary" size={24} />
              Bảng Vàng Công Đức
            </h2>
            <div className="flex w-full md:w-auto gap-3">
              <div className="relative flex-grow md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
                <input 
                  className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  placeholder="Tìm kiếm thành viên..." 
                  type="text" 
                />
              </div>
              <button className="p-2 border border-outline-variant/30 rounded-lg hover:bg-surface-container-low transition-all">
                <Filter size={20} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4">
              <thead>
                <tr className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                  <th className="px-6 py-2">Thành viên</th>
                  <th className="px-6 py-2">Nội dung đóng góp</th>
                  <th className="px-6 py-2">Số tiền/Vật phẩm</th>
                  <th className="px-6 py-2">Ngày ghi nhận</th>
                  <th className="px-6 py-2">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Nguyễn Bá Thành', content: 'Quỹ Duy tu Nhà thờ', amount: '50.000.000đ', date: '12/03/2024', status: 'GHI DANH' },
                  { name: 'Nguyễn Bá Minh', content: 'Quỹ Khuyến học', amount: '20.000.000đ', date: '10/03/2024', status: 'GHI DANH' },
                  { name: 'Lê Thị Diệu', content: 'Quỹ Đại lễ Tộc', amount: '10.000.000đ', date: '05/03/2024', status: 'GHI DANH' },
                  { name: 'Trần Thị Minh Khai', content: 'Quỹ Khuyến học', amount: '5.000.000đ', date: '01/03/2024', status: 'GHI DANH' },
                ].map((item, i) => (
                  <tr key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                    <td className="px-6 py-4 rounded-l-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/20">
                          <img alt={item.name} src={`https://picsum.photos/seed/${item.name}/100/100`} referrerPolicy="no-referrer" />
                        </div>
                        <span className="font-bold text-on-surface group-hover:text-primary transition-colors">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{item.content}</td>
                    <td className="px-6 py-4 font-headline font-black text-primary">{item.amount}</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{item.date}</td>
                    <td className="px-6 py-4 rounded-r-xl">
                      <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full uppercase tracking-tighter">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Info & Methods */}
        <div className="space-y-8">
          <div className="bg-surface-container-high rounded-2xl p-6 border border-outline-variant/20">
            <h3 className="font-headline font-bold text-tertiary mb-6 flex items-center gap-2">
              <CreditCard size={18} />
              Thông tin chuyển khoản
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-white rounded-xl border border-outline-variant/30">
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Ngân hàng</p>
                <p className="font-bold text-primary">Vietcombank (VCB)</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-outline-variant/30">
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Số tài khoản</p>
                <div className="flex justify-between items-center">
                  <p className="font-headline font-black text-lg">1023456789</p>
                  <button className="text-secondary text-xs font-bold hover:underline">Sao chép</button>
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-outline-variant/30">
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Chủ tài khoản</p>
                <p className="font-bold text-on-surface uppercase">NGUYEN BA THANH CONG</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20 flex items-start gap-3">
              <Info className="text-primary shrink-0" size={16} />
              <p className="text-[10px] text-on-surface-variant leading-relaxed">
                Nội dung chuyển khoản: <br/>
                <strong className="text-primary">HoTen_SoDienThoai_MucDich</strong>
              </p>
            </div>
          </div>

          <div className="bg-secondary/5 rounded-2xl p-6 border-l-4 border-secondary">
            <h3 className="font-headline font-bold text-secondary flex items-center gap-2 mb-4">
              <ShieldCheck size={18} />
              Cam kết minh bạch
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Mọi khoản thu chi đều được Ban Trị sự dòng họ cập nhật công khai hàng tháng trên trang web và báo cáo chi tiết trong các kỳ họp tộc.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
