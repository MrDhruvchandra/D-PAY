import React from 'react';
import { Download, Smartphone, CreditCard } from 'lucide-react'; // Use relevant icons
import { Link } from 'react-router-dom'; // Correct import for navigation

const steps = [
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Download & Sign Up',
    description: 'Download the app and create your account in seconds.',
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Add Your Bank Account',
    description: 'Securely link your bank account or UPI ID.',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Start Transacting',
    description: 'Pay bills, transfer money, or shop online with ease.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Get started with PayEase in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-indigo-100" />
              )}
              <div className="relative bg-white rounded-xl p-8 text-center shadow-md">
                <Link to={"/signup"} className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">{step.icon}</div>
                </Link>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
