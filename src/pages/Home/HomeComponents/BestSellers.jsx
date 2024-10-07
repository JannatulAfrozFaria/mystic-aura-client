import Title from '../../../UtilityComponents/Title';
import PefumeData from '/src/perfumes.json'

const BestSellers = () => {
    const perfumes = PefumeData.perfumes;
    return (
        <div className='my-12 md:my-20'>
            <Title heading={'Best Sellers'} image={'https://i.postimg.cc/6p4mvJsB/logo-p2.png'} imageClass={'border-2 rounded-full border-[#d282afbc]'} description={"Discover our Best Sellers – a collection of top-rated fragrances that have captivated customers worldwide. From timeless classics to modern scents, these perfumes are loved for their unique blends, long-lasting essence, and luxurious appeal. Explore the finest fragrances, perfect for any occasion, and find your signature scent among the best of the best."}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {perfumes.slice(40, 42).map((perfume) =>
                    <div key={perfume.id} className='grid grid-cols-5'>
                        <div className='col-span-2'>
                            <img className='w-full h-[30vh] bestImage' src={perfume.image} alt="perfume_image" />
                        </div>
                        <div className='col-span-3  p-6 text-gray-500 roboto'>
                            <h1 className='text-4xl protest pName'> {perfume.name} </h1>
                            <div className="mt-3">
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
                {perfumes.slice(28, 30).map((perfume) =>
                    <div key={perfume.id} className='grid grid-cols-5'>
                        <div className='col-span-2'>
                            <img className='w-full h-[30vh] bestImage1' src={perfume.image} alt="perfume_image" />
                        </div>
                        <div className='col-span-3  p-6 text-gray-500 roboto'>
                            <h1 className='text-4xl protest pName'> {perfume.name} </h1>
                            <div className="mt-3">
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
                            <img className='w-full h-[30vh] bestImage' src={perfume.image} alt="perfume_image" />
                        </div>
                        <div className='col-span-3  p-6 text-gray-500 roboto'>
                            <h1 className='text-4xl protest pName'> {perfume.name} </h1>
                            <div className="mt-3">
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