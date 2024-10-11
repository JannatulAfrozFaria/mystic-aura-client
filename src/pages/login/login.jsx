import { useContext, useEffect, useRef, useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
const Login = () => {
    const captchaRef = useRef(null);
    const [disabled,setDisabled] = useState(true);
    const { login,logOut} = useContext(AuthContext);
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        login(email,password)
            .then(result=>{
                const user = result.user;
                console.log(user);
            })
    }
    const handleValidateCaptcha = () =>{
        const user_captcha_value =  captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            // alert('Captcha Matched');
            setDisabled(false);
        }
        else {
            alert('Captcha Does Not Match');
            setDisabled(true);
        }
    }

    return (
        <div className="h-[75vh] md:my-24  flex items-center justify-center">
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
                                <AiFillGoogleCircle />
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
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            {/* CAPTCHA---------- */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input ref={captchaRef} type="text" name="captcha" placeholder="Type the captcha above" className="input input-bordered" required />
                                <button onClick ={handleValidateCaptcha} className="btn btn-outline btn-xs  text-#8f2462 hover:bg-[#8f2462] hover:text-white mt-4">Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn  bg-black text-basic hover:bg-[#c97ca9] hover:text-white text-xl" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

