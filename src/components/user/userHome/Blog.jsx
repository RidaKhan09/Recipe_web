import React from 'react';
import clock from '../../../assets/clock.jpg';
import suger from '../../../assets/suger.jpg';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'Unlocking the Benefits of Intermittent Fasting for Weight Management',
      description:
        'Weight Management and Health Weight Management and Health Weight Management and Health Weight Management and Health.',
      image: clock,
    },
    {
      id: 2,
      title: 'The Impact of Sugar Consumption on Your Health',
      description:
        'Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers.',
      image: suger,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Blogs</h2>
        <a
          href="#"
          className="text-red-600 hover:underline font-medium text-sm"
        >
          View more
        </a>
      </div>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
