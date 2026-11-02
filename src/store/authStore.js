import { create } from 'zustand';
import { loginApi, signupApi } from '@/features/auth/authService'; 

const userAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,

    loginUser: async (email, password) => {
        try {
            const data = await loginApi(email, password);

            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify({ name: data.name, role: data.role }));
                
                set({ 
                    token: data.token, 
                    user: { name: data.name, role: data.role } 
                });
                
                return { success: true, role: data.role };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            return { success: false, message: "Server error" };
        }
    },

    signupUser: async (userData) => {
        try {
            const data = await signupApi(userData);
            if (data.message === "User created successfully!") {
                return { success: true, message: data.message };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            return { success: false, message: "Server error" };
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        set({ user: null, token: null });
    }
}));

export default userAuthStore;