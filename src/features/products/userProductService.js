const API_URL = "https://shopsphere-backend-nh3g.onrender.com/api/products";

export const fetchAllProductsApi = async (page = 1, category = 'all', search = '') => {
    const response = await fetch(`${API_URL}?page=${page}&limit=8&category=${category}&search=${search}`, {
        method: "GET",
        credentials: "include",
    });
    return await response.json();
};