
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../customHooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import useCart from "../../customHooks/useCart";


const CategoryCard = ({ item }) => {
    const { user } = useAuth();
    const { image, name, brandName, origin, price, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const { cart, refetch} = useCart();
    const axiosSecure = useAxiosSecure();
    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to database
            const cartItem = {
                itemId: _id,
                email: user.email,
                image, name, brandName, origin, price, _id
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "bottom-end",
                            icon: "success",
                            // title: `${name} added to cart successfully!`,
                            title: "Item added to cart successfully!",
                            showConfirmButton: false,
                            timer: 1500
                          });
                        //refetch the cart to update the cart items count
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in!",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   });

                    //send user to login Page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="flex flex-col h-full">
                <div className="flex justify-center items-end  h-[30vh]">
                    <img className=" w-1/2 h-[150px] md:h-[180px] categoryImageBorder " src={image} alt="perfume-photo" />
                </div>
                <div className='col-span-3 pt-16 pb-0 px-4 md:px-12 h-full text-gray-500 roboto shadow-2xl categoryTextBorder cardTextProperty text-center'>
                    <h1 className='text-2xl md:text-4xl protest pName w-3/4 md:w-full mx-auto'>{name}</h1>
                    <div className="mt-1 md:mt-3 text-sm md:text-lg ">
                        <p><span>Brand:</span> {brandName} </p>
                        <p><span>Origin:</span> {origin} </p>
                        <p><span className=''>Price:</span>  <span className='categoryPrice text-xl tracking-wider font-light'> $ {price}</span></p>
                        <button onClick={handleAddToCart} className=" py-3 categoryButton w-2/3 md:w-1/2 mx-auto mt-4 md:mt-2 text-xl font-light">
                            Add to Cart
                            {/* <Link to={'/shop'}> Add to Cart </Link> */}
                        </button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default CategoryCard;