import Title from "../../../UtilityComponents/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientReviews = () => {
    const customers = [
        {
            id: 1,
            name: "John Doe",
            profession: "CEO",
            companyLogo: "https://i.ibb.co/DDGrQ6d/logo2b.png",
            companyType: "Corporate",
            customerImage: "https://i.ibb.co/CP4ShLk/cus1.jpg",
            review: "The team transformed our office space into a modern,environment, perfectly aligned with our brand identity."
        },
        {
            id: 2,
            name: "Jane Smith",
            profession: "Interior Designer",
            companyLogo: "https://i.ibb.co/mXftBsv/logo1b.png",
            companyType: "Design Studio",
            customerImage: "https://i.postimg.cc/J4Whxz7B/cus2.avif",
            review: "Their attention to detail  brought our studio to life. Exceptional craftsmanship and professionalism."
        },
        {
            id: 3,
            name: "Michael Lee",
            profession: "Property Developer",
            companyLogo: "https://i.ibb.co/RYpPHbB/logo1.png",
            companyType: "Real Estate",
            customerImage: "https://i.postimg.cc/VLRzF9H3/cus3.jpg",
            review: "Working with this firm was seamless. They created stunning, sustainable designs for our real estate projects."
        },
        {
            id: 4,
            name: "Sarah Adams",
            profession: "Marketing Director",
            companyLogo: "https://i.postimg.cc/nhPFJZ7H/fr9-removebg-preview.png",
            companyType: "Advertising Agency",
            customerImage: "https://i.ibb.co/chhfgnV/cus4.jpg",
            review: "Their team turned our office into a creative hub that fosters collaboration. It's a perfect space for innovation."
        },
        {
            id: 5,
            name: "David Carter",
            profession: "Tech Entrepreneur",
            companyLogo: "https://i.postimg.cc/Y9KLBtyv/fr1-removebg-preview.png",
            companyType: "Tech Startup",
            customerImage: "https://i.ibb.co/H2N4Xw9/cus5.jpg",
            review: "They designed our workspace to reflect our cutting-edge tech culture. It's modern and future-proofed."
        },
        {
            id: 6,
            name: "Emily Johnson",
            profession: "Boutique Owner",
            companyLogo: "https://i.postimg.cc/kXHzM5jh/fr6.png",
            companyType: "Retail",
            customerImage: "https://i.ibb.co/7vvHbGf/cus6.jpg",
            review: "Our boutique's interior was transformed into a luxurious and welcoming space that truly resonates with our clientele."
        },
        {
            id: 7,
            name: "Robert Evans",
            profession: "Hotel Manager",
            companyLogo: "https://i.postimg.cc/LsKWfbFt/fr2.png",
            companyType: "Hospitality",
            customerImage: "https://i.ibb.co/R6y0q5W/cus7.jpg",
            review: "They redesigned our hotel's interior with elegance and comfort in mind. Our guests love the new modern aesthetic."
        },
        {
            id: 8,
            name: "Olivia Wilson",
            profession: "Restaurant Owner",
            companyLogo: "https://i.postimg.cc/Ls3xP4TS/fr3.png",
            companyType: "Hospitality",
            customerImage: "https://i.ibb.co/njfTysy/cus8.jpg",
            review: "They gave our restaurant a unique ambiance that blends modern style with warmth. Customers can't stop complimenting it."
        },
        {
            id: 9,
            name: "William Harris",
            profession: "Fitness Club Owner",
            companyLogo: "https://i.postimg.cc/k5JpftDG/fr13.png",
            companyType: "Fitness",
            customerImage: "https://i.ibb.co/gJZghTc/cus9.jpg",
            review: "Their design for our fitness club maximized space while creating a dynamic, energetic environment for all."
        },
        {
            id: 10,
            name: "Sophia Martinez",
            profession: "Gallery Curator",
            companyLogo: "https://i.postimg.cc/rmdgPGTV/fr11-removebg-preview.png",
            companyType: "Art Gallery",
            customerImage: "https://i.ibb.co/WgQdwbP/cus10.jpg",
            review: "Their innovative use of space perfectly showcased our artwork, enhancing the visitor experience at the gallery."
        },
        {
            id: 11,
            name: "James Brown",
            profession: "Café Owner",
            companyLogo: "https://i.postimg.cc/GtwPgZzK/fr7-removebg-preview.png",
            companyType: "Hospitality",
            customerImage: "https://i.ibb.co/ZXS8v9n/cus11.jpg",
            review: "They redesigned our café with a cozy, modern aesthetic that has significantly increased customer traffic."
        },
        {
            id: 12,
            name: "Grace Taylor",
            profession: "Event Planner",
            companyLogo: "https://i.postimg.cc/6qQ9DSw7/logo3-removebg-preview.png",
            companyType: "Event Management",
            customerImage: "https://i.ibb.co/nj7ZGH4/2009.webp",
            review: "Their thoughtful, functional designs transformed our event space into a versatile and visually stunning venue."
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
        </div>
    );
};

export default ClientReviews;