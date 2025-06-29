import React from 'react';
// FaWhatsapp icon is imported from 'react-icons/fa6'
import { FaWhatsapp } from "react-icons/fa6";

// Mock User Data (replace with actual data fetched from backend/Firestore)
const mockUserProfile = {
  name: "Dinoy Raj K",
  email: "dinoyraj@gamil.com",
  district: "Kozhikode",
  phoneNumber: "03365034779", // Make sure this number is valid for WhatsApp
  pincode: "673014",
  age: 21,
  bloodGroup: "O +ve",
  address: "Karuvally Reenugeetham House...",
  lastDonationDate: "11-10-2021",
};

// Mock Donation History Data
const mockDonationHistory = [
  { date: "13 Dec 2020", units: 120 },
  { date: "28 Nov 2020", units: 20 },
  { date: "04 Nov 2020", units: 40 },
  { date: "15 Oct 2020", units: 310 },
];

const ProfilePage = () => {
  // Construct WhatsApp URL with user's name and phone number
  const whatsappMessage = encodeURIComponent(`Hello ${mockUserProfile.name}, I found your profile on the Blood Donation App.`);
  const whatsappUrl = `https://wa.me/${mockUserProfile.phoneNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen mt-25 bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: About Section (Profile Card simplified) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Simplified Profile Header - only name, without photo or edit option */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex-grow text-center sm:text-left">
              <h2 className="text-2xl font-bold text-gray-800">{mockUserProfile.name}</h2>
            </div>
            {/* WhatsApp Icon */}
            <div className="flex-shrink-0">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                 className="block p-2 rounded-full bg-green-500 hover:bg-green-600 transition duration-300">
                {/* Using FaWhatsapp icon */}
                <FaWhatsapp className="w-8 h-8 text-white" />
              </a>
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

        {/* Right Column: Donation History */}
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
                  {mockDonationHistory.map((entry, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
