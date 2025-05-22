import { useQueries } from "@tanstack/react-query";
import useAxiosSecure from "../customHooks/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data:users =[] } = useQuery({
        queryKey :['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div className="flex justify-evenly my-4 text-3xl">
            <h2>All Users</h2>
            <h2>Total Users : {users.length} </h2>
        </div>
    );
};

export default AllUsers;