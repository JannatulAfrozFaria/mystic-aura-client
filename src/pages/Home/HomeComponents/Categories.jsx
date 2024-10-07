import Title from "../../../UtilityComponents/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';

const Categories = () => {
    return (
        <div>
            {/* <Title heading={'Categories'} image={'https://i.postimg.cc/0y5NHLYT/mystic-aura-logo.png'}></Title> */}
            <Title heading={'Categories'} image={'https://i.postimg.cc/6p4mvJsB/logo-p2.png'} imageClass={'border-2 rounded-full border-[#d282afbc]'}></Title>
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
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Categories;