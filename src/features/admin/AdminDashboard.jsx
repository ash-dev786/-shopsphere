import { useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminOverview from './tabs/AdminOverview';
import VendorsTab from './tabs/VendorsTab';
import CommissionsTab from './tabs/CommissionsTab';
import SettingsTab from './tabs/SettingsTab';

function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-50">
            <AdminHeader />
            <div className="flex flex-col md:flex-row w-full flex-1">
                <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                <main className="flex-1 p-[26px] md:p-[40px] max-w-full overflow-hidden">
                    {activeTab === 'overview' && <AdminOverview />}
                    {activeTab === 'vendors' && <VendorsTab />}
                    {activeTab === 'commissions' && <CommissionsTab />}
                    {activeTab === 'settings' && <SettingsTab />}
                </main>
            </div>
        </div>
    );
}

export default AdminDashboard;