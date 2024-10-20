import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
    const { signInWithGoogle,signInWithGitHub } = useContext(AuthContext);
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
    return (
        <div>
            <div className="flex gap-2 text-3xl">
                <span onClick={handleGoogleSignIn}> <AiFillGoogleCircle /></span>
                <span onClick={handleGitHubSignIn}>  <FaGithub /></span>
            </div>
        </div>
    );
};

export default SocialLogin;