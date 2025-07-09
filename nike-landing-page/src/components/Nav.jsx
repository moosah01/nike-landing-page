import { useState, useEffect, useRef } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        hamburgerRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="padding-x py-8 absolute z-30 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Desktop Nav */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile only) */}
        <div className="lg:hidden" ref={hamburgerRef}>
          <img
            src={hamburger}
            alt="menu"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute top-full left-0 w-full bg-white px-8 py-4 z-40 shadow-lg"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block font-montserrat text-base text-slate-gray hover:text-black transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
