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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Yatra+One&display=swap');
      `}</style>

      <nav className="sticky top-0 z-50 bg-[#fdfaf5] shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-24">

            {/* Logo + Brand Text — flush left */}
            <Link
              to="/"
              className="flex items-center flex-shrink-0"
              style={{ gap: '8px' }}
            >
              <img
                src={logo}
                alt="Gautatv Logo"
                style={{
                  height: '95px',
                  width: '100px',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.05)',
                }}
              />
              <div className="flex flex-col leading-none">
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    color: '#7c2d12',
                    fontSize: 'clamp(20px, 4vw, 34px)',
                    whiteSpace: 'nowrap',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Gau<em style={{ color: '#ea580c', fontStyle: 'italic' }}>tatv</em>
                </span>
                <span
                  style={{
                    fontFamily: "'Yatra One', cursive",
                    color: '#c2410c',
                    fontSize: 'clamp(9px, 1.5vw, 13px)',
                    marginTop: '2px',
                    whiteSpace: 'nowrap',
                  }}
                >
                 गौतत्वा
                </span>
              </div>
            </Link>

            {/* Nav Links + Language Toggle */}
            <div
              className="flex items-center"
              style={{ gap: 'clamp(10px, 3vw, 32px)', paddingRight: '16px' }}
            >
              {current.links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  style={{ whiteSpace: 'nowrap', fontSize: 'clamp(11px, 1.8vw, 16px)' }}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-700 font-bold border-b-2 border-orange-700 pb-1"
                      : "text-gray-700 hover:text-orange-700 font-medium transition-all"
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <button
                onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')}
                className="border border-orange-800 text-orange-800 rounded-md font-bold
                           hover:bg-orange-800 hover:text-white transition-all"
                style={{
                  padding: '3px 8px',
                  fontSize: 'clamp(10px, 1.5vw, 13px)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {language === 'EN' ? 'हिन्दी' : 'EN'}
              </button>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;