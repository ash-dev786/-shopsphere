import { useState, useEffect } from 'react';
import { Search, Store, CheckCircle2, ShieldBan } from 'lucide-react';
import adminStore from '@/store/adminStore';

function VendorsTab() {
    const [searchTerm, setSearchTerm] = useState('');
    const { vendors, getVendors, toggleStatus, isLoadingVendors } = adminStore();

    useEffect(() => {
        getVendors();
    }, [getVendors]);

    const filteredVendors = vendors.filter(v =>
        (v.shopname || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (v.name || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-[20px] w-full max-w-full">
            <div className="flex flex-col gap-[4px]">
                <h1 className="text-[22px] md:text-[26px] font-[800] text-gray-900 tracking-tight">
                    Vendor Management
                </h1>
                <span className="text-[13px] font-[600] text-gray-500">
                    Monitor registered vendors, store performance, and account statuses.
                </span>
            </div>

            <div className="flex items-center justify-between bg-white p-[14px] rounded-[18px] border border-gray-100 shadow-sm w-full">
                <div className="flex items-center gap-[10px] bg-gray-50 border border-gray-200 px-[12px] py-[8px] rounded-[12px] w-full sm:w-[280px]">
                    <Search size={16} className="text-gray-400 shrink-0" />
                    <input
                        type="text"
                        placeholder="Search vendor name or owner..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-transparent text-[13px] text-gray-800 outline-none w-full placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div className="bg-white rounded-[20px] border border-gray-100 p-[16px] md:p-[20px] shadow-sm w-full overflow-hidden">
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[650px]">
                        <thead>
                            <tr className="border-b border-gray-100 text-[11px] font-[700] text-gray-400 uppercase tracking-wider">
                                <th className="pb-[10px]">Vendor Details</th>
                                <th className="pb-[10px]">Owner</th>
                                <th className="pb-[10px]">Total Sales</th>
                                <th className="pb-[10px]">Revenue</th>
                                <th className="pb-[10px]">Status</th>
                                <th className="pb-[10px] text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-[13px]">
                            {isLoadingVendors ? (
                                <tr><td colSpan="6" className="text-center py-6 text-gray-500">Loading vendors...</td></tr>
                            ) : filteredVendors.length === 0 ? (
                                <tr><td colSpan="6" className="text-center py-6 text-gray-500">No vendors found.</td></tr>
                            ) : (
                                filteredVendors.map((vendor) => (
                                    <tr key={vendor._id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-[14px]">
                                            <div className="flex items-center gap-[10px]">
                                                <div className="w-[34px] h-[34px] rounded-[10px] bg-[#EEF2FF] text-[#413EDC] flex items-center justify-center shrink-0">
                                                    <Store size={18} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-[800] text-gray-900">{vendor.shopname || 'No Shop Name'}</span>
                                                    <span className="text-[11px] text-gray-400 font-[500]">{vendor.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-[14px] font-[600] text-gray-700">{vendor.name}</td>
                                        <td className="py-[14px] font-[700] text-gray-800">{vendor.sales} units</td>
                                        <td className="py-[14px] font-[800] text-[#413EDC]">Rs {vendor.revenue?.toLocaleString()}</td>
                                        <td className="py-[14px]">
                                            <span className={`text-[11px] font-[700] px-[10px] py-[4px] rounded-full inline-flex items-center gap-[4px] ${vendor.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
                                                }`}>
                                                {vendor.status === 'Active' ? <CheckCircle2 size={12} /> : <ShieldBan size={12} />}
                                                {vendor.status}
                                            </span>
                                        </td>
                                        <td className="py-[14px] text-right">
                                            <button
                                                type="button"
                                                onClick={() => toggleStatus(vendor._id)}
                                                className={`px-[12px] py-[6px] rounded-[8px] text-[12px] font-[700] cursor-pointer transition-all ${vendor.status === 'Active'
                                                        ? 'bg-red-50 text-red-600 hover:bg-red-100'
                                                        : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                                                    }`}
                                            >
                                                {vendor.status === 'Active' ? 'Suspend' : 'Activate'}
                                            </button>
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

export default VendorsTab;