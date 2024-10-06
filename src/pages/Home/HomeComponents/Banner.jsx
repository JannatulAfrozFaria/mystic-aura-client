import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/YhznL0P/banner-6.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/zvFmswfV/banner-3.avif" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/kg4rHbPg/banner-4.avif" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/T2VX5xcf/banner-5.avif" />
                    <p className="legend">Legend 5</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;