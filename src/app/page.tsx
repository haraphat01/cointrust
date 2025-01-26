"use client"
import Head from 'next/head';
import { ArrowRight, Shield, Clock, DollarSign, ChevronDown, Copy, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};



export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <Head>
        <title>Buy Bitcoin & USDT Instantly | CoinTrust</title>
        <meta name="description" content="Quick and secure Bitcoin and USDT purchases" />
      </Head>

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Buy Bitcoin & USDT Instantly</h1>
          <p className="text-xl mb-8">Fast, secure, and hassle-free cryptocurrency purchases</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center mx-auto">
            Start Purchase
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">How to Buy Crypto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">1. Create Account</h3>
            <p>Register and verify your identity for higher limits</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">2. Add Payment Info</h3>
            <p>Add your bank details and crypto wallet address</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">3. Start Trading</h3>
            <p>Buy crypto instantly with bank transfer</p>
          </div>
        </div>
      </section>

    
      {/* Bank Details */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Bank Payment Details</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Bank Transfer Instructions</h3>
            <ol className="list-decimal ml-4 space-y-2">
              <li>Use the reference code provided during order</li>
              <li>Sender name must match your profile name</li>
              <li>Complete payment within 30 minutes</li>
              <li>Upload payment proof in your dashboard</li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg flex items-start">
            <AlertCircle className="text-yellow-600 mr-2 mt-1" size={20} />
            <p className="text-sm text-yellow-700">
              Important: Always use the unique reference code provided for your transaction. 
              Transactions without proper reference codes may be delayed or rejected.
            </p>
          </div>
        </div>
      </section>

      {/* Account Verification */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Account Verification</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Basic Account</h3>
              <ul className="space-y-2">
                <li>• Daily limit: $1,000</li>
                <li>• Email verification</li>
                <li>• Phone verification</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Verified Account</h3>
              <ul className="space-y-2">
                <li>• Daily limit: $50,000</li>
                <li>• ID verification</li>
                <li>• Proof of address</li>
                <li>• Enhanced features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <FAQItem 
            question="How do I create an account?"
            answer="Click the 'Start Purchase' button, fill in your email, password, and personal information. Verify your email and phone number to complete basic registration."
          />
          <FAQItem 
            question="What payment methods are accepted?"
            answer="We currently accept bank transfers. Make sure to include the provided reference code with your payment."
          />
          <FAQItem 
            question="How long does verification take?"
            answer="Basic verification (email and phone) is instant. ID verification typically takes 1-2 business days."
          />
          <FAQItem 
            question="How do I increase my purchase limits?"
            answer="Complete the full verification process by submitting your ID and proof of address documents in your account dashboard."
          />
          <FAQItem 
            question="How long do transfers take?"
            answer="Once payment is confirmed, crypto is sent to your wallet within 15 minutes during business hours."
          />
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="mb-6">Our support team is available 24/7 to assist you</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Contact Support
          </button>
        </div>
      </section>

      <footer className="py-6 px-6 text-center text-sm text-gray-600 border-t">
        <p>&copy; {new Date().getFullYear()} CoinTrust. All rights reserved.</p>
        <p className="mt-2">Privacy Policy | Terms of Service | AML Policy</p>
      </footer>
    </div>
  );
}