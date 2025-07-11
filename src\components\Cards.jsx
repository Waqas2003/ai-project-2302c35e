import React from 'react';

function Cards() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold">Popular Destinations</h2>
        <ul className="flex flex-wrap justify-center">
          <li className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <img src="https://picsum.photos/200/300" alt="Destination 1" />
            <h3 className="text-2xl font-bold">Paris, France</h3>
            <p className="text-gray-600">Explore the City of Love</p>
          </li>
          <li className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <img src="https://picsum.photos/200/301" alt="Destination 2" />
            <h3 className="text-2xl font-bold">Rome, Italy</h3>
            <p className="text-gray-600">Discover the Eternal City</p>
          </li>
          <li className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <img src="https://picsum.photos/200/302" alt="Destination 3" />
            <h3 className="text-2xl font-bold">Tokyo, Japan</h3>
            <p className="text-gray-600">Experience the Future</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Cards;