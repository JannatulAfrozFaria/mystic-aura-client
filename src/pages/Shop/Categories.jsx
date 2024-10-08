import Title from "../../UtilityComponents/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import PefumeData from '/src/perfumes.json'
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
const Categories = () => {
    const [perfumeCollection,setPerfumeCollection] = useState([])
    useEffect(()=>{
        fetch('/perfumeCollection.json')
        .then(res => res.json())
        .then(data => setPerfumeCollection(data))
    },[perfumeCollection])
    // const perfumes = PefumeData.perfumes;
    return (
        <div className="my-12">
            <Title heading={'Categories'} image={'https://i.postimg.cc/6p4mvJsB/logo-p2.png'} imageClass={'border-2 rounded-full border-[#d282afbc]'}></Title>
            <div className="grid grid-cols-3 gap-4">
                {perfumeCollection.map((perfume)=>
                    <div key={perfume.id}>
                        <img className=" w-full h-[40vh] shadow-2xl" src={perfume.image} alt="perfume-photo" />
                    </div >
                    )}
            </div>
        </div>
    );
};

export default Categories;