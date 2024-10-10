import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className=" bg-black text-basic hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-3/4 mx-auto">
                        <h1 className="text-5xl font-bold">Login to <span className="protest" >Mystic <span>Aura !</span></span></h1>
                        <p className="py-6">
                            Don't have an account?
                        </p>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline tracking-wider font-light text-xl btn-basic">Sign Up</button>
                        </div>
                    </div>
                    {/* FORM SECTION--------- */}
                    <div className="card bg-[#FBCFE8] text-dark w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="flex justify-between">
                            <div>
                                <h1>Login</h1>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                    <AiFillGoogleCircle />
                                </div>
                                <div>
                                    <FaGithub />
                                </div>
                            </div>
                        </div>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn categoryButton tracking-wider font-light text-xl">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;