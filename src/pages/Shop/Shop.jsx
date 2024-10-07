
import { Typewriter } from 'react-simple-typewriter';
import Categories from '../Home/HomeComponents/Categories';
const Shop = () => {
    return (
        <div>
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