import { useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import userProductStore from '@/store/userProductStore';

function ProductList() {
    const { products, isLoading, fetchProducts } = userProductStore();

    useEffect(() => {
        fetchProducts(1, 'all');
    }, [fetchProducts]);

    // Shimmer Loading Component
    const ShimmerCard = () => (
        <div className="bg-white rounded-[20px] border border-gray-100 p-[12px] md:p-[16px] shadow-sm flex flex-col gap-[12px] animate-pulse">
            <div className="w-full h-[150px] sm:h-[170px] md:h-[190px] bg-gray-200 rounded-[16px]"></div>
            <div className="h-[14px] bg-gray-200 rounded-md w-1/2"></div>
            <div className="h-[16px] bg-gray-200 rounded-md w-full"></div>
            <div className="h-[16px] bg-gray-200 rounded-md w-3/4"></div>
            <div className="flex justify-between items-center mt-[8px]">
                <div className="h-[20px] bg-gray-200 rounded-md w-1/3"></div>
                <div className="h-[32px] bg-gray-200 rounded-[12px] w-[80px]"></div>
            </div>
        </div>
    );

    return (
        <div className="w-full py-[16px] px-[16px] md:px-[40px] flex flex-col gap-[28px]">
            <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-[14px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-[16px] md:text-[18px] font-[800] text-gray-900">
                        Featured Products
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[14px] md:gap-[18px] mt-[10px] md:mt-[16px]">
                    {isLoading ? (
                        Array(8).fill(0).map((_, index) => <ShimmerCard key={index} />)
                    ) : products.length === 0 ? (
                        <div className="col-span-full text-center py-10 text-gray-500 font-[600]">
                            No products found in this category.
                        </div>
                    ) : (
                        products.map((item) => (
                            <ProductCard
                                key={item._id}
                                id={item._id}
                                category={item.category}
                                image={item.imageUrl}
                                vendor={item.vendor?.shopname || item.vendor?.name || 'Unknown Vendor'}
                                title={item.name}
                                tag={item.category}
                                price={`Rs ${Number(item.price).toLocaleString()}`}
                                description={item.description} 
                                stock={item.stock} 
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductList;