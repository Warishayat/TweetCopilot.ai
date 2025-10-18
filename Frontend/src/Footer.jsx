import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Home, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  
  return (
    <footer className="bg-x-dark py-8 mt-12 border-t border-x-medium ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-col justify-between items-center gap-5">
        <div className="flex space-x-6 fle" >
          <Link 
            to="/" 
            className="text-x-subtext hover:text-primary-blue transition-colors duration-200"
          >
            <Home className="w-5 h-5 inline-block mr-1" /> Home
          </Link>
          <Link 
            to="/contact" 
            className="text-x-subtext hover:text-primary-blue transition-colors duration-200"
          >
            <Mail className="w-5 h-5 inline-block mr-1" /> Contact
          </Link>
          <Link 
            to="/hireme"
            className="text-x-subtext hover:text-primary-blue transition-colors duration-200"
          >
            <Twitter className="w-5 h-5 inline-block mr-1" /> Hire-Me
          </Link>
        </div>
        <p className="text-x-subtext text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Themed Layout. Built with Love.
        </p>
      </div>
    </footer>
  );
};

export default Footer;