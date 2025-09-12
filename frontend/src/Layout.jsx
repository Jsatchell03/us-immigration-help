import { Outlet, Link } from "react-router";
import Horizontal_Logo from "./assets/Horizontal_Logo2.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
// import Translate from "./components/Translate"

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-5">
            {/* Logo */}
            <div>
              <Link to="/">
                <img
                  src={Horizontal_Logo}
                  alt="Logo"
                  className="h-16 w-auto mr-3"
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-5">
              <Link
                to="/"
                className="border-b-2 border-transparent hover:border-red hover:text-blue"
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="border-b-2 border-transparent hover:border-red hover:text-blue"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-5 pr-5">
            <Link
              to="/"
              className="border-b-2 border-transparent hover:border-red hover:text-blue"
            >
              Translate
            </Link>
          </div>

          {/* Burger Button */}
          <div className="pr-5 md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? (
                <FontAwesomeIcon icon="fa-solid fa-xmark" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <Link
              to="/"
              className="block border-b-2 border-transparent hover:border-red hover:text-blue"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="block border-b-2 border-transparent hover:border-red hover:text-blue"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/translate"
              className="block border-b-2 border-transparent hover:border-red hover:text-blue"
              onClick={() => setIsOpen(false)}
            >
              Translate
            </Link>
          </div>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
