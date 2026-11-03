import { useState } from 'react';
import {  Search, Eye, CheckCircle2, Clock, XCircle, X } from 'lucide-react';

function OrdersTab() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [orders, setOrders] = useState([
        { id: 'ORD-98234', customer: 'Ali Khan', date: '02 Nov 2026', items: 'Wireless Earbuds Pro (x2)', amount: '9998', status: 'Pending', phone: '+92 300 1234567', address: 'House 12, Street 4, DHA Phase 1, Lahore' },
        { id: 'ORD-98112', customer: 'Fatima Noor', date: '01 Nov 2026', items: 'Embroidered Lawn Suit (x1)', amount: '5450', status: 'Completed', phone: '+92 321 9876543', address: 'Plot 45, Commercial Area, Gulberg, Lahore' },
        { id: 'ORD-97901', customer: 'Usman Ahmed', date: '30 Oct 2026', items: 'Peshawari Chappal (x1)', amount: '2799', status: 'Processing', phone: '+92 333 5554433', address: 'Street 3, Satellite Town, Rawalpindi' },
        { id: 'ORD-97844', customer: 'Zainab Bibi', date: '28 Oct 2026', items: 'Smart Watch Series 8 (x1)', amount: '4500', status: 'Cancelled', phone: '+92 302 1122334', address: 'Sector F-7/2, Islamabad' },
    ]);

    const handleViewOrder = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const handleUpdateStatus = (newStatus) => {
        if (!selectedOrder) return;
        setOrders(orders.map(o => o.id === selectedOrder.id ? { ...o, status: newStatus } : o));
        setSelectedOrder({ ...selectedOrder, status: newStatus });
        setIsModalOpen(false);
    };

    const filteredOrders = orders.filter((order) => {
        const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              order.customer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="flex flex-col gap-[20px] w-full max-w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[16px]">
                <div className="flex flex-col gap-[4px]">
                    <h1 className="text-[22px] md:text-[26px] font-[800] text-gray-900 tracking-tight">
                        Orders Management
                    </h1>
                    <span className="text-[13px] font-[600] text-gray-500">
                        Track and manage your customer orders efficiently.
                    </span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-[12px] bg-white p-[14px] rounded-[18px] border border-gray-100 shadow-sm w-full">
                <div className="flex items-center gap-[10px] bg-gray-50 border border-gray-200 px-[12px] py-[8px] rounded-[12px] w-full sm:w-[260px]">
                    <Search size={16} className="text-gray-400 shrink-0" />
                    <input
                        type="text"
                        placeholder="Search order ID or customer..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-transparent text-[13px] text-gray-800 outline-none w-full placeholder:text-gray-400"
                    />
                </div>

                <div className="flex items-center gap-[6px] overflow-x-auto w-full sm:w-auto no-scrollbar pb-[2px] sm:pb-0">
                    {['All', 'Pending', 'Processing', 'Completed', 'Cancelled'].map((status) => (
                        <button
                            key={status}
                            type="button"
                            onClick={() => setStatusFilter(status)}
                            className={`px-[12px] py-[6px] rounded-[10px] text-[12px] font-[700] whitespace-nowrap cursor-pointer transition-all ${
                                statusFilter === status
                                    ? 'bg-[#413EDC] text-white shadow-xs'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-[20px] border border-gray-100 p-[16px] md:p-[20px] shadow-sm flex flex-col gap-[12px] w-full overflow-hidden">
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[620px]">
                        <thead>
                            <tr className="border-b border-gray-100 text-[11px] font-[700] text-gray-400 uppercase tracking-wider">
                                <th className="pb-[10px]">Order Details</th>
                                <th className="pb-[10px]">Customer</th>
                                <th className="pb-[10px]">Items</th>
                                <th className="pb-[10px]">Amount</th>
                                <th className="pb-[10px]">Status</th>
                                <th className="pb-[10px] text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-[13px]">
                            {filteredOrders.length > 0 ? (
                                filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-[14px]">
                                            <div className="flex flex-col">
                                                <span className="font-[800] text-gray-900">{order.id}</span>
                                                <span className="text-[11px] text-gray-400 font-[500]">{order.date}</span>
                                            </div>
                                        </td>
                                        <td className="py-[14px] font-[600] text-gray-700">{order.customer}</td>
                                        <td className="py-[14px] text-gray-500 font-[500] max-w-[180px] truncate">{order.items}</td>
                                        <td className="py-[14px] font-[700] text-[#413EDC]">Rs {Number(order.amount).toLocaleString()}</td>
                                        <td className="py-[14px]">
                                            <span className={`text-[11px] font-[700] px-[10px] py-[4px] rounded-full inline-flex items-center gap-[4px] ${
                                                order.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                                                order.status === 'Pending' ? 'bg-amber-50 text-amber-600' :
                                                order.status === 'Processing' ? 'bg-blue-50 text-[#413EDC]' :
                                                'bg-red-50 text-red-500'
                                            }`}>
                                                {order.status === 'Completed' && <CheckCircle2 size={12} />}
                                                {order.status === 'Pending' && <Clock size={12} />}
                                                {order.status === 'Cancelled' && <XCircle size={12} />}
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-[14px] text-right">
                                            <button 
                                                type="button" 
                                                onClick={() => handleViewOrder(order)}
                                                className="p-[6px] text-gray-400 hover:text-[#413EDC] hover:bg-[#EEF2FF] rounded-[8px] transition-all cursor-pointer"
                                                title="View & Accept Order"
                                            >
                                                <Eye size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="py-[32px] text-center text-gray-400 font-[600]">
                                        No orders found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Order Details & Action Modal */}
            {isModalOpen && selectedOrder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-[16px] bg-black/40 backdrop-blur-xs">
                    <div className="bg-white rounded-[20px] border border-gray-100 p-[20px] md:p-[28px] w-full max-w-[500px] shadow-xl flex flex-col gap-[20px] max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-[12px]">
                            <div>
                                <h2 className="text-[18px] font-[800] text-gray-900">
                                    Order Details: {selectedOrder.id}
                                </h2>
                                <span className="text-[12px] text-gray-500 font-[500]">{selectedOrder.date}</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="w-[30px] h-[30px] rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-[14px] text-[13px]">
                            <div className="bg-gray-50 p-[12px] rounded-[12px] flex flex-col gap-[6px]">
                                <span className="text-gray-400 font-[700] uppercase text-[11px]">Customer Info</span>
                                <span className="font-[800] text-gray-900">{selectedOrder.customer}</span>
                                <span className="text-gray-600">{selectedOrder.phone}</span>
                                <span className="text-gray-600">{selectedOrder.address}</span>
                            </div>

                            <div className="bg-gray-50 p-[12px] rounded-[12px] flex flex-col gap-[6px]">
                                <span className="text-gray-400 font-[700] uppercase text-[11px]">Ordered Items</span>
                                <span className="font-[700] text-gray-900">{selectedOrder.items}</span>
                                <span className="font-[800] text-[#413EDC] text-[14px]">Total: Rs {Number(selectedOrder.amount).toLocaleString()}</span>
                            </div>

                            <div className="flex items-center justify-between pt-[4px]">
                                <span className="font-[700] text-gray-700">Current Status:</span>
                                <span className={`text-[12px] font-[700] px-[12px] py-[4px] rounded-full ${
                                    selectedOrder.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                                    selectedOrder.status === 'Pending' ? 'bg-amber-50 text-amber-600' :
                                    selectedOrder.status === 'Processing' ? 'bg-blue-50 text-[#413EDC]' :
                                    'bg-red-50 text-red-500'
                                }`}>
                                    {selectedOrder.status}
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons for Vendor to Accept / Process / Cancel */}
                        <div className="flex flex-wrap items-center justify-end gap-[10px] pt-[12px] border-t border-gray-100">
                            {selectedOrder.status === 'Pending' && (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => handleUpdateStatus('Cancelled')}
                                        className="px-[16px] py-[8px] rounded-[10px] text-[13px] font-[700] text-red-600 bg-red-50 hover:bg-red-100 cursor-pointer transition-all"
                                    >
                                        Reject Order
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleUpdateStatus('Processing')}
                                        className="bg-[#413EDC] hover:bg-[#3633b8] text-white px-[18px] py-[8px] rounded-[10px] text-[13px] font-[700] shadow-sm cursor-pointer transition-all"
                                    >
                                        Accept & Process
                                    </button>
                                </>
                            )}
                            {selectedOrder.status === 'Processing' && (
                                <button
                                    type="button"
                                    onClick={() => handleUpdateStatus('Completed')}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-[18px] py-[8px] rounded-[10px] text-[13px] font-[700] shadow-sm cursor-pointer transition-all"
                                >
                                    Mark as Completed
                                </button>
                            )}
                            {(selectedOrder.status === 'Completed' || selectedOrder.status === 'Cancelled') && (
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-[18px] py-[8px] rounded-[10px] text-[13px] font-[700] cursor-pointer transition-all"
                                >
                                    Close
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OrdersTab;