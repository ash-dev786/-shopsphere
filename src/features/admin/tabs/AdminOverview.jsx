import { useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Percent, ArrowUpRight } from 'lucide-react';
import adminStore from '@/store/adminStore';

function AdminOverview() {
    const { stats, getAdminStats, isLoading } = adminStore();

    useEffect(() => {
        getAdminStats();
    }, [getAdminStats]);

    const statCards = [
        { title: 'Total Platform Revenue', value: `Rs ${stats?.totalRevenue?.toLocaleString() || 0}`, change: '+Real-time', icon: DollarSign },
        { title: '5% Commission Earned', value: `Rs ${stats?.totalCommission?.toLocaleString() || 0}`, change: '+Real-time', icon: Percent },
        { title: 'Active Vendors', value: stats?.activeVendors || 0, change: 'Total', icon: Users },
        { title: 'Platform Growth', value: '32.4%', change: '+5.1%', icon: TrendingUp }, 
    ];

    return (
        <div className="flex flex-col gap-[24px] w-full max-w-full">
            <div className="flex flex-col gap-[4px]">
                <h1 className="text-[24px] md:text-[28px] font-[800] text-gray-900 tracking-tight">
                    Admin Overview
                </h1>
                <span className="text-[13px] md:text-[14px] font-[600] text-gray-500">
                    Welcome back, Admin. Here is the real-time summary of platform revenue and 5% commissions.
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px]">
                {statCards.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className="bg-white rounded-[20px] border border-gray-100 p-[18px] md:p-[20px] shadow-sm flex flex-col gap-[12px] w-full overflow-hidden">
                            <div className="flex items-center justify-between gap-[8px]">
                                <span className="text-[12px] md:text-[13px] font-[700] text-gray-500 truncate">{stat.title}</span>
                                <div className="w-[34px] h-[34px] rounded-[10px] bg-[#EEF2FF] text-[#413EDC] flex items-center justify-center shrink-0">
                                    <Icon size={18} />
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between gap-[8px]">
                                {isLoading ? (
                                    <div className="h-[24px] w-[100px] bg-gray-200 rounded-md animate-pulse"></div>
                                ) : (
                                    <span className="text-[18px] sm:text-[20px] lg:text-[22px] font-[800] text-gray-900 truncate">{stat.value}</span>
                                )}
                                <span className="text-[11px] md:text-[12px] font-[700] text-emerald-600 flex items-center gap-[2px] shrink-0">
                                    <ArrowUpRight size={14} />
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="bg-white rounded-[24px] border border-gray-100 p-[20px] md:p-[24px] shadow-sm flex flex-col gap-[16px] w-full overflow-hidden">
                <div className="flex items-center justify-between">
                    <h3 className="text-[17px] md:text-[18px] font-[800] text-gray-900">
                        Recent 5% Commission Deductions
                    </h3>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-gray-100 text-[11px] font-[700] text-gray-400 uppercase tracking-wider">
                                <th className="pb-[10px]">Transaction ID</th>
                                <th className="pb-[10px]">Vendor Name</th>
                                <th className="pb-[10px]">Order Ref</th>
                                <th className="pb-[10px]">Sale Amount</th>
                                <th className="pb-[10px] text-right">5% Commission</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-[13px]">
                            {isLoading ? (
                                <tr><td colSpan="5" className="text-center py-6 text-gray-500">Loading...</td></tr>
                            ) : stats?.recentCommissions?.length === 0 ? (
                                <tr><td colSpan="5" className="text-center py-6 text-gray-500">No commissions earned yet.</td></tr>
                            ) : (
                                stats?.recentCommissions?.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-[14px] font-[800] text-gray-900">{item.id}</td>
                                        <td className="py-[14px] font-[600] text-gray-700">{item.vendor}</td>
                                        <td className="py-[14px] text-gray-500 font-[500]">{item.order}</td>
                                        <td className="py-[14px] font-[700] text-gray-900">{item.saleAmount}</td>
                                        <td className="py-[14px] text-right font-[800] text-[#413EDC]">{item.commission}</td>
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

export default AdminOverview;