import { Link } from "react-router-dom";


const BestCard1 = ({perfumeData}) => {
    const {image,name,brandName,origin,category, price} = perfumeData;
    return (
        <div>
            <div className='grid grid-cols-5'>
                <div className='col-span-2'>
                    <img className='w-full h-[20vh] md:h-[30vh] bestImage' src={image} alt="perfume_image" />
                </div>
                <div className='col-span-3 p-4 md:p-6 text-gray-500 roboto '>
                    <h1 className='text-2xl md:text-4xl protest pName'> {name} </h1>
                    <div className="mt-1 md:mt-3 text-sm md:text-base">
                        <p><span>Brand:</span> {brandName} </p>
                        <p><span>Origin:</span> {origin} </p>
                        {/* <p><span>Made for:</span> {perfume.userGroup} </p> */}
                        <p><span>Category:</span> {category} </p>
                        {/* <p><span>Stock:</span> {perfume.quantity} Units </p> */}
                        <div className='flex gap-1 items-center'> <p className=''>Price:</p>  <span className='bestPrice'> $ {price}</span>  </div>
                        <button className="py-2 bestSellerButton w-1/4 mt-1 text-xl font-light">
                            <Link to={`/shop/${category.toLowerCase()}`}> Order </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestCard1;