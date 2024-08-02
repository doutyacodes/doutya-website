import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate a search action or integrate with actual search functionality
    alert(`Searching for: ${searchQuery}`);
    // Add your search logic here
  };

  return (
    <nav className={`p-4 ${scrolling ? 'bg-gray-800' : 'bg-slate-950'} transition-colors duration-300`}>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src="src/assets/images-removebg-preview.png" alt="Logo" className="h-14 w-14" />
          <span className="text-white text-xl font-bold">Doutya Tech</span>
        </div>

        {/* Navigation Links */}
        <div className="w-full flex flex-wrap justify-around lg:w-auto lg:space-x-20">
          <a href="#option1" className="block lg:inline-block text-gray-300 hover:text-white mt-2 lg:mt-0">Option 1</a>
          <a href="#option2" className="block lg:inline-block text-gray-300 hover:text-white mt-2 lg:mt-0">Option 2</a>
          <a href="#option3" className="block lg:inline-block text-gray-300 hover:text-white mt-2 lg:mt-0">Option 3</a>
          <a href="#option4" className="block lg:inline-block text-gray-300 hover:text-white mt-2 lg:mt-0">Option 4</a>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full lg:w-auto flex items-center mt-2 lg:mt-0 mr-0 lg:mr-20">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-white w-full lg:w-auto"
          />
          <button type="submit" className="ml-2">
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" /> */}
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
