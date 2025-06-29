import React from 'react';

// Main App component
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4 font-sans">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md overflow-hidden">
        {/* Header with Gradient Background */}
        <div className="bg-gradient-to-r from-purple-800 to-red-600 p-6">
          <h2 className="text-3xl font-bold text-white text-center">Login</h2>
        </div>

        <div className="p-8">
          {/* Form container - logic for submission removed */}
          <form>
            {/* Email Input Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                // value attribute removed
                // onChange attribute removed
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password Input Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                // value attribute removed
                // onChange attribute removed
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="******************"
                required
              />
            </div>

            {/* Message Display Area - Conditional rendering removed */}
            {/* If you want a static message, you can add it here directly without state */}
            {/*
            <div
              className="mb-4 px-4 py-3 rounded-lg bg-gray-100 text-gray-700"
              role="alert"
            >
              <p>This is a static message example.</p>
            </div>
            */}

            {/* Submit Button */}
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-white border border-gray-400 text-gray-800 font-bold py-2 px-5 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ease-in-out hover:bg-gray-100"
              >
                Login
                <svg className="inline-block ml-2 w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </button>
            </div>

            {/* Optional: Forgot Password/Sign Up Links */}
            <div className="mt-6 text-center">
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-800"
              >
                Forgot Password?
              </a>
              <span className="text-gray-600 mx-2">|</span>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-800"
              >
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
