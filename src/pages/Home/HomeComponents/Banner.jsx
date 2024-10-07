import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    const Banners = [
        {
            id: 1,
            image: "https://i.postimg.cc/SsbvmX38/banner-b-1.jpg",
            title: "Trussardi Donna"
        },
        {
            id: 2,
            image: "https://i.postimg.cc/0jf3W8tS/banner-2.avif",
            title: "Dunhill Icon"
        },
        {
            id: 3,
            image: "https://i.postimg.cc/zvFmswfV/banner-3.avif",
            title: "Gucci Bloom"
        },
        {
            id: 4,
            image: "https://i.postimg.cc/kg4rHbPg/banner-4.avif",
            title: "Ralph Lauren"
        },
        {
            id: 5,
            image: "https://i.postimg.cc/T2VX5xcf/banner-5.avif",
            title: "Yves Saint Laurent"
        },
        {
            id: 6,
            image: "https://i.postimg.cc/vHZS8wqP/banner-7.jpg",
            title: "Atkinsons Oud"
        },
    ];

    return (
        <div >
            <Carousel>
                {
                    Banners.map((banner) =>
                        <div key={banner.id} className="h-[90vh]">
                            {/* <img src="https://i.ibb.co/YhznL0P/banner-6.jpg" /> */}
                            <img className="relative" src="https://i.postimg.cc/SsbvmX38/banner-b-1.jpg" />
                            <h1 className="absolute top-12 p-12 md:p-24 uppercase text-2xl md:text-7xl  text-basic">
                                Trussardi{' '}
                                <span className='brandSpan'>
                                    <Typewriter
                                        words={['Donna']}
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
                    )
                }
                {/* <div className="h-[90vh]">
                    <img className="relative" src="https://i.postimg.cc/SsbvmX38/banner-b-1.jpg" />
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
                    <img src="https://i.postimg.cc/vHZS8wqP/banner-7.jpg" />
                    <p className="legend">Atkinsons Oud</p>
                </div> */}
            </Carousel>
        </div>
    );
};

export default Banner;