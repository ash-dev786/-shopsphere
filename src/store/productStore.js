import { create } from 'zustand';
import {
    fetchVendorProductsApi,
    addProductApi,
    deleteProductApi,
    updateProductApi
} from '@/features/vendor/services/productService';

const productStore = create((set) => ({
    products: [],
    isLoading: false,

    getVendorProducts: async () => {
        set({ isLoading: true });
        try {
            const data = await fetchVendorProductsApi();
            if (Array.isArray(data)) {
                set({ products: data });
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            set({ isLoading: false });
        }
    },

    createProduct: async (formData) => {
        try {
            const data = await addProductApi(formData);
            if (data.product) {
                set((state) => ({
                    products: [data.product, ...state.products]
                }));
                return { success: true };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            return { success: false, message: "Server error" };
        }
    },

    // 1. Delete Product Function
    removeProduct: async (id) => {
        try {
            const data = await deleteProductApi(id);
            if (data.message === "Product deleted successfully") {
                set((state) => ({
                    products: state.products.filter((p) => p._id !== id)
                }));
                return { success: true };
            }
            return { success: false, message: data.message };
        } catch (error) {
            return { success: false, message: "Server error" };
        }
    },


    // 2. Update Product Function
    editProduct: async (id, formData) => {
        try {
            const data = await updateProductApi(id, formData);
            if (data.product) {
                set((state) => ({
                    products: state.products.map((p) =>
                        p._id === id ? data.product : p
                    )
                }));
                return { success: true };
            }
            return { success: false, message: data.message };
        } catch (error) {
            return { success: false, message: "Server error" };
        }
    }



}));

export default productStore;