import React from "react";
import logo from "../src/assets/logo.png";
import whatsapp from "../src/assets/whatsapp.png";
const Footer = () => {
  return (
    <div>
      <footer class="pt-20 text-gray-600 body-font relative">
        <div id="contactForm" class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Me
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                src={logo}
                style={{
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
                alt="Logo"
              />

              <span class="ml-3 text-xl">Hamza Syed</span>
            </a>
            <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              - {""}
              <a
                href="mailto:sahamzashah19@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-pink-400"
              >
                sahamzashah19@gmail.com
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              {/* whatsapp */}

              <a
              href="https://wa.link/zgaq3r"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 cursor-pointer"
                onMouseOver={(e) => {
                  e.currentTarget
                    .querySelector("svg path")
                    .setAttribute("fill", "#10B981");
                  e.currentTarget.style.cursor = "pointer";
                }}
                onMouseOut={(e) => {
                  e.currentTarget
                    .querySelector("svg path")
                    .setAttribute("fill", "currentColor");
                  e.currentTarget.style.cursor = "default";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  class="w-5 h-5"
                  viewBox="0 0 50 50"
                >
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
              </a>

              {/* facebook */}

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-3 text-gray-500 cursor-pointer"
                onMouseOver={(e) => {
                  e.currentTarget
                    .querySelector("svg path")
                    .setAttribute("fill", "#1877F2");
                  e.currentTarget.style.cursor = "pointer";
                }}
                onMouseOut={(e) => {
                  e.currentTarget
                    .querySelector("svg path")
                    .setAttribute("fill", "currentColor");
                  e.currentTarget.style.cursor = "default";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  class="w-5 h-5"
                  viewBox="0 0 50 50"
                >
                  <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>{" "}
                </svg>
              </a>

              {/* X */}

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-3 text-gray-500 cursor-pointer"
                onMouseOver={(e) => {
                  e.currentTarget
                    .querySelector("svg path")
                    .setAttribute("fill", "#000000");
                  e.currentTarget.style.cursor = "pointer";
                }}
                onMouseOut={(e) => {
                  e.currentTarget
                    .querySelector("svg path")
                    .setAttribute("fill", "currentColor");
                  e.currentTarget.style.cursor = "default";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  class="w-5 h-5"
                  viewBox="0 0 50 50"
                >
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                </svg>
              </a>

              {/* instagram */}

              <a
                href="https://www.instagram.com/20s.hamza/"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-3 text-gray-500 cursor-pointer"
                onMouseOver={(e) => {
                  e.currentTarget
                    .querySelector("svg path")
                    .setAttribute("fill", "#cd486b");
                  e.currentTarget.style.cursor = "pointer";
                }}
                onMouseOut={(e) => {
                  e.currentTarget
                    .querySelector("svg path")
                    .setAttribute("fill", "currentColor");
                  e.currentTarget.style.cursor = "default";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  class="w-9 h-9"
                  viewBox="0 0 50 50"
                >
                  <path d="M 15 2 C 7.832 2 2 7.832 2 15 C 2 22.168 7.832 28 15 28 C 22.168 28 28 22.168 28 15 C 28 7.832 22.168 2 15 2 z M 11.666016 6 L 18.332031 6 C 21.457031 6 24 8.5420156 24 11.666016 L 24 18.332031 C 24 21.457031 21.457984 24 18.333984 24 L 11.667969 24 C 8.5429688 24 6 21.457984 6 18.333984 L 6 11.667969 C 6 8.5429688 8.5420156 6 11.666016 6 z M 11.666016 8 C 9.6450156 8 8 9.6459688 8 11.667969 L 8 18.333984 C 8 20.354984 9.6459688 22 11.667969 22 L 18.333984 22 C 20.354984 22 22 20.354031 22 18.332031 L 22 11.666016 C 22 9.6450156 20.354031 8 18.332031 8 L 11.666016 8 z M 19.667969 9.6660156 C 20.035969 9.6660156 20.333984 9.9640312 20.333984 10.332031 C 20.333984 10.700031 20.035969 11 19.667969 11 C 19.299969 11 19 10.700031 19 10.332031 C 19 9.9640312 19.299969 9.6660156 19.667969 9.6660156 z M 15 10 C 17.757 10 20 12.243 20 15 C 20 17.757 17.757 20 15 20 C 12.243 20 10 17.757 10 15 C 10 12.243 12.243 10 15 10 z M 15 12 A 3 3 0 0 0 15 18 A 3 3 0 0 0 15 12 z"></path>{" "}
                </svg>
              </a>

              {/* linkedin */}

              <a
                href="https://www.linkedin.com/in/hamza140"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 cursor-pointer"
                onMouseOver={(e) => {
                  e.currentTarget
                    .querySelector("svg path")
                    .setAttribute("fill", "#0a66c2");
                  e.currentTarget.style.cursor = "pointer";
                }}
                onMouseOut={(e) => {
                  e.currentTarget
                    .querySelector("svg path")
                    .setAttribute("fill", "currentColor");
                  e.currentTarget.style.cursor = "default";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  class="w-5 h-5"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
