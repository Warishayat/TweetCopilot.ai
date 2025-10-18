// src/HireMe.jsx
import React from 'react';
import { Layers, Rocket, CheckCircle, Code, Cpu, Zap, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom'; 
import Footer from './Footer';
import Navbar from './Navbar'; 

const Hireme = () => {
  return (
    <div className="min-h-screen bg-x-medium text-x-text px-4">
      <Navbar /> 
      <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Let's Build <span className="text-primary-blue">Something Exceptional</span>
          </h1>
          <p className="text-xl text-x-subtext max-w-2xl mx-auto">
            I specialize in turning complex technical challenges into robust, performant, and elegant solutions across AI, Machine Learning, and Full-Stack Web Development.
          </p>
        </div>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-x-text text-center mb-10 border-b border-primary-blue/30 pb-3">
            My Commitment to Your Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-x-dark rounded-xl shadow-xl border border-x-medium transition-transform duration-300 hover:border-primary-blue">
              <Layers className="w-8 h-8 text-primary-blue mb-3" />
              <h3 className="text-xl font-semibold text-x-text mb-2">Full-Stack Expertise</h3>
              <p className="text-x-subtext text-sm">
                From database architecture to pixel-perfect frontends, I cover the entire stack to ensure seamless integration.
              </p>
            </div>
            <div className="p-6 bg-x-dark rounded-xl shadow-xl border border-x-medium transition-transform duration-300 hover:border-primary-blue">
              <Rocket className="w-8 h-8 text-primary-blue mb-3" />
              <h3 className="text-xl font-semibold text-x-text mb-2">Performance Focus</h3>
              <p className="text-x-subtext text-sm">
                I build fast, scalable applications and optimize ML models for real-world speed and efficiency.
              </p>
            </div>
            <div className="p-6 bg-x-dark rounded-xl shadow-xl border border-x-medium transition-transform duration-300 hover:border-border-primary-blue">
              <CheckCircle className="w-8 h-8 text-primary-blue mb-3" />
              <h3 className="text-xl font-semibold text-x-text mb-2">Reliable Delivery</h3>
              <p className="text-x-subtext text-sm">
                Clear communication, detailed planning, and adherence to deadlines are guaranteed for every project.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-16 bg-x-dark p-8 rounded-2xl shadow-2xl border border-primary-blue/50">
          <h2 className="text-3xl font-bold text-primary-blue text-center mb-8">
            My Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Cpu className="w-10 h-10 text-primary-blue mb-3" />
              <h3 className="text-xl font-semibold text-x-text">AI & Machine Learning</h3>
              <p className="text-x-subtext text-sm mt-1">
                Deep learning models, data analysis, and predictive systems integration.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="w-10 h-10 text-primary-blue mb-3" />
              <h3 className="text-xl font-semibold text-x-text">Full-Stack Web Dev</h3>
              <p className="text-x-subtext text-sm mt-1">
                Modern stacks (MERN/PERN), robust APIs, and high-performance server logic.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Code className="w-10 h-10 text-primary-blue mb-3" />
              <h3 className="text-xl font-semibold text-x-text">Software Architecture</h3>
              <p className="text-x-subtext text-sm mt-1">
                Building scalable, maintainable, and testable enterprise-grade applications.
              </p>
            </div>
          </div>
        </section>
        <section className="text-center bg-x-dark p-10 rounded-2xl shadow-2xl border border-x-medium">
          <Star className="w-12 h-12 text-primary-blue mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl font-extrabold text-x-text mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-x-subtext mb-8">
            If your project aligns with my specialization, I'm ready to discuss your requirements and timelines.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-primary-blue text-x-text font-semibold py-3 px-8 rounded-full shadow-lg shadow-primary-blue/50 hover:bg-primary-blue/80 transition-all duration-300 transform hover:scale-[1.05]"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Hireme;