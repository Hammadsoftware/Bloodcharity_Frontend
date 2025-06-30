import React from 'react';

// About React Component
function About() {
  // Placeholder data - replace with your actual details
  const charityName = "لائف سٹریم بلڈ چیریٹی"; // Example Charity Name in Urdu
  const unitsDonated = "25,000+"; // Example: "Over 25,000" or "5000+"
  const videoEmbedLink = "https://www.youtube.com/embed/fGf2GdK8o8U"; // Replace with your actual YouTube/Vimeo video embed link
  const videoTitle = "زندگی کا تحفہ: ہماری بلڈ ڈرائیو کا ایک دن"; // Title for your video in Urdu

  return (
    <div className="max-w-4xl mt-20 mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-8 sm:p-10 lg:p-12 font-sans text-gray-800 dir-rtl text-right"> {/* Changed background to white, text to dark gray */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-fuchsia-700 text-center mb-8"> {/* Changed text color to darker fuchsia for better contrast */}
        ہمارے بارے میں: {charityName}
      </h1>

      {/* Introduction Section */}
      <section className="mb-10">
        <p className="text-lg sm:text-xl leading-relaxed text-center mb-6">
          <span className="font-semibold text-fuchsia-600">{charityName}</span> میں خوش آمدید! ہم فیصل آباد، پاکستان میں رضاکارانہ خون کے عطیات کے ذریعے زندگیاں بچانے پر توجہ مرکوز کرنے والا ایک سرشار گروپ ہیں۔ ہمارا مقصد سادہ ہے: یہ یقینی بنانا کہ خون کی ضرورت مند ہر شخص کو یہ فوری اور محفوظ طریقے سے مل سکے۔
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-fuchsia-700 mb-4 text-center"> {/* Changed text color to darker fuchsia */}
          ہمارا مشن
        </h2>
        <p className="text-lg leading-relaxed text-center">
          ہمارا بنیادی مشن **لوگوں کو خون کا عطیہ دینے پر آمادہ کرنا، انہیں اس کی اہمیت بتانا، اور ان کے لیے ایسا کرنا آسان بنانا** ہے۔ ہم خون کی فراہمی کے لیے ایک مضبوط نظام بنانا چاہتے ہیں تاکہ خون کی کمی کی وجہ سے کوئی بھی اپنی جان سے ہاتھ نہ دھوئے۔ ہم عطیہ دہندگان اور مریضوں دونوں کے لیے ایک محفوظ، تیز، اور دیکھ بھال کا تجربہ فراہم کرنے کا وعدہ کرتے ہیں۔
        </p>
      </section>

      {/* What We Do Section */}
      <section className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-fuchsia-700 mb-6 text-center"> {/* Changed text color to darker fuchsia */}
          ہم کیا کرتے ہیں
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm"> {/* Changed background to light gray */}
            <h3 className="text-2xl font-semibold text-fuchsia-600 mb-3">بلڈ ڈرائیوز کا اہتمام</h3> {/* Changed text color to darker fuchsia */}
            <p className="text-base leading-relaxed text-gray-700"> {/* Changed text color to dark gray */}
              ہم باقاعدگی سے اسکولوں، دفاتر، اور کمیونٹی سینٹرز جیسی جگہوں پر بلڈ ڈونیشن کیمپ لگاتے ہیں، تاکہ آپ کے لیے خون کا عطیہ دینا آسان ہو۔
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm"> {/* Changed background to light gray */}
            <h3 className="text-2xl font-semibold text-fuchsia-600 mb-3">عطیہ دہندگان کی رجسٹریشن اور انتظام</h3> {/* Changed text color to darker fuchsia */}
            <p className="text-base leading-relaxed text-gray-700"> {/* Changed text color to dark gray */}
              ہم رجسٹرڈ خون کے عطیہ دہندگان کی ایک محفوظ فہرست رکھتے ہیں۔ یہ ہمیں فوری طور پر صحیح بلڈ گروپ والے عطیہ دہندگان کو تلاش کرنے میں مدد کرتا ہے جب کسی کو اس کی فوری ضرورت ہو۔
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm"> {/* Changed background to light gray */}
            <h3 className="text-2xl font-semibold text-fuchsia-600 mb-3">بیداری اور تعلیم پھیلائیں</h3> {/* Changed text color to darker fuchsia */}
            <p className="text-base leading-relaxed text-gray-700"> {/* Changed text color to dark gray */}
              ہم لوگوں کو یہ بتانے کے لیے مہمات چلاتے ہیں کہ خون کا عطیہ کیوں اتنا اہم ہے۔ ہم عام غلط فہمیوں کو بھی دور کرتے ہیں اور سب کو خون کے عطیہ کے سادہ اور محفوظ عمل کے بارے میں سکھاتے ہیں۔
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm"> {/* Changed background to light gray */}
            <h3 className="text-2xl font-semibold text-fuchsia-600 mb-3">ایمرجنسی بلڈ کی درخواستوں کو سنبھالیں</h3> {/* Changed text color to darker fuchsia */}
            <p className="text-base leading-relaxed text-gray-700"> {/* Changed text color to dark gray */}
              ہم ہسپتالوں کے ساتھ مل کر کام کرتے ہیں تاکہ ایمرجنسی کی صورت میں فوری طور پر خون حاصل کیا جا سکے۔ ہم ایک اہم کڑی کے طور پر کام کرتے ہیں تاکہ مریضوں کو بغیر کسی تاخیر کے مطلوبہ خون مل سکے۔
            </p>
          </div>
        </div>
      </section>

      {/* About Our Developers / Digital Platform Section */}
      <section className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-fuchsia-700 mb-6 text-center"> {/* Changed text color to darker fuchsia */}
          ہمارا ڈیجیٹل پلیٹ فارم اور اس کے پیچھے کے ڈویلپرز
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-center">
          آج کی منسلک دنیا میں، ٹیکنالوجی ہمیں مزید کام کرنے میں مدد کرتی ہے۔ ہمارا مضبوط آن لائن پلیٹ فارم ہر چیز کو ہموار بناتا ہے، عطیہ دہندگان کے سائن اپ کرنے سے لے کر خون کی فراہمی کو موثر طریقے سے منظم کرنے تک۔
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm"> {/* Changed background to light gray */}
            <h3 className="text-2xl font-semibold text-fuchsia-600 mb-3">آسان آن لائن عطیہ دہندہ سائن اپ</h3> {/* Changed text color to darker fuchsia */}
            <p className="text-base leading-relaxed text-gray-700"> {/* Changed text color to dark gray */}
              ہماری ویب سائٹ نئے عطیہ دہندگان کے لیے رجسٹر کرنا تیز اور آسان بناتی ہے۔ یہ معلومات ہمیں ان مریضوں سے ملانے میں مدد کرتی ہے جنہیں ان کے مخصوص بلڈ گروپ کی ضرورت ہوتی ہے۔
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm"> {/* Changed background to light gray */}
            <h3 className="text-2xl font-semibold text-fuchsia-600 mb-3">سادہ اپوائنٹمنٹ بکنگ</h3> {/* Changed text color to darker fuchsia */}
            <p className="text-base leading-relaxed text-gray-700"> {/* Changed text color to dark gray */}
              عطیہ دہندگان آسانی سے اپنی عطیہ کی اپوائنٹمنٹ آن لائن بک کر سکتے ہیں۔ ہمارا سسٹم خودکار یاددہانی بھی بھیجتا ہے، جو ہمیں اپنی بلڈ ڈرائیوز کو بہتر طریقے سے منظم کرنے میں مدد کرتا ہے۔
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm"> {/* Changed background to light gray */}
            <h3 className="text-2xl font-semibold text-fuchsia-600 mb-3">محفوظ ڈیٹا ہینڈلنگ</h3> {/* Changed text color to darker fuchsia */}
            <p className="text-base leading-relaxed text-gray-700"> {/* Changed text color to dark gray */}
              ہم آپ کی رازداری کو سنجیدگی سے لیتے ہیں۔ ہمارے ڈویلپرز نے ہمارے سسٹم کو اعلیٰ درجے کی سیکیورٹی کے ساتھ بنایا ہے تاکہ تمام عطیہ دہندگان کی معلومات کو محفوظ اور نجی رکھا جا سکے۔
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm"> {/* Changed background to light gray */}
            <h3 className="text-2xl font-semibold text-fuchsia-600 mb-3">واضح مواصلات</h3> {/* Changed text color to darker fuchsia */}
            <p className="text-base leading-relaxed text-gray-700"> {/* Changed text color to dark gray */}
              ہمارا پلیٹ فارم ہمیں فوری خون کی درخواستیں تیزی سے بھیجنے، متاثر کن کامیابی کی کہانیاں شیئر کرنے، اور نیوز لیٹرز اور الرٹس کے ذریعے اپنی عطیہ دہندگان کی کمیونٹی کو اپ ڈیٹ رکھنے میں مدد کرتا ہے۔
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm col-span-1 md:col-span-2"> {/* Changed background to light gray */}
            <h3 className="text-2xl font-semibold text-fuchsia-600 mb-3">ہمارے سرشار ڈویلپرز سے ملیں</h3> {/* Changed text color to darker fuchsia */}
            <p className="text-base leading-relaxed text-gray-700"> {/* Changed text color to dark gray */}
              ہمارے ہنر مند ڈویلپرز کی ٹیم ہماری ویب سائٹ اور آن لائن ٹولز کو بنانے اور بہتر بنانے کے لیے سخت محنت کرتی ہے۔ وہ اس بات کو یقینی بناتے ہیں کہ ہمارا پلیٹ فارم استعمال میں آسان، محفوظ، اور ہمیشہ عطیہ دہندگان کو ضرورت مندوں سے جوڑنے کے لیے تیار ہے۔ ان کی مہارت ہمیں بڑھنے اور اپنی کمیونٹی کی بہتر خدمت کرنے میں مدد کرتی ہے۔
            </p>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-fuchsia-700 mb-4 text-center"> {/* Changed text color to darker fuchsia */}
          فیصل آباد میں ہمارا اثر
        </h2>
        <p className="text-lg leading-relaxed text-center">
          جب سے ہم نے آغاز کیا ہے، <span className="font-semibold text-fuchsia-600">{charityName}</span> نے <span className="font-bold text-fuchsia-700">{unitsDonated} یونٹس خون</span> جمع کرنے میں مدد کی ہے۔ اس نے فیصل آباد میں بے شمار جانوں کو براہ راست بچایا ہے۔ ہر عطیہ ہماری کمیونٹی کی طاقت کو ظاہر کرتا ہے، کسی کو زندگی کا ایک نیا موقع دیتا ہے اور ہمارے شہر کو مضبوط بناتا ہے۔
        </p>
      </section>

      {/* See Us in Action (Video Reference) Section */}
      <section className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-fuchsia-700 mb-6 text-center"> {/* Changed text color to darker fuchsia */}
          ہمیں عمل میں دیکھیں: ہماری ویڈیو دیکھیں
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-center">
          ہم آپ کو دکھانا چاہتے ہیں کہ آپ کی حمایت سے کتنا حقیقی فرق پڑتا ہے۔ یہ دیکھنے کے لیے نیچے دی گئی ویڈیو دیکھیں کہ ہم کیسے کام کرتے ہیں اور ہر خون کے عطیہ کے پیچھے کی متاثر کن کہانیاں سنیں۔
        </p>
        <h3 className="text-2xl font-semibold text-fuchsia-600 mb-4 text-center"> {/* Changed text color to darker fuchsia */}
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
          <p className="text-center text-fuchsia-700 mt-4"> {/* Changed text color to darker fuchsia */}
            براہ کرم ویڈیو دکھانے کے لیے ایک ویڈیو ایمبیڈ لنک فراہم کریں۔
          </p>
        )}
      </section>

      {/* Call to Action/Closing */}
      <section className="text-center mt-12">
        <p className="text-xl font-semibold text-gray-700"> {/* Changed text color to dark gray */}
          {charityName} میں آپ کی دلچسپی کا شکریہ۔ مل کر، ہم ایک بہت بڑا فرق پیدا کر سکتے ہیں۔
        </p>
      </section>
    </div>
  );
}

export default About;
