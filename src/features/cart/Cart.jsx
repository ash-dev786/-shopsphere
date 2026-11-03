import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
        setIsLoading(false);
    }, []);

    const shippingFee = 250;

    const handleQuantityChange = (id, type) => {
        setCartItems(prev => {
            const updatedCart = prev.map(item => {
                if (item.id === id) {
                    const newQty = type === 'inc' ? item.quantity + 1 : item.quantity - 1;
                    return { ...item, quantity: newQty > 0 ? newQty : 1 };
                }
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const handleRemoveItem = (id) => {
        setCartItems(prev => {
            const updatedCart = prev.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const getNumericPrice = (price) => {
        if (typeof price === 'number') return price;
        return Number(price.toString().replace(/[^0-9]/g, '')) || 0;
    };

    const subtotal = cartItems.reduce((acc, item) => acc + getNumericPrice(item.price) * item.quantity, 0);
    const total = cartItems.length > 0 ? subtotal + shippingFee : 0;

    if (isLoading) {
        return (
            <div className="flex flex-col w-full min-h-screen bg-gray-50">
                <Header />
                <div className="flex-1 flex items-center justify-center">
                    <span className="text-[15px] font-[600] text-gray-500">Loading cart...</span>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-50">
            <Header />

            <main className="flex-1 w-full max-w-[1280px] mx-auto px-[26px] md:px-[40px] py-[24px] md:py-[40px]">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-[6px] text-gray-600 hover:text-[#413EDC] text-[13px] md:text-[14px] font-[600] mb-[20px] cursor-pointer transition-colors w-fit"
                >
                    <ArrowLeft size={18} />
                    <span>Continue Shopping</span>
                </button>

                <div className="flex flex-col gap-[6px] mb-[24px]">
                    <h1 className="text-[24px] md:text-[30px] font-[800] text-gray-900 tracking-tight">
                        Shopping Cart
                    </h1>
                    <span className="text-[13px] md:text-[14px] font-[600] text-gray-500">
                        {cartItems.reduce((acc, item) => acc + item.quantity, 0)} item(s) in your cart
                    </span>
                </div>

                {cartItems.length === 0 ? (
                    <div className="w-full bg-white rounded-[24px] border border-gray-100 p-[48px] text-center flex flex-col items-center justify-center gap-[16px] shadow-sm">
                        <div className="w-[64px] h-[64px] rounded-full bg-[#EEF2FF] text-[#413EDC] flex items-center justify-center">
                            <ShoppingBag size={28} />
                        </div>
                        <h3 className="text-[18px] font-[700] text-gray-900">Your cart is empty</h3>
                        <p className="text-[13px] text-gray-500 max-w-[300px]">Looks like you haven't added anything to your cart yet.</p>
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="mt-[8px] bg-[#413EDC] text-white px-[20px] py-[10px] rounded-[12px] text-[13px] font-[600] cursor-pointer hover:bg-[#3633b8]"
                        >
                            Explore Products
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] items-start">
                        <div className="lg:col-span-2 flex flex-col gap-[16px]">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-[20px] border border-gray-100 p-[14px] md:p-[18px] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-[16px]"
                                >
                                    <div className="flex items-center gap-[14px] w-full sm:w-auto">
                                        <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-[14px] bg-gray-50 border border-gray-100 overflow-hidden shrink-0 flex items-center justify-center p-[4px]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover rounded-[10px]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-[2px]">
                                            <h3 className="text-[14px] md:text-[15px] font-[700] text-gray-900 leading-[1.3]">
                                                {item.title}
                                            </h3>
                                            <span className="text-[12px] text-gray-500 font-[500]">
                                                {item.vendor}
                                            </span>
                                            <span className="text-[14px] md:text-[15px] font-[800] text-[#413EDC] mt-[4px]">
                                                Rs {getNumericPrice(item.price).toLocaleString()}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between w-full sm:w-auto gap-[16px] pt-[10px] sm:pt-0 border-t sm:border-t-0 border-gray-100">
                                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-[12px] p-[3px]">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, 'dec')}
                                                className="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] bg-white text-gray-700 shadow-xs hover:bg-gray-100 cursor-pointer"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="w-[36px] text-center font-[700] text-[14px] text-gray-900">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, 'inc')}
                                                className="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] bg-white text-gray-700 shadow-xs hover:bg-gray-100 cursor-pointer"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="w-[36px] h-[36px] rounded-[10px] bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors cursor-pointer"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-[24px] border border-gray-100 p-[20px] md:p-[24px] shadow-sm flex flex-col gap-[20px] sticky top-[24px]">
                            <h3 className="text-[18px] font-[800] text-gray-900">
                                Order Summary
                            </h3>

                            <div className="flex flex-col gap-[12px] text-[13px] md:text-[14px] text-gray-600">
                                <div className="flex justify-between font-[500]">
                                    <span>Subtotal</span>
                                    <span className="font-[700] text-gray-900">Rs {subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between font-[500]">
                                    <span>Shipping</span>
                                    <span className="font-[700] text-gray-900">Rs {shippingFee.toLocaleString()}</span>
                                </div>
                                <div className="w-full h-[1px] bg-gray-100 my-[4px]" />
                                <div className="flex justify-between text-[16px] md:text-[17px] font-[800] text-gray-900">
                                    <span>Total</span>
                                    <span className="text-[#413EDC]">Rs {total.toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate('/checkout')}
                                className="w-full h-[48px] bg-gradient-to-r from-[#413EDC] to-[#3FE1FD] hover:opacity-95 text-white font-[700] text-[14px] md:text-[15px] rounded-[14px] shadow-md shadow-[#413EDC]/20 flex items-center justify-center transition-all cursor-pointer"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default Cart;