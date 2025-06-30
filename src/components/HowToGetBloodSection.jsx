import React from 'react';

// A separate component that displays the numbered circle and content.
const StepCircle = ({ num, text, iconPath }) => (
  <div className="flex flex-col items-center relative py-10 px-2 sm:px-4 md:px-6"> {/* Adjusted padding for spacing */}
    {/* Outer numbered circle */}
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-400 flex items-center justify-center absolute z-20 -top-8 sm:-top-10 left-1/2 -translate-x-1/2 bg-gray-100 shadow-md"> {/* Adjusted top and added shadow */}
      <span className="text-2xl sm:text-3xl font-bold text-gray-600">{num}</span>
    </div>
    {/* Inner content circle */}
    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white shadow-lg flex flex-col items-center justify-center p-3 sm:p-4 text-center z-10 mt-10"> {/* Adjusted size and added margin-top to push down */}
      {/* Icon (document-text icon) */}
      <svg
        className="w-9 h-9 sm:w-11 sm:h-1 mb-1 sm:mb-2" // Icon color changed to red for consistency
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5" // Slightly thinner stroke for elegance
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
        {/* If you want a pen explicitly with paper, you might use a path like this, or combine two paths */}
        {/* Example for pen on paper (might need adjustment based on desired look): */}
        {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-7-7l4-4m-4 4l-7 7m7-7v7m0-7H7"></path> */}
      </svg>
      <p className="text-sm sm:text-base text-gray-700 leading-snug"> {/* Adjusted font size and line height */}
        {text}
      </p>
    </div>
  </div>
);

const HowToGetBloodSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col items-center justify-center">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold  mb-12 md:mb-16 mt-8 text-center">
        خون کیسے حاصل کریں؟
      </h2>

      <div className="relative flex flex-col items-center w-full max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-6xl">

        {/* Step 1 */}
        <div className="mb-16 md:mb-20"> {/* Increased bottom margin for spacing */}
          <StepCircle num={1} text="اپنا فارم پُر کریں اور درخواست جمع کروائیں۔" />
        </div>

        {/* Horizontal line and container for Steps 2 and 3 */}
        <div className="relative w-full flex flex-col md:flex-row justify-around items-center px-2 sm:px-4 md:px-8 lg:px-16">
          {/* Heartbeat line and central heart SVG as a background element */}
          {/* Note: SVG needs to be positioned carefully to connect circles visually */}
          <svg
            className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            style={{ overflow: 'visible' }}
          >
            {/* Heartbeat lines (ECG pulse) */}
            <path
              // Left segment, adjusted path coordinates for better flow
              d="M 150,100 Q 250,70 350,100 T 450,100 T 500,100" // Simplified with Quadratic Bezier for smoother pulse
              fill="none"
              stroke="url(#heartbeatGradient)"
              strokeWidth="4"
            />
            <path
              // Right segment
              d="M 500,100 Q 550,70 650,100 T 750,100 T 850,100" // Simplified with Quadratic Bezier
              fill="none"
              stroke="url(#heartbeatGradient)"
              strokeWidth="4"
            />
            <defs>
              <linearGradient id="heartbeatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#c026d3', stopOpacity: 1 }} /> {/* Purple-pink */}
                <stop offset="50%" style={{ stopColor: '#831843', stopOpacity: 1 }} /> {/* Dark purple-red */}
                <stop offset="100%" style={{ stopColor: '#c026d3', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            {/* Central Heart */}
            <g transform="translate(500, 100) scale(1.0)">
              <path
                d="M 0,-30 C 25,-60 60,-60 80,-30 C 100,0 60,30 0,60 C -60,30 -100,0 -80,-30 C -60,-60 -25,-60 0,-30 Z"
                fill="#831843"
              />
            </g>
          </svg>

          {/* Step 2 */}
          <div className="mb-16 md:mb-0"> {/* Added mb for mobile, removed for larger screens */}
            <StepCircle num={2} text="اپنی صحت کی جانچ کروائیں تاکہ خون عطیہ کر سکیں۔" />
          </div>

          {/* Step 3 */}
          <div>
            <StepCircle num={3} text="خون حاصل کریں" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToGetBloodSection;
