import { Search, Sparkles, User, ShoppingBag } from 'lucide-react';
import logo from '../assets/logos/logo.png';

function Header() {
    return (
        <header className="w-full bg-white border-b border-gray-100 shadow-md py-[22px] px-[16px] md:px-[40px]">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-[16px]">
                
                <div className="flex items-center shrink-0">
                    <div className="flex items-center justify-center overflow-hidden rounded-[12px] h-[35px] w-[35px] md:h-[40px] md:w-[40px] bg-gradient-to-r from-[#413EDC] to-[#3FE1FD] p-[8px]">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-[14px] h-[14px] object-contain md:h-[16px] md:w-[16px]"
                        />
                    </div>

                    <div className="flex flex-col ml-[8px] gap-[2px]">
                        <h1 className="text-black font-[700] italic text-[14px] md:text-[15px]">
                            ShopSphere
                        </h1>
                    
                    </div>
                </div>
                <div className="flex-1 max-w-[500px] mx-[16px]">
                    <div className="flex items-center w-full h-[38px] md:h-[42px] px-[14px] bg-gray-50 border border-gray-200 rounded-[14px] shadow-sm focus-within:bg-white transition-all gap-[10px]">
                        <Search size={18} className="text-gray-400 shrink-0" />
                        <input
                            type="text"
                            placeholder="Search products, vendors, or categories..."
                            className="w-full h-full bg-transparent outline-none text-[13px] md:text-[14px] text-gray-800 placeholder:text-gray-400"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-[12px] shrink-0">
                    <div className="flex items-center justify-center h-[38px] w-[38px] md:h-[42px] md:w-[42px] rounded-full bg-gradient-to-r from-[#413EDC] to-[#3FE1FD] text-white shadow-md cursor-pointer hover:opacity-90 transition-all">
                        <ShoppingBag size={18} />
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;