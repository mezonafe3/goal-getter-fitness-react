
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-fit-green-700 font-semibold' : 'text-gray-700 hover:text-fit-green-600'}`}>
            Home
          </NavLink>
          <NavLink to="/plans" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-fit-green-700 font-semibold' : 'text-gray-700 hover:text-fit-green-600'}`}>
            Plans
          </NavLink>
          <NavLink to="/about" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-fit-green-700 font-semibold' : 'text-gray-700 hover:text-fit-green-600'}`}>
            About Us
          </NavLink>
          <NavLink to="/faq" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-fit-green-700 font-semibold' : 'text-gray-700 hover:text-fit-green-600'}`}>
            FAQ
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-fit-green-700 font-semibold' : 'text-gray-700 hover:text-fit-green-600'}`}>
            Contact
          </NavLink>
        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <NavLink to="/login">
            <Button variant="ghost" className="text-fit-green-700 hover:text-fit-green-800 hover:bg-fit-green-50">
              Log in
            </Button>
          </NavLink>
          <NavLink to="/signup">
            <Button className="bg-fit-green-600 hover:bg-fit-green-700 text-white">
              Sign Up
            </Button>
          </NavLink>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-1">
              <NavLink to="/" onClick={closeMenu} className={({isActive}) => `px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-fit-green-700 bg-fit-green-50' : 'text-gray-700 hover:text-fit-green-600 hover:bg-fit-green-50'}`}>
                Home
              </NavLink>
              <NavLink to="/plans" onClick={closeMenu} className={({isActive}) => `px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-fit-green-700 bg-fit-green-50' : 'text-gray-700 hover:text-fit-green-600 hover:bg-fit-green-50'}`}>
                Plans
              </NavLink>
              <NavLink to="/about" onClick={closeMenu} className={({isActive}) => `px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-fit-green-700 bg-fit-green-50' : 'text-gray-700 hover:text-fit-green-600 hover:bg-fit-green-50'}`}>
                About Us
              </NavLink>
              <NavLink to="/faq" onClick={closeMenu} className={({isActive}) => `px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-fit-green-700 bg-fit-green-50' : 'text-gray-700 hover:text-fit-green-600 hover:bg-fit-green-50'}`}>
                FAQ
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => `px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-fit-green-700 bg-fit-green-50' : 'text-gray-700 hover:text-fit-green-600 hover:bg-fit-green-50'}`}>
                Contact
              </NavLink>
              <div className="flex flex-col pt-4 space-y-2 border-t border-gray-200">
                <NavLink to="/login" onClick={closeMenu}>
                  <Button variant="outline" className="w-full">Log in</Button>
                </NavLink>
                <NavLink to="/signup" onClick={closeMenu}>
                  <Button className="w-full bg-fit-green-600 hover:bg-fit-green-700 text-white">Sign Up</Button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
