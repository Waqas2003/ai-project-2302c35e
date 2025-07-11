import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto p-4">
        <nav className="flex justify-between">
          <a href="#" className="text-lg font-bold">Tourism Website</a>
          <ul className="flex items-center">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;