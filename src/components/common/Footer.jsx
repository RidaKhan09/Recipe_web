import React from "react";
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12 bg-gray-100 text-gray-900 ">
      <div className=" flex flex-col md:flex-row md:justify-between md:items-start gap-y-8 md:gap-y-0">
        <div className="flex flex-col space-y-3 md:max-w-xs">
            {/* Logo */}
                  <div className="flex items-center space-x-2">
                    <img src={logo} alt="Perfect Recipe Logo" className="h-6 w-6 object-contain" />
                    <h1 className="text-xl font-bold">
                      <span className="text-black">Perfect</span>
                      <span className="text-[#C46C5F]">Recipe</span>
                    </h1>
                  </div>
          <p className="text-sm leading-relaxed max-w-xs">
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn&apos;t distract
            from the layout.
          </p>
        </div>

        <div className="flex justify-between md:justify-center flex-grow gap-x-10 max-w-xl">
          <div>
            <h3 className="text-xs font-bold  mb-5">
              Quick links
            </h3>
            <ul className="text-xs space-y-5 text-gray-700">
              <li>
                <a
                  href="#home"
                  className="hover:underline focus:underline outline-none"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#recipes" className="hover:underline focus:underline">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:underline focus:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold  mb-5">
              Quick links
            </h3>
            <ul className="text-xs space-y-5 text-gray-700">
              <li>
                <a
                  href="#share"
                  className="hover:underline focus:underline outline-none"
                >
                  Share Recipe
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline focus:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline focus:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold mb-5">Legal</h3>
            <ul className="text-xs space-y-5 text-gray-700">
              <li>
                <a href="#terms" className="hover:underline focus:underline">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline focus:underline">
                  Privacy & Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-sm">
          <h3 className="font-semibold mb-2 text-sm">Newsletter</h3>
          <p className="text-xs mb-3 text-gray-700">
            Subscribe to our newsletter to get more free tip
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
              e.target.reset();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter Your Email"
              aria-label="Enter your email"
              className="flex-grow border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-rose-600"
            />
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded text-sm font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="border-t border-gray-300 mt-10" />

      <div className="mt-4 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p>© 2023 Recipe.Logo. All Right Reserved</p>
        <div className="flex space-x-5 text-gray-700">
          {/* TikTok */}
          <a
            href="#tiktok"
            className="hover:text-rose-600 focus:text-rose-600 outline-none"
            aria-label="TikTok link"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.75 3v10.125a3.375 3.375 0 003.375 3.375 3.375 3.375 0 003.375-3.375v-8.25h2.25V7.5a5.625 5.625 0 01-5.625 5.625 5.625 5.625 0 01-5.625-5.625V3h2.25z" />
            </svg>
          </a>

          {/* Logo X shape */}
          <a
            href="#logo"
            className="hover:text-rose-600 focus:text-rose-600 outline-none"
            aria-label="Logo link"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#facebook"
            className="hover:text-rose-600 focus:text-rose-600 outline-none"
            aria-label="Facebook link"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54v-2.204c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#instagram"
            className="hover:text-rose-600 focus:text-rose-600 outline-none"
            aria-label="Instagram link"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="20"
                height="20"
                x="2"
                y="2"
                rx="5"
                ry="5"
              ></rect>
              <path d="M16 11.37a4 4 0 11-4.73-4.73"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>

          {/* Pinterest */}
          <a
            href="#pinterest"
            className="hover:text-rose-600 focus:text-rose-600 outline-none"
            aria-label="Pinterest link"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2a10 10 0 10.19 20.003c-.127-.5-.243-1.27-.051-1.814.263-.765 1.7-5.158 1.7-5.158s-.43-.868-.43-2.147c0-2.011 1.165-3.515 2.615-3.515 1.236 0 1.83.927 1.83 2.04 0 1.244-.794 3.106-1.204 4.837-.343 1.442.729 2.616 2.163 2.616 2.594 0 4.343-3.343 4.343-7.26 0-3.012-2.027-5.155-5.922-5.155-4.322 0-6.998 3.24-6.998 6.596 0 1.345.517 2.792 1.162 3.576.13.155.15.29.11.445-.12.487-.398 1.544-.452 1.761-.07.29-.23.352-.53.213-2.004-.931-3.247-3.844-3.247-6.197 0-5.05 3.675-9.685 10.59-9.685z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

