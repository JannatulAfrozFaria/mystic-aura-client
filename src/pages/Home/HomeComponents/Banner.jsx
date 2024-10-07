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
            // image: "https://i.postimg.cc/0jf3W8tS/banner-2.avif",
            // image: "https://i.postimg.cc/wjKvc0FN/banner2-p.avif",
            image: "https://i.postimg.cc/YC3vrQfm/b2cr.png",
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
            // image: "https://i.postimg.cc/T2VX5xcf/banner-5.avif",
            // image: "https://i.postimg.cc/jSzj8PkF/banner2.avif",
            image: "https://i.postimg.cc/xCk83hrK/b5cr.png",
            title: "Yves Saint Laurent"
        },
        {
            id: 6,
            // image: "https://i.postimg.cc/vHZS8wqP/banner-7.jpg",
            // image: "https://i.postimg.cc/brDy1ttL/b6cr.jpg",
            // image: "https://i.postimg.cc/T2VX5xcf/banner-5.avif",
            image: "https://i.postimg.cc/263rfZ2m/banner-b-7.jpg",
            title: "Atkinsons Oud"
        },
    ];

    return (
        <div >
            <Carousel swipeable={true} interval={4000} autoPlay={true} infiniteLoop={true} transitionTime={3000}>
                {
                    Banners.map((banner) => {
                        const [firstWord, ...restWords] = banner.title.split(' '); // Split the title into first word and rest of the words
                        return (
                            <div  key={banner.id} className="h-[90vh]">
                                <img className="relative" src={banner.image} alt={banner.title} />
                                <h1 className="absolute top-12 p-12 md:p-24 uppercase text-2xl md:text-7xl text-basic">
                                    {firstWord}{' '} {/* First word of the title */}
                                    <span className='brandSpan'>
                                        <Typewriter
                                            words={[restWords.join(' ')]} // Rest of the words joined as a string
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
                        );
                    })
                }
            </Carousel>
        </div>
    );
};

export default Banner;