import React from "react";

import {Popularcategories} from '../../../data/index'

export default function PopularCategories() {
  const fallbackImg =
    "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1a5fd6a2-9e2e-450c-8c21-43d6c63b6294.png";

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Popular Categories</h2>
        <a
          href="#"
          className="text-[#C46C5F] hover:underline font-medium text-sm"
        >
          View more
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6">
        {Popularcategories.map(({ id, name, img, alt }) => (
          <div key={id} className="flex flex-col items-center text-center">
            <div className="ww-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-gray-200 shadow-sm">
              <img
                src={img}
                alt={alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackImg;
                }}
              />
            </div>
            <p className="mt-3 text-sm sm:text-base text-gray-800">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
