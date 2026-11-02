import { useState } from 'react';
import { Store, Save, ShieldCheck, Bell, MapPin, Phone, User } from 'lucide-react';
import Textfield from '@/components/Textfield';

function SettingsTab() {
    const [savedMessage, setSavedMessage] = useState(false);

    const handleSaveSettings = (e) => {
        e.preventDefault();
        setSavedMessage(true);
        setTimeout(() => setSavedMessage(false), 3000);
    };

    return (
        <div className="flex flex-col gap-[20px] w-full max-w-full">
            {/* Header */}
            <div className="flex flex-col gap-[4px]">
                <h1 className="text-[22px] md:text-[26px] font-[800] text-gray-900 tracking-tight">
                    Store Settings
                </h1>
                <span className="text-[13px] font-[600] text-gray-500">
                    Manage your store profile, contact info, and preferences.
                </span>
            </div>

            {savedMessage && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-[16px] py-[12px] rounded-[14px] text-[13px] font-[700] flex items-center gap-[8px]">
                    <ShieldCheck size={18} />
                    <span>Settings updated successfully!</span>
                </div>
            )}

            <form onSubmit={handleSaveSettings} className="flex flex-col gap-[20px] w-full">
                {/* Store Profile Section */}
                <div className="bg-white rounded-[20px] border border-gray-100 p-[20px] md:p-[24px] shadow-sm flex flex-col gap-[16px]">
                    <h3 className="text-[16px] font-[800] text-gray-900 border-b border-gray-100 pb-[12px] flex items-center gap-[8px]">
                        <Store size={18} className="text-[#413EDC]" />
                        <span>Store Information</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                        <Textfield
                            label="Store / Business Name"
                            type="shopname"
                            placeholder="ShopSphere Official"
                            value="ShopSphere Official"
                        />
                        <Textfield
                            label="Vendor Owner Name"
                            type="name"
                            placeholder="Muhammad Ali"
                            value="Muhammad Ali"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                        <Textfield
                            label="Phone Number"
                            type="phone"
                            placeholder="+92 300 1234567"
                            value="+92 300 1234567"
                        />
                        <Textfield
                            label="City"
                            type="city"
                            placeholder="Lahore"
                            value="Lahore"
                        />
                    </div>

                    <Textfield
                        label="Store Business Address"
                        type="address"
                        placeholder="Shop #12, Main Market, Gulberg, Lahore"
                        value="Shop #12, Main Market, Gulberg, Lahore"
                    />
                </div>

                {/* Notification Preferences */}
                <div className="bg-white rounded-[20px] border border-gray-100 p-[20px] md:p-[24px] shadow-sm flex flex-col gap-[16px]">
                    <h3 className="text-[16px] font-[800] text-gray-900 border-b border-gray-100 pb-[12px] flex items-center gap-[8px]">
                        <Bell size={18} className="text-[#413EDC]" />
                        <span>Notifications & Alerts</span>
                    </h3>

                    <div className="flex flex-col gap-[12px]">
                        <label className="flex items-center gap-[10px] text-[13px] font-[600] text-gray-700 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-[16px] h-[16px] accent-[#413EDC] rounded-[4px]" />
                            <span>Email me when a new order is placed</span>
                        </label>
                        <label className="flex items-center gap-[10px] text-[13px] font-[600] text-gray-700 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-[16px] h-[16px] accent-[#413EDC] rounded-[4px]" />
                            <span>Send SMS notifications for order delivery updates</span>
                        </label>
                        <label className="flex items-center gap-[10px] text-[13px] font-[600] text-gray-700 cursor-pointer">
                            <input type="checkbox" className="w-[16px] h-[16px] accent-[#413EDC] rounded-[4px]" />
                            <span>Receive weekly performance and sales analytics report</span>
                        </label>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex items-center justify-end gap-[12px]">
                    <button
                        type="submit"
                        className="flex items-center gap-[8px] bg-[#413EDC] hover:bg-[#3633b8] text-white px-[22px] py-[12px] rounded-[14px] text-[13px] md:text-[14px] font-[700] shadow-md shadow-[#413EDC]/20 cursor-pointer transition-all"
                    >
                        <Save size={18} />
                        <span>Save Changes</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SettingsTab;