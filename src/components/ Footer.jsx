import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 sm:px-6 lg:px-8">
      {/* Top section: Ready to get started? Donate button */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between pb-8 border-b border-gray-700 mb-8 sm:flex-row">
        <p className="text-xl font-semibold mb-4 sm:mb-0">Ready to get started?</p>
        <Link to={"/findblood "}>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
            Donate
          </button>
        </Link>
      </div>

      {/* Main footer content: Links and Newsletter - Now explicitly in 4 columns for large screens, adjusts for smaller */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8"> {/* Adjusted grid-cols for responsiveness */}
        {/* Logo and Newsletter section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left col-span-full md:col-span-1"> {/* Take full width on small, 1 col on larger */}
          {/* Logo (placeholder for a droplet icon) */}
          <div className="mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6.5c-1.38 0-2.5 1.12-2.5 2.5 0 2.5 2.5 5.5 2.5 5.5s2.5-3 2.5-5.5c0-1.38-1.12-2.5-2.5-2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-3">Subscribe to our newsletter</h3>
          <div className="flex w-full max-w-xs">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow p-3 rounded-l-lg bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white px-5 py-3 rounded-r-lg hover:bg-purple-700 transition duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Services column */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-200">Email Marketing</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-200">Campaigns</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-200">Branding</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-200">Offline</a></li>
          </ul>
        </div>

        {/* About column */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-200">Our Story</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-200">Benefits</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-200">Team</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-200">Careers</a></li>
          </ul>
        </div>

        {/* Help column */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Help</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-200">FAQs</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-200">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section: Terms & Social Media */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-700">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-0">
          <a href="#" className="hover:text-white transition duration-200">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition duration-200">Privacy Policy</a>
        </div>
        <div className="flex space-x-4">
          {/* Facebook Icon */}
          <a href="#" className="hover:text-white transition duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.23 6 14 6c1.65 0 2.97.24 3.33.36v2.53h-1.63c-1.21 0-1.58.75-1.58 1.54V12h3l-.47 3H14v6.78c5.44-.92 9.47-5.94 9.47-11.78z" />
            </svg>
          </a>
          {/* Twitter Icon */}
          <a href="#" className="hover:text-white transition duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.46 6c-.84.37-1.74.62-2.67.73.96-.58 1.7-1.5 2.05-2.61-.9.53-1.9.92-2.95 1.13C16.81 3.21 15.63 3 14.39 3c-2.68 0-4.85 2.17-4.85 4.85 0 .38.04.75.11 1.11C6.07 8.1 3.23 6.64 1.3 4.14c-.4.69-.63 1.49-.63 2.34 0 1.68.86 3.16 2.17 4.02-.8-.03-1.55-.24-2.2-.6v.06c0 2.36 1.68 4.34 3.91 4.79-.41.11-.84.17-1.28.17-.31 0-.61-.03-.91-.08.62 1.94 2.43 3.35 4.57 3.39-1.67 1.31-3.79 2.09-6.09 2.09-.39 0-.77-.02-1.15-.07 2.16 1.39 4.72 2.21 7.48 2.21 8.98 0 13.88-7.42 13.88-13.88 0-.21-.01-.42-.01-.63.96-.69 1.8-1.56 2.46-2.54z" />
            </svg>
          </a>
          {/* Instagram Icon */}
          <a href="#" className="hover:text-white transition duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2.2v-.004c-2.3 0-4.2 1.9-4.2 4.2V16.2c0 2.3 1.9 4.2 4.2 4.2h8.4c2.3 0 4.2-1.9 4.2-4.2V7.8c0-2.3-1.9-4.2-4.2-4.2H7.6zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6.4-6.4c-.88 0-1.6 0-1.6.8S16.4 4 17.2 4s.8.72.8 1.6S16.4 6.4 17.2 6.4c.88 0 1.6-.72 1.6-1.6s-.72-1.6-1.6-1.6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;