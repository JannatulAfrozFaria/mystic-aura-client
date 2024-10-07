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
          image: "https://i.postimg.cc/9f1TFybW/versace.jpg",
        },
        {
          id: 5,
          name: "Tom Ford",
          image: "https://i.ibb.co/K0mb05s/brand4.jpg",
        },
        {
          id: 6,
          name: "Armani",
          image: "https://i.postimg.cc/Bnt6mvs9/armani.jpg",
        },
        {
          id: 7,
          name: "Yves Saint Laurent",
          image: "https://i.postimg.cc/vHx0ffhp/ysl.jpg",
        },
        {
          id: 8,
          name: "Burberry",
          image: "https://i.postimg.cc/vH7y5Ztq/burberry.jpg",
        },
        {
          id: 9,
          name: "Prada",
          image: "https://i.postimg.cc/MGSbCTbK/prada.jpg",
        },
        {
          id: 10,
          name: "Givenchy",
          image: "https://i.postimg.cc/QCsMd1Tx/givenchy.jpg",
        },
        {
          id: 11,
          name: "Bvlgari",
          image: "https://i.postimg.cc/wT2hNjNV/bvlgari.jpg",
        },
        {
          id: 12,
          name: "Dolce & Gabbana",
          image: "https://i.postimg.cc/L8XsmLhx/dolce-gabbana.jpg",
        },
        {
          id: 13,
          name: "Lancôme",
          image: "https://i.postimg.cc/90Pxh9WL/lancome.jpg",
        },
        {
          id: 14,
          name: "Hugo Boss",
          image: "https://i.postimg.cc/Jhs3RHLz/hugo-boss.jpg",
        },
        {
          id: 15,
          name: "Calvin Klein",
          image: "https://i.postimg.cc/J49xhSsz/calvin-klein.jpg",
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
                                <img src={item.image} alt="icon-company" />
                            </div>
                            <div className=''>
                                <h1 className="text-theme text-4xl">{item.name} </h1>
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