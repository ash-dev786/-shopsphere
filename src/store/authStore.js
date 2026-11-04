import { create } from 'zustand';
import { loginApi, signupApi, logoutApi, getProfileApi, updateProfileApi  } from '@/features/auth/authService';

const userAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,

    loginUser: async (email, password) => {
        try {
            const data = await loginApi(email, password);

            if (data.role) {
                localStorage.setItem('user', JSON.stringify({ name: data.name, role: data.role }));

                set({
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

       logout: async () => {
        try {
            await logoutApi();
            localStorage.clear(); 
            set({ user: null }); 
            window.location.href = '/'; 
        } catch (error) {
            console.error("Logout failed");
        }
    },

      getProfile: async () => {
        try {
            const data = await getProfileApi();
            if (data._id) {
                set({ user: data });
                localStorage.setItem('user', JSON.stringify(data));
            }
        } catch (error) {
            console.error("Error fetching profile");
        }
    },

    updateProfile: async (userData) => {
        try {
            const data = await updateProfileApi(userData);
            if (data.message === "Profile updated successfully") {
                set({ user: data.user });
                localStorage.setItem('user', JSON.stringify(data.user));
                return { success: true };
            }
            return { success: false, message: data.message };
        } catch (error) {
            return { success: false, message: "Server error" };
        }
    },


}));

export default userAuthStore;