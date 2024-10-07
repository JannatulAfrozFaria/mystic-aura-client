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
        </div>
    );
};

export default Categories;