import { Helmet } from "react-helmet-async";
import useCart from "../customHooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../customHooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            console.log(res);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Item has been removed from your cart.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Delete error:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete item. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Mystic Aura | Cart</title>
      </Helmet>
      <div className="flex gap-1 md:gap-0 flex-col md:flex-row justify-center md:justify-evenly w-2/3 md:w-full mx-auto">
        <h2 className="text-xl md:text-5xl text-center  ">Items: {cart.length} </h2>
        <h2 className="text-xl md:text-5xl text-center">
          Total Price: <span className="dashBrand">$ {totalPrice}</span>{" "}
        </h2>
        <button className="btn payButton tracking-widest  text-xl font-thin">
          Pay
        </button>
      </div>
      <div>
        <div className="overflow-x-auto roboto my-8">
          <table className="table w-full">
            {/* head */}
            <thead className="text-lg md:text-xl">
              <tr>
                <th className="hidden md:table-cell align-middle">#</th>
                <th className="hidden md:table-cell align-middle">Image</th>
                <th className="align-middle">Name</th>
                <th className="align-middle">Price</th>
                
                <th className="align-middle">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th className="hidden md:table-cell align-middle">{index + 1}</th>
                  <td className="hidden md:table-cell align-middle">
                    <div className="avatar flex justify-start">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">
                    <div className="flex items-center gap-3">
                      {/* <div className="md:hidden">
                        <div className="avatar">
                          <div className="mask mask-squircle w-8 h-8">
                            <img src={item.image} alt={item.name} />
                          </div>
                        </div>
                      </div> */}
                      {/* NAME--- */}
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">
                          Origin: {item.origin}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">$ {item.price}</td>
                  <td className="hidden md:table-cell align-middle">
                    <div className="font-bold">{item.brandName}</div>
                  </td>
                  <td className="align-middle">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn-xs md:btn-lg dashBrandSpan"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot className="text-xl">
              <tr>
                <th className="hidden md:table-cell"></th>
                <th className="hidden md:table-cell"></th>
                <th className="align-middle">Price Total</th>
                <th className="align-middle">$ {totalPrice}</th>
                <th className="hidden md:table-cell"></th>
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