import React from 'react';

// MovingBanner Component for infinite scrolling text
const MovingBanner = () => {
  const promotionLines = [
    "خون کا عطیہ زندگی کا عطیہ ہے", // Blood donation is a gift of life
    "آپ کا ایک قطرہ، کسی کی امید", // Your one drop, someone's hope
    "آئیں خون کا عطیہ دیں، زندگیاں بچائیں", // Come, donate blood, save lives
    "ہر عطیہ قیمتی ہے", // Every donation is precious
    "خون کی کمی کو ختم کریں", // End blood shortage
  ];

  // Duplicate the lines to ensure seamless infinite scroll
  const duplicatedLines = [...promotionLines, ...promotionLines];

  return (
    // Changed background color from bg-red-700 to bg-fuchsia-700 for a magenta-like color
    <div className="relative w-full overflow-hidden bg-fuchsia-700 text-white py-3 mb-12 rounded-lg">
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* Moves half of the duplicated content */
        }
        .animate-marquee {
          animation: marquee 30s linear infinite; /* Adjust duration for speed */
        }
        `}
      </style>
      <div className="flex whitespace-nowrap animate-marquee">
        {duplicatedLines.map((line, index) => (
          <span key={index} className="text-xl md:text-2xl font-bold mx-8">
            {line}
          </span>
        ))}
      </div>
    </div>
  );
};

// AboutUsSection React Component
const AboutUsSection = () => {
  // Placeholder data - replace with your actual details
  const charityName = "لائف سٹریم بلڈ چیریٹی"; // Example Charity Name in Urdu

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center font-sans text-gray-800 dir-rtl text-right">

      {/* Moving Banner */}
      <MovingBanner />

      {/* Our Mission Section */}
      <section className="bg-white rounded-lg shadow-md p-8 max-w-4xl w-full mb-12 mt-8 md:mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-700 mb-4 text-center">ہمارا مشن</h2> {/* Added fuchsia color */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
          ہمارا مشن انسانیت کی خدمت کرنا ہے خون کے عطیات کی حوصلہ افزائی اور سہولت فراہم کر کے۔ ہم ایک ایسی دنیا بنانے کے لیے پرعزم ہیں جہاں ضرورت مند ہر شخص کو بروقت اور محفوظ خون دستیاب ہو۔ ہم کمیونٹیز کو تعلیم دینے، رضاکارانہ عطیات کی اہمیت کو اجاگر کرنے اور خون کے عطیات کو آسان اور قابل رسائی بنانے کے لیے مسلسل کوششیں کرتے ہیں۔ ہمارا مقصد ہر زندگی کو بچانا اور صحت مند مستقبل کو یقینی بنانا ہے، کیونکہ ہم سمجھتے ہیں کہ خون کا ہر قطرہ ایک نئی زندگی کی امید ہے۔ ہم اس بات کو یقینی بناتے ہیں کہ عطیہ دہندگان اور وصول کنندگان دونوں کو بہترین اور محفوظ ترین تجربہ حاصل ہو۔
        </p>
      </section>

      {/* Our Service Areas Section */}
      <section className="w-full max-w-4xl text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-700 mb-8">ہماری خدمات کے علاقے</h2> {/* Added fuchsia color */}

        {/* Service Area Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {/* Faisalabad Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center w-64 h-40 transition-transform duration-300 hover:scale-105">
            <span className="text-gray-700 text-3xl font-semibold mb-2">فیصل آباد</span>
            <p className="text-gray-600 text-sm">ہماری مرکزی خدمات فیصل آباد شہر میں دستیاب ہیں۔</p>
          </div>
          {/* Samundri Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center w-64 h-40 transition-transform duration-300 hover:scale-105">
            <span className="text-gray-700 text-3xl font-semibold mb-2">سمندری</span>
            <p className="text-gray-600 text-sm">سمندری اور اس کے گردونواح میں بھی ہماری خدمات فراہم کی جاتی ہیں۔</p>
          </div>
          {/* Dijkot Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center w-64 h-40 transition-transform duration-300 hover:scale-105">
            <span className="text-gray-700 text-3xl font-semibold mb-2">ڈجکوٹ</span>
            <p className="text-gray-600 text-sm">ڈجکوٹ کے رہائشی بھی ہماری خون عطیہ کی خدمات سے مستفید ہو سکتے ہیں۔</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full max-w-4xl text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-700 mb-8">ہمارے سروس ایریاز کا نقشہ</h2>
        <div className="w-full rounded-lg shadow-md overflow-hidden">
          {/* Google Maps Embed - Replace the 'src' URL with your specific map */}
          {/* You can create a custom map on Google My Maps (mymaps.google.com) to highlight specific areas (Faisalabad, Samundri, Dijkot) */}
          {/* Then, embed it using the 'Embed on my site' option. */}
          {/* A generic embed for Faisalabad is provided below as a starting point. */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108961.3090715371!2d73.04705354999999!3d31.42398485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ee9%3A0x4836534354719d16!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1719777600000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Areas Map"
          ></iframe>
        </div>
        <p className="text-gray-600 text-sm mt-4">
          نقشے پر ہمارے خون عطیہ کی خدمات کے اہم علاقے دکھائے گئے ہیں۔ آپ نقشے کو زوم کر سکتے ہیں اور مزید تفصیلات دیکھ سکتے ہیں۔
        </p>
      </section>
    </div>
  );
};

export default AboutUsSection;
