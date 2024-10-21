import { Helmet } from "react-helmet-async";
import useCart from "../customHooks/useCart";


const Cart = () => {
    const {cart} = useCart();
    const totalPrice = cart.reduce((total,item)=> total + item.price,0)
    return (
        <div>
            <Helmet>
                <title>Mystic Aura | Cart</title>
            </Helmet>
            <div>
                <h2 className="text-xl md:text-5xl">Items: {cart.length} </h2>
                <h2 className="text-xl md:text-5xl">Total Price: {totalPrice} </h2>
            </div>
        </div>
    );
};

export default Cart;