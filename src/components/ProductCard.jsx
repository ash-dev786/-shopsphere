import { ShoppingCart, CheckCircle2 } from 'lucide-react';

function ProductCard({ category, image, vendor, title, tag, price }) {
    return (
        <div className="bg-white rounded-[20px] border border-gray-100 p-[12px] md:p-[16px] shadow-sm flex flex-col justify-between w-full">
            <div>
                <div className="relative w-full h-[150px] sm:h-[170px] md:h-[190px] rounded-[16px] overflow-hidden flex items-center justify-center p-[4px]">
                    {category && (
                        <span className="absolute top-[12px] left-[12px] z-10 bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] md:text-[11px] font-[600] px-[10px] py-[3px] rounded-full border border-gray-100 shadow-xs">
                            {category}
                        </span>
                    )}
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-[16px]"
                    />
                </div>

                <div className="flex items-center gap-[4px] mt-[12px]">
                    <CheckCircle2 size={13} className="text-[#413EDC] shrink-0" />
                    <span className="text-[11px] font-[600] text-[#413EDC] truncate">
                        {vendor}
                    </span>
                </div>

                <h3 className="text-[13px] md:text-[14px] font-[700] text-gray-900 line-clamp-2 mt-[4px] min-h-[38px] leading-[1.3]">
                    {title}
                </h3>
            </div>

            <div className="mt-[12px] pt-[8px] flex items-center justify-between gap-[8px]">
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-[500]">
                        {tag}
                    </span>
                    <span className="text-[14px] md:text-[15px] font-[800] text-gray-900">
                        {price}
                    </span>
                </div>

                <button className="flex items-center gap-[6px] bg-[#413EDC] hover:bg-[#3633b8] text-white text-[11px] md:text-[12px] font-[600] px-[12px] py-[8px] rounded-[12px] shadow-sm transition-all cursor-pointer shrink-0">
                    <ShoppingCart size={14} />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;