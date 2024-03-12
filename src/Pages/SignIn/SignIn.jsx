import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const SignIn = () => {

  const [showPassIcon, setShowPassIcon] = useState(false);

  const {userSignIn, userGoogleSignIn} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  

  const handleSignIn = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)

    const email = form.get('email')


    localStorage.setItem("auth",email)

    const password = form.get('password')

    userSignIn(email, password) 
    .then(() => {
       e.target.reset();
       toast.success('Sign In successfully')
       navigate(location.state? location.state : '/');
    })

    .catch(error => {
        toast.error('Invalid email or password! Please check it !', error)
    })
  }

  const handleGoogleSignIn = (googleSignIn) => {
     googleSignIn()
     .then(() => {
        toast.success('Sign In successfully')
        navigate(location.state? location.state : '/');
     })
     .catch();
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="shadow-xl p-8 w-full md:w-[450px] lg:w-[450px] rounded-xl bg-gray-100 dark:text-black">
          <div>
            <h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6">
              {" "}
              Sign in here please{" "}
            </h1>
          </div>

          <form onSubmit={handleSignIn}>
            <div className="relative">
              <label htmlFor="email">Email address</label> <br />
              <input
                type="email"
                placeholder="enter your email..."
                name="email"
                required
                className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
              />{" "}
              <br />
              <label htmlFor="password">Password</label> <br />
              <input
                type={showPassIcon ? "text" : "password"}
                placeholder="enter your password"
                required
                name="password"
                className="mt-4 input  w-full md:w-[390px] lg:w-[390px]"
              />
              <br />
              <span
                onClick={() => setShowPassIcon(!showPassIcon)}
                className="cursor-pointer absolute right-[10px] top-[160px]"
              >
                {showPassIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
              <h1 className="mt-3 cursor-pointer text-[#403F3F]">
                Forgot password ?{" "}
              </h1>
              <input
                type="submit"
                value="Sign In"
                className=" btn w-full md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#E02C6D] text-white hover:bg-gray-600"
              />
            </div>
          </form>

          <button onClick={() => handleGoogleSignIn(userGoogleSignIn)} className=" bg-[#403F3F] flex gap-2 justify-center items-center w-full py-3 rounded-md mt-5 text-white hover:bg-[#E02C6D] text-[15px] font-medium uppercase">
            Sign in with <FcGoogle className="text-xl"></FcGoogle>
          </button>

          <div className="mt-5">
            <p>
              Do not have an account ?{" "}
              <Link
                to="/signUp"
                className="text-bold text-[#1877F2] text-md uppercase underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
