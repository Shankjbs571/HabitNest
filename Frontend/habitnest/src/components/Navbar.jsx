import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-transparent backdrop-blur-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">MyLogo</a>
        </div>
        {/* Profile Icon */}
        <div>
          <a href="/profile">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
