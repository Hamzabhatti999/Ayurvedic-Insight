import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

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
        <p className="uppercase text-lime-300 text-2xl font-semibold">
          Ayurveda Insight
        </p>
        <button
          className="text-lime-300 md:hidden focus:outline-none"
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
              className={`py-2 px-3 text-lime-300 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/") ? "hidden" : "visible"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`py-2 px-3 text-lime-300 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/about") && "underline"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/monika"
              className={`py-2 px-3 text-lime-300 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/monika") && "underline"
              }`}
            >
              About Monika
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`py-2 px-3 text-lime-300 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/services") && "underline"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/links"
              className={`py-2 px-3 text-lime-300 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/links") && "underline"
              }`}
            >
              Links
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className={`py-2 px-3 text-lime-300 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/testimonials") && "underline"
              }`}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`py-2 px-3 text-lime-300 hover:underline md:bg-transparent lg:text-[20px] text-sm font-bold ${
                isActiveLink("/contact") && "underline"
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
            className={`py-2 px-3 text-lime-300 hover:underline text-sm font-bold ${
              isActiveLink("/") ? "hidden" : "visible"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`py-2 px-3 text-lime-300 hover:underline text-sm font-bold ${
              isActiveLink("/about") && "underline"
            }`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/monika"
            className={`py-2 px-3 text-lime-300 hover:underline text-sm font-bold ${
              isActiveLink("/monika") && "underline"
            }`}
          >
            About Monika
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={`py-2 px-3 text-lime-300 hover:underline text-sm font-bold ${
              isActiveLink("/services") && "underline"
            }`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/links"
            className={`py-2 px-3 text-lime-300 hover:underline text-sm font-bold ${
              isActiveLink("/links") && "underline"
            }`}
          >
            Links
          </Link>
        </li>
        <li>
          <Link
            to="/testimonials"
            className={`py-2 px-3 text-lime-300 hover:underline text-sm font-bold ${
              isActiveLink("/testimonials") && "underline"
            }`}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`py-2 px-3 text-lime-300 hover:underline text-sm font-bold ${
              isActiveLink("/contact") && "underline"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
