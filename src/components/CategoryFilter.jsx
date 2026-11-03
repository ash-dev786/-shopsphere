import { Layers, Laptop, Shirt, Watch, Home, Sparkles } from 'lucide-react';
import userProductStore from '@/store/userProductStore';

function CategoryFilter() {
    const { selectedCategory, fetchProducts } = userProductStore();

    const categories = [
        { id: 'all', label: 'All Categories', icon: Sparkles },
        { id: 'Fashion', label: 'Fashion', icon: Shirt },
        { id: 'Electronics', label: 'Electronics', icon: Laptop },
        { id: 'Accessories', label: 'Accessories', icon: Watch },
        { id: 'Home & Living', label: 'Home & Living', icon: Home },
    ];

       const handleCategoryClick = (id) => {
        if (selectedCategory !== id) {
            fetchProducts(1, id, ''); 
        }
    };

    return (
        <div className="w-full py-[30px] px-[16px] md:px-[40px] bg-transparent">
            <div className="max-w-[1440px] mx-auto flex flex-col gap-[14px]">
                <div className="flex items-center gap-[8px]">
                    <div className="p-[6px] rounded-[10px] bg-[#EEF2FF] text-[#413EDC]">
                        <Layers size={18} />
                    </div>
                    <h3 className="text-[15px] md:text-[16px] font-[700] text-gray-900">
                        Explore Categories
                    </h3>
                </div>
                <div className="flex items-center mt-[10px] gap-[14px] overflow-x-auto pb-[6px] scrollbar-none">
                    {categories.map((cat) => {
                        const IconComponent = cat.icon;
                        const isSelected = selectedCategory === cat.id;

                        return (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryClick(cat.id)}
                                className={`flex items-center gap-[8px] px-[16px] py-[10px] rounded-[12px] border transition-all shrink-0 cursor-pointer ${isSelected
                                        ? 'bg-[#413EDC] text-white border-[#413EDC] shadow-sm shadow-[#413EDC]/20'
                                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <IconComponent size={16} className={isSelected ? 'text-white' : 'text-gray-500'} />
                                <span className="text-[13px] md:text-[14px] font-[600] whitespace-nowrap">
                                    {cat.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CategoryFilter;