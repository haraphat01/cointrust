import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-6 text-center text-sm text-gray-600 border-t">
      <p>&copy; {new Date().getFullYear()} CoinTrust. All rights reserved.</p>
      <p className="mt-2">
        <Link  href="/privacy" className="text-blue-500 hover:underline">
    
          Privacy Policy
        
        </Link>
        |{" "}
        <Link href="/terms" className="text-blue-500 hover:underline">
        
          Terms of Service
        {" "}
        </Link>
        |{" "}
        <a href="/aml-policy" className="text-blue-500 hover:underline">
          AML Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
