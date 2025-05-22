import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDeleteUser = (user) =>{

  }
  return (
    <div>
      <div className="flex justify-evenly my-4 text-3xl">
        <h2>All Users</h2>
        <h2>Total Users : {users.length} </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-xl font-thin">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button
                    onClick={() => handleDeleteUser(user)}
                    className=" p-2 rounded-md payButton  "
                  >
                    <FaUsers className="text-2xl" />{" "}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="  dashBrandSpan p-2 buttonOutline"
                  >
                    <FaTrash className="text-2xl" />{" "}
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
