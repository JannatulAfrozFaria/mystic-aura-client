
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../customHooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../customHooks/useAxiosSecure";


const CategoryCard = ({ item }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { image, name, brandName, origin, price, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = (perfume) => {
        if (user && user.email) {
            //send 
            console.log(perfume);
            const cartItem = {
                itemId: _id,
                email: user.email,
                image, name, brandName, origin, price, _id
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        let timerInterval;
                        Swal.fire({
                            title: "Successful!",
                            icon:"success",
                            html: "Item will be added to your cart in <b></b> milliseconds!",
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading();
                                const timer = Swal.getPopup().querySelector("b");
                                timerInterval = setInterval(() => {
                                    timer.textContent = `${Swal.getTimerLeft()}`;
                                }, 100);
                            },
                            willClose: () => {
                                clearInterval(timerInterval);
                            }
                        }).then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === Swal.DismissReason.timer) {
                                console.log("I was closed by the timer");
                            }
                        });
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
                        <button onClick={() => handleAddToCart(item)} className=" py-3 categoryButton w-2/3 md:w-1/2 mx-auto mt-4 md:mt-2 text-xl font-light">
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