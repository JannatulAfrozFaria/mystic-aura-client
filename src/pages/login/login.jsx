import { useContext, useEffect, useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    // const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    //state for password toggle
    const [showPassword,setShowPassword] = useState(false);
    const { login ,signInWithGoogle,signInWithGitHub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/" ;
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged In successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from,{replace:true});
            })
    }
    // GOOGLE------GITHUB----SIGN---IN
    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const handleGitHubSignIn = () =>{
        signInWithGitHub()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }
    const handleValidateCaptcha = (e) => {
        // const user_captcha_value = captchaRef.current.value;
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            // alert('Captcha Matched');
            setDisabled(false);
        }
        else {
            alert('Captcha Does Not Match');
            setDisabled(true);
        }
    }

    return (
        <div>
            <Helmet>
                <title>Mystic Aura | Login</title>
            </Helmet>
            <div className="md:pb-24 md:pt-40 flex items-center justify-center">
                <div className="w-3/4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full">
                        {/* TEXT SECTION */}
                        <div className=" text-center bg-black p-8 md:p-0 flex flex-col justify-center h-full flex-grow text-basic ">
                            <h1 className="text-5xl font-bold  ">Login to <br /> </h1>
                            <h1 className=" text-5xl protest mt-4 text-[#c97ca9]">Mystic Aura!</h1>
                            <p className="py-6 ">New here? Create an account!</p>
                            <div className="form-control w-1/2 md:w-1/3 mx-auto ">
                                <button className="btn text-xl text-white btn-basic">
                                    <Link to={'/signUp'}> Sign Up </Link>
                                </button>
                            </div>
                        </div>
                        {/* FORM SECTION */}
                        <div className="w-full bg-[#FBCFE8] p-8 md:p-12 h-full flex flex-col justify-center flex-grow">
                            {/* SOCIAL-----LOGIN---- */}
                            <div className="flex justify-between">
                                <h1 className="text-2xl font-medium">Login</h1>
                                <div className="flex gap-2 text-3xl">
                                    <span onClick={handleGoogleSignIn}> <AiFillGoogleCircle /></span> 
                                    <FaGithub />
                                </div>
                            </div>
                            <form onSubmit={handleLogin} >
                                {/* EMAIL------ */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                {/* PASS---WORD---- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type={showPassword? "text" : "password"} 
                                        name="password" placeholder="password" className="input input-bordered w-full" required />
                                        <span className="absolute top-4 right-4 " onClick={()=> setShowPassword(!showPassword)} > {showPassword ? <FaEyeSlash /> : <FaEye /> }  </span>
                                    </div>
                                    {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                                </div>
                                {/* CAPTCHA---------- */}
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha}  
                                    // ref={captchaRef} 
                                    type="text" name="captcha" placeholder="Type the captcha above" className="input input-bordered" required />
                                    {/* <button onClick={handleValidateCaptcha}
                                     className="btn btn-outline btn-xs  text-#8f2462 hover:bg-[#8f2462] hover:text-white mt-4">Validate</button> */}
                                </div>
                                <div className="form-control mt-6">
                                    <input disabled={disabled} className="btn  bg-black text-basic hover:bg-[#c97ca9] hover:text-white text-xl" type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;

