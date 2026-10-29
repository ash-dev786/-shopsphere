import ProductCard from '../../components/ProductCard';

import electronicImg from '../../assets/images/electronic.png';
import perfumeImg from '../../assets/images/perfume.png';
import pordsImg from '../../assets/images/pords.png';
import shirtImg from '../../assets/images/shirt.png';
import watchImg from '../../assets/images/watch.png';

function ProductList() {
    const productsList1 = [
        {
            id: 1,
            category: 'Tech Gadget',
            image: pordsImg,
            vendor: 'SoundHub Clifton',
            title: 'Audionic Airbud 550 TWS Wireless Earbuds',
            tag: 'Official Retail',
            price: 'Rs 4,200',
        },
        {
            id: 2,
            category: 'Handmade',
            image: shirtImg,
            vendor: 'Gulberg Threads',
            title: 'Royal Khaadi Embroidered Kurta - Mint Green',
            tag: 'Pure Cotton',
            price: 'Rs 3,850',
        },
        {
            id: 3,
            category: 'Wearable',
            image: watchImg,
            vendor: 'TimeCraft Studio',
            title: 'Luxury Chronograph Leather Strap Watch',
            tag: 'Water Resistant',
            price: 'Rs 8,500',
        },
        {
            id: 4,
            category: 'Luxury Scent',
            image: perfumeImg,
            vendor: 'J. Fragrances',
            title: 'Oud Al Amir Premium Eau De Parfum',
            tag: 'Long Lasting',
            price: 'Rs 6,200',
        },
    ];

    const productsList2 = [
        {
            id: 5,
            category: 'Electronics',
            image: electronicImg,
            vendor: 'TechZone Saddar',
            title: 'Smart AI Noise Cancelling Headset Pro',
            tag: 'Wireless Bluetooth',
            price: 'Rs 12,999',
        },
        {
            id: 6,
            category: 'Tech Gadget',
            image: pordsImg,
            vendor: 'SoundHub Clifton',
            title: 'Audionic Airbud Pro Gaming Edition',
            tag: 'Low Latency',
            price: 'Rs 5,100',
        },
        {
            id: 7,
            category: 'Fashion',
            image: shirtImg,
            vendor: 'Gulberg Threads',
            title: 'Casual Slim Fit Cotton Linen Shirt',
            tag: 'Breathable Fabric',
            price: 'Rs 2,990',
        },
        {
            id: 8,
            category: 'Luxury Scent',
            image: perfumeImg,
            vendor: 'J. Fragrances',
            title: 'Royal Amber EDP Cologne 100ml',
            tag: 'Original Collection',
            price: 'Rs 7,400',
        },
    ];

    return (
        <div className="w-full py-[16px] px-[16px] md:px-[40px] flex flex-col gap-[28px]">
            <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-[14px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-[16px] md:text-[18px] font-[800] text-gray-900">
                        Featured Products
                    </h2>
                </div>

                  

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[14px] md:gap-[18px]
                mt-[10px] md:mt-[16px]
                ">
                    {productsList1.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-[14px]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[14px] md:gap-[18px] mt-[14px] md:mt-[16px]">
                    {productsList2.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;