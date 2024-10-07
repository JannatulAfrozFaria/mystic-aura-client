import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div >
            <Carousel>
                <div className="h-[90vh]">
                    {/* <img src="https://i.ibb.co/YhznL0P/banner-6.jpg" /> */}
                    <img className="relative" src="https://i.postimg.cc/SsbvmX38/banner-b-1.jpg" />
                    <h1 className="absolute p-12">
                        Trussardi{' '}
                        <span className='text-2xl md:text-7xl banner-title'
                        // style={{ color: 'red', fontWeight: 'bold' }}
                        >
                            <Typewriter
                                words={['Donna']}
                                loop={true}
                                // loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={3000}
                            // onLoopDone={handleDone}
                            // onType={handleType}
                            />
                        </span>
                    </h1>
                    <p className="legend bannerText">Trussardi Donna</p>
                </div>
                <div className="h-[90vh]">
                    <img src="https://i.postimg.cc/0jf3W8tS/banner-2.avif" />
                    <p className="legend">Dunhill Icon</p>
                </div>
                <div className="h-[90vh]">
                    <img src="https://i.postimg.cc/zvFmswfV/banner-3.avif" />
                    <p className="legend">Gucci Bloom</p>
                </div>
                <div className="h-[90vh]">
                    <img src="https://i.postimg.cc/kg4rHbPg/banner-4.avif" />
                    <p className="legend">Ralph Lauren </p>
                </div>
                <div className="h-[90vh]">
                    <img src="https://i.postimg.cc/T2VX5xcf/banner-5.avif" />
                    <p className="legend">Yves Saint Laurent</p>
                </div>
                <div className="h-[90vh]">
                    {/* <img src="https://i.postimg.cc/76Sjz10m/banner-b-8.avif" /> */}
                    <img src="https://i.postimg.cc/vHZS8wqP/banner-7.jpg" />
                    <p className="legend">Atkinsons Oud</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;