import { LayoutDashboard, Users, Percent, Settings } from 'lucide-react';

function AdminSidebar({ activeTab, setActiveTab }) {
    const navItems = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'vendors', label: 'Vendors', icon: Users },
        { id: 'commissions', label: 'Commissions', icon: Percent },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <aside className="w-full md:w-[260px] bg-white border-b md:border-b-0 md:border-r border-gray-100 flex-shrink-0 md:min-h-[calc(100vh-72px)] sticky top-[72px] z-40">
            <div className="p-[16px] md:p-[20px]">
                <nav className="flex flex-row md:flex-col gap-[8px] overflow-x-auto md:overflow-x-visible no-scrollbar">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => {
                                    if (typeof setActiveTab === 'function') {
                                        setActiveTab(item.id);
                                    }
                                }}
                                className={`flex items-center gap-[12px] px-[16px] py-[12px] rounded-[14px] text-[13px] md:text-[14px] font-[600] transition-all duration-200 whitespace-nowrap cursor-pointer w-full text-left ${
                                    isActive
                                        ? 'bg-[#413EDC] text-white shadow-md shadow-[#413EDC]/20'
                                        : 'text-gray-600 hover:bg-[#EEF2FF] hover:text-[#413EDC]'
                                }`}
                            >
                                <Icon size={18} className="shrink-0" />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}

export default AdminSidebar;