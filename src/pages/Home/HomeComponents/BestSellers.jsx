// import { Link } from 'react-router-dom';
import Title from '../../../UtilityComponents/Title';
// import PefumeData from '/src/perfumes.json';
import usePerfume from '../../../customHooks/usePerfume';
import BestCard1 from '../Cards/BestCard1';

const BestSellers = () => {
    const { perfumes } = usePerfume();
    // const perfumes = PefumeData.perfumes;
    return (
        <div className='my-12 md:my-20'>
            <Title heading={'Best Sellers'} image={'https://i.postimg.cc/6p4mvJsB/logo-p2.png'} imageClass={'border-2 rounded-full border-[#d282afbc]'}
                description={"Explore our collection of top-rated fragrances that captivate customers worldwide. From timeless classics to modern scents, these perfumes are loved for their unique blends, long-lasting essence, and luxurious appeal."}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-5/6 mx-auto md:w-full ">
                {perfumes.slice(40, 42).map((perfume) =>

                    <BestCard1 key={perfume.id} perfumeData={perfume} imageClass={'bestImage'} buttonClass={'bestSellerButton'} ></BestCard1>
                )}

                { perfumes.slice(28, 30).map((perfume) =>
                    <BestCard1 key={perfume.id} perfumeData={perfume} imageClass={'bestImage1'} 
                    buttonClass={'bestSellerButton2'} ></BestCard1>
                )}

                {perfumes.slice(32, 34).map((perfume) =>
                    <BestCard1 key={perfume.id} perfumeData={perfume} imageClass={'bestImage'} buttonClass={'bestSellerButton'} ></BestCard1>
                 )}
            </div>
        </div>
    );
};

export default BestSellers;