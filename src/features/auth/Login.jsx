import logo from '@/assets/logos/logo.png';
import lock from '@/assets/icons/lock.png';
import Textfield from '@/components/Textfield';
import Button from '@/components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import userAuthStore from '@/store/authStore';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = userAuthStore((state) => state.loginUser);

        const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            return alert("Please enter email and password");
        }

        // Admin Hardcoded Check
        if (email === "admin@shopsphere.com" && password === "Admin@786") {
            alert("Admin Login Successful!");
            navigate('/admindashboard');
            return; 
        }

        // Normal User/Vendor Login
        const result = await loginUser(email, password);

        if (result.success) {
            alert("Login Successful!");
            if (result.role === 'vendor') {
                navigate('/vendordashboard');
            } else {
                navigate('/dashboard');
            }
        } else {
            alert(result.message);
        }
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center py-[20px] md:py-[45px] px-[20px] md:px-[45px]">
            <div className="absolute top-[20px] left-[20px] md:top-[45px] md:left-[45px] flex justify-start">
                <div className="flex items-center justify-center overflow-hidden rounded-[12px] h-[35px] w-[35px] md:h-[40px] md:w-[40px] bg-gradient-to-r from-[#413EDC] to-[#3FE1FD] p-[8px]">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-[14px] h-[14px] object-contain md:h-[16px] md:w-[16px]"
                    />
                </div>

                <div className="flex flex-col ml-[8px] gap-[2px]">
                    <h1 className="text-black font-[700] italic text-[14px] md:text-[15px]">
                        ShopSphere
                    </h1>
                    <h1 className="text-gray-500 font-[500] text-[10px] md:text-[11px]">
                        MULTI-VENDOR PLATFORM
                    </h1>
                </div>
            </div>

            <div className="w-full max-w-[420px] mt-[150px] md:mt-[200px] p-[24px] md:p-[32px] bg-white border border-gray-200 rounded-[16px] shadow-xl">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-[14px] bg-[#EBEDFF]">
                        <img
                            src={lock}
                            alt="Lock"
                            className="w-[17px] h-[17px] md:w-[20px] md:h-[20px] object-contain"
                        />
                    </div>

                    <h2 className="mt-[12px] md:mt-[16px] text-[20px] md:text-[24px] font-[700] text-gray-900">
                        Welcome Back!
                    </h2>

                    <p className="mt-[4px] text-[13px] md:text-[15px] text-[#64748B]">
                        Log in to your ShopSphere & client account
                    </p>

                    <form onSubmit={handleLogin} className="flex flex-col items-center gap-[18px] md:gap-[20px] w-full mt-[20px] md:mt-[24px]">
                        <Textfield
                            label="Email Address"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Textfield
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="flex justify-start w-full">
                            <label className="flex items-center gap-[7px] cursor-pointer text-[12px] md:text-[13px] text-gray-600">
                                <input
                                    type="checkbox"
                                    className="w-[12px] h-[12px] accent-[#413EDC] cursor-pointer rounded-[12px]"
                                />
                                Remember this device
                            </label>
                        </div>

                        <div className="h-[0px] md:h-[0px] w-full"></div>

                        <Button text={"Login"} type="submit" />
                    </form>
                </div>

                <div className="mt-[22px] w-full h-[1px] bg-gray-200"></div>

                <div className="mt-[14px] flex justify-center items-center gap-[4px] text-[12px] md:text-[14px]">
                    <span className="text-[#64748B]">
                        Don't have an account?
                    </span>

                    <Link
                        to="/signup"
                        className="text-[#413EDC] font-[600] cursor-pointer"
                    >
                        Register here
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;