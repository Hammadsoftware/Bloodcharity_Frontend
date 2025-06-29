import React, { useState } from 'react';

// Mock User Data (replace with actual data fetched from backend/Firestore)
const mockUserProfile = {
  name: "Dinoy Raj K",
  email: "dinoyraj@gamil.com",
  district: "Kozhikode",
  phoneNumber: "7306185390",
  pincode: "673014",
  age: 21,
  bloodGroup: "O +ve",
  address: "Karuvally Reenugeetham House...",
  lastDonationDate: "11-10-2021",
};

// Mock Donation History Data (example dates)
const initialDonationHistory = [
  { date: "13 Dec 2020", units: 120 },
  { date: "28 Nov 2020", units: 20 },
  { date: "04 Nov 2020", units: 40 },
  { date: "15 Oct 2020", units: 310 },
];

const ProfilePage = () => {
  const [donationHistory, setDonationHistory] = useState(initialDonationHistory);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // Current month (0-indexed)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Current year

  // Function to get days in a month (for calendar)
  const getDaysInMonth = (year, month) => { // Removed type annotations
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the first day of the month (0 for Sunday, 1 for Monday, etc.)
  const getFirstDayOfMonth = (year, month) => { // Removed type annotations
    return new Date(year, month, 1).getDay(); // getDay() returns 0 for Sunday, 1 for Monday etc.
  };

  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfCurrentMonth = getFirstDayOfMonth(currentYear, currentMonth);

  // Create an array of days for the calendar grid
  const calendarDays = [];
  for (let i = 0; i < firstDayOfCurrentMonth; i++) {
    calendarDays.push(null); // Add nulls for leading empty cells
  }
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    calendarDays.push(i);
  }

  // Handle month navigation
  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 0) {
        setCurrentYear(prevYear => prevYear - 1);
        return 11; // December
      }
      return prevMonth - 1;
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => {
      if (prevMonth === 11) {
        setCurrentYear(prevYear => prevYear + 1);
        return 0; // January
      }
      return prevMonth + 1;
    });
  };

  // Function to handle day click for updating donation
  const handleDayClick = (day) => { // Removed type annotation
    if (day) {
      const selectedDate = new Date(currentYear, currentMonth, day);
      const formattedDate = selectedDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).replace(/ /g, ' '); // Format as "DD Mon YYYY"

      // For demonstration: Add a mock donation or update an existing one
      // In a real app, you would have a more complex logic to
      // - Check if there's already a donation on this day
      // - Prompt user for units if adding new
      // - Call an API to update database
      const newDonation = { date: formattedDate, units: Math.floor(Math.random() * 100) + 50 }; // Random units for demo

      // Simple update: adds new entry. Could also modify existing.
      setDonationHistory(prevHistory => [...prevHistory, newDonation].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
      console.log(`Selected date for donation update: ${formattedDate}`);
    }
  };


  return (
    <div className="min-h-screen mt-24 bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Profile Card and About Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-lg flex-shrink-0">
              {/* Placeholder for profile image */}
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h2 className="text-2xl font-bold text-gray-800">{mockUserProfile.name}</h2>
              {/* Button container for full width and center alignment */}
              <div className="flex items-center justify-center mt-2 w-full">
                {/* Notification Bell Icon */}
                <svg
                  className="w-6 h-6 text-gray-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.136 6 8.324 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0v2a3 3 0 11-6 0v-2"
                  ></path>
                </svg>
                <button className="bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 w-full">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">About</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(mockUserProfile).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-gray-500 text-sm">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                  <span className="text-gray-800 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Donation History and Calendar */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Donation History */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Donation History</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Blood Units
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {donationHistory.map((entry, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                        {entry.units}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {new Date(currentYear, currentMonth).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              <div className="flex space-x-2">
                <button onClick={goToPreviousMonth} className="text-gray-600 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button onClick={goToNextMonth} className="text-gray-600 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 text-center text-sm gap-1">
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                <div key={day} className="font-medium text-gray-500">
                  {day}
                </div>
              ))}
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  onClick={() => handleDayClick(day)} // Add click handler
                  className={`p-2 rounded-md cursor-pointer ${
                    day
                      ? donationHistory.some(entry => new Date(entry.date).toDateString() === new Date(currentYear, currentMonth, day).toDateString())
                        ? 'bg-purple-600 text-white font-bold' // Highlight if it's a donation date
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200' // Normal day
                      : '' // Empty cell
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
