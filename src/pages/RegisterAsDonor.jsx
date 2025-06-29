import React, { useState } from 'react';

const RegisterAsDonor = () => {
  // Removed TypeScript type annotation <string>
  const [address, setAddress] = useState(''); // Keep address state for the textarea

  // Function to get precise location from browser and (simulated/example) reverse geocode it
  // This function is no longer needed but kept for reference if you want to re-add it
  // const getPreciseLocation = () => {
  //   if (navigator.geolocation) {
  //     setIsLocating(true);
  //     setLocationError('');
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         const { latitude, longitude } = position.coords;
  //         await new Promise(resolve => setTimeout(resolve, 1500));
  //         setAddress(`فیک پتہ: گلی نمبر 7، بلاک D، شہر لاہور، پاکستان (عرض بلد: ${latitude.toFixed(4)}، طول بلد: ${longitude.toFixed(4)})`);
  //         setIsLocating(false);
  //       },
  //       (error) => {
  //         setIsLocating(false);
  //         // Handle errors (removed state for this as button is gone)
  //       },
  //       { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  //     );
  //   } else {
  //     // Handle browser not supporting geolocation (removed state for this as button is gone)
  //   }
  // };

  return (
    // Make the outer div take full screen width and height
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8"
         style={{ backgroundColor: '#ECE9E9' }}> {/* Use the light gray background color from the image */}
      <div className="bg-white mt-20 rounded-lg shadow-xl w-full max-w-4xl overflow-hidden">
        {/* Header with Gradient Background */}
        <div className="text-white p-4 sm:p-6 rounded-t-lg"
             style={{ background: 'linear-gradient(to right, #9A0059, #6B003D)' }}> {/* Use the exact gradient colors */}
          <h2 className="text-xl sm:text-2xl font-semibold">Register As Donor</h2>
        </div>

        {/* Form Content */}
        <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Full Name */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-gray-700 text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="First"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-col mt-6 sm:mt-0"> {/* Adjust margin for small screens */}
              <label htmlFor="lastName" className="sr-only">Last Name</label> {/* Visually hidden label */}
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label htmlFor="phoneNumber" className="text-gray-700 text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Number"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label htmlFor="email" className="text-gray-700 text-sm font-medium mb-1">E mail</label>
            <input
              type="email"
              id="email"
              placeholder="Mail Id"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Address and Age */}
          <div className="flex flex-col col-span-1">
            <label htmlFor="address" className="text-gray-700 text-sm font-medium mb-1">Address</label>
            <textarea
              id="address"
              placeholder="Type Here"
              rows={4}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none" // Removed mb-2
              value={address} // Bind textarea value to state
              onChange={(e) => setAddress(e.target.value)} // Update state on change
            ></textarea>
            {/* Precise Location Button and error message removed */}
          </div>
          <div className="flex flex-col col-span-1">
            <label htmlFor="age" className="text-gray-700 text-sm font-medium mb-1">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Age"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Blood Group and District */}
          <div className="flex flex-col col-span-1">
            <label htmlFor="bloodGroup" className="text-gray-700 text-sm font-medium mb-1">Blood Group</label>
            <select
              id="bloodGroup"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white appearance-none"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="flex flex-col col-span-1">
            <label htmlFor="district" className="text-gray-700 text-sm font-medium mb-1">District</label>
            <select
              id="district"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white appearance-none"
            >
              <option value="">Select District</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Islamabad">Islamabad</option>
            </select>
          </div>

          {/* PinCode and State */}
          <div className="flex flex-col col-span-1">
            <label htmlFor="pinCode" className="text-gray-700 text-sm font-medium mb-1">PinCode</label>
            <input
              type="text"
              id="pinCode"
              placeholder="PinCode"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex flex-col col-span-1">
            <label htmlFor="state" className="text-gray-700 text-sm font-medium mb-1">State</label>
            <select
              id="state"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white appearance-none"
            >
              <option value="">Select State</option>
              <option value="Punjab">Punjab</option>
              <option value="Sindh">Sindh</option>
              <option value="KPK">KPK</option>
            </select>
          </div>

          {/* Last Donation */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col">
              <label htmlFor="lastDonationMonth" className="text-gray-700 text-sm font-medium mb-1">Last Donation</label>
              <select
                id="lastDonationMonth"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white appearance-none"
              >
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString('en-US', { month: 'long' })}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mt-6 sm:mt-0"> {/* Adjust margin for small screens */}
              <label htmlFor="lastDonationYear" className="sr-only">Year</label> {/* Visually hidden label */}
              <select
                id="lastDonationYear"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white appearance-none"
              >
                <option value="">Year</option>
                {Array.from({ length: 10 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year} value={year}>{year}</option>;
                })}
              </select>
            </div>
          </div>

          {/* Checkbox */}
          <div className="col-span-1 md:col-span-2 flex items-center mt-4">
            <input
              type="checkbox"
              id="termsCheckbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="termsCheckbox" className="ml-2 text-gray-700 text-sm">
              میں تمام شرائط و ضوابط سے اتفاق کرتا ہوں۔
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="p-4 sm:p-6 lg:p-8 flex justify-end">
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-300 transition duration-300 flex items-center space-x-2">
            <span>Submit</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterAsDonor;
