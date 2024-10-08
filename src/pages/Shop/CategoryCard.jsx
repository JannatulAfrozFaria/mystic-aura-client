import { Link } from "react-router-dom";


const CategoryCard = ({perfume}) => {
    const {id,image,name, brandName,origin,price} = perfume;
    return (
        <div>
            <div key={perfume.id} className="flex flex-col">
                <div className="flex justify-center items-end  h-[30vh]">
                    <img className=" w-1/2 h-[150px] md:h-[180px] categoryImageBorder " src={perfume.image} alt="perfume-photo" />
                </div>
                <div className='col-span-3 pt-16 pb-0 px-6 md:px-12 h-full text-gray-500 roboto shadow-2xl categoryTextBorder cardTextProperty text-center'>
                    <h1 className='text-2xl md:text-4xl protest pName w-3/4 md:w-full mx-auto'> {perfume.name} </h1>
                    <div className="mt-1 md:mt-3 text-sm md:text-lg ">
                        <p><span>Brand:</span> {perfume.brandName} </p>
                        <p><span>Origin:</span> {perfume.origin} </p>
                        {/* <p><span>Made for:</span> {perfume.userGroup} </p>
                                <p><span>Category:</span> {perfume.category} </p> */}
                        {/* <p><span>Stock:</span> {perfume.quantity} Units </p> */}
                        <p><span className=''>Price:</span>  <span className='categoryPrice text-xl tracking-wider font-light'> $ {perfume.price}</span></p>
                        <button className="btn categoryButton w-1/3 mx-auto mt-4 md:mt-2 text-2xl font-light">
                            <Link to={'/shop'}> Order </Link>
                        </button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default CategoryCard;