import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import useAxiosPublic from "../customHooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { signInWithGoogle,signInWithGitHub } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    // GOOGLE------GITHUB----SIGN---IN
    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })
        .catch(error=>{
            console.error(error)
        })
    }
    // const handleGitHubSignIn = () =>{
    //     signInWithGitHub()
    //     .then(result=>{
    //         console.log(result.user)
    //     })
    //     .catch(error=>{
    //         console.error(error)
    //     })
    // }
    const handleGitHubSignIn = () => {
    signInWithGitHub()
    .then(result => {
        console.log(result.user);
        const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName || result.user?.login // GitHub might use 'login' if displayName isn't available
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
            console.log(res.data);
            navigate('/');
        })
        .catch(error => {
            console.error('Error saving user info:', error);
        });
    })
    .catch(error => {
        console.error('GitHub sign-in error:', error);
    });
}
    return (
        <div>
            <div className="flex gap-2 text-3xl">
                <button onClick={handleGoogleSignIn}> <AiFillGoogleCircle /></button>
                <button onClick={handleGitHubSignIn}>  <FaGithub /></button>
            </div>
        </div>
    );
};

export default SocialLogin;