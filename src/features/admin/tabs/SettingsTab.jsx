import { useState, useEffect } from 'react';
import { Settings, Save } from 'lucide-react';
import adminStore from '@/store/adminStore';

function SettingsTab() {
    const { settingsData, getSettings, updateSettings, isLoadingSettings } = adminStore();
    const [commissionRate, setCommissionRate] = useState('5');
    const [saved, setSaved] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        getSettings();
    }, [getSettings]);

    useEffect(() => {
        if (settingsData?.commissionRate) {
            setCommissionRate(settingsData.commissionRate.toString());
        }
    }, [settingsData]);

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        const result = await updateSettings({ commissionRate: Number(commissionRate) });
        if (result.success) {
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        }
        setIsSaving(false);
    };

    return (
        <div className="flex flex-col gap-[20px] w-full max-w-full">
            <div className="flex flex-col gap-[4px]">
                <h1 className="text-[22px] md:text-[26px] font-[800] text-gray-900 tracking-tight">
                    Admin System Settings
                </h1>
                <span className="text-[13px] font-[600] text-gray-500">
                    Configure global platform rules, commission percentages, and security preferences.
                </span>
            </div>

            <div className="bg-white rounded-[20px] border border-gray-100 p-[20px] md:p-[28px] shadow-sm max-w-[700px] flex flex-col gap-[20px]">
                <div className="flex items-center gap-[12px] border-b border-gray-100 pb-[14px]">
                    <div className="w-[40px] h-[40px] rounded-[12px] bg-[#EEF2FF] text-[#413EDC] flex items-center justify-center">
                        <Settings size={20} />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-[16px] font-[800] text-gray-900">Platform Financial Rules</h3>
                        <span className="text-[12px] text-gray-500 font-[500]">Set default commission deduction per sale</span>
                    </div>
                </div>

                <form onSubmit={handleSave} className="flex flex-col gap-[16px]">
                    <div className="flex flex-col gap-[6px]">
                        <label className="text-[13px] font-[700] text-gray-700">Commission Rate (%)</label>
                        <input
                            type="number"
                            value={commissionRate}
                            onChange={(e) => setCommissionRate(e.target.value)}
                            disabled={isLoadingSettings}
                            className="bg-gray-50 border border-gray-200 px-[14px] py-[10px] rounded-[12px] text-[13px] text-gray-800 outline-none focus:border-[#413EDC] transition-all max-w-[200px]"
                        />
                        <span className="text-[11px] text-gray-400 font-[500]">Currently set to {commissionRate}% per vendor sale.</span>
                    </div>

                    {saved && (
                        <div className="p-[10px] bg-emerald-50 text-emerald-600 rounded-[10px] text-[13px] font-[700]">
                            Settings saved successfully!
                        </div>
                    )}

                    <div className="pt-[10px]">
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="bg-[#413EDC] hover:bg-[#3633b8] text-white px-[20px] py-[10px] rounded-[12px] text-[13px] font-[700] shadow-md shadow-[#413EDC]/20 flex items-center gap-[8px] cursor-pointer transition-all disabled:opacity-50"
                        >
                            <Save size={16} />
                            <span>{isSaving ? "Saving..." : "Save Changes"}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SettingsTab;