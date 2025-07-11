import React from 'react';

function Features() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold">What We Offer</h2>
        <ul className="flex flex-wrap justify-center">
          <li className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <i className="fas fa-globe-americas text-4xl text-gray-600"></i>
            <h3 className="text-2xl font-bold">Global Destinations</h3>
            <p className="text-gray-600">Explore over 100 destinations worldwide</p>
          </li>
          <li className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <i className="fas fa-camera text-4xl text-gray-600"></i>
            <h3 className="text-2xl font-bold">Unforgettable Experiences</h3>
            <p className="text-gray-600">Capture lifelong memories with our guided tours</p>
          </li>
          <li className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <i className="fas fa-hotel text-4xl text-gray-600"></i>
            <h3 className="text-2xl font-bold">Luxury Accommodations</h3>
            <p className="text-gray-600">Stay in style with our handpicked hotels and resorts</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;