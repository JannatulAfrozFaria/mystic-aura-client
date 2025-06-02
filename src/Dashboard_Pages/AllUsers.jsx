import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users" , {
        headers:{
          authorization:  `Bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleDeleteUser = (user) => {
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
          .delete(`/users/${user._id}`)
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
      <div className="flex flex-col md:flex-row justify-center text-center md:justify-evenly my-4 text-xl md:text-3xl">
        <h2>All Users</h2>
        <h2>Total Users : {users.length} </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-base md:text-xl font-thin">
              <th className="hidden md:block"></th>
              <th>Name</th>
              <th className="hidden md:block">Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th className="hidden md:block">{index + 1}</th>
                <td>{user.name}</td>
                <td className="hidden md:block">{user.email}</td>
                <td>
                  {user.role === 'admin' ? 
                  <>
                  <h1 className="dashBrandSpan text-base md:text-xl">Admin</h1>
                  </>
                  :
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="p-1 md:p-2 rounded-md payButton  "
                  >
                    <FaUsers className="text-md md:text-2xl" />{" "}
                  </button>}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="  dashBrandSpan p-1 md:p-2 buttonOutline"
                  >
                    <FaTrash className="text-md md:text-2xl" />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
