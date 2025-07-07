import React from "react";

// Recipe category data
const categories = [
  {
    id: 1,
    name: "Breakfast recipes",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c30c2191-f4c3-40b5-bfbb-7824a0657e1a.png",
    alt: "Breakfast plate with eggs and toast",
  },
  {
    id: 2,
    name: "Lunch recipes",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27ec318c-607a-4cdf-8fb1-0d19a57d29eb.png",
    alt: "Pasta lunch",
  },
  {
    id: 3,
    name: "Dinner recipes",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/63c4a45f-716c-4518-bdd6-d63c2aae04db.png",
    alt: "Seafood pasta dinner",
  },
  {
    id: 4,
    name: "Appetizer recipes",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/73e601fc-f953-4e17-b32f-4ef554b366f3.png",
    alt: "Bruschetta appetizer",
  },
  {
    id: 5,
    name: "Salad recipes",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20819b53-5d83-4d78-89b3-8cf531c9ffe6.png",
    alt: "Garden salad",
  },
  {
    id: 6,
    name: "Pizza recipes",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69e41ede-fb6b-4c8e-aea3-3bb931ec6025.png",
    alt: "Pepperoni pizza",
  },
  {
    id: 7,
    name: "Smoothie recipes",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f912da0-86ce-4e0e-802e-cc95ba21dae0.png",
    alt: "Green smoothie",
  },
  {
    id: 8,
    name: "Pasta recipes",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b2d06cc7-ece5-4d47-ad0d-65eaef9f8aef.png",
    alt: "Spaghetti pasta",
  },
];

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
        {categories.map(({ id, name, img, alt }) => (
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
