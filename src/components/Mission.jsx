import React from 'react';

const AboutUsSection= () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      {/* Our Mission Section */}
      <section className="bg-white rounded-lg shadow-md p-8 max-w-4xl w-full mb-12 mt-8 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">ہمارا مشن</h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          ہمارا مشن انسانیت کی خدمت کرنا ہے خون کے عطیات کی حوصلہ افزائی اور سہولت فراہم کر کے۔ ہم ایک ایسی دنیا بنانے کے لیے پرعزم ہیں جہاں ضرورت مند ہر شخص کو بروقت اور محفوظ خون دستیاب ہو۔ ہم کمیونٹیز کو تعلیم دینے، رضاکارانہ عطیات کی اہمیت کو اجاگر کرنے اور خون کے عطیات کو آسان اور قابل رسائی بنانے کے لیے مسلسل کوششیں کرتے ہیں۔ ہمارا مقصد ہر زندگی کو بچانا اور صحت مند مستقبل کو یقینی بنانا ہے۔
        </p>
      </section>

      {/* Our Collaborators Section */}
      <section className="w-full max-w-4xl text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">ہمارے معاونین</h2>

        {/* Collaborator Cards Container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
          {/* NCC Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center w-64 h-40 transition-transform duration-300 hover:scale-105">
            <span className="text-gray-400 text-2xl font-semibold">NCC</span>
          </div>
          {/* NSS Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center w-64 h-40 transition-transform duration-300 hover:scale-105">
            <span className="text-gray-400 text-2xl font-semibold">NSS</span>
          </div>
          {/* YMCA Card */}
          <div className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center w-64 h-40 transition-transform duration-300 hover:scale-105">
            <span className="text-gray-400 text-2xl font-semibold">YMCA</span>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
          <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
          <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
