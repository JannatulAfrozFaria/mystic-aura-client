
import { Typewriter } from 'react-simple-typewriter';
import Categories from './Categories';
import { Helmet } from 'react-helmet-async';

// import Title from "../../UtilityComponents/Title";
// import usePerfume from "../../customHooks/usePerfume";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import { useState } from "react";
// import CategoryTab from "./CategoryTab";
// import { useParams } from "react-router-dom";

const Shop = () => {
    // const categories = ['floral', 'woody', 'citrus', 'oriental', 'fresh', 'gourmand', 'spicy', 'fruity', 'aquatic', 'chypre']
    // const { category } = useParams();
    // const initialIndex = categories.indexOf(category);
    // const [tabIndex, setTabIndex] = useState(initialIndex);
    // const { perfumes } = usePerfume();
    // const floral = perfumes.filter(item => item.category.toLowerCase() === 'floral');
    // const woody = perfumes.filter(item => item.category.toLowerCase() === 'woody');
    // const citrus = perfumes.filter(item => item.category.toLowerCase() === 'citrus');
    // const oriental = perfumes.filter(item => item.category.toLowerCase() === 'oriental');
    // const fresh = perfumes.filter(item => item.category.toLowerCase() === 'fresh');
    // const Gourmand = perfumes.filter(item => item.category.toLowerCase() === 'gourmand');
    // const spicy = perfumes.filter(item => item.category.toLowerCase() === 'spicy');
    // const fruity = perfumes.filter(item => item.category.toLowerCase() === 'fruity');
    // const aquatic = perfumes.filter(item => item.category.toLowerCase() === 'aquatic');
    // const chypre = perfumes.filter(item => item.category.toLowerCase() === 'chypre');

    return (
        <div>
            <Helmet>
                <title>Mystic Aura | Shop</title>
            </Helmet>
            <div className='relative w-full h-[40vh] md:h-[90vh] bg-no-repeat bg-cover'
                style={{
                    backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.2),rgba(0,0,0,0.4)), url("https://i.ibb.co/Gky236g/purple.jpg")`,
                }}>
                <h1 className="absolute top-12 p-12 md:p-24 uppercase text-2xl md:text-6xl text-basic">
                    Discover Your Scent with Mystic Aura –{' '}
                    <span className='brandSpan'>
                        <br />
                        <Typewriter
                            words={['Where Elegance Meets Fragrance']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={3000}
                        />
                    </span>
                </h1>
            </div>
            <Categories></Categories>
        </div>
    );
};

export default Shop;