import { TrendingUp, Package, ShoppingCart, DollarSign, ArrowUpRight, Star } from 'lucide-react';

function DashboardOverview() {
    const stats = [
        { title: 'Total Revenue', value: 'Rs 142,500', change: '+12.5%', icon: DollarSign },
        { title: 'Total Orders', value: '384', change: '+8.2%', icon: ShoppingCart },
        { title: 'Active Products', value: '24', change: '+3 new', icon: Package },
        { title: 'Growth Rate', value: '24.8%', change: '+4.1%', icon: TrendingUp },
    ];

    const topProducts = [
        { name: 'Wireless Earbuds Pro', category: 'Electronics', sales: '142 units', earnings: 'Rs 709,858', rating: '4.9' },
        { name: 'Embroidered Lawn Suit 3pc', category: 'Fashion', sales: '98 units', earnings: 'Rs 534,100', rating: '4.8' },
        { name: 'Peshawari Chappal', category: 'Footwear', sales: '76 units', earnings: 'Rs 212,724', rating: '4.7' },
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
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
                                <span className="text-[22px] md:text-[24px] font-[800] text-gray-900">{stat.value}</span>
                                <span className="text-[12px] font-[700] text-emerald-600 flex items-center gap-[2px]">
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
                        Top Selling Products
                    </h3>
                    <span className="text-[13px] font-[700] text-[#413EDC] cursor-pointer hover:underline">
                        View All
                    </span>
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
                            {topProducts.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-[14px] font-[800] text-gray-900 flex items-center gap-[10px]">
                                        <div className="w-[32px] h-[32px] rounded-[8px] bg-[#EEF2FF] text-[#413EDC] flex items-center justify-center shrink-0">
                                            <Package size={16} />
                                        </div>
                                        <span className="truncate max-w-[160px] sm:max-w-[220px]">{item.name}</span>
                                    </td>
                                    <td className="py-[14px] text-gray-600 font-[500]">{item.category}</td>
                                    <td className="py-[14px] font-[600] text-gray-800">{item.sales}</td>
                                    <td className="py-[14px] font-[800] text-[#413EDC]">{item.earnings}</td>
                                    <td className="py-[14px] text-right font-[700] text-amber-600 flex items-center justify-end gap-[4px]">
                                        <Star size={14} className="fill-amber-500 text-amber-500" />
                                        <span>{item.rating}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DashboardOverview;