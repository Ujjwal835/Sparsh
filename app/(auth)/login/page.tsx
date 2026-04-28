"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCredentialsLogin = async () => {
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      window.location.href = callbackUrl;
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-5">
        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold">Login to Sparsh</h1>
          <p className="text-sm text-gray-500">Access your account securely</p>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition"
        >
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Error */}
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

        {/* Login Button */}
        <button
          onClick={handleCredentialsLogin}
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Register Link */}
        <p className="text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <a href="/register" className="text-black font-medium">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
