import Title from "../../../UtilityComponents/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import PefumeData from '/src/perfumes.json'
import { Pagination } from 'swiper/modules';
// import { useEffect, useState } from "react";
const Categories = () => {
    // const [perfumes,setPerfumes] = useState([])
    // useEffect(()=>{
    //     fetch('../../../perfumes.json')
    //     .then(res => res.json())
    //     .then(data => setPerfumes(data))
    // },[])
    const perfumes = PefumeData.perfumes;
    return (
        <div className="mb-12">
            {/* <Title heading={'Categories'} image={'https://i.postimg.cc/0y5NHLYT/mystic-aura-logo.png'}></Title> */}
            <Title heading={'Categories'} image={'https://i.postimg.cc/6p4mvJsB/logo-p2.png'} imageClass={'border-2 rounded-full border-[#d282afbc]'}></Title>
            {/* <div>
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
                    {perfumes.map((perfume)=>
                    <SwiperSlide key={perfume.id}>
                        <img className=" w-full h-[40vh] shadow-2xl" src={perfume.image} alt="perfume-photo" />
                    </SwiperSlide>
                    )}
                </Swiper>
            </div> */}
            
        </div>
    );
};

export default Categories;