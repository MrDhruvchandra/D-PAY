import React from 'react';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white px-4">
      <div className="text-center">
        <Clock className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;