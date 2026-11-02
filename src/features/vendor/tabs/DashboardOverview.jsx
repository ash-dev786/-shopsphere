import { TrendingUp, Package, ShoppingCart, DollarSign, ArrowUpRight, Clock } from 'lucide-react';

function DashboardOverview() {
    const stats = [
        { title: 'Total Revenue', value: 'Rs 142,500', change: '+12.5%', icon: DollarSign, isPositive: true },
        { title: 'Total Orders', value: '384', change: '+8.2%', icon: ShoppingCart, isPositive: true },
        { title: 'Active Products', value: '24', change: '+3 new', icon: Package, isPositive: true },
        { title: 'Growth Rate', value: '24.8%', change: '+4.1%', icon: TrendingUp, isPositive: true },
    ];

    const recentOrders = [
        { id: 'ORD-98234', customer: 'Ali Khan', product: 'Wireless Earbuds Pro', qty: 2, amount: 'Rs 9,998', status: 'Pending' },
        { id: 'ORD-98112', customer: 'Fatima Noor', product: 'Embroidered Lawn Suit', qty: 1, amount: 'Rs 5,450', status: 'Completed' },
        { id: 'ORD-97901', customer: 'Usman Ahmed', product: 'Peshawari Chappal', qty: 1, amount: 'Rs 2,799', status: 'Processing' },
    ];

    return (
        <div className="flex flex-col gap-[24px] w-full">
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

            <div className="bg-white rounded-[24px] border border-gray-100 p-[20px] md:p-[24px] shadow-sm flex flex-col gap-[16px]">
                <div className="flex items-center justify-between">
                    <h3 className="text-[17px] md:text-[18px] font-[800] text-gray-900">
                        Recent Store Orders
                    </h3>
                    <span className="text-[13px] font-[700] text-[#413EDC] cursor-pointer hover:underline">
                        View All
                    </span>
                </div>

                <div className="flex flex-col divide-y divide-gray-100">
                    {recentOrders.map((order, idx) => (
                        <div key={idx} className="py-[14px] first:pt-0 last:pb-0 flex flex-wrap items-center justify-between gap-[12px]">
                            <div className="flex flex-col gap-[2px]">
                                <div className="flex items-center gap-[8px]">
                                    <span className="text-[14px] font-[800] text-gray-900">{order.id}</span>
                                    <span className="text-[12px] text-gray-400">•</span>
                                    <span className="text-[13px] font-[600] text-gray-700">{order.customer}</span>
                                </div>
                                <span className="text-[12px] text-gray-500 font-[500]">{order.product} (x{order.qty})</span>
                            </div>

                            <div className="flex items-center gap-[16px]">
                                <span className="text-[14px] font-[800] text-[#413EDC]">{order.amount}</span>
                                <span className={`text-[11px] font-[700] px-[10px] py-[4px] rounded-full ${order.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                                        order.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-[#413EDC]'
                                    }`}>
                                    {order.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DashboardOverview;