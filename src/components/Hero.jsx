import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    // Outer container for full screen height and centering
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* Main content container with responsive padding and max-width */}
      <div className="relative w-screen h-screen  bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 overflow-hidden">
        {/* Abstract shape on the left - positioned absolutely and responsive */}
        <div className="absolute top-0 left-0 w-full h-full lg:w-3/5 lg:h-full overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice">
            <path
              d="M0,0 C200,50 400,100 500,200 C600,300 700,400 650,550 C600,700 300,750 0,700 L0,0 Z"
              fill="url(#gradient)"
              transform="scale(1.5)"
            ></path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#c026d3', stopOpacity: 1 }} /> {/* Purple-pink */}
                <stop offset="100%" style={{ stopColor: '#831843', stopOpacity: 1 }} /> {/* Darker purple-red */}
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content on the right - responsive width and alignment */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center lg:pl-26 pt-30 lg:items-start text-center lg:text-left mt-8 lg:mt-0 lg:ml-auto">
          <h1 className="text-5xl lg:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Save Life Donate <br /> Blood
          </h1>
          <p className="text-black text-base lg:text-lg mb-8 max-w-md">
            خون کا عطیہ ایک اہم انسانی خدمت ہے جو بے شمار جانیں بچا سکتی ہے۔ یہ ایک آسان عمل ہے جو آپ کو معاشرے میں مثبت کردار ادا کرنے کا موقع فراہم کرتا ہے۔ آپ کا ایک عطیہ کسی کی زندگی میں امید کی کرن روشن کر سکتا ہے اور اسے دوبارہ زندگی کا موقع دے سکتا ہے۔ آج ہی خون کا عطیہ دیں اور اس عظیم مقصد کا حصہ بنیں۔
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
            to={"/findblood"}
            >
             <button className="bg-black text-white px-8 py-3 rounded-xl shadow-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105">
              Get Blood Now
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
