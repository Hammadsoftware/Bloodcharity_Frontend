import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Mock Data for Blood Donors (replace with actual data from Firestore/backend)
const mockDonors = [
  { id: 'd1', name: { en: 'Ali Ahmed', ur: 'علی احمد' }, bloodGroup: 'A+', lat: 31.5204, lon: 74.3487, address: { en: 'ABC Hospital Building, XYZ Road, Place, District, Pincode', ur: 'اے بی سی ہسپتال بلڈنگ، XYZ روڈ، جگہ، ضلع، پن کوڈ' }, contact: 'XXXXXXXXXX' },
  { id: 'd2', name: { en: 'Fatima Begum', ur: 'فاطمہ بیگم' }, bloodGroup: 'B-', lat: 24.8609, lon: 67.0011, address: { en: 'PQR Clinic, New Town, City, District, Pincode', ur: 'PQR کلینک، نیو ٹاؤن، شہر، ضلع، پن کوڈ' }, contact: 'XXXXXXXXXX' },
  { id: 'd3', name: { en: 'Muhammad Khan', ur: 'محمد خان' }, bloodGroup: 'O+', lat: 33.6844, lon: 73.0479, address: { en: 'LMN Blood Bank, Sector E-11, Islamabad, Pincode', ur: 'LMN بلڈ بینک، سیکٹر E-11، اسلام آباد، پن کوڈ' }, contact: 'XXXXXXXXXX' },
  { id: 'd4', name: { en: 'Aisha Rana', ur: 'عائشہ رانا' }, bloodGroup: 'AB+', lat: 31.4187, lon: 73.0791, address: { en: 'DEF General Hospital, Main Bypass, Faisalabad, Pincode', ur: 'DEF جنرل ہسپتال، مین بائی پاس، فیصل آباد، پن کوڈ' }, contact: 'XXXXXXXXXX' },
  { id: 'd5', name: { en: 'Zahid Hassan', ur: 'زاہد حسن' }, bloodGroup: 'A-', lat: 34.0151, lon: 71.5249, address: { en: 'GHI Medical Center, Old City, Peshawar, Pincode', ur: 'GHI میڈیکل سینٹر، پرانا شہر، پشاور، پن کوڈ' }, contact: 'XXXXXXXXXX' },
  { id: 'd6', name: { en: 'Sofia Malik', ur: 'صوفیہ ملک' }, bloodGroup: 'O-', lat: 30.1575, lon: 71.5249, address: { en: 'JKL Hospital, Near Clock Tower, Multan, Pincode', ur: 'JKL ہسپتال، کلاک ٹاور کے قریب، ملتان، پن کوڈ' }, contact: 'XXXXXXXXXX' },
  { id: 'd7', name: { en: 'Aamir Butt', ur: 'عامر بٹ' }, bloodGroup: 'B+', lat: 31.5204, lon: 74.3487, address: { en: 'ABC Hospital Building, XYZ Road, Place, District, Pincode', ur: 'اے بی سی ہسپتال بلڈنگ، XYZ روڈ، جگہ، ضلع، پن کوڈ' }, contact: 'XXXXXXXXXX' },
  { id: 'd8', name: { en: 'Kiran Khan', ur: 'کرن خان' }, bloodGroup: 'A+', lat: 24.8609, lon: 67.0011, address: { en: 'PQR Clinic, New Town, City, District, Pincode', ur: 'PQR کلینک، نیو ٹاؤن، شہر، ضلع، پن کوڈ' }, contact: 'XXXXXXXXXX' },
];

const mockBloodBanks = [
  { id: 'b1', name: { en: 'National Blood Bank', ur: 'قومی بلڈ بینک' }, address: { en: 'Main Blvd, Gulberg, Lahore, Pincode', ur: 'مین بولیورڈ، گلبرگ، لاہور، پن کوڈ' }, contact: '042-XXXXXXX', lat: 31.5204, lon: 74.3487 },
  { id: 'b2', name: { en: 'Fatimid Foundation Karachi', ur: 'فاطمید فاؤنڈیشن کراچی' }, address: { en: 'Shahrah-e-Faisal, Karachi, Pincode', ur: 'شاہراہ فیصل، کراچی، پن کوڈ' }, contact: '021-XXXXXXX', lat: 24.8609, lon: 67.0011 },
  { id: 'b3', name: { en: 'Red Crescent Blood Bank Islamabad', ur: 'ریڈ کریسنٹ بلڈ بینک اسلام آباد' }, address: { en: 'F-8 Markaz, Islamabad, Pincode', ur: 'F-8 مرکز، اسلام آباد، پن کوڈ' }, contact: '051-XXXXXXX', lat: 33.6844, lon: 73.0479 },
];

// Language object for all translatable strings
const translations = {
  en: {
    header: "Find Blood",
    bloodDonors: "Blood Donors",
    bloodBanks: "Blood Banks",
    filterByLocation: "Filter by Location:",
    locationPlaceholder: "e.g., Lahore, Karachi",
    filterByBloodGroup: "Filter by Blood Group:",
    allBloodGroups: "All Blood Groups",
    donorsList: "Donors List",
    bloodBanksList: "Blood Banks List",
    noDonorsFound: "No donors found matching your filters.",
    noBloodBanksFound: "No blood banks found matching your filters.",
    bloodGroup: "Blood Group",
    location: "Location",
    contactNumber: "Contact Number",
    viewLocation: "View Location",
    urdu: "اردو",
    english: "English",
    latitude: "Latitude",
    longitude: "Longitude"
  },
  ur: {
    header: "خون تلاش کریں",
    bloodDonors: "بلڈ ڈونرز",
    bloodBanks: "بلڈ بینکس",
    filterByLocation: "مقام کے لحاظ سے فلٹر کریں:",
    locationPlaceholder: "مثلاً: لاہور، کراچی",
    filterByBloodGroup: "بلڈ گروپ کے لحاظ سے فلٹر کریں:",
    allBloodGroups: "تمام بلڈ گروپس",
    donorsList: "عطیہ دہندگان کی فہرست",
    bloodBanksList: "بلڈ بینکس کی فہرست",
    noDonorsFound: "کوئی عطیہ دہندہ نہیں ملا جو آپ کے فلٹرز سے مماثل ہو۔",
    noBloodBanksFound: "کوئی بلڈ بینک نہیں ملا جو آپ کے فلٹرز سے مماثل ہو۔",
    bloodGroup: "بلڈ گروپ",
    location: "مقام",
    contactNumber: "رابطہ نمبر",
    viewLocation: "مقام دیکھیں",
    urdu: "اردو",
    english: "English",
    latitude: "عرض بلد",
    longitude: "طول بلد"
  }
};

const BloodMap = () => { // Removed React.FC type annotation
  const [locationFilter, setLocationFilter] = useState(''); // Removed <string>
  const [bloodGroupFilter, setBloodGroupFilter] = useState(''); // Removed <string>
  const [language, setLanguage] = useState('en'); // Removed <'ur' | 'en'>, Default language is English as per common practice
  const [viewType, setViewType] = useState('donors'); // 'donors' or 'banks'

  const t = translations[language]; // Get current language translations

  // Filtered data based on selected criteria and view type
  const filteredData = useMemo(() => {
    if (viewType === 'donors') {
      return mockDonors.filter(item => {
        const matchesLocation = locationFilter
          ? (typeof item.address === 'string' ? item.address : item.address[language]).toLowerCase().includes(locationFilter.toLowerCase())
          : true;
        const matchesBloodGroup = bloodGroupFilter
          ? item.bloodGroup === bloodGroupFilter
          : true;
        return matchesLocation && matchesBloodGroup;
      });
    } else { // viewType === 'banks'
      return mockBloodBanks.filter(item => {
        const matchesLocation = locationFilter
          ? (typeof item.address === 'string' ? item.address : item.address[language]).toLowerCase().includes(locationFilter.toLowerCase())
          : true;
        // Blood bank filter does not apply to blood group filter
        return matchesLocation;
      });
    }
  }, [locationFilter, bloodGroupFilter, language, viewType]);

  const handleViewLocation = (lat, lon) => { // Removed type annotations for lat, lon
    // In a real application, you would open a map application or embed a map here.
    // For demonstration, we'll just log the coordinates.
    console.log(`View Location for Lat: ${lat}, Lon: ${lon}`);
    // Example: window.open(`https://www.google.com/maps?q=${lat},${lon}`, '_blank');
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-100 p-4 sm:p-6 lg:p-8 relative">
      {/* Language Switch Buttons */}
      <div className="absolute top-4 right-4 flex space-x-2 z-10">
        <button
          onClick={() => setLanguage('ur')}
          className={`px-3 py-1 rounded-md text-sm font-semibold ${
            language === 'ur' ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          {t.urdu}
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-md text-sm font-semibold ${
            language === 'en' ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
          }`}
        >
          {t.english}
        </button>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          {t.header}
        </h2>

        {/* View Type Toggle (Blood Donors / Blood Banks) */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setViewType('donors')}
            className={`px-6 py-2 rounded-l-lg font-semibold transition duration-300 ${
              viewType === 'donors' ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
            }`}
          >
            {t.bloodDonors}
          </button>
          <button
            onClick={() => setViewType('banks')}
            className={`px-6 py-2 rounded-r-lg font-semibold transition duration-300 ${
              viewType === 'banks' ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
            }`}
          >
            {t.bloodBanks}
          </button>
        </div>

        {/* Filters Section (on top) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Location Filter */}
          <div className="flex flex-col">
            <label htmlFor="locationFilter" className="text-gray-700 text-sm font-medium mb-1">
              {t.filterByLocation}
            </label>
            <input
              type="text"
              id="locationFilter"
              placeholder={t.locationPlaceholder}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            />
          </div>

          {/* Blood Group Filter (only visible for donors view) */}
          {viewType === 'donors' && (
            <div className="flex flex-col">
              <label htmlFor="bloodGroupFilter" className="text-gray-700 text-sm font-medium mb-1">
                {t.filterByBloodGroup}
              </label>
              <select
                id="bloodGroupFilter"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white appearance-none"
                value={bloodGroupFilter}
                onChange={(e) => setBloodGroupFilter(e.target.value)}
              >
                <option value="">{t.allBloodGroups}</option>
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
          )}
        </div>

        {/* List of Donors/Blood Banks */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          {viewType === 'donors' ? t.donorsList : t.bloodBanksList} ({filteredData.length})
        </h3>
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 gap-4"> {/* Changed to 1 column to match image style */}
            {filteredData.map(item => (
              <div key={item.id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between">
                <div>
                  {/* Name of Donor/Blood Bank */}
                  <p className="text-lg font-semibold text-gray-900">
                    {typeof item.name === 'string' ? item.name : item.name[language]}
                  </p>
                  {/* Address */}
                  <p className="text-sm text-gray-700">
                    {typeof item.address === 'string' ? item.address : item.address[language]}
                  </p>
                  {/* Contact Number (if available) */}
                  {item.contact && (
                    <p className="text-sm text-gray-700">
                      {t.contactNumber}: {item.contact}
                    </p>
                  )}
                  {/* Blood Group (only for donors) */}
                  {viewType === 'donors' && item.bloodGroup && (
                    <p className="text-sm text-gray-700">
                      {t.bloodGroup}: <span className="font-bold">{item.bloodGroup}</span>
                    </p>
                  )}
                  {/* Latitude & Longitude */}
                  <p className="text-xs text-gray-500">
                    {t.latitude}: {item.lat.toFixed(4)}, {t.longitude}: {item.lon.toFixed(4)}
                  </p>
                </div>
                {/* View Location Button */}
                <Link
                to={"/profile/" + item.id }>
                <button
                  onClick={() => handleViewLocation(item.lat, item.lon)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700 transition duration-300"
                >
                  {t.viewLocation}
                </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">
            {viewType === 'donors' ? t.noDonorsFound : t.noBloodBanksFound}
          </p>
        )}
      </div>
    </div>
  );
};

export default BloodMap;
