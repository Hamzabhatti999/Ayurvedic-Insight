import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActiveLink = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-lime-700">
      <div className="p-6 flex items-center justify-between">
        <img src={Logo} alt="Logo" height={60} width={60} />
        <button
          className="text-lime-200 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <ul className="hidden md:flex font-medium flex-row uppercase p-0 mt-0">
          <li>
            <Link
              to="/"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/") ? "hidden" : "visible"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/about") && "text-white"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/monika"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/monika") && "text-white"
              }`}
            >
              About Monika
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/services") && "text-white"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/links"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/links") && "text-white"
              }`}
            >
              Links
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/testimonials") && "text-white"
              }`}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/contact") && "text-white"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <ul
        className={`${
          isOpen ? "block text-left" : "hidden"
        } md:hidden font-medium uppercase p-4`}
      >
        <li>
          <Link
            to="/"
            className={`py-2 px-3 text-lime-200 hover:underline text-sm font-bold ${
              isActiveLink("/") ? "hidden" : "visible"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`py-2 px-3 text-lime-200 hover:underline text-sm font-bold ${
              isActiveLink("/about") && "text-white"
            }`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/monika"
            className={`py-2 px-3 text-lime-200 hover:underline text-sm font-bold ${
              isActiveLink("/monika") && "text-white"
            }`}
          >
            About Monika
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={`py-2 px-3 text-lime-200 hover:underline text-sm font-bold ${
              isActiveLink("/services") && "text-white"
            }`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/links"
            className={`py-2 px-3 text-lime-200 hover:underline text-sm font-bold ${
              isActiveLink("/links") && "text-white"
            }`}
          >
            Links
          </Link>
        </li>
        <li>
          <Link
            to="/testimonials"
            className={`py-2 px-3 text-lime-200 hover:underline text-sm font-bold ${
              isActiveLink("/testimonials") && "text-white"
            }`}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`py-2 px-3 text-lime-200 hover:underline text-sm font-bold ${
              isActiveLink("/contact") && "text-white"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
