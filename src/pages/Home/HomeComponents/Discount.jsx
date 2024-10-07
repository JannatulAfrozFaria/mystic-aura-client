
import { Link } from "react-router-dom";
import CountDown from "../../../UtilityComponents/CountDown";


const Discount = ({seconds}) => {
    const [countdown,setCountdown] = useState(seconds)
    const timerId = useRef()
    useEffect(()=>{
        timerId.current = setInterval(()=>{
            setCountdown(prev=>prev-1)
        },1000)
        return () => clearInterval(timerId)
},[])
    return (
        <div className="mb-12 md:mb-24">
            <div className="flex flex-col-reverse md:flex-row">
                <div>
                    <img src="" alt="" />
                </div>
                <div className="bg-[#FBCFE8] p-8 grid grid-cols-1 gap-4">
                        <div className="bg-white rounded-full w-20">
                            <p className="uppercase" >Discount</p>
                            <h1 className="text-3xl text-dark protest ">Winter 2024</h1>
                            <p className="uppercase priceTag" >Sale <span>50%</span> </p>
                        </div>
                        {/* COUNT----DOWN */}
                        <div>
                            <CountDown></CountDown>
                        </div>
                        <div>
                            <button className="text-dark roboto uppercase border-2 border-b-black">
                                <Link to={'/shop'}>Shop Now</Link>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;