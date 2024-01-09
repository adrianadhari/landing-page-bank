import { useEffect } from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const hideMenu = () => {
    setMenuVisible(false);
  };

  const [changeColor, setChangeColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 100) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <nav className={`sticky top-0 z-50 ${changeColor ? "color-active" : ""}`}>
      <div className="container flex justify-between items-center">
        <div className="py-5 text-color-secondary font-bold text-3xl">
          <a href="#home">
            <span className="text-white">zet</span>Coder
          </a>
        </div>
        <div>
          <ul className="hidden lg:flex items-center gap-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#review"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <button className="bg-color-secondary px-7 font-bold border-none py-3 rounded-md  hover:opacity-80 ease-in duration-200">
                Free Trial
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile */}
        <div
          id="hamburger"
          className="lg:hidden cursor-pointer z-50"
          onClick={toggleMenu}
        >
          {menuVisible ? (
            <RxCross2 className="text-3xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </div>
        <div
          id="menu"
          className={`bg-color-primary-dark min-h-screen absolute inset-0 ${
            menuVisible ? "" : "hidden"
          }`}
        >
          <ul className="h-full grid place-items-center py-20">
            <li>
              <a
                href="#home"
                className="hover:text-color-secondary ease-in duration-200"
                onClick={hideMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-color-secondary ease-in duration-200"
                onClick={hideMenu}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="hover:text-color-secondary ease-in duration-200"
                onClick={hideMenu}
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-color-secondary ease-in duration-200"
                onClick={hideMenu}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-color-secondary ease-in duration-200"
                onClick={hideMenu}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-color-secondary ease-in duration-200"
                onClick={hideMenu}
              >
                Contact
              </a>
            </li>
            <li>
              <button
                className="bg-color-secondary px-5 font-bold border-none py-3 rounded-md  hover:opacity-80 ease-in duration-200"
                onClick={hideMenu}
              >
                Free Trial
              </button>
            </li>
          </ul>
        </div>
        {/* Mobile */}
      </div>
    </nav>
  );
};

export default Navbar;
