import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Store, ArrowLeft, Minus, Plus, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function ProductDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const product = location.state;
    const priceString = product ? product.price : "Rs 0";
    const numericPrice = Number(priceString.replace(/[^0-9]/g, '')) || 0;
    const totalPrice = numericPrice * quantity;


    if (!product) {
        return (
            <div className="flex flex-col w-full min-h-screen bg-gray-50">
                <Header />
                <div className="flex-1 flex items-center justify-center p-[20px]">
                    <div className="text-center flex flex-col items-center gap-[16px]">
                        <h2 className="text-[20px] font-[700] text-gray-900">Product not found</h2>
                        <button onClick={() => navigate('/dashboard')} className="bg-[#413EDC] text-white px-[20px] py-[10px] rounded-[12px] text-[13px] font-[600] cursor-pointer">
                            Back to Dashboard
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const increaseQty = () => {
        setQuantity(quantity + 1);

    };

    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);

        }
    };

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            vendor: product.vendor,
            quantity: quantity
        };

        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        localStorage.setItem('cart', JSON.stringify([...existingCart, cartItem]));

        navigate('/cart');
    };

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-50">
            <Header />

            <main className="flex-1 w-full max-w-[1280px] mx-auto px-[26px] md:px-[40px] py-[24px] md:py-[40px] ">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-[6px] text-gray-600 hover:text-[#413EDC] text-[13px] md:text-[14px] font-[600] mb-[24px] cursor-pointer transition-colors w-fit"
                >
                    <ArrowLeft size={18} />
                    <span>Back to Dashboard</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] md:gap-[40px] items-start">
                    <div className="relative w-full h-[350px] sm:h-[420px] md:h-[480px] bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm flex items-center justify-center">
                        {product.image ? (
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 font-[500]">
                                No Image Available
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-[20px] w-full">
                        <div className="flex flex-col gap-[8px]">
                            <span className="text-[#413EDC] text-[11px] md:text-[12px] font-[800] tracking-wider uppercase">
                                {product.category}
                            </span>

                            <h1 className="text-[22px] md:text-[30px] lg:text-[34px] font-[800] text-gray-900 leading-[1.2]">
                                {product.title}
                            </h1>

                            <div className="flex items-center gap-[6px] text-gray-600 text-[13px] md:text-[14px] font-[500] mt-[2px]">
                                <Store size={16} className="text-[#413EDC] shrink-0" />
                                <span>Sold by <strong className="text-gray-900 font-[700]">{product.vendor}</strong></span>
                            </div>
                        </div>

                        <div className="text-[26px] md:text-[32px] font-[800] text-[#413EDC]">
                            Rs {totalPrice.toLocaleString()}
                        </div>

                        <div className="flex flex-wrap items-center gap-[16px] pt-[8px]">
                            <div className="flex items-center bg-gray-100 border border-gray-200 rounded-[14px] p-[4px]">
                                <button
                                    onClick={decreaseQty}
                                    type="button"
                                    className="w-[36px] h-[36px] flex items-center justify-center rounded-[10px] bg-white text-gray-700 shadow-xs hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="w-[44px] text-center font-[700] text-[15px] text-gray-900">
                                    {quantity}
                                </span>
                                <button
                                    onClick={increaseQty}
                                    type="button"
                                    className="w-[36px] h-[36px] flex items-center justify-center rounded-[10px] bg-white text-gray-700 shadow-xs hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="flex-1 min-w-[200px] h-[46px] md:h-[48px] bg-gradient-to-r from-[#413EDC] to-[#3FE1FD] hover:opacity-95 text-white font-[700] text-[14px] md:text-[15px] rounded-[14px] shadow-md shadow-[#413EDC]/20 flex items-center justify-center gap-[8px] transition-all cursor-pointer"
                            >
                                <ShoppingCart size={18} />
                                <span>Add to Cart</span>
                            </button>
                        </div>

                        <div className="bg-white rounded-[20px] border border-gray-100 p-[18px] md:p-[22px] shadow-sm flex flex-col gap-[10px] mt-[10px]">
                            <h3 className="text-[15px] md:text-[16px] font-[700] text-gray-900">
                                Description
                            </h3>
                            <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.6]">
                                {product.description || "No description available."}
                            </p>
                        </div>

                        <div className="flex items-center gap-[8px] p-[12px] px-[16px] rounded-[14px] bg-[#EEF2FF] text-[#413EDC] text-[12px] md:text-[13px] font-[600]">
                            <ShieldCheck size={18} className="shrink-0" />
                            <span>100% Genuine product verified by ShopSphere Quality Assurance.</span>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default ProductDetail;