import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-[#FFF0EE] py-10 px-4 mt-16">
      <h1 className="text-3xl font-bold text-center mb-3 text-black">Let’s Stay In Touch!</h1>
      <p className="text-center text-gray-600 mb-6">
        Join our newsletter, so that we reach out to you with our news and offers.
      </p>
      <div className="max-w-md mx-auto flex">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-1 bg-white border border-gray-300 rounded-l py-2 px-4 focus:outline-none"
        />
        <button className="bg-[#C46C5F] text-white rounded-r px-4 py-2 hover:bg-[#a9534b] transition-all duration-200">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
