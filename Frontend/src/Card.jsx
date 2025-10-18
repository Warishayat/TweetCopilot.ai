// src/components/Card.jsx
import React from 'react';

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-x-dark rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-primary-blue/50 border border-transparent hover:border-primary-blue/50">
      <div className="p-4 mb-4 rounded-full bg-primary-blue/20">
        <Icon className="w-8 h-8 text-primary-blue" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-x-text">{title}</h3>
      <p className="text-center text-x-subtext">{description}</p>
    </div>
  );
};

export default Card;