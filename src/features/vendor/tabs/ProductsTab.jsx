import { useState } from 'react';
import { Plus, Package, Trash2, Edit, X, Image as ImageIcon } from 'lucide-react';
import Textfield from '@/components/Textfield';

function ProductsTab() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const [products, setProducts] = useState([
        { id: 1, name: 'Wireless Earbuds Pro', price: '4999', category: 'Electronics', stock: '18' },
        { id: 2, name: 'Embroidered Lawn Suit 3pc', price: '5450', category: 'Fashion', stock: '12' },
        { id: 3, name: 'Peshawari Chappal', price: '2799', category: 'Footwear', stock: '25' },
    ]);

    const handleAddProduct = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
        setImagePreview(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="flex flex-col gap-[20px] w-full max-w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[16px]">
                <div className="flex flex-col gap-[4px]">
                    <h1 className="text-[22px] md:text-[26px] font-[800] text-gray-900 tracking-tight">
                        Products Management
                    </h1>
                    <span className="text-[13px] font-[600] text-gray-500">
                        Manage your existing items or add new products.
                    </span>
                </div>

                <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-[8px] bg-[#413EDC] hover:bg-[#3633b8] text-white px-[18px] py-[10px] rounded-[12px] text-[13px] font-[700] shadow-sm cursor-pointer transition-all shrink-0"
                >
                    <Plus size={18} />
                    <span>Add New Product</span>
                </button>
            </div>

            <div className="bg-white rounded-[20px] border border-gray-100 p-[16px] md:p-[20px] shadow-sm flex flex-col gap-[12px] w-full overflow-hidden">
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                            <tr className="border-b border-gray-100 text-[11px] font-[700] text-gray-400 uppercase tracking-wider">
                                <th className="pb-[10px]">Product Name</th>
                                <th className="pb-[10px]">Category</th>
                                <th className="pb-[10px]">Price</th>
                                <th className="pb-[10px]">Stock</th>
                                <th className="pb-[10px] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-[13px]">
                            {products.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-[14px] font-[700] text-gray-900 flex items-center gap-[10px]">
                                        <div className="w-[32px] h-[32px] rounded-[8px] bg-[#EEF2FF] text-[#413EDC] flex items-center justify-center shrink-0">
                                            <Package size={16} />
                                        </div>
                                        <span className="truncate max-w-[150px] sm:max-w-[200px]">{item.name}</span>
                                    </td>
                                    <td className="py-[14px] text-gray-600 font-[500]">{item.category}</td>
                                    <td className="py-[14px] font-[700] text-[#413EDC]">Rs {Number(item.price).toLocaleString()}</td>
                                    <td className="py-[14px] font-[600] text-gray-700">{item.stock} pcs</td>
                                    <td className="py-[14px] text-right">
                                        <div className="flex items-center justify-end gap-[6px]">
                                            <button type="button" className="p-[6px] text-gray-400 hover:text-[#413EDC] hover:bg-[#EEF2FF] rounded-[8px] transition-all cursor-pointer">
                                                <Edit size={15} />
                                            </button>
                                            <button type="button" className="p-[6px] text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-[8px] transition-all cursor-pointer">
                                                <Trash2 size={15} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-[16px] bg-black/40 backdrop-blur-xs">
                    <div className="bg-white rounded-[20px] border border-gray-100 p-[20px] md:p-[28px] w-full max-w-[500px] shadow-xl flex flex-col gap-[16px] max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-[12px]">
                            <h2 className="text-[18px] font-[800] text-gray-900">
                                Add New Product
                            </h2>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="w-[30px] h-[30px] rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <form onSubmit={handleAddProduct} className="flex flex-col gap-[14px]">

                            <div className="flex flex-col gap-[6px]">
                                <label className="text-[13px] md:text-[14px] font-[600] text-gray-700">
                                    Product Image
                                </label>
                                <label className="w-full h-[120px] border-2 border-dashed border-gray-300 rounded-[14px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all overflow-hidden relative group">
                                    {imagePreview ? (
                                        <>
                                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                                <span className="text-white text-[12px] font-[600]">Change Image</span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <ImageIcon className="text-gray-400 mb-[6px]" size={24} />
                                            <span className="text-[12px] font-[600] text-gray-500">Click to upload image</span>
                                        </>
                                    )}
                                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                                </label>
                            </div>

                            <Textfield
                                label="Product Name"
                                type="productName"
                                placeholder="e.g. Smart Watch"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                                <Textfield
                                    label="Price (PKR)"
                                    type="price"
                                    placeholder="e.g. 4500"
                                />
                                <Textfield
                                    label="Category"
                                    type="category"
                                    placeholder="e.g. Electronics"
                                />
                            </div>

                            <Textfield
                                label="Stock Quantity"
                                type="stock"
                                placeholder="e.g. 20"
                            />

                            <div className="flex items-center justify-end gap-[10px] pt-[10px] border-t border-gray-100 mt-[4px]">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-[16px] py-[8px] rounded-[10px] text-[13px] font-[600] text-gray-600 hover:bg-gray-100 cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-[#413EDC] hover:bg-[#3633b8] text-white px-[18px] py-[8px] rounded-[10px] text-[13px] font-[700] shadow-sm cursor-pointer transition-all"
                                >
                                    Save Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductsTab;