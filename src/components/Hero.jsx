import React from 'react';
import { Download, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';
 import Features from './Features';
import HowItWorks from './HowItWorks'
 const Hero = () => {
  return (<div>
<section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Simplify Payments,
              <span className="text-indigo-600"> Securely</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience the future of digital payments with D-Pay. Fast, secure, and rewarding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to={"/coming-soon"} className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                App Store
              </Link>
              <Link to={"/coming-soon"}className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Google Play
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
              alt="Payment App Interface"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
     <Features />
    <HowItWorks />
  </div>
    
  );
};

export default Hero;