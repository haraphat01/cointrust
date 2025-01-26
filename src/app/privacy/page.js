import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 font-sans p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">
          <strong>Last Updated: January 20, 2025</strong>
        </p>

        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p className="mb-4">
          CoinTrust ("we," "our," or "us"), a subsidiary of Pencil Digital Services, is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
        </p>

        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>

        <h3 className="text-lg font-medium mt-4 mb-2">Personal Identification Information</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Full name</li>
          <li>Date of birth</li>
          <li>Residential address</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Government-issued identification numbers</li>
          <li>Photographs of identification documents</li>
          <li>Tax identification numbers where required by law</li>
        </ul>

        <h3 className="text-lg font-medium mt-4 mb-2">Financial Information</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Cryptocurrency wallet addresses</li>
          <li>Transaction history</li>
          <li>Source of funds information</li>
        </ul>

        <h3 className="text-lg font-medium mt-4 mb-2">Technical Information</h3>
        <ul className="list-disc list-inside mb-4">
          <li>IP addresses</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Usage patterns</li>
          <li>Cookies and tracking technologies</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To verify your identity and maintain your account</li>
          <li>To process your cryptocurrency transactions</li>
          <li>To comply with legal and regulatory requirements</li>
          <li>To prevent fraud and unauthorized access</li>
          <li>To provide customer support</li>
          <li>To send important service updates</li>
          <li>To improve our services</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Data Storage and Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal information. Data is stored in secure 
          facilities in the United States and processed in compliance with applicable data protection laws.
        </p>

        <h2 className="text-xl font-semibold mb-2">International Data Transfers</h2>
        <p className="mb-4">
          We may transfer your data to countries where we operate, including Canada, Australia, and European Economic Area (EEA) countries. 
          We ensure appropriate safeguards are in place for international transfers.
        </p>

        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <p className="mb-4">
          Depending on your jurisdiction, you have rights regarding your personal data, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Right to access</li>
          <li>Right to rectification</li>
          <li>Right to erasure</li>
          <li>Right to data portability</li>
          <li>Right to restrict processing</li>
          <li>Right to object to processing</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p className="mb-4">For privacy-related inquiries, please contact us:</p>
        <address className="not-italic mb-4">
          <p>Email: <a href="mailto:privacy@cointrust.com" className="text-blue-600 hover:underline">privacy@cointrust.com</a></p>
          <p>Address: [US Business Address]</p>
        </address>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
