import React from "react";

const Navbar = () => {
  return (
    <div className="mb-20">
      <nav className="bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Links on the left side */}
          <div className="flex w-full md:w-auto md:order-1 justify-start">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#educational-history"
                  className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
                >
                  Educational History
                </a>
              </li>
              <li>
                <a
                  href="#professional-skills"
                  className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
                >
                  Professional Skills
                </a>
              </li>
              <li>
                <a
                  href="#professional-projects"
                  className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
                >
                  Professional Projects
                </a>
              </li>
              <li>
                <a
                  href="#hobbies"
                  className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
                >
                  Hobbies
                </a>
              </li>
              <li>
                <a
                  href="#life-ambitions"
                  className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
                >
                  Life Ambitions
                </a>
              </li>
              <li>
                <a
                  href="#efforts-for-country"
                  className="block py-2 px-3 text-gray-900 rounded md:text-white md:p-0 md:dark:text-white"
                >
                  Efforts for Country
                </a>
              </li>
            </ul>
          </div>

          {/* "Contact Me" on the right side */}
          <div className="md:order-2">
            <a
              href="#contactForm"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white"
              aria-current="page"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
