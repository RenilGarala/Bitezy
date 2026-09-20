import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    setLoading(true);

    // Add Google authentication here
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 flex items-center justify-center px-4 py-8">

      {/* Main Card */}
      <div className="w-full max-w-md">

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 px-7 py-9 sm:px-10">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E23774] shadow-lg shadow-pink-200">
              <span className="text-3xl">🍴</span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome to{" "}
              <span className="text-[#E23774]">Bitezy</span>
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Discover delicious food around you
            </p>
          </div>

          {/* Login Section */}
          <div className="mt-8">

            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FcGoogle
                size={22}
                className="transition-transform duration-200 group-hover:scale-110"
              />

              {loading ? "Signing in..." : "Continue with Google"}
            </button>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200"></div>

              <span className="text-xs font-medium text-gray-400">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            {/* Email Button */}
            <button
              onClick={() => navigate("/signup")}
              className="w-full rounded-xl bg-[#E23774] px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-pink-200 transition-all duration-200 hover:bg-[#d62d68] hover:shadow-lg active:scale-[0.98]"
            >
              Continue with Email
            </button>

          </div>

          {/* Terms */}
          <p className="mt-7 text-center text-xs leading-5 text-gray-400">
            By continuing, you agree to our{" "}
            <button className="font-medium text-[#E23774] hover:underline">
              Terms of Service
            </button>{" "}
            and{" "}
            <button className="font-medium text-[#E23774] hover:underline">
              Privacy Policy
            </button>
          </p>

        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-center text-xs text-gray-400">
          © 2026 Bitezy. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Login;
