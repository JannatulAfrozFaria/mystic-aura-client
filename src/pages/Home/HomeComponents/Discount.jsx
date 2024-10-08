
import { Link } from "react-router-dom";
import CountDown from "../../../UtilityComponents/CountDown";
import Title from "../../../UtilityComponents/Title";


const Discount = () => {
    return (
        <div className="mb-12 md:mb-24">
             <Title heading={'Latest Offers'} image={'https://i.postimg.cc/0y5NHLYT/mystic-aura-logo.png'} imageClass={'border-2 rounded-full border-[#d282afbc]'} description={""}></Title>
            <div className="flex flex-col-reverse md:flex-row w-5/6 mx-auto md:w-full ">
                <div>
                    <img className="w-full h-full" src="https://i.ibb.co/7pN76J6/discount.jpg" alt="discount" />
                </div>
                <div className="bg-[#FBCFE8] p-8 grid grid-cols-1 gap-4 w-full justify-center text-center">
                    <div className=" relative bg-white rounded-full w-full md:w-1/3 mx-auto h-[30vh]">
                        <div className="absolute top-1/4 left-4 md:left-0 ">
                            <p className="uppercase" >Discount</p>
                            <h1 className="text-5xl text-dark protest ">Winter 2024</h1>
                            <p className="uppercase priceTag text-2xl " >Sale <span>50%</span> </p>
                        </div>
                    </div>
                    {/* COUNT----DOWN */}
                    <div className="w-3/4 mx-auto md:w-full">
                        <CountDown seconds={500000} ></CountDown>
                    </div>
                    <div>
                        <button className="text-dark roboto uppercase border border-t-0 border-x-0 border-b-black border-b-2">
                            <Link to={'/shop'}>Shop Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;