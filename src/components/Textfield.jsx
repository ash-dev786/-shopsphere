import { useState } from 'react';
import { Mail, LockKeyhole, User, Store, Eye, EyeOff } from 'lucide-react';

function Textfield({ label, type, placeholder, required = true }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col w-full gap-[8px]">
            <label className="text-[13px] md:text-[14px] font-[600] text-gray-700">
                {label}
            </label>

            <div className="flex items-center w-full h-[42px] md:h-[45px] px-[14px] border border-gray-300 rounded-[14px] bg-transparent gap-[10px]">
                {type === 'email' ? (
                    <Mail size={18} className="text-gray-400 shrink-0" />
                ) : type === 'name' ? (
                    <User size={18} className="text-gray-400 shrink-0" />
                ) : type === 'shopname' ? (
                    <Store size={18} className="text-gray-400 shrink-0" />
                ) : (
                    <LockKeyhole size={18} className="text-gray-400 shrink-0" />
                )}

                <input
                    type={type === 'password' && showPassword ? 'text' : type === 'password' ? 'password' : 'text'}
                    placeholder={placeholder}
                    required={required}
                    className="w-full h-full bg-transparent outline-none text-[13px] md:text-[14px] text-gray-800 placeholder:text-gray-400"
                />

                {type === 'password' && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 shrink-0 cursor-pointer"
                    >
                        {showPassword ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}

export default Textfield;