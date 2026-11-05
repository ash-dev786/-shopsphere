const API_URL = "https://shopsphere-backend-nh3g.onrender.com/api/auth";

export const loginApi = async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", 
    });
    return await response.json();
};

export const signupApi = async (data) => {
    const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include", 
    });
    return await response.json();
};

export const logoutApi = async () => {
    const response = await fetch(`${API_URL}/logout`, {
        method: "POST",
        credentials: "include",
    });
    return await response.json();
};

export const getProfileApi = async () => {
    const response = await fetch(`${API_URL}/profile`, {
        method: "GET",
        credentials: "include",
    });
    return await response.json();
};

export const updateProfileApi = async (userData) => {
    const response = await fetch(`${API_URL}/update-profile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
    });
    return await response.json();
};