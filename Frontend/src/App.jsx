// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Hireme from './Hireme';
import Contact from './Contact';
import TweetCopilot from './TweetCopilot';

import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'; 
const ProtectedRoute = ({ element }) => {
  return (
    <>
      <SignedIn>{element}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> 

      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/hireme' element={<ProtectedRoute element={<Hireme />} />} />
          <Route path='/tweetcopilot' element={<ProtectedRoute element={<TweetCopilot />} />} />
          <Route 
            path="*" 
            element={
              <div className="flex items-center justify-center h-[80vh]">
                <h1 className="text-5xl text-red-500">404 - Page Not Found</h1>
              </div>
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;