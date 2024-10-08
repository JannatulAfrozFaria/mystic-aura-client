import Title from "../../../UtilityComponents/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const ClientReviews = () => {
   
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('/Reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[reviews])
    const customers = [
        {
            id: 1,
            name: "John Doe",
            profession: "Fragrance Enthusiast",
            companyLogo: "https://i.ibb.co/DDGrQ6d/logo2b.png",
            companyType: "Corporate",
            customerImage: "https://i.ibb.co/CP4ShLk/cus1.jpg",
            review: "Mystic Aura has become my signature scent. The balance of fresh top notes and deep undertones makes it perfect for any occasion."
        },
        {
            id: 2,
            name: "Jane Smith",
            profession: "Perfume Blogger",
            companyLogo: "https://i.ibb.co/mXftBsv/logo1b.png",
            companyType: "Design Studio",
            customerImage: "https://i.postimg.cc/J4Whxz7B/cus2.avif",
            review: "The floral blend in Blossom Dream is nothing short of perfection. It's soft yet captivating, and I receive compliments every time I wear it."
        },
        {
            id: 3,
            name: "Michael Lee",
            profession: "Perfume Collector",
            companyLogo: "https://i.ibb.co/RYpPHbB/logo1.png",
            companyType: "Real Estate",
            customerImage: "https://i.postimg.cc/VLRzF9H3/cus3.jpg",
            review: "As a collector, I can say the craftsmanship behind Royal Essence is remarkable. The woody notes create a luxurious experience."
        },
        {
            id: 4,
            name: "Sarah Adams",
            profession: "Fashion Editor",
            companyLogo: "https://i.postimg.cc/nhPFJZ7H/fr9-removebg-preview.png",
            companyType: "Advertising Agency",
            customerImage: "https://i.ibb.co/chhfgnV/cus4.jpg",
            review: "Summer Breeze is the perfect fragrance for anyone looking to feel refreshed. Its citrus notes are light yet energizing."
        },
        {
            id: 5,
            name: "David Carter",
            profession: "Tech Entrepreneur",
            companyLogo: "https://i.postimg.cc/Y9KLBtyv/fr1-removebg-preview.png",
            companyType: "Tech Startup",
            customerImage: "https://i.ibb.co/H2N4Xw9/cus5.jpg",
            review: "The unique scent of Midnight Velvet is unforgettable. The boldness of the fragrance gives me confidence every time I wear it."
        },
        {
            id: 6,
            name: "Emily Johnson",
            profession: "Boutique Owner",
            companyLogo: "https://i.postimg.cc/kXHzM5jh/fr6.png",
            companyType: "Retail",
            customerImage: "https://i.ibb.co/7vvHbGf/cus6.jpg",
            review: "Rose Petals is a true masterpiece. The floral notes are perfectly balanced, and it lasts all day without fading."
        },
        {
            id: 7,
            name: "Robert Evans",
            profession: "Hotel Manager",
            companyLogo: "https://i.postimg.cc/LsKWfbFt/fr2.png",
            companyType: "Hospitality",
            customerImage: "https://i.ibb.co/R6y0q5W/cus7.jpg",
            review: "Ocean Mist is my go-to fragrance for summer. It’s refreshing and reminds me of a day spent by the sea."
        },
        {
            id: 8,
            name: "Olivia Wilson",
            profession: "Restaurant Owner",
            companyLogo: "https://i.postimg.cc/Ls3xP4TS/fr3.png",
            companyType: "Hospitality",
            customerImage: "https://i.ibb.co/njfTysy/cus8.jpg",
            review: "Amber Nights has an alluring depth to it. It's perfect for an evening out and leaves a lasting impression."
        },
        {
            id: 9,
            name: "William Harris",
            profession: "Fitness Club Owner",
            companyLogo: "https://i.postimg.cc/k5JpftDG/fr13.png",
            companyType: "Fitness",
            customerImage: "https://i.ibb.co/gJZghTc/cus9.jpg",
            review: "Citrus Rush is a great scent for an active lifestyle. It’s light, fresh, and invigorating, perfect for the gym or outdoor activities."
        },
        {
            id: 10,
            name: "Sophia Martinez",
            profession: "Gallery Curator",
            companyLogo: "https://i.postimg.cc/rmdgPGTV/fr11-removebg-preview.png",
            companyType: "Art Gallery",
            customerImage: "https://i.ibb.co/WgQdwbP/cus10.jpg",
            review: "The artistic blend of notes in Artistry Bloom elevates the experience of wearing perfume to a whole new level. It’s a work of art."
        },
        {
            id: 11,
            name: "James Brown",
            profession: "Café Owner",
            companyLogo: "https://i.postimg.cc/GtwPgZzK/fr7-removebg-preview.png",
            companyType: "Hospitality",
            customerImage: "https://i.ibb.co/ZXS8v9n/cus11.jpg",
            review: "Vanilla Spice adds a warm, comforting aura to my day. Customers frequently ask what fragrance I’m wearing, and I proudly share it."
        },
        {
            id: 12,
            name: "Grace Taylor",
            profession: "Event Planner",
            companyLogo: "https://i.postimg.cc/6qQ9DSw7/logo3-removebg-preview.png",
            companyType: "Event Management",
            customerImage: "https://i.ibb.co/nj7ZGH4/2009.webp",
            review: "Golden Hour has a sophisticated elegance. It’s perfect for formal events, and I always receive compliments when I wear it."
        }
    ];
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default for desktop
        slidesToScroll: 3,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay every 3 seconds
        responsive: [
            {
                breakpoint: 1024, // For tablet devices
                settings: {
                    slidesToShow: 2, // Show 2 slides for tablets
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600, // For mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 slide for mobile
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div>
            <Title heading={'Client Reviews'} image={'https://i.postimg.cc/rmnRSHW9/logo-p.png'} description={""}></Title>
            {/* SLIDER------STARTS--------- */}
            <div>
                <div
                    className="grid grid-cols-1  gap-4 md:gap-6 justify-center w-5/6 mx-auto md:w-full roboto text-gray-500"
                >
                    <Slider {...settings} >
                        {customers.map(customer =>
                            <div key={customer.id} className="">
                                <div className=" bg-gradient-to-r from-white bestImage1 to-[#FBCFE8] grid grid-cols-1 p-4 md:p-6  shadow-xl h-[40vh] md:h-[50vh]">
                                    <div className='flex gap-3'>
                                        {/* PHOTO------- */}
                                        <div>
                                            <div className='flex justify-start relative'>
                                                <div className="chat chat-start">
                                                    <div className="chat-image avatar">
                                                        <div className="w-16 rounded-full">
                                                                <img alt="Tailwind CSS chat bubble component"
                                                                src={customer.customerImage} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-[#c97ca9] rounded_custom p-1 absolute  top-1 left-12 md:left-11 text-white  "> <FaQuoteRight /> </div>
                                            </div>
                                        </div>
                                        {/* INTRODUCTION------- */}
                                        <div>
                                            <h1 className="text-2xl">{customer.name} </h1>
                                            <h2 className="text-lg">{customer.profession} </h2>
                                        </div>
                                    </div>
                                    {/* REVIEW---------- */}
                                    <div>
                                        <p className="text-base md:text-lg text-gray my-2">{customer.review} </p>
                                    </div>
                                    {/* <hr className="border-2 border-[#c97ca9] text-[#c97ca9] " /> */}
                                    {/* RATING -----SECTION */}
                                    <div className='grid grid-cols-1 items-start'>
                                        <div>
                                            <img className="w-16" src={customer.companyLogo} alt='company-logo' />
                                            <h1 className="text-md">{customer.companyType} </h1>
                                        </div>
                                        {/* RATING-----ICON */}
                                        <div>
                                            <div className="rating rating-md">
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-400" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-400" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-400" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-400" />
                                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
            {/* SLIDER------ENDS---------------- */}
        </div>

    );
};

export default ClientReviews;