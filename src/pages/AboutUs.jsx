import React from 'react';
import { Users, Shield, Target } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About D-Pay</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're on a mission to revolutionize digital payments and make financial transactions seamless for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">
              A diverse group of experts passionate about fintech innovation.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make digital payments accessible, secure, and rewarding for everyone.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Security, transparency, and customer-first approach in everything we do.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2023, D-Pay emerged from a simple idea: making digital payments as natural as a conversation. Our journey began with a small team of fintech enthusiasts who believed in the power of technology to transform financial services.
            </p>
            <p className="text-gray-600">
              Today, we serve millions of users across the globe, processing transactions worth billions while maintaining our core values of security, simplicity, and user trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;