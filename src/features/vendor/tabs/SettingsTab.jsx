import { useState, useEffect } from 'react';
import { Store, Save, ShieldCheck, Bell } from 'lucide-react';
import Textfield from '@/components/Textfield';
import userAuthStore from '@/store/authStore';

function SettingsTab() {
    const { user, getProfile, updateProfile } = userAuthStore();
    const [savedMessage, setSavedMessage] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const [formData, setFormData] = useState({
        shopname: '',
        name: '',
        phone: '',
        city: '',
        address: ''
    });

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    useEffect(() => {
        if (user) {
            setFormData({
                shopname: user.shopname || '',
                name: user.name || '',
                phone: user.phone || '',
                city: user.city || '',
                address: user.address || ''
            });
        }
    }, [user]);

    const handleChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleSaveSettings = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        const result = await updateProfile(formData);

        if (result.success) {
            setSavedMessage(true);
            setTimeout(() => setSavedMessage(false), 3000);
        } else {
            alert(result.message);
        }
        setIsSaving(false);
    };

    return (
        <div className="flex flex-col gap-[20px] w-full max-w-full">
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
                <div className="bg-white rounded-[20px] border border-gray-100 p-[20px] md:p-[24px] shadow-sm flex flex-col gap-[16px]">
                    <h3 className="text-[16px] font-[800] text-gray-900 border-b border-gray-100 pb-[12px] flex items-center gap-[8px]">
                        <Store size={18} className="text-[#413EDC]" />
                        <span>Store Information</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                        <div onChange={(e) => handleChange(e, 'shopname')}>
                            <Textfield
                                label="Store / Business Name"
                                type="shopname"
                                placeholder="Enter store name"
                                value={formData.shopname}
                                required
                            />
                        </div>
                        <div onChange={(e) => handleChange(e, 'name')}>
                            <Textfield
                                label="Vendor Owner Name"
                                type="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                        <div onChange={(e) => handleChange(e, 'phone')}>
                            <Textfield
                                label="Phone Number"
                                type="phone"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                required
                            />
                        </div>
                        <div onChange={(e) => handleChange(e, 'city')}>
                            <Textfield
                                label="City"
                                type="city"
                                placeholder="Enter city"
                                value={formData.city}
                                required
                            />
                        </div>
                    </div>

                    <div onChange={(e) => handleChange(e, 'address')}>
                        <Textfield
                            label="Store Business Address"
                            type="address"
                            placeholder="Enter business address"
                            value={formData.address}
                            required
                        />
                    </div>
                </div>

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

                <div className="flex items-center justify-end gap-[12px]">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="flex items-center gap-[8px] bg-[#413EDC] hover:bg-[#3633b8] text-white px-[22px] py-[12px] rounded-[14px] text-[13px] md:text-[14px] font-[700] shadow-md shadow-[#413EDC]/20 cursor-pointer transition-all disabled:opacity-50"
                    >
                        <Save size={18} />
                        <span>{isSaving ? "Saving..." : "Save Changes"}</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SettingsTab;