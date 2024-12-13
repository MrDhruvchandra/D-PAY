import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet2, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Wallet2 className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold text-white">D-Pay</span>
            </Link>
            <p className="text-sm text-gray-400">
              Making payments simple, secure, and rewarding.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-indigo-400 transition-colors">Press</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-indigo-400 transition-colors">Help Center</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link to="/coming-soon" className="hover:text-indigo-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link to="https://www.linkedin.com/in/dhruvchandra-m-b71155229/" className="hover:text-indigo-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link to="https://www.instagram.com/dhruv.0.1.1.0/" className="hover:text-indigo-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} D-Pay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;