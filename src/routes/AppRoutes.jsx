import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '@/features/auth/Login';
import Signup from '@/features/auth/Signup';
import UserDashboard from '@/features/user/UserDashboard';
import VendorDashboard from '@/features/vendor/VendorDashboard';
import AdminDashboard from '@/features/admin/AdminDashboard';
import ProductDetail from '@/features/products/ProductDetail';
import Cart from '@/features/cart/Cart';
import Checkout from '@/features/orders/Checkout';
import MyOrders from '@/features/orders/MyOrders';
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/vendordashboard" element={<VendorDashboard />} />
                <Route path="/admindashboard" element={<AdminDashboard />} />
                <Route path="/productdetail" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/myorders" element={<MyOrders />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;