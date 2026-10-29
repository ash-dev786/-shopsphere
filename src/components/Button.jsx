function Button({ text, onClick, type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="rounded-[12px] w-full md:h-[42px] h-[38px] text-center text-white font-[500] text-[13px] md:text-[15px]
            bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition-all cursor-pointer shadow-xl"
        >
            {text}
        </button>
    );
}
export default Button;