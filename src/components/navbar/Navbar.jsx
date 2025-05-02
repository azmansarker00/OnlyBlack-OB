import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { MdLibraryAddCheck } from "react-icons/md";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { FaBox, FaUser } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  
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
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="bg-black text-white DownSh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg
              width="250"
              height="80"
              viewBox="0 0 250 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100%" height="100%" fill="black" />
              <circle
                cx="40"
                cy="40"
                r="15"
                stroke="white"
                strokeWidth="10"
                fill="none"
              />
              <circle cx="40" cy="40" r="6" fill="white" />
              <text
                x="62"
                y="50"
                fill="white"
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
              onClick={() => {setIsOpen(!isOpen), setIsMobileMenuOpen(prev => !prev)}}
              className="text-white focus:outline-none"
            >
             {isMobileMenuOpen ? <RxCross2 /> : <RiMenu3Line />  }
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-7 items-center">
          {["Home", "Shop", "About", "Services", "Contact", ...(user?.user?.email === "azmansarker861@gmail.com" ? ["Deshboard"] : [])].map(
              (item, idx) => {
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
                      className="w-4 h-4 mr-1 inline"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
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
                      className="w-4 h-4 mr-1 inline"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0 4.418-7 11-9 11s-9-6.582-9-11a9 9 0 1118 0z" />
                    </svg>
                  ),
                };

                return (
                  <li key={idx}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-sm text-gray-400 hover:text-gray-500 flex items-center"
                    >
                      {icons[item]}
                      {item}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>

          {/* Right-side */}
          {user ? (
            <div className="hidden lg:flex items-center space-x-6">
              <MdLibraryAddCheck className="text-gray-400 hover:text-gray-500 text-2xl cursor-pointer" />
              <HiShoppingCart className="text-gray-400 hover:text-gray-500 text-2xl cursor-pointer" />
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className="flex text-gray-400 hover:text-gray-500 text-2xl cursor-pointer"
                >
                  <CgProfile />
                </button>
                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-gray-400 text-black rounded shadow-lg z-50">
                    <ul>
                      <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-500 cursor-pointer">
                        <FaUser /> Profile
                      </li>
                      <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-500 cursor-pointer">
                        <FaBox /> Orders
                      </li>
                      <li
                        onClick={LogOut}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-500 cursor-pointer"
                      >
                        <CgLogOut /> Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex space-x-4 items-center">
              <Link to="/login" className="text-gray-400 hover:text-gray-500">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-500"
              >
                Signup
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 space-y-2">
            {["Home", "Shop", "About", "Services", "Contact"].map(
              (item, idx) => (
                <Link
                  key={idx}
                  to={`/${item.toLowerCase()}`}
                  className="block text-sm text-gray-300 hover:text-gray-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            )}

            {user ? (
              <div className="space-y-2 pt-4 border-t border-gray-700">
                <div className="flex items-center gap-2 text-gray-300">
                  <MdLibraryAddCheck /> Check
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <HiShoppingCart /> Cart
                </div>
                <div
                  className="flex items-center gap-2 text-gray-300"
                  onClick={LogOut}
                >
                  <CgLogOut /> Logout
                </div>
              </div>
            ) : (
              <div className="space-y-2 pt-4 border-t border-gray-700">
                <Link
                  to="/login"
                  className="block text-gray-300 hover:text-gray-500"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block text-gray-300 hover:text-gray-500"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
