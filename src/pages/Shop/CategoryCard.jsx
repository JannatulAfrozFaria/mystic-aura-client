import { Link } from "react-router-dom";


const CategoryCard = ({item}) => {
    const {image,name, brandName,origin,price} = item;
    return (
        <div>
            <div className="flex flex-col h-full">
                <div className="flex justify-center items-end  h-[30vh]">
                    <img className=" w-1/2 h-[150px] md:h-[180px] categoryImageBorder " src={image} alt="perfume-photo" />
                </div>
                <div className='col-span-3 pt-16 pb-0 px-4 md:px-12 h-full text-gray-500 roboto shadow-2xl categoryTextBorder cardTextProperty text-center'>
                    <h1 className='text-2xl md:text-4xl protest pName w-3/4 md:w-full mx-auto'>{name}</h1>
                    <div className="mt-1 md:mt-3 text-sm md:text-lg ">
                        <p><span>Brand:</span> {brandName} </p>
                        <p><span>Origin:</span> {origin} </p>
                        <p><span className=''>Price:</span>  <span className='categoryPrice text-xl tracking-wider font-light'> $ {price}</span></p>
                        <button className="btn categoryButton w-2/3 mx-auto mt-4 md:mt-2 text-xl font-light">
                            <Link to={'/shop'}> Add to Cart </Link>
                        </button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default CategoryCard;