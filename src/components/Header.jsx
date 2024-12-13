import React from 'react';
import { Wallet2 } from 'lucide-react';
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to ={"/"} className="flex items-center space-x-2">
            <Wallet2 className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">D-Pay</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="/howitworks" className="text-gray-600 hover:text-indigo-600 transition-colors">How It Works</a>
            <a href="/coming-soon" className="text-gray-600 hover:text-indigo-600 transition-colors">Security</a>
            <a href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact Us</a>
          </div>

          <div className="flex items-center space-x-4">
           <Link  className="px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors" to={"/signin"}>
              Login
            </Link>
            <Link className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors" to={"/signup"}>
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;