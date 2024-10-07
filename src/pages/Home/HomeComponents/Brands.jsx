import Title from "../../../UtilityComponents/Title";
import Marquee from "react-fast-marquee";

const Brands = () => {
    const perfumeBrands = [
        {
          id: 1,
          name: "Chanel",
          image: "https://i.ibb.co/q5J5XvL/brand16.png",
        },
        {
          id: 2,
          name: "Gucci",
          image: "https://i.ibb.co/C20ThYx/brand-3.jpg",
        },
        {
          id: 3,
          name: "Dior",
          image: "https://i.ibb.co/z74kB07/brand2.jpg",
        },
        {
          id: 4,
          name: "Versace",
          image: "https://i.ibb.co/vQ3gf1L/brand5.jpg",
        },
        {
          id: 5,
          name: "Tom Ford",
          image: "https://i.ibb.co/K0mb05s/brand4.jpg",
        },
        {
          id: 6,
          name: "Armani",
          image: "https://i.ibb.co/t8X4k3n/brand6.webp",
        },
        {
          id: 7,
          name: "Yves Saint Laurent",
          image: "https://i.ibb.co/7YVWcH6/brand-8.webp",
        },
        {
          id: 8,
          name: "Burberry",
          image: "https://i.ibb.co/4T6NGRq/brand7.png",
        },
        {
          id: 9,
          name: "Prada",
          image: "https://i.ibb.co/9NYWNFx/brand10.jpg",
        },
        {
          id: 10,
          name: "Givenchy",
          image: "https://i.ibb.co/KsNW6Rg/brand-9.png",
        },
        {
          id: 11,
          name: "Bvlgari",
          image: "https://i.ibb.co/DLcfnfZ/brand11.jpg",
        },
        {
          id: 12,
          name: "Dolce & Gabbana",
          image: "https://i.ibb.co/K5jMZVf/brand12.jpg",
        },
        {
          id: 13,
          name: "Lancôme",
          image: "https://i.ibb.co/nQ04C5Y/brand15.jpg",
        },
        {
          id: 14,
          name: "Hugo Boss",
          image: "https://i.ibb.co/dkh9Sb5/brand14.jpg",
        },
        {
          id: 15,
          name: "Calvin Klein",
          image: "https://i.ibb.co/zrfktWW/brand17.webp",
        },
      ];
      
    return (
        <div className="my-12 md:my-24">
            <Title heading={'Brands'} image={'https://i.postimg.cc/6p4mvJsB/logo-p2.png'} imageClass={'border-2 rounded-full border-[#d282afbc]'} ></Title>
            <div className="w-5/6 mx-auto md:w-full">
            <Marquee pauseOnClick={true} pauseOnHover={true} className='bg-gray-200 p-10 border border-y-4 border-orange-600'>
                {
                    perfumeBrands.map(item => (
                        <div key={item.id} className='flex gap-4 px-10 items-center'>
                            <div>
                                <img className="rounded-lg shadow-lg" src={item.image} alt="icon-company" />
                            </div>
                            <div className=''>
                                <h1 className="text-dark text-2xl">{item.name} </h1>
                            </div>
                        </div>
                    ))
                }
            </Marquee>
            </div>
        </div>
    );
};

export default Brands;