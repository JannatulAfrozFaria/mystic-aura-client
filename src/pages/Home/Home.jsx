import Banner from "./HomeComponents/Banner";
import BestSellers from "./HomeComponents/BestSellers";
import ClientReviews from "./HomeComponents/ClientReviews";
import Discount from "./HomeComponents/Discount";
import FeaturedPerfumes from "./HomeComponents/FeaturedPerfumes";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-full md:w-5/6 mx-auto">
                <FeaturedPerfumes></FeaturedPerfumes>
                <BestSellers></BestSellers>
                <Discount></Discount>
                <ClientReviews></ClientReviews>
            </div>
           
        </div>
    );
};

export default Home;