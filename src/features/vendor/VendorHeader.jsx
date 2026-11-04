import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, Bell, LogOut, CheckCircle, Package, AlertTriangle } from 'lucide-react';
import userAuthStore from '@/store/authStore';
import vendorOrderStore from '@/store/vendorOrderStore';

function VendorHeader() {
    const navigate = useNavigate();
    const [showNotifications, setShowNotifications] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const dropdownRef = useRef(null);

    const { logout } = userAuthStore();
    const { notifications, unreadCount, getNotifications, markAllAsRead } = vendorOrderStore();

    useEffect(() => {
        getNotifications();
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [getNotifications]);

    const handleConfirmLogout = async () => {
        setShowLogoutModal(false);
        await logout();
        navigate('/');
    };

    return (
        <>
            <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-[1440px] mx-auto px-[26px] md:px-[40px] h-[72px] flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                        <div className="w-[40px] h-[40px] rounded-[12px] bg-gradient-to-tr from-[#413EDC] to-[#3FE1FD] flex items-center justify-center text-white shadow-sm">
                            <Store size={22} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[16px] md:text-[18px] font-[800] text-gray-900 tracking-tight">
                                ShopSphere
                            </span>
                            <span className="text-[10px] font-[700] text-[#413EDC] uppercase tracking-wider">
                                Vendor Portal
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-[14px]">
                        <div className="relative" ref={dropdownRef}>
                            <button
                                type="button"
                                onClick={() => setShowNotifications(!showNotifications)}
                                className="relative flex items-center justify-center h-[38px] w-[38px] md:h-[42px] md:w-[42px] rounded-full bg-transparent border-2 border-gray-200 text-gray-700 shadow-xs cursor-pointer hover:border-[#413EDC] hover:bg-[#EEF2FF]/50 transition-all"
                            >
                                <Bell size={18} />
                                {unreadCount > 0 && (
                                    <span className="absolute -top-[2px] -right-[2px] bg-[#413EDC] text-white text-[10px] font-[800] w-[18px] h-[18px] rounded-full flex items-center justify-center shadow-xs border-2 border-white">
                                        {unreadCount}
                                    </span>
                                )}
                            </button>

                            {showNotifications && (
                                <div className="absolute right-0 mt-[12px] w-[300px] sm:w-[340px] bg-white rounded-[20px] border border-gray-100 shadow-2xl p-[16px] z-50 flex flex-col gap-[12px] animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="flex items-center justify-between border-b border-gray-100 pb-[10px]">
                                        <span className="text-[14px] font-[800] text-gray-900">Notifications</span>
                                        <span onClick={markAllAsRead} className="text-[11px] font-[700] text-[#413EDC] cursor-pointer hover:underline">Mark all read</span>
                                    </div>

                                    <div className="flex flex-col gap-[8px] max-h-[300px] overflow-y-auto no-scrollbar">
                                        {notifications.length === 0 ? (
                                            <span className="text-[12px] text-gray-500 text-center py-4">No new notifications</span>
                                        ) : (
                                            notifications.map((item) => (
                                                <div key={item._id} onClick={() => navigate('/vendordashboard')} className={`flex items-start gap-[10px] p-[10px] rounded-[12px] transition-colors cursor-pointer ${item.isRead ? 'bg-white' : 'bg-[#F8F9FF] hover:bg-[#EEF2FF]'}`}>
                                                    <div className="w-[32px] h-[32px] rounded-[10px] bg-[#EEF2FF] text-[#413EDC] flex items-center justify-center shrink-0 mt-[2px]">
                                                        {item.type === 'order' && <Package size={16} />}
                                                    </div>
                                                    <div className="flex flex-col gap-[2px] flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-[13px] font-[800] text-gray-900">{item.title}</span>
                                                        </div>
                                                        <span className="text-[12px] text-gray-500 font-[500] leading-tight">{item.desc}</span>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center pl-[6px] border-l border-gray-200">
                            <button
                                type="button"
                                onClick={() => setShowLogoutModal(true)}
                                className="flex items-center gap-[6px] bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white px-[14px] md:px-[18px] py-[8px] md:py-[10px] rounded-[12px] text-[12px] md:text-[13px] font-[700] shadow-md shadow-red-500/20 transition-all cursor-pointer"
                            >
                                <LogOut size={16} />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {showLogoutModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-[16px] bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
                    <div className="bg-white rounded-[24px] border border-gray-100 p-[24px] md:p-[32px] w-full max-w-[400px] shadow-2xl flex flex-col items-center text-center gap-[16px]">
                        <div className="w-[50px] h-[50px] rounded-full bg-red-50 text-red-500 flex items-center justify-center shadow-xs">
                            <AlertTriangle size={24} />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <h3 className="text-[18px] md:text-[20px] font-[800] text-gray-900">Are you sure you want to logout?</h3>
                            <p className="text-[13px] font-[500] text-gray-500 leading-relaxed">You will need to enter your credentials again to access your vendor portal.</p>
                        </div>
                        <div className="flex items-center justify-center gap-[12px] w-full pt-[8px]">
                            <button type="button" onClick={() => setShowLogoutModal(false)} className="flex-1 px-[16px] py-[10px] rounded-[12px] text-[13px] font-[700] text-gray-700 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all">Cancel</button>
                            <button type="button" onClick={handleConfirmLogout} className="flex-1 px-[16px] py-[10px] rounded-[12px] text-[13px] font-[700] text-white bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 shadow-md shadow-red-500/20 cursor-pointer transition-all">Yes, Logout</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default VendorHeader;