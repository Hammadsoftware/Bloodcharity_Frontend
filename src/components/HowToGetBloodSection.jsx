import React from 'react';

// A separate component that displays the numbered circle and content.
const StepCircle = ({ num, text }) => (
  <div className="flex flex-col items-center relative py-8 sm:py-10 md:py-12"> {/* Added responsive vertical spacing */}
    {/* Outer numbered circle - displays the step number */}
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-400 flex items-center justify-center absolute z-20 -top-8 sm:-top-10 left-1/2 -translate-x-1/2 bg-gray-100"> {/* Adjusted top position for responsiveness, added background to cover the connecting line */}
      <span className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-600">{num}</span> {/* Made font size responsive */}
    </div>
    {/* Inner content circle - contains an icon and descriptive text */}
    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-white shadow-lg flex flex-col items-center justify-center p-3 sm:p-4 text-center z-10"> {/* Removed mt, added responsive padding */}
      {/* Icon (pen icon as per image) - represents the action for the step */}
      <svg
        className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 mb-1 sm:mb-2" // Made icon size responsive
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 0 002-2v-5m-7-7l4-4m-4 4l-7 7m7-7v7m0-7H7"
        ></path>
      </svg>
      {/* Text description for the step */}
      <p className="text-xs sm:text-sm md:text-base text-gray-600"> {/* Made font size more responsive */}
        {text}
      </p>
    </div>
  </div>
);

// Main component for the "How to Get Blood" section
const HowToGetBloodSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col items-center justify-center"> {/* Responsive padding and centering */}
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12 mt-4 md:mt-8 text-center"> {/* Responsive font size and margins */}
        خون کیسے حاصل کریں؟ {/* Title in Urdu: "How to get blood?" */}
      </h2>
      {/* Container for all steps and the connecting heartbeat line */}
      <div className="relative flex flex-col items-center w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-6xl"> {/* Controlled max-width for better layout on larger screens */}
        {/* Step 1: Fill out the form */}
        <div className="mb-8 md:mb-12"> {/* Responsive bottom margin */}
          <StepCircle num={1} text="اپنا فارم پُر کریں اور درخواست جمع کروائیں۔" /> {/* Text: "Fill out your form and submit the application." */}
        </div>
        {/* Horizontal line and container for Steps 2 and 3 */}
        {/* This div arranges Step 2 and Step 3 horizontally, with the SVG heartbeat line in between */}
        <div className="relative w-full flex flex-row justify-between items-start px-2 sm:px-4 md:px-8 lg:px-24">
          {/* Heartbeat line and central heart SVG as a background element */}
          <svg
            className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /* Center SVG container */
            viewBox="0 0 1000 200" /* Standard viewBox for the SVG content */
            preserveAspectRatio="none" /* Allows the SVG to stretch to fill its container */
            style={{ overflow: 'visible', zIndex: 0 }} /* Ensures parts of the SVG outside the viewBox are visible, sets low z-index to be in background */
          >
            {/* Define gradient for the heartbeat line */}
            <defs>
              <linearGradient id="heartbeatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} /> {/* Red start */}
                <stop offset="50%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} /> {/* Pink middle */}
                <stop offset="100%" style={{ stopColor: '#c026d3', stopOpacity: 1 }} /> {/* Purple end */}
              </linearGradient>
            </defs>
            {/* Left heartbeat line path (ECG pulse) */}
            <path
              // This path draws the left segment of the heartbeat line, connecting to the heart
              d="M 150,100
                L 200,100 L 210,100 L 220,70 L 230,130 L 240,100 L 250,100 L 260,100 L 270,70 L 280,130 L 290,100 L 300,100 L 310,100 L 320,70 L 330,130 L 340,100 L 350,100
                L 360,100 L 370,100 L 380,70 L 390,130 L 400,100 L 410,100 L 420,70 L 430,130 L 440,100 L 450,100 L 460,100 L 470,70 L 480,130 L 490,100 L 500,100"
              fill="none"
              stroke="url(#heartbeatGradient)" // Apply the defined gradient
              strokeWidth="4"
            />
            {/* Right heartbeat line path (ECG pulse) */}
            <path
              // This path draws the right segment of the heartbeat line, connecting from the heart
              d="M 500,100
                L 510,100 L 520,70 L 530,130 L 540,100 L 550,100 L 560,100 L 570,70 L 580,130 L 590,100 L 600,100 L 610,100 L 620,70 L 630,130 L 640,100 L 650,100
                L 700,100 L 710,100 L 720,70 L 730,130 L 740,100 L 750,100 L 760,100 L 770,70 L 780,130 L 790,100 L 800,100 L 810,100 L 820,70 L 830,130 L 840,100 L 850,100"
              fill="none"
              stroke="url(#heartbeatGradient)" // Apply the defined gradient
              strokeWidth="4"
            />
            {/* Central Heart SVG */}
            <g transform="translate(500, 100) scale(1.0)"> {/* Center the heart within the SVG viewBox, set scale to 1.0 (original size) */}
              <path
                // Heart shape path, large and precise as per image
                d="M 0,-30 C 25,-60 60,-60 80,-30 C 100,0 60,30 0,60 C -60,30 -100,0 -80,-30 C -60,-60 -25,-60 0,-30 Z"
                fill="#831843" // Matches the dark red from the gradient
              />
            </g>
          </svg>
          {/* Step 2: Get your health checked */}
          <StepCircle num={2} text="اپنی صحت کی جانچ کروائیں تاکہ خون عطیہ کر سکیں۔" /> {/* Text: "Get your health checked so you can donate blood." */}
          {/* Step 3: Receive blood */}
          <StepCircle num={3} text="خون حاصل کریں" /> {/* Text: "Receive blood." */}
        </div>
      </div>
    </div>
  );
};

export default HowToGetBloodSection;
