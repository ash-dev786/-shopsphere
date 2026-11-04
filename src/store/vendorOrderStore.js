import { create } from 'zustand';
import {
    fetchVendorOrdersApi, updateOrderStatusApi, fetchVendorNotificationsApi
    , fetchVendorDashboardStatsApi

} from '@/features/vendor/services/vendorOrderService';

const vendorOrderStore = create((set) => ({
    orders: [],
    isLoading: false,

    notifications: [],
    unreadCount: 0,

    dashboardStats: {
        totalOrders: 0,
        activeProducts: 0,
        totalRevenue: 0,
        topProducts: []
    },
    isStatsLoading: false,


    getVendorOrders: async () => {
        set({ isLoading: true });
        try {
            const data = await fetchVendorOrdersApi();
            if (Array.isArray(data)) {
                set({ orders: data });
            }
        } catch (error) {
            console.error("Error fetching vendor orders:", error);
        } finally {
            set({ isLoading: false });
        }
    },

    changeOrderStatus: async (orderId, newStatus) => {
        try {
            const data = await updateOrderStatusApi(orderId, newStatus);
            if (data.message === "Order status updated successfully") {
                set((state) => ({
                    orders: state.orders.map((o) =>
                        o._id === orderId ? { ...o, status: newStatus } : o
                    )
                }));
                return { success: true };
            }
            return { success: false, message: data.message };
        } catch (error) {
            return { success: false, message: "Server error" };
        }
    },


    getNotifications: async () => {
        try {
            const data = await fetchVendorNotificationsApi();
            if (Array.isArray(data)) {
                set({
                    notifications: data,
                    unreadCount: data.filter(n => !n.isRead).length
                });
            }
        } catch (error) {
            console.error("Error fetching notifications");
        }
    },

    markAllAsRead: () => {
        set((state) => ({
            notifications: state.notifications.map(n => ({ ...n, isRead: true })),
            unreadCount: 0
        }));
    },


    getDashboardStats: async () => {
        set({ isStatsLoading: true });
        try {
            const data = await fetchVendorDashboardStatsApi();
            if (data) {
                set({ dashboardStats: data });
            }
        } catch (error) {
            console.error("Error fetching stats:", error);
        } finally {
            set({ isStatsLoading: false });
        }
    },



}));

export default vendorOrderStore;