import React from 'react';
import { Search, ChevronRight, MessageCircle, Book, Shield, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Payments',
    description: 'Learn about sending money, bill payments, and transaction limits.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Account Security',
    description: 'Protect your account and learn about our security features.'
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Support',
    description: 'Get help with technical issues and account-related queries.'
  },
  {
    icon: <Book className="w-6 h-6" />,
    title: 'Guides',
    description: 'Step-by-step tutorials on using D-Pay features.'
  }
];

const popularQuestions = [
  'How do I reset my password?',
  'What are the transaction limits?',
  'How to link a bank account?',
  'Is D-Pay secure?',
  'How to contact customer support?'
];

const HelpCenter = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to your questions and get the help you need
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/coming-soon"
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all"
            >
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  {category.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Questions</h2>
          <div className="space-y-4">
            {popularQuestions.map((question, index) => (
              <Link
                key={index}
                to="/coming-soon"
                className="block bg-white p-4 rounded-lg hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">{question}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;