import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const SignUp = () => {
  const [showPassIcon, setShowPassIcon] = useState(false);

  const { userSignUp } = useContext(AuthContext);

  const location = useLocation()
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");
    const address = form.get("address");
    const accepted = e.target.terms.checked;

    if (password.length < 6) {
      toast.error("Your password must have at least 6 character!");
      return;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      toast.error(
        "Your password must have at least one capital letter and special character!"
      );
      return;
    } else if (!accepted) {
      toast.error("Please accepted our terms and conditions");
      return;
    }

    userSignUp(email, password)
      .then(() => {
        e.target.reset();
        toast.success('Successfully Sign Up')
        navigate( location?.state? location.state : '/')
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl,
            address: address
        })
        .then()
        .catch()
      })
      .catch()
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="shadow-xl p-8 w-full md:w-[450px] lg:w-[450px] rounded-xl dark:text-black bg-gray-100">
          <div>
            <h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6">
              Sign up here please
            </h1>
          </div>

          <form onSubmit={handleSignUp}>
            <div className="relative">
              <label htmlFor="name">Name</label> <br />
              <input
                type="Text"
                placeholder="enter your name..."
                name="name"
                required
                className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
              />{" "}
              <br />
              <label htmlFor="photoURL">Photo URL</label> <br />
              <input
                type="text"
                placeholder="Photo URL..."
                name="photoURL"
                required
                className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
              />{" "}
              <br />
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
                className="cursor-pointer absolute right-[10px] top-[368px]"
              >
                {showPassIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
              <label htmlFor="name">Address</label> <br />
              <input
                type="Text"
                placeholder="enter your address"
                name="address"
                required
                className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
              />{" "}
              <br />
              <input type="checkbox" name="terms" id="terms" className="mt-5" />
              <label htmlFor="terms" className="ml-2">
                Accepted our{" "}
                <a href="" className="text-[#403F3F]">
                  terms and conditions
                </a>
              </label>{" "}
              <br />
              <input
                type="submit"
                value="Sign Up"
                className=" btn w-full md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#E02C6D] text-white hover:bg-gray-600"
              />
            </div>
          </form>

          <div className="mt-5">
            <p>
              {" "}
              Already have an account ?{" "}
              <Link
                to="/signIn"
                className="text-bold text-[#1877F2] text-md uppercase underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
