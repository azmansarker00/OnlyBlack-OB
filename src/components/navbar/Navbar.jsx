import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { MdLibraryAddCheck } from "react-icons/md";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { FaBox, FaUser } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoIosSettings } from "react-icons/io";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

// context
import MyContext from "../../context/data/MyContext";

const Navbar = () => {
  const context = useContext(MyContext);
  const { rules } = context;
  const userRules = rules;

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const LogOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <nav className="bg-[#070707] text-white DownSh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center" title="OnlyBlack Home">
            <svg
              width="250"
              height="80"
              viewBox="0 0 250 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect />
              <circle
                cx="40"
                cy="40"
                r="15"
                stroke="#c5c5c5"
                strokeWidth="10"
                fill="none"
              />
              <text
                x="62"
                y="50"
                fill="#c5c5c5"
                fontFamily="Helvetica, sans-serif"
                fontSize="30"
                fontWeight="bold"
              >
                nlyBlack
              </text>
            </svg>
          </Link>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen), setIsMobileMenuOpen((prev) => !prev);
              }}
              className="text-white focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {isMobileMenuOpen ? <RxCross2 /> : <RiMenu3Line />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-7 items-center">
            {[
              "Home",
              "Shop",
              "About",
              "Services",
              "Contact",
              ...(userRules === "admin" || userRules === "editor"
                ? ["Deshboard"]
                : []),
            ].map((item, idx) => {
              const icons = {
                Home: (
                  <svg
                    className="w-4 h-4 mr-1 inline"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" />
                  </svg>
                ),
                Shop: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-1 inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9L1 6h22l-2 3" />
                    <path d="M1 6h22v2a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6z" />
                    <path d="M3 9v10a1 1 0 0 0 1 1h4v-5h8v5h4a1 1 0 0 0 1-1V9" />
                  </svg>
                ),
                About: (
                  <svg
                    className="w-4 h-4 mr-1 inline"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  </svg>
                ),
                Services: (
                  <svg
                    className="w-4 h-4 mr-1 inline"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.75 17L15 12l-5.25-5M4.5 12h15" />
                  </svg>
                ),
                Contact: (
                  <svg
                    className="w-4 h-4 mr-1 inline"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 4.418-7 11-9 11s-9-6.582-9-11a9 9 0 1118 0z" />
                  </svg>
                ),
                Deshboard: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
              };

              return (
                <li key={idx}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-gray-500 flex items-center transition-all duration-300"
                    title={item}
                  >
                    {icons[item]}
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right-side */}
          {user ? (
            <div className="hidden lg:flex items-center space-x-6">
              <Link to={"/wishlist"}>
                <FaHeart
                  title="Wishlist"
                  className="text-gray-400 hover:text-gray-500 text-xl cursor-pointer transition-all duration-300 ease-in-out"
                />
              </Link>
              <Link to={"/cart"}>
                <HiShoppingCart
                  title="Cart"
                  className="text-gray-400 hover:text-gray-500 text-2xl cursor-pointer transition-all duration-300 ease-in-out"
                />
              </Link>
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setOpen(!open)}
                  title="Profile"
                  className="flex text-gray-400 hover:text-gray-500 text-2xl cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <RiUserSettingsLine />
                </button>
                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-[#1b1b1b]  text-gray-400 rounded-xl shadow-lg z-50 transition-all duration-300 ease-in-out">
                    <ul>
                      <Link
                        to="/settings"
                        title="Settings"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-[#2b2b2b] rounded-xl cursor-pointer"
                      >
                        <IoIosSettings /> Settings
                      </Link>
                      <li
                        title="Orders"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-[#2b2b2b]  rounded-xl cursor-pointer"
                      >
                        <FaBox /> Orders
                      </li>
                      <li
                        title="Logout"
                        onClick={LogOut}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-[#2b2b2b] rounded-xl cursor-pointer"
                      >
                        <CgLogOut /> Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="hidden lg:inline-block mr-4 text-gray-400 hover:text-gray-500 text-xl"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="hidden lg:inline-block bg-[#1e1e1e] p-2 rounded-xl text-gray-400 hover:text-gray-500 text-xl"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1e1e1e] text-white space-y-4 py-4 transition-all duration-500 ease-in-out">
          <ul className="flex flex-col items-center">
            {[
              "Home",
              "Shop",
              "About",
              "Services",
              "Contact",
              ...(userRules === "admin" || userRules === "editor"
                ? ["Deshboard"]
                : []),
            ].map((item, idx) => {
              const icons = {
                Home: (
                  <svg
                    className="w-4 h-4 mr-1 inline"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" />
                  </svg>
                ),
                Shop: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-1 inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9L1 6h22l-2 3" />
                    <path d="M1 6h22v2a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6z" />
                    <path d="M3 9v10a1 1 0 0 0 1 1h4v-5h8v5h4a1 1 0 0 0 1-1V9" />
                  </svg>
                ),
                About: (
                  <svg
                    className="w-4 h-4 mr-1 inline"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  </svg>
                ),
                Services: (
                  <svg
                    className="w-4 h-4 mr-1 inline"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.75 17L15 12l-5.25-5M4.5 12h15" />
                  </svg>
                ),
                Contact: (
                  <svg
                    className="w-4 h-4 mr-1 inline"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 4.418-7 11-9 11s-9-6.582-9-11a9 9 0 1118 0z" />
                  </svg>
                ),
                Deshboard: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
              };

              return (
                <li key={idx}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-black hover:text-gray-500 flex items-center transition-all duration-300"
                    title={item}
                  >
                    {icons[item]}
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
