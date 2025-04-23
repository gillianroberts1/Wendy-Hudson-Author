import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4'>
    <div className="text-2xl font-bold">
        <Link to="/" className="text-black">Brand</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 sm:hidden lg:flex">
        <Link to="/" className="text-black hover:text-accent ">Home</Link>
        <Link to="/books" className="text-black hover:text-accent">Books</Link>

        <Link to="/about" className="text-foreground hover:text-accent">Bio</Link>
        <Link to="/events" className="text-foreground hover:text-accent">Events</Link>
        <Link to="/blog" className="text-foreground hover:text-accent">Blog</Link>
      </div>
      <div>
        <button>Buy Now</button>
      </div>

      {/* Optional: Hamburger menu for mobile */}
      <div className="lg:hidden">
        <button className="text-black">☰</button> {/* Simple hamburger icon */}
      </div>


    </nav>
  )
}

export default Navbar