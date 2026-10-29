import Header from '../../components/Header';
import Banner from '../../components/Banner';
import CategoryFilter from '../../components/CategoryFilter';
import ProductList from '../products/ProductList';
import FeaturesBar from '../../components/FeaturesBar';
import Footer from '../../components/Footer';

function UserDashboard() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-50">
            <Header />
            <Banner />
            <CategoryFilter />
            <ProductList />
            <FeaturesBar />
            <Footer />
        </div>
    );
}

export default UserDashboard;