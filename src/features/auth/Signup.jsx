import logo from '../../assets/logos/logo.png';
import Textfield from '../../components/Textfield';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingBag, Store, CheckCircle, Info } from 'lucide-react';

function Signup() {
    const [accountType, setAccountType] = useState('vendor');

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center py-[20px] md:py-[45px] px-[16px] md:px-[45px]">
            <div className="absolute top-[20px] left-[16px] md:top-[45px] md:left-[45px] flex justify-start">
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

            <div className="w-full max-w-[460px] mt-[120px] md:mt-[200px] p-[20px] md:p-[32px] bg-white border border-gray-200 rounded-[16px] shadow-xl">
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-[6px] px-[10px] py-[4px] md:px-[12px] md:py-[6px] rounded-full bg-[#EEF2FF] text-[#413EDC] text-[10px] md:text-[12px] font-[500] mb-[12px] md:mb-[16px]">
                        <span className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#413EDC]"></span>
                        Direct Multivendor Gateway
                    </div>

                    <h2 className="text-[20px] md:text-[26px] font-[700] text-gray-900 text-center">
                        Create Account!
                    </h2>

                    <p className="mt-[2px] md:mt-[4px] text-[12px] md:text-[14px] text-[#64748B] text-center">
                        Join Pakistan's premier multi-vendor marketplace
                    </p>

                    <div className="w-full mt-[16px] md:mt-[24px]">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[10px] md:mb-[12px] gap-[2px]">
                            <span className="text-[12px] md:text-[14px] font-[600] text-gray-900">
                                Select your account type
                            </span>
                            <div className="flex items-center gap-[4px] text-gray-400 text-[10px] md:text-[12px]">
                                <Info className="w-[12px] h-[12px] md:w-[13px] md:h-[13px]" />
                                <span>There is NO Admin option on register.</span>
                            </div>
                        </div>

                        <div className='mt-[12px] md:mt-[15px]'></div>
                        <div className="grid grid-cols-2 gap-[10px] md:gap-[14px] w-full">
                            <div
                                onClick={() => setAccountType('customer')}
                                className={`cursor-pointer p-[8px] md:p-[16px] rounded-[10px] md:rounded-[14px] border-[2px] transition-all flex flex-col justify-between ${accountType === 'customer'
                                    ? 'border-[#413EDC] bg-[#F8F9FF] shadow-sm'
                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-[6px] md:mb-[14px]">
                                    <div className={`p-[5px] md:p-[10px] rounded-[7px] md:rounded-[10px] ${accountType === 'customer' ? 'bg-[#413EDC] text-white' : 'bg-gray-100 text-gray-500'
                                        }`}>
                                        <ShoppingBag className="w-[17px] h-[17px] md:w-[20px] md:h-[20px]" />
                                    </div>
                                    <div className={`w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full border flex items-center justify-center ${accountType === 'customer' ? 'border-[#413EDC] bg-[#413EDC] text-white' : 'border-gray-300'
                                        }`}>
                                        {accountType === 'customer' && <CheckCircle className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]" />}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-[700] text-[13px] md:text-[15px] text-gray-900">Customer</h3>
                                    <p className="text-[10px] md:text-[12px] text-[#64748B] mt-[2px] md:mt-[4px] leading-[13px] md:leading-[16px]">
                                        Browse, buy products & track your shipments across verified sellers.
                                    </p>
                                </div>
                            </div>

                            <div
                                onClick={() => setAccountType('vendor')}
                                className={`cursor-pointer p-[8px] md:p-[16px] rounded-[10px] md:rounded-[14px] border-[2px] transition-all flex flex-col justify-between ${accountType === 'vendor'
                                    ? 'border-[#413EDC] bg-[#F8F9FF] shadow-sm'
                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-[6px] md:mb-[14px]">
                                    <div className={`p-[5px] md:p-[10px] rounded-[7px] md:rounded-[10px] ${accountType === 'vendor' ? 'bg-[#413EDC] text-white' : 'bg-gray-100 text-gray-500'
                                        }`}>
                                        <Store className="w-[17px] h-[17px] md:w-[20px] md:h-[20px]" />
                                    </div>
                                    <div className={`w-[13px] h-[13px] md:w-[18px] md:h-[18px] rounded-full border flex items-center justify-center ${accountType === 'vendor' ? 'border-[#413EDC] bg-[#413EDC] text-white' : 'border-gray-300'
                                        }`}>
                                        {accountType === 'vendor' && <CheckCircle className="w-[13px] h-[13px] md:w-[14px] md:h-[14px]" />}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-[3px] md:gap-[6px]">
                                        <h3 className="font-[700] text-[13px] md:text-[15px] text-gray-900">Vendor</h3>
                                        <span className="px-[3px] py-[2px] md:px-[6px] md:py-[2px] bg-[#EEF2FF] text-[#413EDC] text-[9px] md:text-[10px] font-[600] rounded-[3px] md:rounded-[4px]">
                                            Partner
                                        </span>
                                    </div>
                                    <p className="text-[10px] md:text-[12px] text-[#64748B] mt-[2px] md:mt-[4px] leading-[13px] md:leading-[16px]">
                                        List products, manage inventory & receive payouts directly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex w-full items-center flex-col gap-[18px] md:gap-[24px] mt-[20px]'>
                        <Textfield
                            label="Full Name"
                            type="name"
                            placeholder="Enter your name"
                        />
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
                        {accountType === 'vendor' && (
                            <Textfield
                                label="Shop Name"
                                type="shopname"
                                placeholder="shop name"
                            />
                        )}


                    </div>

                    <div className="h-[30px] md:h-[35px]"></div>

                    <Button text={"Create Account"} />

                    <div className="mt-[22px] w-full h-[1px] bg-gray-200"></div>

                    <div className=" mt-[14px] flex justify-center items-center gap-[4px] text-[12px] md:text-[14px] 
                    mb-[8px]
                    ">
                        <span className="text-[#64748B]">
                            already have an account?
                        </span>

                        <Link
                            to="/"
                            className="text-[#413EDC] font-[600] cursor-pointer"
                        >
                            Sign in
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Signup;