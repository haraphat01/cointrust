"use client";
import React, { useState } from "react";
import { User, AtSign, Lock } from "lucide-react";

function SignupForm({ onToggle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup", { name, email, password });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-md mx-auto mt-12 mb-12">
      <h2 className="text-3xl font-bold text-black text-center mb-6">Create Your Account</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
          <input
            type="text"
            id="signup-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full pl-12 pr-4 py-3 rounded-lg text-lg border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div className="relative">
          <AtSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
          <input
            type="email"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-12 pr-4 py-3 rounded-lg text-lg border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
          <input
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full pl-12 pr-4 py-3 rounded-lg text-lg border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            required
            minLength={8}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 focus:ring-2 focus:ring-black transition ease-in-out duration-300"
        >
          Create Account
        </button>
      </form>

      <div className="text-center mt-4">
        <button
          onClick={onToggle}
          className="text-black hover:underline font-semibold"
        >
          Already have an account? Log in
        </button>
      </div>
    </div>
  );
}

export default SignupForm;
