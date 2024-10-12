export default function Navbar() {
  return (
    <nav className="bg-lime-700">
      <div className="p-6">
        <ul className="font-medium items-center flex flex-col uppercase p-4 md:justify-center md:p-0 mt-4 md:flex-row md:mt-0">
          <li>
            <a
              href="#"
              className=" py-2 px-3 text-lime-200 hover:underline md:bg-transparent text-[20px] font-bold"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" py-2 px-3 text-lime-200 hover:underline md:bg-transparent text-[20px] font-bold"
              aria-current="page"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" py-2 px-3 text-lime-200 hover:underline md:bg-transparent text-[20px] font-bold"
              aria-current="page"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" py-2 px-3 text-lime-200 hover:underline md:bg-transparent text-[20px] font-bold"
              aria-current="page"
            >
              Contact
            </a>
          </li>
        </ul>
        {/* <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-black text-2xl font-semibold whitespace-nowrap ">
            Ayurveda Insight
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
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
        </button> */}
      </div>
    </nav>
  );
}
