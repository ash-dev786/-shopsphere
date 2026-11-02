import { useNavigate } from 'react-router-dom';
import { Store, Bell, User, LogOut } from 'lucide-react';

function VendorHeader() {
    const navigate = useNavigate();

    return (
        <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-[26px] md:px-[40px] h-[72px] flex items-center justify-between">
                <div 
                   
                    className="flex items-center gap-[10px] "
                >
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
                    <div className="relative flex items-center justify-center h-[38px] w-[38px] md:h-[42px] md:w-[42px] rounded-full bg-transparent border-2 border-gray-200 text-gray-700 shadow-xs cursor-pointer hover:border-[#413EDC] hover:bg-[#EEF2FF]/50 transition-all">
                        <Bell size={18} />
                        <span className="absolute top-[8px] right-[8px] w-[8px] h-[8px] rounded-full bg-[#413EDC]" />
                    </div>

                    <div className="flex items-center gap-[10px] pl-[6px] border-l border-gray-200">
                        <div className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-full bg-[#EEF2FF] text-[#413EDC] flex items-center justify-center font-[700] text-[14px] shadow-xs">
                            <User size={20} />
                        </div>
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-[6px] text-gray-500 hover:text-red-500 text-[13px] font-[600] transition-colors cursor-pointer ml-[4px]"
                        >
                            <LogOut size={18} />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default VendorHeader;
