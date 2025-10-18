// src/Contact.jsx
import React from 'react';
import { Mail, Phone, MapPin, Code, Zap, Cpu } from 'lucide-react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 

const Contact = () => {
  return (
    <div className="min-h-screen bg-x-medium text-x-text pb-0"> 
      <Navbar /> 
      <div className="pt-20 pb-20"> 
          
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-2">
              Get in <span className="text-primary-blue">Touch</span>
            </h1>
            <p className="text-xl text-x-subtext">
              We'd love to collaborate on innovative projects. Please review our focus areas below before reaching out.
            </p>
          </div>
          <div className="bg-x-dark p-6 mb-12 rounded-xl shadow-xl border border-primary-blue/50 text-center">
              <h2 className="text-2xl font-bold text-primary-blue mb-4">
                  Our Project Focus Areas 🎯
              </h2>
              <p className="text-lg text-x-text mb-4">
                  Please **only contact us** if you have a project related to:
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                  <span className="flex items-center text-x-text bg-x-medium px-4 py-2 rounded-full border border-x-subtext">
                      <Cpu className="w-5 h-5 mr-2 text-primary-blue" />
                      AI & Machine Learning
                  </span>
                  <span className="flex items-center text-x-text bg-x-medium px-4 py-2 rounded-full border border-x-subtext">
                      <Zap className="w-5 h-5 mr-2 text-primary-blue" />
                      Web Development (Full Stack)
                  </span>
                  <span className="flex items-center text-x-text bg-x-medium px-4 py-2 rounded-full border border-x-subtext">
                      <Code className="w-5 h-5 mr-2 text-primary-blue" />
                      Software Engineering
                  </span>
              </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg space-y-8 p-8 bg-x-dark rounded-xl shadow-2xl border border-x-medium">
              <h2 className="text-3xl font-bold text-primary-blue mb-6 border-b border-x-medium pb-2 text-center">
                Direct Contact Details
              </h2>
              <div className="flex items-start space-x-4">
                <Mail className="w-7 h-7 text-primary-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-x-text">Email Address</h3>
                  <p className="text-x-subtext hover:text-primary-blue transition-colors duration-200">
                    <a href="mailto:Warishayat666@gmail.com">Warishayat666@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-7 h-7 text-primary-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-x-text">Phone Number</h3>
                  <p className="text-x-subtext">+92-3194758420</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-7 h-7 text-primary-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-x-text">Our Location</h3>
                  <p className="text-x-subtext">Barakahu Islmabad 43000, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;