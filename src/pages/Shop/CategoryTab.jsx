import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CategoryTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 mt-10 md:mt-16 mb-12 md:mb-32 w-5/6 mx-auto md:w-full">
                {items.map((perfume) =>
                    <CategoryCard key={perfume.id} item={perfume} />
                )}
            </div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CategoryTab;