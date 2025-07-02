import React from 'react'
import logo from '../../assets/logo.png' // Your logo image

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-40">
      <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Perfect Recipe Logo" className="h-6 w-6 object-contain" />
          <h1 className="text-xl font-bold">
            <span className="text-black">Perfect</span>
            <span className="text-[#C46C5F]">Recipe</span>
          </h1>
        </div>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center space-x-6 font-medium text-black">
          <li><a href="#" className="hover:text-[#C46C5F]">Home</a></li>
          <li><a href="#" className="hover:text-[#C46C5F]">Recipe</a></li>
          <li><a href="#" className="hover:text-[#C46C5F]">Add Recipe</a></li>
          <li><a href="#" className="hover:text-[#C46C5F]">Blog</a></li>
          <li><a href="#" className="hover:text-[#C46C5F]">About us</a></li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-[#F2F2F2] text-black font-medium rounded-md focus:outline-none">
            Log in
          </button>
          <button className="px-4 py-2 bg-[#C46C5F] text-white font-medium rounded-md focus:outline-none">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button (Optional) */}
        <div className="lg:hidden">
          <button className="text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
