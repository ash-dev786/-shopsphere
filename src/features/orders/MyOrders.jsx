import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, Clock, CheckCircle2, Truck, XCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import orderStore from '@/store/orderStore';

function MyOrders() {
    const navigate = useNavigate();
     const { myOrders, getMyOrders, isLoadingOrders, markOrdersAsRead } = orderStore();

     useEffect(() => {
        getMyOrders();
        markOrdersAsRead(); 
    }, [getMyOrders, markOrdersAsRead]);

    const getStatusStyle = (status) => {
        if (status === 'Completed') return 'bg-emerald-50 text-emerald-600 border-emerald-100';
        if (status === 'Processing') return 'bg-blue-50 text-[#413EDC] border-blue-100';
        if (status === 'Cancelled') return 'bg-red-50 text-red-500 border-red-100';
        return 'bg-amber-50 text-amber-600 border-amber-100';
    };

    const getStatusIcon = (status) => {
        if (status === 'Completed') return <CheckCircle2 size={14} />;
        if (status === 'Processing') return <Truck size={14} />;
        if (status === 'Cancelled') return <XCircle size={14} />;
        return <Clock size={14} />;
    };

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-50">
            <Header />

            <main className="flex-1 w-full max-w-[1280px] mx-auto px-[26px] md:px-[40px] py-[24px] md:py-[40px]">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-[6px] text-gray-600 hover:text-[#413EDC] text-[13px] md:text-[14px] font-[600] mb-[20px] cursor-pointer transition-colors w-fit"
                >
                    <ArrowLeft size={18} />
                    <span>Back to Dashboard</span>
                </button>

                <div className="flex flex-col gap-[6px] mb-[24px]">
                    <h1 className="text-[24px] md:text-[30px] font-[800] text-gray-900 tracking-tight">
                        My Orders
                    </h1>
                    <span className="text-[13px] md:text-[14px] font-[600] text-gray-500">
                        Track and manage your order history
                    </span>
                </div>

                {isLoadingOrders ? (
                    <div className="text-center py-20 text-gray-500 font-[600]">Loading your orders...</div>
                ) : myOrders.length === 0 ? (
                    <div className="w-full bg-white rounded-[24px] border border-gray-100 p-[48px] text-center flex flex-col items-center justify-center gap-[16px] shadow-sm">
                        <div className="w-[64px] h-[64px] rounded-full bg-[#EEF2FF] text-[#413EDC] flex items-center justify-center">
                            <Package size={28} />
                        </div>
                        <h3 className="text-[18px] font-[700] text-gray-900">No orders found</h3>
                        <p className="text-[13px] text-gray-500 max-w-[300px]">You haven't placed any orders yet.</p>
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="mt-[8px] bg-[#413EDC] text-white px-[20px] py-[10px] rounded-[12px] text-[13px] font-[600] cursor-pointer hover:bg-[#3633b8]"
                        >
                            Start Shopping
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-[25px] w-full">
                        {myOrders.map((order) => (
                            <div
                                key={order._id}
                                className="bg-white rounded-[20px] border border-gray-100 p-[18px] md:p-[24px] shadow-sm flex flex-col gap-[16px] hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-[12px] pb-[14px] border-b border-gray-100">
                                    <div className="flex flex-col gap-[2px]">
                                        <div className="flex items-center gap-[8px]">
                                            <span className="text-[15px] md:text-[16px] font-[800] text-gray-900">
                                                #{order._id.slice(-6).toUpperCase()}
                                            </span>
                                            <span className="text-[12px] text-gray-400">•</span>
                                            <span className="text-[12px] font-[500] text-gray-500">
                                                {new Date(order.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </span>
                                        </div>
                                        <span className="text-[12px] text-gray-500 font-[500]">
                                            {order.items?.length || 0} item(s)
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-[12px]">
                                        <div className={`flex items-center gap-[6px] text-[11px] md:text-[12px] font-[700] px-[12px] py-[5px] rounded-full border ${getStatusStyle(order.status)}`}>
                                            {getStatusIcon(order.status)}
                                            <span>{order.status}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[10px]">
                                    {order.items?.map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between text-[13px] md:text-[14px]">
                                            <span className="text-gray-700 font-[500]">
                                                {item.name} <span className="text-gray-400 font-[600]">x{item.quantity}</span>
                                            </span>
                                            <span className="font-[700] text-gray-900">
                                                Rs {(item.price * item.quantity).toLocaleString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-[14px] border-t border-gray-100 mt-[2px]">
                                    <div className="flex items-center gap-[6px]">
                                        <span className="text-[13px] text-gray-500 font-[500]">Total Amount:</span>
                                        <span className="text-[15px] md:text-[16px] font-[800] text-[#413EDC]">
                                            Rs {order.vendorTotal?.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default MyOrders;