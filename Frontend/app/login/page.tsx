"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");

        // Redirect later if needed
        // window.location.href = "/dashboard";

        setEmail("");
        setPassword("");
      } else {
        setMessage(data.error || "Invalid email or password.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-black">
          Login
        </h1>

        {message && (
          <div className="mb-4 rounded-lg bg-gray-100 p-3 text-center text-sm text-black">
            {message}
          </div>
        )}

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-black">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-black">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black placeholder:text-gray-500 focus:border-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-black hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}