import { useEffect } from 'react';
import { Package, ShoppingCart, DollarSign, ArrowUpRight, Star } from 'lucide-react';
import vendorOrderStore from '@/store/vendorOrderStore';

function DashboardOverview() {
    const { dashboardStats, getDashboardStats, isStatsLoading } = vendorOrderStore();

    useEffect(() => {
        getDashboardStats();
    }, [getDashboardStats]);

    const stats = [
        { title: 'Total Revenue', value: `Rs ${dashboardStats?.totalRevenue?.toLocaleString() || 0}`, icon: DollarSign },
        { title: 'Total Orders', value: dashboardStats?.totalOrders || 0, icon: ShoppingCart },
        { title: 'Active Products', value: dashboardStats?.activeProducts || 0, icon: Package },
    ];

    return (
        <div className="flex flex-col gap-[24px] w-full max-w-full">
            <div className="flex flex-col gap-[4px]">
                <h1 className="text-[24px] md:text-[28px] font-[800] text-gray-900 tracking-tight">
                    Dashboard Overview
                </h1>
                <span className="text-[13px] md:text-[14px] font-[600] text-gray-500">
                    Welcome back! Here is a quick summary of your store performance.
                </span>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className="bg-white rounded-[20px] border border-gray-100 p-[20px] shadow-sm flex flex-col gap-[12px]">
                            <div className="flex items-center justify-between">
                                <span className="text-[13px] font-[700] text-gray-500">{stat.title}</span>
                                <div className="w-[36px] h-[36px] rounded-[12px] bg-[#EEF2FF] text-[#413EDC] flex items-center justify-center">
                                    <Icon size={18} />
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between">
                                {isStatsLoading ? (
                                    <div className="h-[28px] w-[100px] bg-gray-200 rounded-md animate-pulse"></div>
                                ) : (
                                    <span className="text-[22px] md:text-[24px] font-[800] text-gray-900">{stat.value}</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Top Products Table */}
            <div className="bg-white rounded-[24px] border border-gray-100 p-[20px] md:p-[24px] shadow-sm flex flex-col gap-[16px] w-full overflow-hidden">
                <div className="flex items-center justify-between">
                    <h3 className="text-[17px] md:text-[18px] font-[800] text-gray-900">
                        Top Selling Products
                    </h3>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[550px]">
                        <thead>
                            <tr className="border-b border-gray-100 text-[11px] font-[700] text-gray-400 uppercase tracking-wider">
                                <th className="pb-[10px]">Product Name</th>
                                <th className="pb-[10px]">Category</th>
                                <th className="pb-[10px]">Sales</th>
                                <th className="pb-[10px]">Total Revenue</th>
                                <th className="pb-[10px] text-right">Rating</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-[13px]">
                            {isStatsLoading ? (
                                <tr><td colSpan="5" className="text-center py-6 text-gray-500">Loading...</td></tr>
                            ) : dashboardStats?.topProducts?.length === 0 ? (
                                <tr><td colSpan="5" className="text-center py-6 text-gray-500">No sales data available yet.</td></tr>
                            ) : (
                                dashboardStats?.topProducts?.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-[14px] font-[800] text-gray-900 flex items-center gap-[10px]">
                                            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#EEF2FF] text-[#413EDC] flex items-center justify-center shrink-0 overflow-hidden">
                                                {item.image ? (
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <Package size={16} />
                                                )}
                                            </div>
                                            <span className="truncate max-w-[160px] sm:max-w-[220px]">{item.name}</span>
                                        </td>
                                        <td className="py-[14px] text-gray-600 font-[500]">Category</td>
                                        <td className="py-[14px] font-[600] text-gray-800">{item.totalQuantity} units</td>
                                        <td className="py-[14px] font-[800] text-[#413EDC]">Rs {item.totalRevenue?.toLocaleString()}</td>
                                        <td className="py-[14px] text-right font-[700] text-amber-600 flex items-center justify-end gap-[4px]">
                                            <Star size={14} className="fill-amber-500 text-amber-500" />
                                            <span>4.5</span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DashboardOverview;