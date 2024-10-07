import Banner from "./HomeComponents/Banner";
import BestSellers from "./HomeComponents/BestSellers";
import FeaturedPerfumes from "./HomeComponents/FeaturedPerfumes";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-5/6 mx-auto">
                <FeaturedPerfumes></FeaturedPerfumes>
                <BestSellers></BestSellers>
            </div>
           
        </div>
    );
};

export default Home;