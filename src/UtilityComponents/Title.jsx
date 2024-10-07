

const Title = ({heading, description,image}) => {
    return (
        <div>
            <h1 className="text-3xl brandSpan">{heading} </h1>
            <div className="mb-3">
                <hr />
                <img src={image} alt="" />
                <hr />
            </div>
            <p className="w-3/4 mx-auto">{description} </p>
        </div>
    );
};

export default Title;