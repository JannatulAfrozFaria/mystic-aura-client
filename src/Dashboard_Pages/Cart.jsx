import { Helmet } from "react-helmet-async";
import useCart from "../customHooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../customHooks/useAxiosSecure";


const Cart = () => {
    const {cart,refetch} = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();
    const handleDelete = (id) =>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
        //   .then((result) => {
        //     if (result.isConfirmed) {
        //       axiosSecure.delete(`/carts/${id}`)
        //       .then(res=>{
        //         console.log(res);
        //         if(res.data.deletedCount>0){ 
        //             Swal.fire({
        //                 title: "Deleted!",
        //                 text: "Your file has been deleted.",
        //                 icon: "success"
        //               });
        //               refetch();
        //         }
        //       })
        //     }
        //   });
          .then((result)=>{
            if(result.isConfirmed){
                fetch(`https://localhost:5000/carts/${id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: 'Item has been deleted',
                            icon: "success"
                        })
                    }
                })
            }
          })
    }
    
    return (
        <div>
            <Helmet>
                <title>Mystic Aura | Cart</title>
            </Helmet>
            <div className="flex justify-evenly">
                <h2 className="text-xl md:text-5xl">Items: {cart.length} </h2>
                <h2 className="text-xl md:text-5xl">Total Price: <span className="dashBrand">$ {totalPrice}</span> </h2>
                <button className="btn payButton tracking-widest">Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto roboto my-8">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="text-lg md:text-xl">
                            <tr>
                                <th>
                                    {/* <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label> */}
                                    #
                                </th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Brand</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {cart.map((item,index)=>
                                <tr key={item._id}>
                                <th>
                                    {/* <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label> */}
                                    {index+1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="perfume-icon" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                            <div className="text-sm opacity-50">Origin: {item.origin}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>$ {item.price} </td>
                                <td>
                                    <div className="font-bold">{item.brandName}</div>
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className=" btn-xs md:btn-lg dashBrandSpan"><FaTrash/> </button> 
                                </th>
                            </tr>
                            )}
                        </tbody>
                        {/* foot */}
                        <tfoot className="text-xl">
                            <tr>
                                <th></th>
                                <th>Price Total</th>
                                <th>$ {totalPrice}</th>
                                <th> </th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;


// const handleDelete = id => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosSecure.delete(`/carts/${id}`)
    //                 .then(res => {
    //                     if (res.data.deletedCount > 0) {
    //                         refetch();
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your file has been deleted.",
    //                             icon: "success"
    //                         });
    //                     }
    //                 })
    //         }
    //     });
    // }