import { Link, useParams } from 'react-router-dom';
import Title from '../../../UtilityComponents/Title';
// import PefumeData from '/src/perfumes.json';
import usePerfume from '../../../customHooks/usePerfume';

const BestSellers = () => {
    const { perfumes, loading } = usePerfume();
    // const perfumes = PefumeData.perfumes;
    const {category} = useParams();
    return (
        <div className='my-12 md:my-20'>
            <Title heading={'Best Sellers'} image={'https://i.postimg.cc/6p4mvJsB/logo-p2.png'} imageClass={'border-2 rounded-full border-[#d282afbc]'}
                description={"Explore our collection of top-rated fragrances that captivate customers worldwide. From timeless classics to modern scents, these perfumes are loved for their unique blends, long-lasting essence, and luxurious appeal."}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-5/6 mx-auto md:w-full ">
                {perfumes.slice(40, 42).map((perfume) =>
                    <div key={perfume.id} className='grid grid-cols-5'>
                        <div className='col-span-2'>
                            <img className='w-full h-[20vh] md:h-[30vh] bestImage' src={perfume.image} alt="perfume_image" />
                        </div>
                        <div className='col-span-3 p-4 md:p-6 text-gray-500 roboto '>
                            <h1 className='text-2xl md:text-4xl protest pName'> {perfume.name} </h1>
                            <div className="mt-1 md:mt-3 text-sm md:text-base">
                                <p><span>Brand:</span> {perfume.brandName} </p>
                                <p><span>Origin:</span> {perfume.origin} </p>
                                <p><span>Made for:</span> {perfume.userGroup} </p>
                                <p><span>Category:</span> {perfume.category} </p>
                                {/* <p><span>Stock:</span> {perfume.quantity} Units </p> */}
                                <div className='flex gap-1 items-center'><p className=''>Price:</p>  <span className='bestPrice'> $ {perfume.price}</span>  </div>
                                <button className="btn categoryButton w-2/3 mx-auto mt-4 md:mt-2 text-xl font-light">
                                    <Link to={`/shop/${category}`}> Order </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {perfumes.slice(28, 30).map((perfume) =>
                    <div key={perfume.id} className='grid grid-cols-5'>
                        <div className='col-span-2'>
                            <img className='w-full h-[20vh] md:h-[30vh] bestImage1' src={perfume.image} alt="perfume_image" />
                        </div>
                        <div className='col-span-3 p-4 md:p-6 text-gray-500 roboto'>
                            <h1 className='text-2xl md:text-4xl protest pName'> {perfume.name} </h1>
                            <div className="mt-1 md:mt-3 text-sm md:text-base">
                                <p><span>Brand:</span> {perfume.brandName} </p>
                                <p><span>Origin:</span> {perfume.origin} </p>
                                <p><span>Made for:</span> {perfume.userGroup} </p>
                                <p><span>Category:</span> {perfume.category} </p>
                                <p><span>Stock:</span> {perfume.quantity} Units </p>
                                <div className='flex gap-1 items-center'><p className=''>Price:</p>  <span className='bestPrice'> $ {perfume.price}</span>  </div>
                            </div>
                        </div>
                    </div>
                )}
                {perfumes.slice(32, 34).map((perfume) =>
                    <div key={perfume.id} className='grid grid-cols-5'>
                        <div className='col-span-2'>
                            <img className='w-full h-[20vh] md:h-[30vh] bestImage' src={perfume.image} alt="perfume_image" />
                        </div>
                        <div className='col-span-3 p-4 md:p-6 text-gray-500 roboto'>
                            <h1 className='text-2xl md:text-4xl protest pName'> {perfume.name} </h1>
                            <div className="mt-1 md:mt-3 text-sm md:text-base">
                                <p><span>Brand:</span> {perfume.brandName} </p>
                                <p><span>Origin:</span> {perfume.origin} </p>
                                <p><span>Made for:</span> {perfume.userGroup} </p>
                                <p><span>Category:</span> {perfume.category} </p>
                                <p><span>Stock:</span> {perfume.quantity} Units </p>
                                <div className='flex gap-1 items-center'><p className=''>Price:</p>  <span className='bestPrice'> $ {perfume.price}</span>  </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BestSellers;