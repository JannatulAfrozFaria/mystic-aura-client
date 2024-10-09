
import Title from "../../UtilityComponents/Title";
import usePerfume from "../../customHooks/usePerfume";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import CategoryTab from "./CategoryTab";
import { useParams } from "react-router-dom";
const Categories = () => {
    const categories = ['floral','woody','citrus','oriental', 'fresh' , 'gourmand', 'spicy' , 'fruity' , 'aquatic', 'chypre' ]
    const {category} = useParams();
    // console.log(category);
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const { perfumes} = usePerfume();
    const floral = perfumes.filter(item => item.category.toLowerCase() === 'floral');
    const woody = perfumes.filter(item => item.category.toLowerCase() === 'woody');
    const citrus = perfumes.filter(item => item.category.toLowerCase() === 'citrus');
    const oriental = perfumes.filter(item => item.category.toLowerCase() === 'oriental');
    const fresh = perfumes.filter(item => item.category.toLowerCase() === 'fresh');
    const Gourmand = perfumes.filter(item => item.category.toLowerCase() === 'gourmand');
    const spicy = perfumes.filter(item => item.category.toLowerCase() === 'spicy');
    const fruity = perfumes.filter(item => item.category.toLowerCase() === 'fruity');
    const aquatic = perfumes.filter(item => item.category.toLowerCase() === 'aquatic');
    const chypre = perfumes.filter(item => item.category.toLowerCase() === 'chypre');


    // useEffect(()=>{
    //     fetch('/perfumeCollection.json')
    //     .then(res => res.json())
    //     .then(data => setPerfumeCollection(data))
    // },[perfumeCollection])
    // const perfumes = PefumeData.perfumes;
    return (
        <div className="my-12">
            <Title heading={'Categories'} image={'https://i.postimg.cc/6p4mvJsB/logo-p2.png'} imageClass={'border-2 rounded-full border-[#d282afbc]'}></Title>
            {/* TAB------- */}
            <div className="w-4/5 mx-auto">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
                    <TabList >
                        <Tab>Floral</Tab>
                        <Tab>Woody</Tab>
                        <Tab>Citrus</Tab>
                        <Tab>Oriental</Tab>
                        <Tab>Fresh</Tab>
                        <Tab>Gourmand</Tab>
                        <Tab>Spicy</Tab>
                        <Tab>Fruity</Tab>
                        <Tab>Aquatic</Tab>
                        <Tab>Chypre</Tab>
                    </TabList>
                    <TabPanel>
                        <CategoryTab items={floral} ></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                         <CategoryTab items={woody} ></CategoryTab>
                       
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={citrus} ></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={oriental} ></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={fresh} ></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={Gourmand} ></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={spicy} ></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={fruity} ></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={aquatic} ></CategoryTab>
                    </TabPanel>
                    <TabPanel>
                        <CategoryTab items={chypre} ></CategoryTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;

{/* CATEGORIES */ }
{/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 w-4/5 mx-auto">
                {woody.map((perfume) =>
                    <div key={perfume.id} className="flex flex-col">
                        <div className="flex justify-center items-end  h-[30vh]">
                            <img className=" w-1/2 h-[150px] md:h-[180px] categoryImageBorder " src={perfume.image} alt="perfume-photo" />
                        </div>
                        <div className='col-span-3 pt-16 pb-0 px-6 md:px-12 h-full text-gray-500 roboto shadow-2xl categoryTextBorder cardTextProperty text-center'>
                            <h1 className='text-2xl md:text-4xl protest pName w-3/4 md:w-full mx-auto'> {perfume.name} </h1>
                            <div className="mt-1 md:mt-3 text-sm md:text-lg ">
                                <p><span>Brand:</span> {perfume.brandName} </p>
                                <p><span>Origin:</span> {perfume.origin} </p>
                                <p><span className=''>Price:</span>  <span className='categoryPrice text-xl tracking-wider font-light'> $ {perfume.price}</span></p>
                                <button className="btn categoryButton w-1/3 mx-auto mt-4 md:mt-2 text-2xl font-light">
                                    <Link to={'/shop'}> Order </Link>
                                </button>
                            </div>
                        </div>

                    </div >
                )}
            </div> */}