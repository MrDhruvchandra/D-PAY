import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your privacy is important to us. Please read our privacy policy carefully to understand how we collect, use, and protect your information.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            We collect information that you provide to us directly, such as when you create an account, update your profile, or use our services. This may include your name, email address, phone number, and payment information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users. We may also use your information to send you promotional materials and updates.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing Your Information</h2>
          <p className="text-gray-600 mb-6">
            We do not share your personal information with third parties except as described in this policy. We may share your information with service providers who perform services on our behalf, with your consent, or as required by law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Choices</h2>
          <p className="text-gray-600 mb-6">
            You have choices regarding the collection, use, and sharing of your information. You can update your account information and preferences at any time by logging into your account.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this privacy policy, please contact us at privacy@d-pay.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;