import { useEffect } from 'react';
import adminStore from '@/store/adminStore';

function CommissionsTab() {
    const { commissionData, getCommissions, isLoadingCommissions, settingsData, getSettings } = adminStore();

    useEffect(() => {
        getCommissions();
        getSettings();
    }, [getCommissions, getSettings]);

    return (
        <div className="flex flex-col gap-[20px] w-full max-w-full">
            <div className="flex flex-col gap-[4px]">
                <h1 className="text-[22px] md:text-[26px] font-[800] text-gray-900 tracking-tight">
                    {settingsData?.commissionRate || 5}% Commission Management
                </h1>
                <span className="text-[13px] font-[600] text-gray-500">
                    Track automated commission deductions from every vendor sale across the platform.
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
                <div className="bg-white p-[20px] rounded-[20px] border border-gray-100 shadow-sm flex flex-col gap-[8px]">
                    <span className="text-[13px] font-[700] text-gray-400">Total Commission Pool</span>
                    <span className="text-[24px] font-[800] text-[#413EDC]">
                        {isLoadingCommissions ? '...' : `Rs ${commissionData?.totalCommission?.toLocaleString() || 0}`}
                    </span>
                </div>
                <div className="bg-white p-[20px] rounded-[20px] border border-gray-100 shadow-sm flex flex-col gap-[8px]">
                    <span className="text-[13px] font-[700] text-gray-400">Commission Rate</span>
                    <span className="text-[24px] font-[800] text-emerald-600">
                        {settingsData?.commissionRate || 5}.0% per sale
                    </span>
                </div>
                <div className="bg-white p-[20px] rounded-[20px] border border-gray-100 shadow-sm flex flex-col gap-[8px]">
                    <span className="text-[13px] font-[700] text-gray-400">Total Completed Orders</span>
                    <span className="text-[24px] font-[800] text-gray-900">
                        {isLoadingCommissions ? '...' : commissionData?.records?.length || 0}
                    </span>
                </div>
            </div>

            <div className="bg-white rounded-[20px] border border-gray-100 p-[16px] md:p-[20px] shadow-sm w-full overflow-hidden">
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[650px]">
                        <thead>
                            <tr className="border-b border-gray-100 text-[11px] font-[700] text-gray-400 uppercase tracking-wider">
                                <th className="pb-[10px]">Order ID</th>
                                <th className="pb-[10px]">Vendor Name</th>
                                <th className="pb-[10px]">Order Total</th>
                                <th className="pb-[10px]">Deduction</th>
                                <th className="pb-[10px]">Date</th>
                                <th className="pb-[10px] text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-[13px]">
                            {isLoadingCommissions ? (
                                <tr><td colSpan="6" className="text-center py-6 text-gray-500">Loading...</td></tr>
                            ) : commissionData?.records?.length === 0 ? (
                                <tr><td colSpan="6" className="text-center py-6 text-gray-500">No commissions found.</td></tr>
                            ) : (
                                commissionData?.records?.map((rec) => (
                                    <tr key={rec._id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-[14px] font-[800] text-gray-900">#{rec.orderId}</td>
                                        <td className="py-[14px] font-[600] text-gray-700">{rec.vendor}</td>
                                        <td className="py-[14px] font-[700] text-gray-800">Rs {rec.totalAmount?.toLocaleString()}</td>
                                        <td className="py-[14px] font-[800] text-[#413EDC]">Rs {rec.commission?.toLocaleString()} ({rec.commissionRate}%)</td>
                                        <td className="py-[14px] text-gray-400 font-[500]">
                                            {new Date(rec.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                        </td>
                                        <td className="py-[14px] text-right">
                                            <span className="text-[11px] font-[700] px-[10px] py-[4px] rounded-full bg-emerald-50 text-emerald-600">
                                                Deducted
                                            </span>
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

export default CommissionsTab;