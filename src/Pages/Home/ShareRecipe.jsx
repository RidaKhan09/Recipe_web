import React from 'react'
import shareImg from '../../assets/share-recipe.png'

const ShareRecipe = () => {
  return (
    <section className="w-full py-30 bg-white ">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center ">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex translate-x-8">
          <img
            src={shareImg}
            alt="Share Recipe"
            className="w-[220px] sm:w-[260px] md:w-[300px] "
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 text-left ">
          <h2 className="text-3xl sm:text-3xl font-bold mb-6">
            Share Your <span className="text-[#C46C5F]">Recipes</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
          </p>
          <button className="bg-[#C46C5F] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#a74e45] transition">
            Create New Recipe
          </button>
        </div>
      </div>
    </section>
  )
}

export default ShareRecipe
