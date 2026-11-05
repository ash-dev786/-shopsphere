const API_URL = "http://localhost:5000/api/orders";
const ADMIN_URL = "http://localhost:5000/api/admin";

export const fetchAdminStatsApi = async () => {
    const response = await fetch(`${ADMIN_URL}/admin-stats`, {
        method: "GET",
        credentials: "include",
    });
    return await response.json();
};

export const fetchAdminNotificationsApi = async () => {
    const response = await fetch(`${ADMIN_URL}/notifications`, { 
        method: "GET", 
        credentials: "include" 
    });
    return await response.json();
};

export const markAdminNotificationsReadApi = async () => {
    const response = await fetch(`${ADMIN_URL}/mark-read`, { 
        method: "PUT", 
        credentials: "include" 
    });
    return await response.json();
};

export const fetchAllVendorsApi = async () => {
    const response = await fetch(`${ADMIN_URL}/vendors`, { 
        method: "GET", 
        credentials: "include" 
    });
    return await response.json();
};

export const toggleVendorStatusApi = async (vendorId) => {
    const response = await fetch(`${ADMIN_URL}/vendors/${vendorId}/toggle-status`, { 
        method: "PUT", 
        credentials: "include" 
    });
    return await response.json();
};

export const fetchAdminCommissionsApi = async () => {
    const response = await fetch(`${ADMIN_URL}/commissions`, { 
        method: "GET", 
        credentials: "include" 
    });
    return await response.json();
};

export const fetchAdminSettingsApi = async () => {
    const response = await fetch(`${ADMIN_URL}/settings`, { 
        method: "GET", 
        credentials: "include" 
    });
    return await response.json();
};

export const updateAdminSettingsApi = async (data) => {
    const response = await fetch(`${ADMIN_URL}/settings`, { 
        method: "PUT", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include" 
    });
    return await response.json();
};