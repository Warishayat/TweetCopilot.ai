// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { Link } from 'react-router-dom'; 
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'TweetCopilot', href: '/tweetcopilot' },
    { name: 'Hire Me', href: '/hireme' },
    { name: 'Contact', href: '/contact' },
  ];

  const SignInTrigger = ({ className }) => (
    <SignInButton mode="modal">
      <button className={className}>
        Sign In
      </button>
    </SignInButton>
  );

  return (
    <nav className="fixed w-full z-20 bg-x-dark border-b border-x-medium shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary-blue hover:text-white transition duration-300">
              TweetCopilot.ai
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href} 
                className="text-x-text hover:bg-x-medium px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4">
              <SignedOut>
                <SignInTrigger 
                  className="bg-primary-blue text-x-text px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition duration-300" 
                />
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
            
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-x-text hover:text-white hover:bg-x-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-blue"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-x-text block px-3 py-2 rounded-md text-base font-medium hover:bg-x-medium transition duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <SignedOut>
              <SignInTrigger 
                className="w-full bg-primary-blue text-x-text block px-3 py-2 rounded-full text-base font-semibold hover:bg-opacity-80 transition duration-300" 
              />
            </SignedOut>
            <SignedIn>
                {/* The mobile view typically places the UserButton at the end of the menu */}
                <div className="flex justify-center py-2">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </SignedIn>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;