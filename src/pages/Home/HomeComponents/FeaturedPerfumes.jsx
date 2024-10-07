import Title from "../../../UtilityComponents/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import PefumeData from '/public/perfumes.json'
import { Pagination } from 'swiper/modules';

const FeaturedPerfumes = () => {
    const perfumes = PefumeData.perfumes;
    return (
        <div className="">
            <Title heading={'Featured Product'} image={'https://i.postimg.cc/rmnRSHW9/logo-p.png'} description={'Discover our featured perfumes – a curated collection of luxury fragrances that captivate the senses. From timeless classics to modern scents, each perfume embodies elegance and allure, designed to leave a lasting impression'} ></Title>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {perfumes.slice(16). map((perfume)=>
                    <SwiperSlide key={perfume.id}>
                        <img className="relative w-full h-[40vh] shadow-2xl" src={perfume.image} alt="perfume-photo" />
                        <p className="text-basic">$ <span>{perfume.price}</span> </p>
                    </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedPerfumes;