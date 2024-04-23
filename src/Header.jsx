import React from 'react';
import profilePic from '../src/assets/me.jpg';
const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center sm:flex-row sm:justify-between p-4">
      <div className="text-center sm:text-left sm:w-1/2">
        <h1 className="text-2xl font-bold mb-2">Hamza Syed</h1>
        <p className="text-sm text-gray-600 max-w-md">
          Technophile learning the ways to come out on top 🚀.
        </p>
      </div>

      <div className="sm:ml-auto">
        <img 
          src={profilePic} 
          alt="Profile" 
          className="rounded-full w-24 h-24 object-cover"
        />
      </div>
    </header>
  );
}

export default Header;
