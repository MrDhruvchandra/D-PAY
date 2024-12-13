import React from 'react';

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 mb-8">
            Please read these terms of service carefully before using our website.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-6">
            Welcome to D-Pay. By accessing or using our website, you agree to be bound by these terms of service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on this page.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Our Service</h2>
          <p className="text-gray-600 mb-6">
            You agree to use our service only for lawful purposes and in accordance with these terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Account Security</h2>
          <p className="text-gray-600 mb-6">
            You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Termination</h2>
          <p className="text-gray-600 mb-6">
            We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these terms, please contact us at support@d-pay.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;