import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, Mail, Phone, MapPin, ShieldCheck, 
  Key, Bell,  LogOut, Edit2, 
  CheckCircle, Globe, Award, Zap
} from 'lucide-react';

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const primaryColor = 'rgb(31, 77, 90)';

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f5] p-4 md:p-8 font-sans">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-6"
      >
        
        {/* --- Header Section (Cover + Profile Pic) --- */}
        <section className="relative bg-white rounded-[32px] shadow-xl shadow-slate-200/50 overflow-hidden border border-white">
          <div className="h-48 w-full" style={{ backgroundColor: primaryColor, backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="px-8 pb-8">
            <div className="relative flex flex-col md:flex-row items-end -mt-16 gap-6">
              <div className="relative group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-[40px] border-8 border-white bg-slate-200 overflow-hidden shadow-lg">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh" alt="Admin" className="w-full h-full object-cover" />
                </div>
                <button className="absolute bottom-2 right-2 p-2 bg-white rounded-xl shadow-md text-slate-600 hover:text-emerald-500 transition-colors">
                  <Camera size={20} />
                </button>
              </div>
              
              <div className="flex-1 mb-4">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-black text-slate-800">Harsh Vardhan</h1>
                  <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                    <ShieldCheck size={12} /> Verified Admin
                  </span>
                </div>
                <p className="text-slate-500 font-medium">System Architecture & Lead Operations</p>
              </div>

              <div className="flex gap-3 mb-4">
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 px-6 py-3 bg-[#1f4d5a] text-white rounded-2xl font-bold shadow-lg shadow-cyan-900/20 hover:scale-105 transition-transform"
                >
                  <Edit2 size={18} /> {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* --- Left Column: Info --- */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100">
              <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                <Globe size={20} className="text-blue-500" /> Personal Info
              </h3>
              <div className="space-y-4 text-sm">
                <InfoItem icon={<Mail size={16}/>} label="Email" value="harsh.admin@core.com" />
                <InfoItem icon={<Phone size={16}/>} label="Phone" value="+91 98765 43210" />
                <InfoItem icon={<MapPin size={16}/>} label="Location" value="Indore, India" />
                <InfoItem icon={<Award size={16}/>} label="Role" value="Super Administrator" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-[#1f4d5a] p-6 rounded-[32px] text-white overflow-hidden relative group">
                <Zap className="absolute -right-4 -top-4 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-4">System Access</h3>
                <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold opacity-80">
                        <span>Database Security</span>
                        <span>98%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <motion.div initial={{width: 0}} animate={{width: '98%'}} className="bg-emerald-400 h-full" />
                    </div>
                    <p className="text-[10px] mt-4 opacity-60 italic">* Last security audit: 24 hours ago</p>
                </div>
            </motion.div>
          </div>

          {/* --- Right Column: Activity & Security --- */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               <QuickStat label="Managed Vendors" value="1.2k" />
               <QuickStat label="System Uptime" value="99.9%" />
               <QuickStat label="Active Task" value="42" />
            </div>

            {/* Unique Section: Recent Activity Timeline */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black text-slate-800">Admin Activity Log</h3>
                <button className="text-xs font-bold text-[#1f4d5a] hover:underline">View All</button>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:left-[11px] before:w-[2px] before:bg-slate-100">
                <TimelineItem 
                  title="Vendor Approval" 
                  desc="Approved 'Elite Fashion Hub' registration request."
                  time="12 mins ago"
                  icon={<CheckCircle className="text-emerald-500" size={14}/>}
                />
                <TimelineItem 
                  title="System Update" 
                  desc="Updated security patches for V3.4 core database."
                  time="2 hours ago"
                  icon={<Zap className="text-blue-500" size={14}/>}
                />
                <TimelineItem 
                  title="User Revoked" 
                  desc="Access revoked for user #7721 due to inactivity."
                  time="Yesterday"
                  icon={<XCircle className="text-rose-500" size={14}/>}
                />
              </div>
            </motion.div>

            {/* Security Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SecurityCard icon={<Key />} title="Password Policy" status="Strong" color="emerald" />
                <SecurityCard icon={<Bell />} title="Notifications" status="Active" color="blue" />
            </div>
          </div>

        </div>

        {/* --- Logout Section --- */}
        <div className="flex justify-center pt-6">
            <button className="flex items-center gap-2 px-8 py-3 text-rose-500 font-bold hover:bg-rose-50 rounded-2xl transition-colors">
                <LogOut size={20} /> Logout from all devices
            </button>
        </div>

      </motion.div>
    </div>
  );
};

// --- Sub Components ---

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-colors group">
    <div className="p-2.5 bg-slate-100 rounded-xl text-slate-500 group-hover:bg-[#1f4d5a] group-hover:text-white transition-all">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{label}</p>
      <p className="text-slate-700 font-bold">{value}</p>
    </div>
  </div>
);

const QuickStat = ({ label, value }) => (
    <div className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm text-center group hover:border-[#1f4d5a] transition-all">
        <h4 className="text-2xl font-black text-[#1f4d5a] group-hover:scale-110 transition-transform">{value}</h4>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mt-1">{label}</p>
    </div>
);

const TimelineItem = ({ title, desc, time, icon }) => (
  <div className="relative pl-10">
    <div className="absolute left-0 top-1 w-6 h-6 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center z-10">
      {icon}
    </div>
    <div>
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-sm font-black text-slate-800">{title}</h4>
        <span className="text-[10px] font-bold text-slate-400 uppercase">{time}</span>
      </div>
      <p className="text-xs text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const SecurityCard = ({ icon, title, status, color }) => (
    <div className="bg-white p-5 rounded-[28px] border border-slate-100 flex items-center justify-between group hover:shadow-lg transition-all cursor-pointer">
        <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl bg-${color}-50 text-${color}-600`}>{icon}</div>
            <div>
                <p className="text-sm font-bold text-slate-800">{title}</p>
                <p className={`text-[10px] font-black text-${color}-500 uppercase tracking-widest`}>{status}</p>
            </div>
        </div>
        <ChevronRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
    </div>
);

const XCircle = ({size, className}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
);

const ChevronRight = ({size, className}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"/></svg>
);

export default AdminProfile;