const API_URL = "https://shopsphere-backend-nh3g.onrender.com/api/orders";

export const fetchVendorOrdersApi = async () => {
    const response = await fetch(`${API_URL}/vendor`, {
        method: "GET",
        credentials: "include",
    });
    return await response.json();
};

export const updateOrderStatusApi = async (orderId, status) => {
    const response = await fetch(`${API_URL}/${orderId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
        credentials: "include",
    });
    return await response.json();
};

export const fetchVendorNotificationsApi = async () => {
    const response = await fetch(`${API_URL}/notifications`, {
        method: "GET",
        credentials: "include",
    });
    return await response.json();
};

export const fetchVendorDashboardStatsApi = async () => {
    const response = await fetch(`${API_URL}/dashboard-stats`, {
        method: "GET",
        credentials: "include",
    });
    return await response.json();
};