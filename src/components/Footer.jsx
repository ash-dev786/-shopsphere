function Footer() {
    const footerLinks = [
        'Terms of Service',
        'Privacy Policy',
        'Vendor Policy',
        'Buyer Protection',
        'Help Center',
        'API Docs',
    ];

    return (
        <footer className="w-full bg-white border-t border-gray-100 py-[20px] px-[16px] md:px-[40px] mt-[20px]">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[16px]">


                <div className="flex flex-col md:flex-row items-center gap-[8px] md:gap-[16px] text-center md:text-left">
                    <div className="flex items-center gap-[6px]">
                        <span className="text-[15px] font-[800] italic text-[#413EDC]">
                            ShopSphere
                        </span>
                        <span className="text-gray-300">•</span>
                    </div>
                    <p className="text-[11px] md:text-[12px] text-gray-500 font-[500]">
                        © 2026 ShopSphere. All rights reserved. Secure Multi-Vendor Commerce Platform.
                    </p>
                </div>


                <div className="flex flex-wrap items-center justify-center gap-[14px] md:gap-[18px]">
                    {footerLinks.map((link, index) => (
                        <a
                            key={index}
                            href="#"
                            className="text-[11px] md:text-[12px] font-[600] text-gray-600 hover:text-[#413EDC] transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
}

export default Footer;