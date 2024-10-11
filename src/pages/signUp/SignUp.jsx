import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <Helmet>
                <title>Mystic Aura | Login</title>
            </Helmet>
            <div className="h-[75vh] md:my-24  flex items-center justify-center">
                <div className="w-3/4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full">
                        {/* TEXT SECTION */}
                        <div className=" text-center bg-black p-8 md:p-0 flex flex-col justify-center h-full flex-grow text-basic ">
                            <h1 className="text-5xl font-bold  ">Login to <br /> </h1>
                            <h1 className=" text-5xl protest mt-4 text-[#c97ca9]">Mystic Aura!</h1>
                            <p className="py-6 ">Already have an account?</p>
                            <div className="form-control w-1/2 md:w-1/3 mx-auto ">
                                <button className="btn text-xl text-white btn-basic">
                                    <Link to={'/login'}> Login </Link>
                                </button>
                            </div>
                        </div>
                        {/* FORM SECTION */}
                        <div className="w-full bg-[#FBCFE8] p-8 md:p-12 h-full flex flex-col justify-center flex-grow">
                            {/* SOCIAL-----LOGIN---- */}
                            <div className="flex justify-between">
                                <h1 className="text-2xl font-medium">Sign Up</h1>
                                <div className="flex gap-2 text-3xl">
                                    {/* <AiFillGoogleCircle />
                                <FaGithub /> */}
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                {/* NAME------ */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-dark2 font-md font-semibold" >Name is required</span>}
                                </div>
                                {/* EMAIL------ */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-dark2 font-md font-semibold" >Email is required</span>}
                                </div>
                                {/* PASS---WORD---- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/
                                    })}
                                        name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className="text-dark2 font-md font-semibold" >Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-dark2 font-md font-semibold" >Password must be at least 6 characters</span>}
                                    {errors.password?.type === 'maxLength' && <span className="text-dark2 font-md font-semibold" >Password must be less than 20 character</span>}
                                    {errors.password?.type === 'pattern' && <span className="text-dark2 font-md font-semibold" >Password must have one uppercase, one lowercase, one number and a special character</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn  bg-black text-basic hover:bg-[#c97ca9] hover:text-white text-xl" type="submit" value="Sign Up" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;