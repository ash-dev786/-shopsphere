import { create } from 'zustand';
import {
    fetchAdminStatsApi,
    fetchAdminNotificationsApi,
    markAdminNotificationsReadApi,
    fetchAllVendorsApi,
    toggleVendorStatusApi,
    fetchAdminCommissionsApi,
    fetchAdminSettingsApi,
    updateAdminSettingsApi
} from '@/features/admin/services/adminService';

const adminStore = create((set) => ({
    stats: { totalRevenue: 0, totalCommission: 0, activeVendors: 0, recentCommissions: [] },
    isLoading: false,

    notifications: [],
    unreadCount: 0,

    vendors: [],
    isLoadingVendors: false,


    commissionData: { records: [], totalCommission: 0 },
    isLoadingCommissions: false,

    settingsData: { commissionRate: 5 },
    isLoadingSettings: false,


    getAdminStats: async () => {
        set({ isLoading: true });
        try {
            const data = await fetchAdminStatsApi();
            if (data.totalRevenue !== undefined) set({ stats: data });
        } catch (error) {
            console.error("Error fetching admin stats:", error);
        } finally {
            set({ isLoading: false });
        }
    },

    getNotifications: async () => {
        try {
            const data = await fetchAdminNotificationsApi();
            if (Array.isArray(data)) {
                set({ notifications: data, unreadCount: data.length });
            }
        } catch (error) {
            console.error("Error fetching admin notifications:", error);
        }
    },

    markNotificationsAsRead: async () => {
        try {
            await markAdminNotificationsReadApi();
            set({ unreadCount: 0 });
        } catch (error) {
            console.error("Error marking notifications as read:", error);
        }
    },

    getVendors: async () => {
        set({ isLoadingVendors: true });
        try {
            const data = await fetchAllVendorsApi();
            if (Array.isArray(data)) set({ vendors: data });
        } catch (error) {
            console.error("Error fetching vendors:", error);
        } finally {
            set({ isLoadingVendors: false });
        }
    },

    toggleStatus: async (vendorId) => {
        try {
            const data = await toggleVendorStatusApi(vendorId);
            if (data.status) {
                set((state) => ({
                    vendors: state.vendors.map(v =>
                        v._id === vendorId ? { ...v, status: data.status } : v
                    )
                }));
            }
        } catch (error) {
            console.error("Error toggling vendor status:", error);
        }
    },


    getCommissions: async () => {
        set({ isLoadingCommissions: true });
        try {
            const data = await fetchAdminCommissionsApi();
            if (data.records) {
                set({ commissionData: data });
            }
        } catch (error) {
            console.error("Error fetching commissions:", error);
        } finally {
            set({ isLoadingCommissions: false });
        }
    },

    getSettings: async () => {
        set({ isLoadingSettings: true });
        try {
            const data = await fetchAdminSettingsApi();
            if (data.commissionRate !== undefined) {
                set({ settingsData: data });
            }
        } catch (error) {
            console.error("Error fetching settings:", error);
        } finally {
            set({ isLoadingSettings: false });
        }
    },

    updateSettings: async (newSettings) => {
        try {
            const data = await updateAdminSettingsApi(newSettings);
            if (data.message === "Settings updated") {
                set({ settingsData: data.settings });
                return { success: true };
            }
            return { success: false };
        } catch (error) {
            return { success: false };
        }
    }




}));

export default adminStore;