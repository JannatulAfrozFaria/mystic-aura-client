

const Title = ({ heading, description, image,imageClass }) => {
    return (
        <div className="my-6 text-center">
            <h1 className="text-3xl brandSpan uppercase roboto">{heading} </h1>
            <div className="mb-3 flex mt-2 justify-center items-center">
                <div>
                    <hr  className="border-2 border-[#d282afbc] w-40" />
                </div>
                <div>
                    <img className={`w-10 ${imageClass}`} src={image} alt="" />
                </div>
                <div>
                    <hr className="border-2 border-[#d282afbc] w-40" />
                </div>
            </div>
            <p className="w-3/4 mx-auto text-gray-400">{description} </p>
        </div>
    );
};

export default Title;