import { Sparkles, Zap, ShieldCheck, Globe } from 'lucide-react';

function Banner() {
    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#E0E7FF] py-[40px] md:py-[70px] px-[20px] md:px-[60px] lg:px-[100px]">
            <div className="absolute top-[20px] right-[20px] md:top-[40px] md:right-[40px] text-[#413EDC]/15 pointer-events-none">
                <Globe className="w-[120px] h-[120px] md:w-[200px] md:h-[200px]" />
            </div>

            <div className="relative z-10 max-w-[900px] flex flex-col items-start">
                <div className="inline-flex items-center gap-[8px] px-[12px] py-[6px] rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 text-[11px] md:text-[13px] font-[500] shadow-sm mb-[20px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#413EDC]"></span>
                    <span>Nationwide Direct Sourcing</span>
                    <span className="text-gray-300">•</span>
                    <span>100% Cash on Delivery</span>
                </div>

                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-[800] text-gray-900 leading-[1.15] tracking-tight">
                    Discover Pakistan’s Finest <br className="hidden sm:block" />
                    Artisans & Tech Stores
                </h1>

                <p className="mt-[16px] text-[14px] sm:text-[16px] md:text-[18px] text-[#64748B] max-w-[700px] leading-[1.5]">
                    Direct from verified merchants in Karachi, Lahore, and Islamabad with Cash on Delivery and buyer security assurance.
                </p>
                <div className="mt-[28px] md:mt-[36px] flex flex-col sm:flex-row items-start sm:items-center gap-[16px] w-full flex-wrap">
                    <button className="flex items-center justify-center gap-[8px] shadow-xl bg-[#413EDC] hover:bg-[#3633b8] text-white font-[600] text-[14px] md:text-[15px] px-[24px] py-[12px] md:py-[14px] rounded-[14px] shadow-lg shadow-[#413EDC]/25 transition-all cursor-pointer">
                        <Sparkles className="w-[18px] h-[18px]" />
                        Shop Trending Now
                    </button>
                    <button className="flex items-center justify-center gap-[8px] bg-white hover:bg-gray-50 text-gray-800 font-[600] text-[14px] md:text-[15px] px-[24px] py-[12px] md:py-[14px] rounded-[14px] border border-gray-200 shadow-sm transition-all cursor-pointer">
                        <Zap className="w-[18px] h-[18px] text-[#413EDC]" />
                        Today's Flash Deals
                    </button>
                    <div className="flex items-center gap-[6px] text-[#059669] text-[13px] md:text-[14px] font-[500] sm:ml-auto mt-[8px] sm:mt-0">
                        <ShieldCheck className="w-[18px] h-[18px]" />
                        <span>Secure Bazaar Escrow Guarantee</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;