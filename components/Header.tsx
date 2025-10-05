import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon, Logo } from './IconComponents';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // For dark mode toggle, assuming a simple implementation for now.
  // A full implementation would use context and localStorage.
  const [isDarkMode, setIsDarkMode] = useState(true); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeLinkStyle = {
    color: '#00B8A9',
    textShadow: '0 0 5px #00B8A9',
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/80 backdrop-blur-lg border-b border-teal/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/">
          <Logo className="h-40 w-auto" />
        </NavLink>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
              className="text-light uppercase tracking-wider font-semibold transition-colors hover:text-teal"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center">
          {/* Dark mode toggle would go here if implemented fully */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-light focus:outline-none">
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-navy/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center space-y-6 py-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
              className="text-light text-xl uppercase tracking-wider font-semibold transition-colors hover:text-teal"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}