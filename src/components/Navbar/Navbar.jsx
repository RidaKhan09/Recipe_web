import React, { useState } from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full mt-4 px-4 sm:px-6 lg:px-10 fixed top-0 left-0 z-40">
      <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between py-4 bg-transparent  rounded-xl  px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Perfect Recipe Logo" className="h-6 w-6 object-contain" />
          <h1 className="text-xl font-bold">
            <span className="text-black">Perfect</span>
            <span className="text-[#C46C5F]">Recipe</span>
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center space-x-6 font-medium text-black">
          <li><a href="#" className="hover:text-[#C46C5F]">Home</a></li>
          <li><a href="#" className="hover:text-[#C46C5F]">Recipe</a></li>
          <li><a href="#" className="hover:text-[#C46C5F]">Add Recipe</a></li>
          <li><a href="#" className="hover:text-[#C46C5F]">Blog</a></li>
          <li><a href="#" className="hover:text-[#C46C5F]">About us</a></li>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <button className="px-4 py-2 bg-[#F2F2F2] text-black font-medium rounded-md">
            Log in
          </button>
          <button className="px-4 py-2 bg-[#C46C5F] text-white font-medium rounded-md">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md rounded-xl mx-4 mt-2 px-6 pt-4 pb-6 space-y-4">
          <ul className="space-y-3 font-medium text-black">
            <li><a href="#" className="block hover:text-[#C46C5F]">Home</a></li>
            <li><a href="#" className="block hover:text-[#C46C5F]">Recipe</a></li>
            <li><a href="#" className="block hover:text-[#C46C5F]">Add Recipe</a></li>
            <li><a href="#" className="block hover:text-[#C46C5F]">Blog</a></li>
            <li><a href="#" className="block hover:text-[#C46C5F]">About us</a></li>
          </ul>

          <div className="pt-4 flex flex-col space-y-3">
            <button className="w-full px-4 py-2 bg-[#F2F2F2] text-black font-medium rounded-md">
              Log in
            </button>
            <button className="w-full px-4 py-2 bg-[#C46C5F] text-white font-medium rounded-md">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
