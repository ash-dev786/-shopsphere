import { Truck, ShieldCheck, Headphones } from 'lucide-react';

function FeaturesBar() {
    const features = [
        {
            icon: Truck,
            title: 'Inter-City Express COD',
            description: 'Fast cash payment upon delivery to over 150+ Pakistani cities.',
        },
        {
            icon: ShieldCheck,
            title: 'Direct Merchant Payouts',
            description: 'Zero escrow with holding upon customer receipt confirmation.',
        },
        {
            icon: Headphones,
            title: '24/7 Dispute Resolution',
            description: 'Urdu & English support desks ready to arbitrate any order issues.',
        },
    ];

    return (
        <div className="w-full py-[50px] px-[16px] md:px-[40px]">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                {features.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-[16px] border border-gray-100 p-[16px] md:p-[20px] shadow-xs flex items-start gap-[14px]"
                        >
                            <div className="p-[10px] rounded-[12px] bg-[#EEF2FF] text-[#413EDC] shrink-0">
                                <IconComponent size={22} />
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <h4 className="text-[14px] md:text-[15px] font-[700] text-gray-900">
                                    {item.title}
                                </h4>
                                <p className="text-[12px] md:text-[13px] text-gray-500 leading-[1.4]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FeaturesBar;