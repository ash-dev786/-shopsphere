const API_URL = "http://localhost:5000/api/auth";

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