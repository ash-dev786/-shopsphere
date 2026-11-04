import { create } from 'zustand';
import { createOrderApi, fetchMyOrdersApi, fetchCustomerNotificationsApi, markOrdersReadApi } from '@/features/orders/orderService';
const orderStore = create((set) => ({
    isPlacingOrder: false,
    myOrders: [],
    isLoadingOrders: false,
    customerNotificationCount: 0,


    placeOrder: async (orderData) => {
        set({ isPlacingOrder: true });
        try {
            const data = await createOrderApi(orderData);

            if (data.message === "Order placed successfully!") {
                return { success: true, orders: data.orders };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            return { success: false, message: "Server error" };
        } finally {
            set({ isPlacingOrder: false });
        }
    },

    getMyOrders: async () => {
        set({ isLoadingOrders: true });
        try {
            const data = await fetchMyOrdersApi();
            if (Array.isArray(data)) {
                set({ myOrders: data });
            }
        } catch (error) {
            console.error("Error fetching my orders:", error);
        } finally {
            set({ isLoadingOrders: false });
        }
    },

    getCustomerNotifications: async () => {
        try {
            const data = await fetchCustomerNotificationsApi();
            if (data.count !== undefined) {
                set({ customerNotificationCount: data.count });
            }
        } catch (error) {
            console.error("Error fetching customer notifications:", error);
        }
    },

    markOrdersAsRead: async () => {
        try {
            await markOrdersReadApi();
            set({ customerNotificationCount: 0 }); 
        } catch (error) {
            console.error("Error marking orders as read");
        }
    },

    clearCustomerNotifications: () => {
        set({ customerNotificationCount: 0 });
    }


}));

export default orderStore;