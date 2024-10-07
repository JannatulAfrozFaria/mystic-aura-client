import Banner from "./HomeComponents/Banner";
import Categories from "./HomeComponents/Categories";
import FeaturedPerfumes from "./HomeComponents/FeaturedPerfumes";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-5/6 mx-auto">
                <FeaturedPerfumes></FeaturedPerfumes>
                <Categories></Categories>
            </div>
           
        </div>
    );
};

export default Home;