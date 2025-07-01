import React from 'react';

// About React Component
function About() {
  // Placeholder data - replace with your actual details
  const charityName = "لائف سٹریم بلڈ چیریٹی"; // Example Charity Name in Urdu
  const unitsDonated = "25,000+"; // Example: "Over 25,000" or "5000+"
  const videoEmbedLink = "https://www.youtube.com/embed/fGf2GdK8o8U"; // Replace with your actual YouTube/Vimeo video embed link
  const videoTitle = "زندگی کا تحفہ: ہماری بلڈ ڈرائیو کا ایک دن"; // Title for your video in Urdu

  return (
    <div className="max-w-4xl mt-20 mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-8 sm:p-10 lg:p-12 font-sans text-black dir-rtl text-right">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-black text-center mb-8">
        ہمارے بارے میں: {charityName}
      </h1>

      {/* Introduction Section */}
      <section className="mb-10">
        <p className="text-lg sm:text-xl leading-relaxed text-center mb-6 text-black">
          <span className="font-semibold text-black">{charityName}</span> فیصل آباد میں زندگیاں بچانے کے لیے وقف ہے۔
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">
          ہمارا مشن
        </h2>
        <p className="text-lg leading-relaxed text-center text-black">
          ہر ضرورت مند کو بروقت خون فراہم کرنا ہمارا مشن ہے۔
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 text-center">
          ہم کیا کرتے ہیں
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-black mb-3">بلڈ ڈرائیوز</h3>
            <p className="text-base leading-relaxed text-black">باقاعدگی سے بلڈ ڈونیشن کیمپ لگاتے ہیں۔</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-black mb-3">عطیہ دہندگان کی رجسٹریشن</h3>
            <p className="text-base leading-relaxed text-black">فوری ضرورت پر خون فراہم کرنے کو یقینی بناتے ہیں۔</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-black mb-3">بیداری اور تعلیم</h3>
            <p className="text-base leading-relaxed text-black">خون کے عطیہ کی اہمیت کے بارے میں آگاہی پھیلاتے ہیں۔</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-black mb-3">ایمرجنسی درخواستیں</h3>
            <p className="text-base leading-relaxed text-black">ایمرجنسی میں فوری خون کی فراہمی یقینی بناتے ہیں۔</p>
          </div>
        </div>
      </section>

      {/* About Our Developers / Digital Platform Section */}
      <section className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 text-center">
          ہمارا ڈیجیٹل پلیٹ فارم
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-center text-black">
          ہماری ٹیکنالوجی عطیات کے عمل کو ہموار اور موثر بناتی ہے۔
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-black mb-3">آن لائن سائن اپ</h3>
            <p className="text-base leading-relaxed text-black">نئے عطیہ دہندگان آسانی سے رجسٹر کر سکتے ہیں۔</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-black mb-3">اپوائنٹمنٹ بکنگ</h3>
            <p className="text-base leading-relaxed text-black">عطیہ دہندگان آسانی سے اپنی اپوائنٹمنٹ بک کرتے ہیں۔</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-black mb-3">محفوظ ڈیٹا</h3>
            <p className="text-base leading-relaxed text-black">عطیہ دہندگان کی معلومات کو محفوظ رکھتے ہیں۔</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-black mb-3">واضح مواصلات</h3>
            <p className="text-base leading-relaxed text-black">فوری درخواستیں اور اپ ڈیٹس بھیجتے ہیں۔</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm col-span-1 md:col-span-2">
            <h3 className="text-2xl font-semibold text-black mb-3">ہمارے ڈویلپرز</h3>
            <p className="text-base leading-relaxed text-black">ہماری ٹیم پلیٹ فارم کو استعمال میں آسان بناتی ہے۔</p>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">
          فیصل آباد میں ہمارا اثر
        </h2>
        <p className="text-lg leading-relaxed text-center text-black">
          <span className="font-bold text-black">{charityName}</span> نے <span className="font-bold text-black">{unitsDonated} یونٹس خون</span> جمع کیا ہے، جس سے ہزاروں جانیں بچائی گئیں۔
        </p>
      </section>

      {/* See Us in Action (Video Reference) Section - Made introductory paragraph even more concise */}
      <section className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6 text-center">
          ہمیں عمل میں دیکھیں
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-center text-black">
          ویڈیو دیکھیں کہ آپ کی حمایت سے کتنا فرق پڑتا ہے۔
        </p>
        <h3 className="text-2xl font-semibold text-black mb-4 text-center">
          {videoTitle}
        </h3>
        {videoEmbedLink && (
          <div className="relative w-full overflow-hidden rounded-lg shadow-xl" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={videoEmbedLink}
              title={videoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {!videoEmbedLink && (
          <p className="text-center text-black mt-4">
            براہ کرم ویڈیو دکھانے کے لیے ایک ویڈیو ایمبیڈ لنک فراہم کریں۔
          </p>
        )}
      </section>

      {/* Call to Action/Closing */}
      <section className="text-center mt-12">
        <p className="text-xl font-semibold text-black">
          {charityName} میں دلچسپی کا شکریہ۔ مل کر، ہم بڑا فرق پیدا کر سکتے ہیں۔
        </p>
      </section>
    </div>
  );
}

export default About;
