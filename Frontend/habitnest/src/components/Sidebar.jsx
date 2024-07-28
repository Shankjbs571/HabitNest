import React from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 bg-gray-800 text-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-4 flex justify-between items-center">
        <span className="text-xl font-bold">Menu</span>
        <FaTimes className="text-2xl cursor-pointer" onClick={toggleSidebar} />
      </div>
      <div className="mt-4">
        <a href="#" className="block px-4 py-2">Dashboard</a>
        <a href="#" className="block px-4 py-2">Habits</a>
      </div>
    </div>
  );
};

export default Sidebar;
