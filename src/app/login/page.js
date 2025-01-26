"use client";
import React, { useState } from "react";
import { AtSign, Lock } from "lucide-react";

function LoginForm({ onToggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login", { email, password });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-md mx-auto mt-12 mb-12">
      <h2 className="text-3xl font-bold text-black text-center mb-6">Welcome Back!</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <AtSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
          <input
            type="email"
            id="login-email"
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
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full pl-12 pr-4 py-3 rounded-lg text-lg border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 focus:ring-2 focus:ring-black transition ease-in-out duration-300"
        >
          Login
        </button>
      </form>

      <div className="text-center mt-4">
        <button
          onClick={onToggle}
          className="text-black hover:underline font-semibold"
        >
          Don't have an account? Sign up
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
