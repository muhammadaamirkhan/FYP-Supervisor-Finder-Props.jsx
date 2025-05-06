import React from 'react';
import CardLayout from '../../layouts/CardLayout';  // Updated import path

const domainColors = {
  "Artificial Intelligence": "bg-purple-100 text-purple-800",
  "Data Science": "bg-blue-100 text-blue-800",
  "Cybersecurity": "bg-green-100 text-green-800"
};

const SupervisorCard = ({ name, domain, availability, expertise }) => {
  return (
    <CardLayout hoverEffect={true}>
      <div className={`${domainColors[domain]} w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold shadow-sm`}>
        {name.split(' ').map(n => n[0]).join('')}
      </div>

      <h3 className="text-lg font-semibold text-center mb-1 hover:text-blue-600 transition-colors">
        {name}
      </h3>

      <div className={`text-xs font-medium ${domainColors[domain]} px-3 py-1 rounded-full text-center mb-2`}>
        {domain}
      </div>

      <p className="text-sm text-gray-500 text-center mb-3">
        {expertise}
      </p>

      <p className="text-blue-600 font-medium text-center text-sm mb-4">
        <span className="inline-block bg-blue-50 px-3 py-1 rounded-full">
          {availability}
        </span>
      </p>

      <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all">
        View Profile →
      </button>
    </CardLayout>
  );
};

export default SupervisorCard;