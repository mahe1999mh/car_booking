import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../../assets/logo (2).png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const auth = localStorage.getItem("auth") ?? ""

  const [theme, setTheme] = useState(null);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Sign out successfully");
      })
      .catch();
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: white)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow dark:text-black bg-base-100 rounded-box w-52 space-y-4 font-medium uppercase"
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#E02C6D] underline"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <li className="text-[16px]">Home</li>
            </NavLink>

            {user && (
              <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-[#E02C6D] underline"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
              {auth && (<li className="text-[16px]">Add Car</li>)}  
              </NavLink>
            )}

            <NavLink
              to="/allCars"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#E02C6D] underline"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <li className="text-[16px]">All Cars</li>
            </NavLink>

            <NavLink
              to="/myCart"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#E02C6D] underline"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <li>My Cart</li>
            </NavLink>
            <a href="http://localhost:3000/"
        className={({ isActive, isPending }) =>
        isActive
          ? "text-[#E02C6D] underline"
          : isPending
          ? "pending"
          : ""
      }
         >
        ChatBot
      </a>

            


            {/* <NavLink
          >
            <li onClick={handleThemeSwitch} className="text-[16px] lg:ml-4"> {theme === 'dark' ? <FaSun></FaSun> : <FaMoon></FaMoon> } </li>
          </NavLink> */}
          </ul>
        </div>

        <Link to="/">
          <a className="cursor-pointer">
            {" "}
            <img className="w-[120px]" src={logo} alt="logo image" />{" "}
          </a>
        </Link>

        <button onClick={handleThemeSwitch} className="text-[16px] ml-4">
          {theme === "dark" ? (
            <FaSun className="text-xl"></FaSun>
          ) : (
            <FaMoon className="text-xl"></FaMoon>
          )}
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium uppercase">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#E02C6D] underline" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px]">Home</li>
          </NavLink>

          {user && (
            <NavLink
              to="/addProduct"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#E02C6D] underline"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <li className="text-[16px] ml-4">Add Car</li>
            </NavLink>
          )}

          <NavLink
            to="/allCars"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#E02C6D] underline" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] ml-4">All Cars</li>
          </NavLink>

          <NavLink
            to="/service"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#E02C6D] underline" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] ml-4">Service</li>
          </NavLink>

          <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#E02C6D] underline" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] ml-4">My Cart</li>
          </NavLink>
          <a href="http://localhost:3000/"
        className={({ isActive, isPending }) =>
        isActive
          ? "text-[#E02C6D] underline"
          : isPending
          ? "pending"
          : ""
      }
         >
        ChatBot
      </a>

          {/* <NavLink
           >
            
          </NavLink> */}
        </ul>
      </div>

      <div className="navbar-end dark:bg-zinc-900 dark:text-black">
        {user?.email ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user.displayName}</a>
                </li>
                <li>
                  <a>{user.email}</a>
                </li>
                <li>
                  <a onClick={handleSignOut}>Sign Out</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to="/signIn">
            <a className=" px-4 py-2 md:py-2 lg:py-2  rounded-md bg-[#E02C6D] text-white text-[16px] font-medium">
              Sign In
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
