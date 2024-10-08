import Banner from "./HomeComponents/Banner";
import BestSellers from "./HomeComponents/BestSellers";
import Brands from "./HomeComponents/Brands";
import ClientReviews from "./HomeComponents/ClientReviews";
import Discount from "./HomeComponents/Discount";
import FeaturedPerfumes from "./HomeComponents/FeaturedPerfumes";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Mystic Aura | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="w-full md:w-5/6 mx-auto">
                <FeaturedPerfumes></FeaturedPerfumes>
                <BestSellers></BestSellers>
                <Discount></Discount>
                <ClientReviews></ClientReviews>
                <Brands></Brands>
            </div>
           
        </div>
    );
};

export default Home;