import { Link } from "react-router-dom";
import Title from "../../UtilityComponents/Title";
import usePerfume from "../../customHooks/usePerfume";
const Categories = () => {
    const {perfumes,loading}= usePerfume();
    const woody = perfumes.filter(item => item.category.toLowerCase() === 'woody');
    const floral = perfumes.filter(item => item.category.toLowerCase() === 'floral');
    const citrus = perfumes.filter(item => item.category.toLowerCase() === 'citrus');
    const oriental = perfumes.filter(item => item.category.toLowerCase() === 'oriental');
    const fresh = perfumes.filter(item => item.category.toLowerCase() === 'fresh');
    const Gourmand = perfumes.filter(item => item.category.toLowerCase() === 'Gourmand');
    const spicy = perfumes.filter(item => item.category.toLowerCase() === 'spicy');
    const fruity = perfumes.filter(item => item.category.toLowerCase() === 'fruity');
    const Aquatic = perfumes.filter(item => item.category.toLowerCase() === 'Aquatic');
    const Chypre = perfumes.filter(item => item.category.toLowerCase() === 'Chypre');
    

    // useEffect(()=>{
    //     fetch('/perfumeCollection.json')
    //     .then(res => res.json())
    //     .then(data => setPerfumeCollection(data))
    // },[perfumeCollection])
    // const perfumes = PefumeData.perfumes;
    return (
        <div className="my-12">
            <Title heading={'Categories'} image={'https://i.postimg.cc/6p4mvJsB/logo-p2.png'} imageClass={'border-2 rounded-full border-[#d282afbc]'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 w-4/5 mx-auto">
                {woody.map((perfume)=>
                    <div  key={perfume.id} className="flex flex-col">
                        <div className="flex justify-center items-end  h-[30vh]">
                            <img className=" w-1/2 h-[150px] md:h-[180px] categoryImageBorder " src={perfume.image} alt="perfume-photo" />
                        </div>
                        <div className='col-span-3 pt-16 pb-0 px-6 md:px-12 h-full text-gray-500 roboto shadow-2xl categoryTextBorder cardTextProperty text-center'>
                            <h1 className='text-2xl md:text-4xl protest pName w-3/4 md:w-full mx-auto'> {perfume.name} </h1>
                            <div className="mt-1 md:mt-3 text-sm md:text-lg ">
                                <p><span>Brand:</span> {perfume.brandName} </p>
                                {/* <p><span>Origin:</span> {perfume.origin} </p> */}
                                {/* <p><span>Made for:</span> {perfume.userGroup} </p>
                                <p><span>Category:</span> {perfume.category} </p> */}
                                <p><span>Stock:</span> {perfume.quantity} Units </p>
                                <p><span className=''>Price:</span>  <span className='bestPrice'> $ {perfume.price}</span></p>
                                <button className="btn categoryButton">
                                   <Link to={'/shop'}> Buy </Link>
                                </button>
                            </div>
                        </div>

                    </div >
                    )}
            </div>
        </div>
    );
};

export default Categories;