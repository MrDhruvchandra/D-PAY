import React from 'react';
import { Wallet2 } from 'lucide-react';
import { Link } from "react-router-dom"

const AdminHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to ={"/"} className="flex items-center space-x-2">
            <Wallet2 className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">D-Pay</span>
          </Link>
          
          

          <div className="flex items-center space-x-4">
            
            <Link className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors" to={"/signup"}>
              log out
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;