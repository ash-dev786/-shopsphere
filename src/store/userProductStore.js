import { create } from 'zustand';
import { fetchAllProductsApi } from '@/features/products/userProductService';

const userProductStore = create((set) => ({
    products: [],
    isLoading: false,
    page: 1,
    totalPages: 1,
    selectedCategory: 'all',
    searchQuery: '',

    fetchProducts: async (pageNumber = 1, category = 'all', search = '') => {
        set({ isLoading: true, selectedCategory: category, searchQuery: search });
        try {
            const data = await fetchAllProductsApi(pageNumber, category, search);
            
            if (data.products) {
                set({ 
                    products: data.products, 
                    page: data.page, 
                    totalPages: data.pages 
                });
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            set({ isLoading: false });
        }
    }
}));

export default userProductStore;