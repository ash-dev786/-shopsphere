import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Textfield from '@/components/Textfield';

function Checkout() {
    const navigate = useNavigate();
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const [formData, setFormData] = useState({
        fullName: 'Ali Khan',
        email: 'alikhan@example.com',
        phone: '+92 300 1234567',
        address: 'House #123, Street 4, Phase 6, DHA',
        city: 'Lahore',
    });

    const cartItems = [
        { id: 1, title: 'Wireless Earbuds Pro', price: 4999, quantity: 2 },
        { id: 2, title: 'Embroidered Lawn Suit 3pc', price: 5450, quantity: 1 },
        { id: 3, title: 'Peshawari Chappal', price: 2799, quantity: 1 },
    ];

    const shippingFee = 250;
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal + shippingFee;

  
    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setIsOrderPlaced(true);
    };

    if (isOrderPlaced) {
        return (
            <div className="flex flex-col w-full min-h-screen bg-gray-50">
                <Header />
                <main className="flex-1 w-full max-w-[800px] mx-auto px-[26px] md:px-[40px] py-[60px] flex items-center justify-center">
                    <div className="bg-white rounded-[24px] border border-gray-100 p-[32px] md:p-[48px] shadow-sm text-center flex flex-col items-center gap-[16px] w-full">
                        <div className="w-[72px] h-[72px] rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <CheckCircle2 size={36} />
                        </div>
                        <h1 className="text-[24px] md:text-[28px] font-[800] text-gray-900">
                            Order Placed Successfully!
                        </h1>
                        <p className="text-[13px] md:text-[14px] text-gray-500 max-w-[400px]">
                            Thank you for shopping with ShopSphere. Your order will be delivered with Cash on Delivery.
                        </p>
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="mt-[16px] bg-[#413EDC] hover:bg-[#3633b8] text-white px-[24px] py-[12px] rounded-[14px] text-[14px] font-[700] cursor-pointer shadow-md shadow-[#413EDC]/20 transition-all"
                        >
                            Back to Dashboard
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-50">
            <Header />

            <main className="flex-1 w-full max-w-[1280px] mx-auto px-[26px] md:px-[40px] py-[24px] md:py-[40px]">
                <button
                    onClick={() => navigate('/cart')}
                    className="flex items-center gap-[6px] text-gray-600 hover:text-[#413EDC] text-[13px] md:text-[14px] font-[600] mb-[20px] cursor-pointer transition-colors w-fit"
                >
                    <ArrowLeft size={18} />
                    <span>Back to Cart</span>
                </button>

                <div className="mb-[24px]">
                    <h1 className="text-[24px] md:text-[30px] font-[800] text-gray-900 tracking-tight">
                        Checkout
                    </h1>
                    <span className="text-[13px] md:text-[14px] font-[600] text-gray-500">
                        Enter your shipping details to place order
                    </span>
                </div>

                <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] items-start">
                    <div className="lg:col-span-2 flex flex-col gap-[20px]">
                        <div className="bg-white rounded-[24px] border border-gray-100 p-[20px] md:p-[28px] shadow-sm flex flex-col gap-[20px]">
                            <h2 className="text-[17px] md:text-[18px] font-[800] text-gray-900 flex items-center gap-[8px]">
                                <Truck size={20} className="text-[#413EDC]" />
                                Shipping Information
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                                <div className="sm:col-span-1">
                                    <Textfield
                                        label="Full Name"
                                        type="name"
                                        placeholder="Enter full name"
                                        value={formData.fullName}
                                    />
                                </div>
                                <div className="sm:col-span-1">
                                    <Textfield
                                        label="Email Address"
                                        type="email"
                                        placeholder="Enter email address"
                                        value={formData.email}
                                    />
                                </div>
                                <div className="sm:col-span-1">
                                    <Textfield
                                        label="Phone Number"
                                        type="phone"
                                        placeholder="Enter phone number"
                                        value={formData.phone}
                                    />
                                </div>
                                <div className="sm:col-span-1">
                                    <Textfield
                                        label="City"
                                        type="city"
                                        placeholder="Enter city"
                                        value={formData.city}
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <Textfield
                                        label="Delivery Address"
                                        type="address"
                                        placeholder="House street, area, city"
                                        value={formData.address}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[24px] border border-gray-100 p-[20px] md:p-[28px] shadow-sm flex flex-col gap-[12px]">
                            <h2 className="text-[17px] md:text-[18px] font-[800] text-gray-900">
                                Payment Method
                            </h2>
                            <div className="flex items-center justify-between p-[14px] rounded-[14px] border border-[#413EDC] bg-[#EEF2FF]/40">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-[16px] h-[16px] rounded-full border-4 border-[#413EDC] bg-white" />
                                    <span className="text-[14px] font-[700] text-gray-900">Cash on Delivery (COD)</span>
                                </div>
                                <span className="text-[12px] text-gray-500 font-[500]">Pay cash upon delivery</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[24px] border border-gray-100 p-[20px] md:p-[24px] shadow-sm flex flex-col gap-[20px] sticky top-[24px]">
                        <h3 className="text-[18px] font-[800] text-gray-900">
                            Order Summary
                        </h3>

                        <div className="flex flex-col gap-[12px] max-h-[220px] overflow-y-auto pr-[4px]">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between items-center text-[13px]">
                                    <span className="text-gray-600 line-clamp-1 flex-1">{item.title} (x{item.quantity})</span>
                                    <span className="font-[700] text-gray-900">Rs {(item.price * item.quantity).toLocaleString()}</span>
                                </div>
                            ))}
                        </div>

                        <div className="w-full h-[1px] bg-gray-100" />

                        <div className="flex flex-col gap-[10px] text-[13px] md:text-[14px] text-gray-600">
                            <div className="flex justify-between font-[500]">
                                <span>Subtotal</span>
                                <span className="font-[700] text-gray-900">Rs {subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between font-[500]">
                                <span>Shipping</span>
                                <span className="font-[700] text-gray-900">Rs {shippingFee.toLocaleString()}</span>
                            </div>
                            <div className="w-full h-[1px] bg-gray-100 my-[2px]" />
                            <div className="flex justify-between text-[16px] md:text-[17px] font-[800] text-gray-900">
                                <span>Total</span>
                                <span className="text-[#413EDC]">Rs {total.toLocaleString()}</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full h-[48px] bg-gradient-to-r from-[#413EDC] to-[#3FE1FD] hover:opacity-95 text-white font-[700] text-[14px] md:text-[15px] rounded-[14px] shadow-md shadow-[#413EDC]/20 flex items-center justify-center transition-all cursor-pointer"
                        >
                            Confirm & Place Order
                        </button>

                        <div className="flex items-center justify-center gap-[6px] text-gray-400 text-[11px] font-[500] mt-[4px]">
                            <ShieldCheck size={14} className="text-[#413EDC]" />
                            <span>100% Guaranteed Safe Delivery</span>
                        </div>
                    </div>
                </form>
            </main>

            <Footer />
        </div>
    );
}

export default Checkout;