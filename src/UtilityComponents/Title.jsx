

const Title = ({heading, description,image}) => {
    return (
        <div>
            <h1>{heading} </h1>
            <div>
                <hr />
                <img src={image} alt="" />
                <hr />
            </div>
            <p>{description} </p>
        </div>
    );
};

export default Title;