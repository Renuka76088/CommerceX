import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Package, ShoppingCart, BarChart3, 
  PlusCircle, Trash2, Edit3, Image as ImageIcon, 
  Clock, DollarSign, X, Menu, Box, AlertTriangle, Upload
} from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { name: 'Overview', icon: <LayoutDashboard size={20} /> },
    { name: 'Products', icon: <Package size={20} /> },
    { name: 'Inventory', icon: <Box size={20} /> },
    { name: 'Orders', icon: <ShoppingCart size={20} /> },
    { name: 'Revenue', icon: <BarChart3 size={20} /> },
  ];

  // --- Components for Different Sections ---
  
  const OverviewContent = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="$4,250" icon={<DollarSign className="text-pink-500" />} trend="+12%" />
        <StatCard title="Orders" value="128" icon={<ShoppingCart className="text-blue-400" />} trend="+5%" />
        <StatCard title="Total Stock" value="1,450" icon={<Box className="text-purple-400" />} trend="Healthy" />
        <StatCard title="Views" value="8.4k" icon={<BarChart3 className="text-green-400" />} trend="+18%" />
      </div>
      <div className="bg-white p-6 rounded-3xl border border-pink-50 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
        <p className="text-gray-500 italic">No recent notifications.</p>
      </div>
    </div>
  );

  const ProductsContent = () => (
    <div className="bg-white rounded-3xl shadow-sm border border-pink-50 p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h3 className="text-xl font-bold">Product Catalog</h3>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-full flex items-center space-x-2 transition-all shadow-lg shadow-pink-100"
        >
          <PlusCircle size={18} />
          <span>Add New Product</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-pink-50">
              <th className="pb-4">Product Name</th>
              <th className="pb-4">Category</th>
              <th className="pb-4">Price</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-pink-50">
            {[1, 2, 3].map((i) => (
              <tr key={i} className="hover:bg-pink-50/20 transition-colors">
                <td className="py-4 font-semibold flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-400"><ImageIcon size={16}/></div>
                  Rose Collection v{i}
                </td>
                <td className="py-4 text-gray-500">Apparel</td>
                <td className="py-4 font-bold">$49.00</td>
                <td className="py-4"><span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">Active</span></td>
                <td className="py-4 flex gap-2">
                  <button className="p-2 hover:bg-blue-50 text-blue-500 rounded-lg"><Edit3 size={16}/></button>
                  <button className="p-2 hover:bg-red-50 text-red-500 rounded-lg"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const InventoryContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-pink-50">
        <h3 className="text-xl font-bold mb-6">Stock Management</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex items-center justify-between p-4 bg-pink-50/50 rounded-2xl">
              <div>
                <p className="font-bold text-gray-700">Premium Silk Saree {i}</p>
                <p className="text-sm text-gray-500">SKU: PSS-00{i}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-bold">24 Units</p>
                  <p className="text-[10px] uppercase text-gray-400 tracking-wider font-bold">In Stock</p>
                </div>
                <button className="bg-white p-2 rounded-xl border border-pink-100 text-pink-500 hover:bg-pink-50 transition-colors"><Edit3 size={16}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-pink-500 text-white p-6 rounded-3xl flex flex-col justify-between overflow-hidden relative">
        <AlertTriangle className="absolute -right-4 -top-4 w-32 h-32 opacity-10" />
        <div>
          <h3 className="text-xl font-bold mb-2">Low Stock Alert</h3>
          <p className="text-pink-100 text-sm">3 items are running low on stock. Restock soon to avoid losing sales.</p>
        </div>
        <button className="mt-6 bg-white text-pink-500 font-bold py-3 rounded-2xl hover:bg-pink-50 transition-colors">
          View Items
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fff5f7] flex flex-col md:flex-row font-sans text-gray-800">
      
      {/* --- Sidebar Overlay for Mobile --- */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* --- Sidebar --- */}
      <motion.div className={`
        fixed md:sticky top-0 left-0 h-screen w-64 bg-white border-r border-pink-100 shadow-xl z-50 transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">Vendor<span className="text-pink-300 font-medium">Hub</span></h1>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2 text-gray-400"><X /></button>
        </div>
        <nav className="mt-4 px-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => { setActiveTab(item.name); setIsSidebarOpen(false); }}
              className={`w-full flex items-center space-x-3 p-3.5 mb-2 rounded-2xl transition-all ${
                activeTab === item.name 
                ? 'bg-pink-500 text-white shadow-lg shadow-pink-200' 
                : 'text-gray-500 hover:bg-pink-50'
              }`}
            >
              {item.icon}
              <span className="font-semibold">{item.name}</span>
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-8 left-6 right-6 p-4 bg-pink-50 rounded-2xl border border-pink-100">
          <div className="flex items-center space-x-2 text-xs font-bold text-pink-600 mb-1">
            <Clock size={14} /> <span>Admin Status</span>
          </div>
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-tight">Pending Approval</p>
        </div>
      </motion.div>

      {/* --- Main Content --- */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white/80 backdrop-blur-md flex items-center justify-between px-4 md:px-8 border-b border-pink-50 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-2 bg-pink-50 text-pink-500 rounded-xl"><Menu size={20}/></button>
            <h2 className="text-xl font-bold text-gray-700">{activeTab}</h2>
          </div>
          <Link to='/vendor-profile'>
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-bold leading-none">Ayesha's Store</p>
              <span className="text-[10px] text-pink-400 font-bold uppercase">Pro Vendor</span>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-200 border-2 border-white shadow-sm"></div>
          </div>
          
          </Link>
        </header>

        <main className="p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'Overview' && <OverviewContent />}
              {activeTab === 'Products' && <ProductsContent />}
              {activeTab === 'Inventory' && <InventoryContent />}
              {(activeTab === 'Orders' || activeTab === 'Revenue') && (
                <div className="bg-white p-20 rounded-3xl border border-dashed border-pink-200 text-center text-gray-400">
                  Section for {activeTab} is under construction...
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* --- Add Product Modal --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-pink-900/20 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl z-10 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">New Product</h3>
                  <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-pink-50 rounded-full text-gray-400"><X /></button>
                </div>
                
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 ml-1">PRODUCT NAME</label>
                      <input type="text" placeholder="e.g. Silk Dress" className="w-full p-3.5 bg-pink-50/50 border border-pink-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 ml-1">PRICE (USD)</label>
                      <input type="number" placeholder="0.00" className="w-full p-3.5 bg-pink-50/50 border border-pink-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 ml-1">DESCRIPTION</label>
                    <textarea rows="3" className="w-full p-3.5 bg-pink-50/50 border border-pink-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Describe your product..."></textarea>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 ml-1 font-sans">UPLOAD IMAGES</label>
                    <div className="border-2 border-dashed border-pink-200 rounded-2xl p-6 flex flex-col items-center justify-center bg-pink-50/30 hover:bg-pink-50 transition-colors cursor-pointer group">
                      <Upload className="text-pink-400 mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-medium text-pink-600">Click to upload or drag & drop</p>
                      <p className="text-[10px] text-gray-400 mt-1">PNG, JPG up to 10MB (Multiple allowed)</p>
                    </div>
                  </div>

                  <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-200 transition-all active:scale-[0.98]">
                    List Product Now
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StatCard = ({ title, value, icon, trend }) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-pink-50 hover:shadow-md transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-pink-50 rounded-2xl group-hover:scale-110 transition-transform">{icon}</div>
      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${trend.includes('+') ? 'bg-green-100 text-green-600' : 'bg-pink-100 text-pink-600'}`}>
        {trend}
      </span>
    </div>
    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{title}</p>
    <h4 className="text-2xl font-black mt-1 text-gray-800">{value}</h4>
  </div>
);

export default VendorDashboard;