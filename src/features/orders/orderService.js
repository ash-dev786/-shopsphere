const API_URL = "https://shopsphere-backend-nh3g.onrender.com/api/orders";

export const createOrderApi = async (orderData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
        credentials: "include",
    });
    return await response.json();
};

export const fetchMyOrdersApi = async () => {
    const response = await fetch(`${API_URL}/myorders`, {
        method: "GET",
        credentials: "include",
    });
    return await response.json();
};

export const fetchCustomerNotificationsApi = async () => {
    const response = await fetch(`${API_URL}/customer-notifications`, {
        method: "GET",
        credentials: "include",
    });
    return await response.json();
};

export const markOrdersReadApi = async () => {
    const response = await fetch(`${API_URL}/mark-read`, {
        method: "PUT",
        credentials: "include",
    });
    return await response.json();
};