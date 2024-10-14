import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <nav className="bg-lime-700">
      <div className="p-6">
        <ul className="font-medium items-center flex flex-col uppercase p-4 md:justify-center md:p-0 mt-4 md:flex-row md:mt-0">
          <li>
            <Link
              to="/"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent text-[20px] font-bold ${
                isActiveLink("/") ? "hidden" : "visible"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent text-[20px] font-bold ${
                isActiveLink("/about") && "text-white"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/monika"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent text-[20px] font-bold ${
                isActiveLink("/monika") && "text-white"
              }`}
            >
              About Monika
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent text-[20px] font-bold ${
                isActiveLink("/services") && "text-white"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/links"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent text-[20px] font-bold ${
                isActiveLink("/link") && "text-white"
              }`}
            >
              Links
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent text-[20px] font-bold ${
                isActiveLink("/testimonials") && "text-white"
              }`}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`py-2 px-3 text-lime-200 hover:underline md:bg-transparent text-[20px] font-bold ${
                isActiveLink("/contact") && "text-white"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
