import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ language, setLanguage }) => {

  const content = {
    EN: {
      links: [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Benefits", path: "/benefits" }
      ]
    },

    HI: {
      links: [
        { name: "होम", path: "/" },
        { name: "प्रोडक्ट्स", path: "/products" },
        { name: "फायदे", path: "/benefits" }
      ]
    }
  };

  const current = content[language];

  return (
    <nav className="sticky top-0 z-50 bg-[#fdfaf5] shadow-sm border-b border-orange-100">

    <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-4">

        {/* Navbar */}
        <div className="flex justify-between items-center h-24">

          {/* Logo */}
        <Link to="/" className="flex items-center gap-3 -ml-6">
  <img
    src={logo}
    alt="Logo"
    className="h-40 w-40 md:h-56 md:w-56 object-contain"
  />
</Link>

          {/* Desktop + Mobile Menu */}
          <div className="flex items-center gap-4 md:gap-8">

            {current.links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-700 font-bold border-b-2 border-orange-700 pb-1 text-sm md:text-base"
                    : "text-gray-700 hover:text-orange-700 font-medium transition-all text-sm md:text-base"
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() =>
                setLanguage(language === 'EN' ? 'HI' : 'EN')
              }
              className="px-2 py-1 border border-orange-800 text-orange-800 rounded-md font-bold text-xs hover:bg-orange-800 hover:text-white transition-all"
            >
              {language === 'EN' ? 'हिन्दी' : 'EN'}
            </button>

          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;