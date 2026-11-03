const API_URL = "http://localhost:5000/api/products";

export const fetchVendorProductsApi = async () => {
    const response = await fetch(`${API_URL}/vendor`, {
        method: "GET",
        credentials: "include",
    });
    return await response.json();
};

export const addProductApi = async (formData) => {
    const response = await fetch(`${API_URL}/add`, {
        method: "POST",
        body: formData,
        credentials: "include",
    });
    return await response.json();
};

export const deleteProductApi = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        credentials: "include",
    });
    return await response.json();
};

export const updateProductApi = async (id, formData) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        body: formData,
        credentials: "include",
    });
    return await response.json();
};