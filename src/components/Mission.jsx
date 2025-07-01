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
    <div className="relative w-full overflow-hidden bg-fuchsia-700 text-black py-3">
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
  return (
    <div className="min-h-screen bg-gray-100 p-0 flex flex-col items-center font-sans text-gray-800 dir-rtl text-right">

      {/* Moving Banner */}
      <MovingBanner />

      {/* Our Mission Section */}
      <section className="bg-white rounded-lg shadow-md p-8 max-w-4xl w-full mb-8 mt-8 md:mt-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">ہمارا مشن</h2>
        <p className="text-black text-lg md:text-xl leading-relaxed text-justify">
          ہم انسانیت کی خدمت کے لیے پرعزم ہیں، خون کے عطیات کو فروغ دے کر اور انہیں آسان بنا کر۔ ہمارا مقصد یہ یقینی بنانا ہے کہ ہر ضرورت مند کو بروقت اور محفوظ خون مل سکے، زندگیاں بچائی جا سکیں، اور ایک صحت مند مستقبل بنایا جا سکے۔ ہم کمیونٹیز کو تعلیم دیتے ہیں، رضاکارانہ عطیات کی اہمیت کو اجاگر کرتے ہیں، اور عطیہ دہندگان و وصول کنندگان دونوں کے لیے بہترین تجربہ فراہم کرتے ہیں۔ کیونکہ خون کا ہر قطرہ ایک نئی زندگی کی امید ہے۔
        </p>
      </section>

      {/* Our Service Areas Section */}
      <section className="w-full max-w-4xl text-center mb-8 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">ہماری خدمات کے علاقے</h2>

        {/* Service Area Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {/* Faisalabad Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center w-64 h-40 transition-transform duration-300 hover:scale-105">
            <span className="text-black text-3xl font-semibold mb-2">فیصل آباد</span>
            <p className="text-black text-sm">ہماری مرکزی خدمات فیصل آباد شہر میں دستیاب ہیں۔</p>
          </div>
          {/* Samundri Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center w-64 h-40 transition-transform duration-300 hover:scale-105">
            <span className="text-black text-3xl font-semibold mb-2">سمندری</span>
            <p className="text-black text-sm">سمندری اور اس کے گردونواح میں بھی ہماری خدمات فراہم کی جاتی ہیں۔</p>
          </div>
          {/* Dijkot Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center w-64 h-40 transition-transform duration-300 hover:scale-105">
            <span className="text-black text-3xl font-semibold mb-2">ڈجکوٹ</span>
            <p className="text-black text-sm">ڈجکوٹ کے رہائشی بھی ہماری خون عطیہ کی خدمات سے مستفید ہو سکتے ہیں۔</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 px-4 md:px-8">ہمارے سروس ایریاز کا نقشہ</h2>
        <div className="w-full rounded-lg shadow-md overflow-hidden">
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
        <p className="text-black text-sm mt-4 px-4 md:px-8">
          نقشے پر ہمارے خون عطیہ کی خدمات کے اہم علاقے دکھائے گئے ہیں۔ آپ نقشے کو زوم کر سکتے ہیں اور مزید تفصیلات دیکھ سکتے ہیں۔
        </p>
      </section>
    </div>
  );
};

export default AboutUsSection;