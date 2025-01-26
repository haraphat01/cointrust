import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-white text-gray-800 font-sans p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-6">
          <strong>Last Updated: January 20, 2025</strong>
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Agreement to Terms</h2>
        <p className="mb-4">
          By accessing or using CoinTrust's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Service Description</h2>
        <p className="mb-4">
          CoinTrust provides cryptocurrency trading services, specifically Bitcoin and USDT purchases, to eligible users in supported jurisdictions.
        </p>

        <h2 className="text-xl font-semibold mb-2">3. Eligibility</h2>
        <ul className="list-disc list-inside mb-4">
          <li>At least 18 years old</li>
          <li>A resident of supported jurisdictions (United States, Canada, Australia, or European Economic Area)</li>
          <li>Legally capable of entering into binding contracts</li>
          <li>Not subject to economic sanctions</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">4. Account Registration</h2>
        <ul className="list-disc list-inside mb-4">
          <li>You must provide accurate, current, and complete information.</li>
          <li>Maintain the security of your account credentials.</li>
          <li>Promptly update any changes to your information.</li>
          <li>Accept responsibility for all activities under your account.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">5. Trading Terms</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Minimum and maximum purchase limits apply.</li>
          <li>Prices are set at the time of transaction.</li>
          <li>All transactions are final.</li>
          <li>Processing times may vary.</li>
          <li>Bank transfer is the only accepted payment method.</li>
        </ul>

        <p className="mb-4">
          <strong>Note:</strong> We charge between 10-15% of every purchase due to exchange rate and market fluctuations.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Fees and Charges</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Transaction fees will be clearly displayed before purchase.</li>
          <li>Bank processing fees are your responsibility.</li>
          <li>Fee structure may change with notice.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">7. Compliance Requirements</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Provide required identification documents.</li>
          <li>Complete verification procedures.</li>
          <li>Follow applicable laws and regulations.</li>
          <li>Not engage in prohibited activities.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">8. Service Availability</h2>
        <p className="mb-4">
          We may modify, suspend, or discontinue services:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>For maintenance</li>
          <li>Due to regulatory requirements</li>
          <li>For security reasons</li>
          <li>At our discretion with reasonable notice</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
        <ul className="list-disc list-inside mb-4">
          <li>We are not liable for market volatility.</li>
          <li>We are not liable for technical difficulties.</li>
          <li>We are not liable for third-party service failures.</li>
          <li>We are not liable for circumstances beyond our reasonable control.</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsOfService;
