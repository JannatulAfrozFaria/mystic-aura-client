import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CategoryTab = ({ items }) => {
    const itemsPerPage = 6; // Set items per page to 6

    // Calculate the number of pages
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>
            <div className="w-5/6 mx-auto md:w-full">
                {items.length <= itemsPerPage ? (
                    // If items are less than or equal to 6, render without pagination
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 mt-10 md:mt-16 mb-12 md:mb-32">
                        {items.map((perfume) => (
                            <CategoryCard key={perfume.id} item={perfume} />
                        ))}
                    </div>
                ) : (
                    // Render with pagination
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {[...Array(pageCount)].map((_, pageIndex) => (
                            <SwiperSlide key={pageIndex}>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 mt-10 md:mt-16 mb-12 md:mb-32">
                                    {items
                                        .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                                        .map((perfume) => (
                                            <CategoryCard key={perfume.id} item={perfume} />
                                        ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default CategoryTab;


// import CategoryCard from "./CategoryCard";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const CategoryTab = ({ items }) => {
//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//     };
//     return (
//         <div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 mt-10 md:mt-16 mb-12 md:mb-32 w-5/6 mx-auto md:w-full">
//                 {items.map((perfume) =>
//                     <CategoryCard key={perfume.id} item={perfume} />
//                 )}
//             </div>
//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default CategoryTab;

