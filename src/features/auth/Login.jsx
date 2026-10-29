import logo from '../../assets/logos/logo.png';
import lock from '../../assets/icons/lock.png';
import Textfield from '../../components/Textfield';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login() {
 const navigate = useNavigate();

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

                    <div className="flex flex-col items-center gap-[18px] md:gap-[20px] w-full mt-[20px] md:mt-[24px]">
                        <Textfield
                            label="Email Address"
                            type="email"
                            placeholder="Enter your email"
                        />

                        <Textfield
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
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
                    </div>
                </div>

                <div className="h-[20px] md:h-[24px]"></div>

                <Button text={"Login"} onClick={() => navigate('/dashboard')} />

                <div className="mt-[22px] w-full h-[1px] bg-gray-200"></div>

                <div className=" mt-[14px] flex justify-center items-center gap-[4px] text-[12px] md:text-[14px]">
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