import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BuyNowButton from "../components/BuyNowButton";
import WHLogo from "../assets/WHLogo.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed backdrop-blur-lg p-4 w-full bg-background/90 shadow-md ">
      <div className="flex items-center justify-between h-16">
        {/* Left: Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="text-black">
            <img
                    src={WHLogo}
                    alt="logo"
                    className="h-20 lg:h-24 object-contain ml-4 lg:ml-16"
                  />
          </Link>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-black hover:text-accent">
            Home
          </Link>
          <Link to="/books" className="text-black hover:text-accent">
            Books
          </Link>
          <Link to="/about" className="text-foreground hover:text-accent">
            Bio
          </Link>
          <Link to="/events" className="text-foreground hover:text-accent">
            Events
          </Link>
          <Link to="/blog" className="text-foreground hover:text-accent">
            Blog
          </Link>
        </div>

        {/* Right: Buy Now button (hidden on small screens) */}
        <div className="hidden lg:block mr-16">
          <BuyNowButton />
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 flex flex-col items-center space-y-2 z-10">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/books" onClick={() => setOpen(false)}>
            Books
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            Bio
          </Link>
          <Link to="/events" onClick={() => setOpen(false)}>
            Events
          </Link>
          <Link to="/blog" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <BuyNowButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;


