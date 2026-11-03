import { useState, useEffect } from 'react';
import { Plus, Package, Trash2, Edit, X, Image as ImageIcon, AlertTriangle } from 'lucide-react';
import Textfield from '@/components/Textfield';
import productStore from '@/store/productStore';

function ProductsTab() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [editId, setEditId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);

    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const [formData, setFormData] = useState({
        name: '', price: '', category: '', stock: '', description: ''
    });

    const {
        products, getVendorProducts, createProduct, removeProduct, editProduct, isLoading
    } = productStore();

    useEffect(() => {
        getVendorProducts();
    }, [getVendorProducts]);

    const handleChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const openAddModal = () => {
        setEditId(null);
        setFormData({ name: '', price: '', category: '', stock: '', description: '' });
        setImagePreview(null);
        setImageFile(null);
        setIsModalOpen(true);
    };

    const openEditModal = (product) => {
        setEditId(product._id);
        setFormData({
            name: product.name,
            price: product.price,
            category: product.category,
            stock: product.stock,
            description: product.description
        });
        setImagePreview(product.imageUrl);
        setImageFile(null);
        setIsModalOpen(true);
    };

    const openDeleteModal = (id) => {
        setDeleteId(id);
        setIsDeleteModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('price', formData.price);
        data.append('category', formData.category);
        data.append('stock', formData.stock);
        data.append('description', formData.description);
        if (imageFile) data.append('image', imageFile);

        let result;
        if (editId) {
            result = await editProduct(editId, data);
        } else {
            result = await createProduct(data);
        }

        if (result.success) {
            alert(editId ? "Product updated successfully!" : "Product added successfully!");
            setIsModalOpen(false);
        } else {
            alert(result.message || "Error saving product");
        }
    };

    const handleDeleteConfirm = async () => {
        const result = await removeProduct(deleteId);
        if (result.success) {
            alert("Product deleted successfully!");
            setIsDeleteModalOpen(false);
        } else {
            alert(result.message || "Error deleting product");
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
                    onClick={openAddModal}
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
                            {isLoading ? (
                                <tr><td colSpan="5" className="text-center py-6 text-gray-500">Loading products...</td></tr>
                            ) : products.length === 0 ? (
                                <tr><td colSpan="5" className="text-center py-6 text-gray-500">No products found.</td></tr>
                            ) : (
                                products.map((item) => (
                                    <tr key={item._id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-[14px] font-[700] text-gray-900 flex items-center gap-[10px]">
                                            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#EEF2FF] text-[#413EDC] flex items-center justify-center shrink-0 overflow-hidden">
                                                {item.imageUrl ? (
                                                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <Package size={16} />
                                                )}
                                            </div>
                                            <span className="truncate max-w-[150px] sm:max-w-[200px]">{item.name}</span>
                                        </td>
                                        <td className="py-[14px] text-gray-600 font-[500]">{item.category}</td>
                                        <td className="py-[14px] font-[700] text-[#413EDC]">Rs {Number(item.price).toLocaleString()}</td>
                                        <td className="py-[14px] font-[600] text-gray-700">{item.stock} pcs</td>
                                        <td className="py-[14px] text-right">
                                            <div className="flex items-center justify-end gap-[6px]">
                                                <button
                                                    onClick={() => openEditModal(item)}
                                                    type="button"
                                                    className="p-[6px] text-gray-400 hover:text-[#413EDC] hover:bg-[#EEF2FF] rounded-[8px] transition-all cursor-pointer"
                                                >
                                                    <Edit size={15} />
                                                </button>
                                                <button
                                                    onClick={() => openDeleteModal(item._id)}
                                                    type="button"
                                                    className="p-[6px] text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-[8px] transition-all cursor-pointer"
                                                >
                                                    <Trash2 size={15} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-[16px] bg-black/40 backdrop-blur-xs">
                    <div className="bg-white rounded-[20px] border border-gray-100 p-[20px] md:p-[28px] w-full max-w-[500px] shadow-xl flex flex-col gap-[16px] max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-[12px]">
                            <h2 className="text-[18px] font-[800] text-gray-900">
                                {editId ? "Edit Product" : "Add New Product"}
                            </h2>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="w-[30px] h-[30px] rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
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
                                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} required={!editId} />
                                </label>
                            </div>

                            <Textfield
                                label="Product Name"
                                type="productName"
                                placeholder="e.g. Smart Watch"
                                value={formData.name}
                                onChange={(e) => handleChange(e, 'name')}
                                required
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                                <Textfield
                                    label="Price (PKR)"
                                    type="price"
                                    placeholder="e.g. 4500"
                                    value={formData.price}
                                    onChange={(e) => handleChange(e, 'price')}
                                    required
                                />
                                <Textfield
                                    label="Category"
                                    type="category"
                                    placeholder="e.g. Electronics"
                                    value={formData.category}
                                    onChange={(e) => handleChange(e, 'category')}
                                    required
                                />
                            </div>

                            <Textfield
                                label="Stock Quantity"
                                type="stock"
                                placeholder="e.g. 20"
                                value={formData.stock}
                                onChange={(e) => handleChange(e, 'stock')}
                                required
                            />

                            <div className="flex flex-col gap-[8px] w-full">
                                <label className="text-[13px] md:text-[14px] font-[600] text-gray-700">
                                    Product Description
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => handleChange(e, 'description')}
                                    placeholder="Enter detailed product description..."
                                    required
                                    className="w-full min-h-[100px] p-[11px] border border-gray-300 rounded-[14px] bg-transparent outline-none text-[13px] md:text-[14px] text-gray-800 placeholder:text-gray-400 transition-all resize-y"
                                ></textarea>
                            </div>

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
                                    {editId ? "Update Product" : "Save Product"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-[16px] bg-black/40 backdrop-blur-xs">
                    <div className="bg-white rounded-[20px] border border-gray-100 p-[24px] w-full max-w-[400px] shadow-xl flex flex-col items-center text-center gap-[16px]">
                        <div className="w-[50px] h-[50px] rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                            <AlertTriangle size={24} />
                        </div>
                        <div>
                            <h2 className="text-[18px] font-[800] text-gray-900">Are you sure?</h2>
                            <p className="text-[13px] text-gray-500 mt-[4px]">
                                Do you really want to delete this product? This action cannot be undone.
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-[10px] w-full mt-[8px]">
                            <button
                                type="button"
                                onClick={() => setIsDeleteModalOpen(false)}
                                className="w-full px-[16px] py-[10px] rounded-[10px] text-[13px] font-[600] text-gray-600 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleDeleteConfirm}
                                className="w-full bg-red-500 hover:bg-red-600 text-white px-[16px] py-[10px] rounded-[10px] text-[13px] font-[700] shadow-sm cursor-pointer transition-all"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductsTab;