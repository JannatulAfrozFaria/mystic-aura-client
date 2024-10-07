

const Discount = () => {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row">
                <div>
                    <img src="" alt="" />
                </div>
                <div className="bg-[#FBCFE8] p-8 grid grid-cols-1">
                        <div className="bg-white rounded-full w-20">
                            <p className="uppercase" >Discount</p>
                            <h1>Winter 2024</h1>
                            <p className="uppercase priceTag" >Sale <span>50%</span> </p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;