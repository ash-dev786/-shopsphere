import { useState } from 'react';
import VendorHeader from '@/features/vendor/VendorHeader';
import VendorSidebar from '@/features/vendor/VendorSidebar';
import DashboardOverview from './tabs/DashboardOverview';
import ProductsTab from './tabs/ProductsTab';
import OrdersTab from './tabs/OrdersTab';
import SettingsTab from './tabs/SettingsTab';

function VendorDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-50">
            <VendorHeader />
            <div className="flex flex-col md:flex-row w-full flex-1">
                <VendorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                <main className="flex-1 p-[26px] md:p-[40px] max-w-full overflow-hidden">
                    {activeTab === 'dashboard' && <DashboardOverview />}
                    {activeTab === 'products' && <ProductsTab />}
                    {activeTab === 'orders' && <OrdersTab />}
                    {activeTab === 'settings' && <SettingsTab />}
                </main>
            </div>
        </div>
    );
}

export default VendorDashboard;