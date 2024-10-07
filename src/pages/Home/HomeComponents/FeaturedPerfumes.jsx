import Title from "../../../UtilityComponents/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import PefumeData from '/src/perfumes.json'
import { Pagination } from 'swiper/modules';
// import { useEffect, useState } from "react";

const FeaturedPerfumes = () => {
    // const [perfumes,setPerfumes] = useState([])
    // useEffect(()=>{
    //     fetch('perfumes.json')
    //     .then(res => res.json())
    //     .then(data => setPerfumes(data.perfumes)
    // )
        
    // },[])
    const perfumes = PefumeData.perfumes;
    return (
        <div className="mb-12">
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
                    {perfumes?.slice(16,28).map((perfume)=>
                    <SwiperSlide key={perfume.id}>
                        <img className="relative w-full h-[15vh] md:h-[40vh] shadow-2xl" src={perfume.image} alt="perfume-photo" />
                        <div className="absolute bottom-3 md:bottom-8 left-1 md:left-4 w-5/6 grid grid-cols-1 md:grid-cols-4 gap-2 ">
                            <p className=" col-span-1 priceTag  text-sm   flex gap-1 items-center justify-center ">$ <span> {perfume.price}</span> </p>
                            <p className="col-span-3 nameTag w-full text-sm hidden md:flex items-center justify-center "><span>{perfume.name}</span> </p>
                        </div>
                    </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedPerfumes;