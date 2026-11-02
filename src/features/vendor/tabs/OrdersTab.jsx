import { useState } from 'react';
import {  Search, Eye, CheckCircle2, Clock, XCircle } from 'lucide-react';

function OrdersTab() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const [orders, setOrders] = useState([
        { id: 'ORD-98234', customer: 'Ali Khan', date: '02 Nov 2026', items: 'Wireless Earbuds Pro (x2)', amount: '9998', status: 'Pending' },
        { id: 'ORD-98112', customer: 'Fatima Noor', date: '01 Nov 2026', items: 'Embroidered Lawn Suit (x1)', amount: '5450', status: 'Completed' },
        { id: 'ORD-97901', customer: 'Usman Ahmed', date: '30 Oct 2026', items: 'Peshawari Chappal (x1)', amount: '2799', status: 'Processing' },
        { id: 'ORD-97844', customer: 'Zainab Bibi', date: '28 Oct 2026', items: 'Smart Watch Series 8 (x1)', amount: '4500', status: 'Cancelled' },
    ]);

    const filteredOrders = orders.filter((order) => {
        const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              order.customer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="flex flex-col gap-[20px] w-full max-w-full">
            {/* Header */}
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

            {/* Filters & Search */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-[12px] bg-white p-[14px] rounded-[18px] border border-gray-100 shadow-sm w-full">
                {/* Search Bar */}
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

                {/* Status Tabs */}
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

            {/* Orders Table Container */}
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
                                                className="p-[6px] text-gray-400 hover:text-[#413EDC] hover:bg-[#EEF2FF] rounded-[8px] transition-all cursor-pointer"
                                                title="View Order Details"
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
        </div>
    );
}

export default OrdersTab;