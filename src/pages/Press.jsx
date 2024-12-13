import React from 'react';

const Press = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Press</h1>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with the latest news and press releases from D-Pay.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest News</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">D-Pay Launches New Feature</h3>
              <p className="text-gray-600">
                D-Pay is excited to announce the launch of its new feature that allows users to send money internationally with lower fees.
              </p>
              <p className="text-gray-500 mt-2">Published on October 1, 2023</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">D-Pay Partners with Major Bank</h3>
              <p className="text-gray-600">
                We are thrilled to announce our partnership with XYZ Bank to provide seamless banking services to our users.
              </p>
              <p className="text-gray-500 mt-2">Published on September 15, 2023</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Press Releases</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">D-Pay Achieves Milestone</h3>
              <p className="text-gray-600">
                D-Pay has reached 1 million active users, marking a significant milestone in our journey.
              </p>
              <p className="text-gray-500 mt-2">Published on August 20, 2023</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">D-Pay Expands to New Markets</h3>
              <p className="text-gray-600">
                We are pleased to announce our expansion into new international markets, bringing our services to more users worldwide.
              </p>
              <p className="text-gray-500 mt-2">Published on July 10, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;