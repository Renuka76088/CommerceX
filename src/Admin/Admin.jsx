import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, ShoppingBag, PieChart, CheckCircle2, XCircle, 
  Menu, Bell, Search, TrendingUp, DollarSign, 
  ShieldCheck, Package, LayoutDashboard, ChevronRight, X
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Mon', revenue: 4000 }, { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 5000 }, { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 1890 }, { name: 'Sat', revenue: 2390 },
  { name: 'Sun', revenue: 3490 },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default closed for mobile

  const primaryColor = 'rgb(31, 77, 90)';

  const menuItems = [
    { name: 'Overview', icon: <LayoutDashboard size={20} /> },
    { name: 'Approve Vendors', icon: <ShieldCheck size={20} /> },
    { name: 'Manage Users', icon: <Users size={20} /> },
    { name: 'Products', icon: <Package size={20} /> },
    { name: 'Orders', icon: <ShoppingBag size={20} /> },
    { name: 'Revenue', icon: <PieChart size={20} /> },
  ];

  // --- Mobile Sidebar Overlay ---
  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      <div className="p-6 mb-4 flex justify-between items-center">
        <h1 className="font-black tracking-tighter text-2xl text-white">ADMIN.CORE</h1>
        <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-white/50 hover:text-white">
          <X size={24} />
        </button>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => { setActiveTab(item.name); setIsSidebarOpen(false); }}
            className={`w-full flex items-center p-3.5 rounded-xl transition-all ${
              activeTab === item.name 
              ? 'bg-white/10 shadow-inner border-l-4 border-white text-white' 
              : 'hover:bg-white/5 text-slate-300'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10">
        <div className="bg-white/5 p-3 rounded-xl">
          <p className="text-[10px] uppercase font-bold text-slate-400">Logged in as</p>
          <p className="text-sm font-bold text-white">Super Admin</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] flex overflow-hidden">
      
      {/* Desktop Sidebar (Permanent) */}
      <aside className="hidden md:flex w-64 bg-[#1f4d5a] flex-col shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar (Animated Drawer) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-72 bg-[#1f4d5a] z-50 md:hidden shadow-2xl"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 md:hidden"
            >
              <Menu size={24} />
            </button>
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input type="text" placeholder="Search data..." className="bg-slate-50 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#1f4d5a]/20 w-64" />
            </div>
            {/* Mobile Search Icon Only */}
            <button className="lg:hidden p-2 text-slate-500"><Search size={20}/></button>
          </div>
          
          <div className="flex items-center gap-3 md:gap-6">
            <div className="relative">
              <Bell size={20} className="text-slate-500" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 border-2 border-white rounded-full text-[8px] flex items-center justify-center text-white font-bold">5</span>
            </div>
            <div className="h-8 w-[1px] bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-3">
                <Link to='/admin-profile'>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-800 leading-tight">Harsh Admin</p>
                <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Online</p>
              </div>
                
                </Link>
              <div className="w-10 h-10 rounded-xl bg-[#1f4d5a] flex items-center justify-center text-white font-bold border-2 border-slate-100 shadow-sm shrink-0">H</div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-4 md:p-8">
          <header className="mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">{activeTab}</h2>
            <p className="text-slate-400 text-sm">Real-time system overview and controls.</p>
          </header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'Overview' && (
                <div className="space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <StatCard title="Revenue" value="$128k" icon={<DollarSign color="white"/>} color={primaryColor} />
                    <StatCard title="Vendors" value="452" icon={<ShieldCheck color="white"/>} color="#10b981" />
                    <StatCard title="Users" value="12k" icon={<Users color="white"/>} color="#3b82f6" />
                    <StatCard title="Pending" value="14" icon={<Clock color="white"/>} color="#f59e0b" />
                  </div>

                  {/* Chart and Activity */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                      <h3 className="text-lg font-bold text-slate-800 mb-6">Performance Graph</h3>
                      <div className="h-[250px] md:h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={data}>
                            <defs>
                              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={primaryColor} stopOpacity={0.1}/>
                                <stop offset="95%" stopColor={primaryColor} stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                            <Tooltip />
                            <Area type="monotone" dataKey="revenue" stroke={primaryColor} fillOpacity={1} fill="url(#colorRev)" strokeWidth={3} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <h3 className="text-lg font-bold text-slate-800 mb-6">Latest Actions</h3>
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">V</div>
                              <div>
                                <p className="text-xs font-bold text-slate-700">New Vendor Request</p>
                                <p className="text-[10px] text-slate-400">ID: #VEN-09{i}</p>
                              </div>
                            </div>
                            <ChevronRight size={14} className="text-slate-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Approve Vendors' && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                  <div className="p-4 md:p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h3 className="text-lg font-bold text-slate-800">Pending Approvals</h3>
                    <input type="text" placeholder="Search..." className="w-full sm:w-auto text-sm border border-slate-200 rounded-lg px-4 py-2 focus:outline-none" />
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[700px]">
                      <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                        <tr>
                          <th className="px-6 py-4">Vendor Details</th>
                          <th className="px-6 py-4">Category</th>
                          <th className="px-6 py-4">Verification</th>
                          <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[1, 2, 3].map((i) => (
                          <tr key={i} className="hover:bg-slate-50/50">
                            <td className="px-6 py-4">
                              <p className="font-bold text-slate-700 text-sm">Mega Store {i}</p>
                              <p className="text-[11px] text-slate-400 font-medium tracking-tight">reg_user_{i}@shop.com</p>
                            </td>
                            <td className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase">Lifestyle</td>
                            <td className="px-6 py-4">
                              <span className="text-[10px] font-bold text-[#1f4d5a] bg-slate-100 px-2 py-1 rounded cursor-pointer hover:bg-slate-200 transition-colors">TAX_ID_0{i}.PDF</span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex justify-center gap-2">
                                <button className="p-2 bg-emerald-500 text-white rounded-lg hover:shadow-lg transition-all"><CheckCircle2 size={16} /></button>
                                <button className="p-2 bg-rose-500 text-white rounded-lg hover:shadow-lg transition-all"><XCircle size={16} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Other sections can follow the same responsive pattern */}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all relative group overflow-hidden">
    <div className="flex justify-between items-center relative z-10">
      <div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-tighter mb-1 opacity-70">{title}</p>
        <h4 className="text-2xl font-black text-slate-800 tracking-tight">{value}</h4>
      </div>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6 group-hover:scale-110" style={{ backgroundColor: color }}>
        {icon}
      </div>
    </div>
    <div className="mt-4 flex items-center text-[10px] font-bold">
      <div className="flex items-center text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">
        <TrendingUp size={12} className="mr-1" /> 14%
      </div>
      <span className="text-slate-400 ml-2 font-medium italic opacity-60">vs last period</span>
    </div>
  </div>
);

const Clock = ({size, color}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export default Admin;