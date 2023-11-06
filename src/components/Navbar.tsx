import { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleLogoClick = () => {
    setActive('');
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={handleLogoClick}
        >
          <img src={logo} alt="Logo" className="w-20 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            <span className="blanka-font">Michael Letcher</span>{' '}
            {/* <span className="sm:block hidden">| Frontend Engineer</span> */}
          </p>
        </Link>

        {/* Desktop Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.id);
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Links */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.id ? 'text-white' : 'text-secondary'
                } text-[1rem] font-medium cursor-pointer`}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                  }}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
