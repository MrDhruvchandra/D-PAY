import React from 'react';
import { Zap, CreditCard, Gift, QrCode, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';
const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast & Secure Payments',
    description: 'Send money instantly with bank-level security.',
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Bill Payments',
    description: 'Pay electricity, water, and other bills in one tap.',
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: 'Rewards',
    description: 'Get cashback and rewards for every transaction.',
  },
  {
    icon: <QrCode className="w-6 h-6" />,
    title: 'QR Payments',
    description: 'Scan and pay anywhere seamlessly.',
  },
  {
    icon: <PiggyBank className="w-6 h-6" />,
    title: 'Investment Options',
    description: 'Invest in mutual funds, gold, or insurance.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in One App
          </h2>
          <p className="text-xl text-gray-600">
            Discover why millions choose PayEase for their daily transactions
          </p>
        </div>

        <Link to={"/signin"}className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 hover:border-indigo-100 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                <div className="text-indigo-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </Link>
      </div>
    </section>
  );
};

export default Features;