// import { AiFillGoogleCircle } from "react-icons/ai";
// import { FaGithub } from "react-icons/fa6";
// const Login = () => {
//     return (
//         <div>
//             <div className="w-3/4 mx-auto min-h-screen">
//                 <div className=" text-basic flex h-full justify-center items-center">
//                     <div className=" card-body w-4/5 mx-auto text-center bg-black h-full">
//                         <h1 className="text-5xl font-bold">Login to <span className="protest" >Mystic <span>Aura !</span></span></h1>
//                         <p className="py-6">
//                             Don't have an account?
//                         </p>
//                         <div className="form-control mt-6">
//                             <button className="btn btn-outline tracking-wider font-light text-xl btn-basic">Sign Up</button>
//                         </div>
//                     </div>
//                     {/* FORM SECTION--------- */}
//                     <div className=" card-body bg-[#FBCFE8] text-black w-full  shadow-2xl">
//                     <div className="flex justify-between ">
//                             <div>
//                                 <h1 className="text-xl font-medium">Login</h1>
//                             </div>
//                             <div className="flex gap-2 text-3xl">
//                                 <div>
//                                     <AiFillGoogleCircle />
//                                 </div>
//                                 <div>
//                                     <FaGithub />
//                                 </div>
//                             </div>
//                         </div>
//                         <form className="">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" placeholder="email" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" placeholder="password" className="input input-bordered" required />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <button className="btn categoryButton tracking-wider font-light text-xl">Login</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

const Login = () => {
    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
    return (
        <div className="my-12 md:my-24 py-0 md:py-12 flex items-center justify-center">
            <div className="w-3/4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full">
                    {/* TEXT SECTION */}
                    <div className=" text-center bg-black p-8 md:p-0 flex flex-col justify-center h-full flex-grow text-basic ">
                        <h1 className="text-5xl font-bold  ">Login to <br /> </h1>
                        <h1 className=" text-5xl protest mt-4 text-[#c97ca9]">Mystic Aura!</h1>
                        <p className="py-6 ">Don't have an account?</p>
                        <div className="form-control w-1/2 md:w-1/3 mx-auto ">
                            <button className="btn text-xl text-white btn-basic">Sign Up</button>
                        </div>
                    </div>
                    {/* FORM SECTION */}
                    <div className="w-full bg-[#FBCFE8] p-8 md:p-12 h-full flex flex-col justify-center flex-grow">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-medium">Login</h1>
                            <div className="flex gap-2 text-3xl">
                                <AiFillGoogleCircle />
                                <FaGithub />
                            </div>
                        </div>
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn  bg-black text-basic hover:bg-[#c97ca9] hover:text-white text-xl" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

