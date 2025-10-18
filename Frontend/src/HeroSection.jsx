// src/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="min-h-screen pt-16 bg-x-dark flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-12">
        <p className="text-sm font-medium text-primary-blue uppercase tracking-wider mb-4">
          Unleash Your Social Potential
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-x-text leading-tight mb-6">
          The <span className="text-primary-blue">AI Copilot</span> Built for <span className="text-primary-blue">Next-Level Tweeting</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-x-subtext mb-10">
          Generate viral-worthy content, schedule posts perfectly, and analyze your audience—all from one dark, sleek interface.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/tweetcopilot"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-x-dark bg-primary-blue hover:bg-opacity-80 transition duration-300 transform hover:scale-[1.02]"
          >
            Start Your Free Trial
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-x-subtext text-base font-medium rounded-full text-x-text hover:bg-x-medium transition duration-300 transform hover:scale-[1.02]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;