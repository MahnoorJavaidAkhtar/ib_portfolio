import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#0A1F44] text-white w-full min-h-screen flex flex-col items-center justify-start">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl px-6 lg:px-20 py-16">
        {/* Left */}
        <div className="flex-1 flex flex-col justify-center space-y-4 lg:space-y-6">
          <p className="text-lg md:text-xl opacity-80 animate-fadeIn">
            Hi, I am
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold animate-fadeIn">
            Ibrahim Amin
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl opacity-80 animate-fadeIn">
            Entrepreneur, Consultant & Freelancing Advocate
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/ibrahimamindigital"
              className="bg-white text-[#0A1F44] p-3 rounded-full shadow-lg hover:scale-110 hover:bg-gray-100 transition-transform duration-300"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahimameen/"
              className="bg-white text-[#0A1F44] p-3 rounded-full shadow-lg hover:scale-110 hover:bg-gray-100 transition-transform duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@ibrahimamin8157"
              className="bg-white text-[#0A1F44] p-3 rounded-full shadow-lg hover:scale-110 hover:bg-gray-100 transition-transform duration-300"
            >
              Youtube
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl animate-fadeIn">
            <Image
              src="/ibrahim.png"
              alt="Ibrahim Amin"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
{/* ABOUT / BIOGRAPHY SECTION */}
<div className="bg-[#061635] w-full py-20 px-6 lg:px-24">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* IMAGE SECTION */}
    <div className="flex justify-center">
      <div className="relative w-[350px] h-[420px] rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
        <Image
          src="/ibrahim2.png"
          alt="Ibrahim Amin"
          fill
          className="object-cover object-top"
        />
      </div>
    </div>

    {/* TEXT SECTION */}
    <div className="text-white space-y-6 h-full flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        Biography
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed">
        Ibrahim Amin is a Pakistani entrepreneur and consultant best known as
        the founder and chairman of <strong>Dellsons Associates</strong> and
        <strong> Tristar International Consultant</strong>, and co-founder of
        the <strong>Pakistan Freelancers Association (PAFLA)</strong>. His
        career spans trade, financial services, banking consultancy, digital
        transformation, and fintech, focusing on payments, compliance, credit
        risk, and digital banking.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed">
        He began his career in leather & export trade, later moving to financial
        services and banking consultancy. He champions digitalisation,
        financial crime prevention, fintech adoption, and freelancer support in
        Pakistan.
      </p>
    </div>

  </div>
</div>



      {/* ACHIEVEMENTS SECTION */}
      <div className="w-full py-16 px-6 lg:px-20 bg-[#0A1F44] flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Key Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          <div className="bg-[#061635] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Dellsons Associates</h3>
            <p className="text-gray-300 text-base">
              Built into a recognized fintech & banking consultancy offering
              advisory, digital banking solutions, credit-risk services, and
              training.
            </p>
          </div>
          <div className="bg-[#061635] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Tristar International</h3>
            <p className="text-gray-300 text-base">
              Provided consultancy in finance, compliance, and digital
              transformation, extending influence beyond domestic markets.
            </p>
          </div>
          <div className="bg-[#061635] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">PAFLA</h3>
            <p className="text-gray-300 text-base">
              Co-founded and led Pakistan Freelancers Association, advocating for
              freelancer-friendly banking solutions and ecosystem growth.
            </p>
          </div>
          <div className="bg-[#061635] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">Digitalisation & Training</h3>
            <p className="text-gray-300 text-base">
              Promoted digitalisation to prevent financial crime, delivered
              industry conferences, professional training, and public advocacy.
            </p>
          </div>
          <div className="bg-[#061635] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">International Partnerships</h3>
            <p className="text-gray-300 text-base">
              Acted as a bridge between international tech providers and Pakistani
              financial institutions, enabling market expansion and collaborations.
            </p>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="w-full py-16 flex flex-col items-center gap-6 bg-[#061635]">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Let’s Build Something Amazing Together
        </h2>
        <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl">
          Whether you need consultancy, digital banking solutions, or partnership
          guidance, I’m here to help turn ideas into reality.
        </p>
        <div className="flex gap-6 mt-6">
          <a
            href="/contact"
            className="bg-white text-[#0A1F44] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
          <a
            href="#portfolio"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0A1F44] transition"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;



