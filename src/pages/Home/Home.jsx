import Banner from "./HomeComponents/Banner";
import FeaturedPerfumes from "./HomeComponents/FeaturedPerfumes";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-5/6 mx-auto">
                <FeaturedPerfumes></FeaturedPerfumes>
            </div>
           
        </div>
    );
};

export default Home;