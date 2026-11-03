import { create } from 'zustand';
import { createOrderApi } from '@/features/orders/orderService';
const orderStore = create((set) => ({
    isPlacingOrder: false,

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
    }
}));

export default orderStore;