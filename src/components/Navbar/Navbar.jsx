import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Perfect Recipe Logo" className="h-5 w-5 object-contain" />
          <h1 className="text-1xl font-bold">
            <span className="text-black">Perfect</span>
            <span className="text-[#C46C5F]">Recipe</span>
          </h1>
        </div>

        <div className="text-2xl font-bold flex-shrink-0">
          <span className="text-black">Perfect</span>
          <span className="text-[#C46C5F]">Recipe</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 ml-10">
          <a href="#" className="text-black hover:text-[#C46C5F] font-medium">Home</a>
          <a href="#" className="text-black hover:text-[#C46C5F] font-medium">Recipe</a>
          <a href="#" className="text-black hover:text-[#C46C5F] font-medium">Add Recipe</a>
          <a href="#" className="text-black hover:text-[#C46C5F] font-medium">blog</a>
          <a href="#" className="text-black hover:text-[#C46C5F] font-medium">About us</a>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-[#F2F2F2] text-black font-medium rounded-md focus:outline-none">
            Log in
          </button>
          <button className="px-4 py-2 bg-[#C46C5F] text-white font-medium rounded-md focus:outline-none">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
