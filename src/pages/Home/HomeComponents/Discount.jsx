import { Link } from "react-router-dom";


const Discount = () => {
    return (
        <div className="mb-12 md:mb-24">
            <div className="flex flex-col-reverse md:flex-row">
                <div>
                    <img src="" alt="" />
                </div>
                <div className="bg-[#FBCFE8] p-8 grid grid-cols-1">
                        <div className="bg-white rounded-full w-20">
                            <p className="uppercase" >Discount</p>
                            <h1 className="text-3xl">Winter 2024</h1>
                            <p className="uppercase priceTag" >Sale <span>50%</span> </p>
                        </div>
                        <div>
                            <button>
                                <Link to={'/shop'}></Link>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;