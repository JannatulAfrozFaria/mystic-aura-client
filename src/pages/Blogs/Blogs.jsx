import { Helmet } from "react-helmet-async";
import Title from "../../UtilityComponents/Title";


const Blogs = () => {
    return (
        <div className="py-24">
            <Helmet>
                <title>Mystic Aura | Blogs</title>
            </Helmet>
            <Title heading={'Blogs'} image={'https://i.postimg.cc/6p4mvJsB/logo-p2.png'} imageClass={'border-2 rounded-full border-[#d282afbc]'}></Title>
        </div>
    );
};

export default Blogs;