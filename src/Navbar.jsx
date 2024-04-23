import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="mb-20">
      <nav className="bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Links on the left side */}
          <div className="flex w-full md:w-auto md:order-1 justify-start">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="educational-history"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
                >
                  Educational History
                </Link>
              </li>
              <li>
                <Link
                  to="professional-skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
                >
                  Professional Skills
                </Link>
              </li>
              <li>
                <Link
                  to="professional-projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
                >
                  Professional Projects
                </Link>
              </li>
              <li>
                <Link
                  to="hobbies"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
                >
                  Hobbies{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="life-ambitions"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
                >
                  Life Ambitions
                </Link>
              </li>
              <li>
                <Link
                  to="efforts-for-country"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
                >
                  Efforts for Country
                </Link>
              </li>
            </ul>
          </div>

          {/* "Contact Me" on the right side */}

          <div className="md:order-2">
            <Link
              to="contactForm"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
