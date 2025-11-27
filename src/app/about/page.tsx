// app/about/page.tsx
'use client'
import Image from "next/image";

export default function AboutPage() {
  const achievements = [
    "Built Dellsons into a recognized fintech & banking consultancy",
    "Founded/led Tristar International Consultant",
    "Co-founded and led PAFLA (Pakistan Freelancers Association)",
    "Promoted digitalisation to combat financial crime",
    "Delivered industry events and professional training",
    "Enabled international partnerships and market entry",
    "Public advocacy & mentorship"
  ];

  return (
    <div className="min-h-screen bg-[#0A1F44] text-white px-6 lg:px-20 py-16 flex flex-col gap-24">

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
        <Image
          src="/ibrahim3.png"
          alt="Ibrahim Amin"
          fill
          className="object-cover brightness-75 animate-float"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 animate-fadeInDown">
          <h1 className="text-4xl md:text-6xl font-bold">About Ibrahim Amin</h1>
          <p className="text-gray-300 text-lg md:text-xl mt-2">
            Entrepreneur | Consultant | Freelancer Advocate | Speaker
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="relative max-w-5xl mx-auto flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center animate-fadeInDown">
          Biography
        </h2>

        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 opacity-10 rounded-3xl animate-gradient-x -z-10"></div>

        <div className="bg-[#0A1F44] bg-opacity-80 p-8 rounded-3xl shadow-2xl space-y-6 animate-fadeInUp">
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            <span className="text-purple-400 font-semibold">Ibrahim Amin</span> is a Pakistani entrepreneur and consultant best known as the founder and chairman of <span className="text-purple-400 font-semibold">Dellsons Associates (Pvt) Ltd.</span> and <span className="text-purple-400 font-semibold">Tristar International Consultant (Pvt) Ltd.</span>, and as co-founder and chairman of the <span className="text-purple-400 font-semibold">Pakistan Freelancers Association (PAFLA)</span>. His career spans trade, financial services, banking consultancy, digital transformation, and fintech, focusing on payments, compliance, credit risk, and digital banking.
          </p>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            <span className="text-purple-400 font-semibold">Early Career & Sector Focus:</span> Ibrahim began in leather and export trade and later transitioned into financial services and banking consultancy. Over time, he expanded into digital transformation, fintech, and training for the banking and finance sector.
          </p>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            <span className="text-purple-400 font-semibold">Entrepreneurship:</span> He founded Dellsons Associates, which grew into a consultancy and solutions group active in digital banking, payments, credit risk, and regulatory/compliance advisory. He is also the founder/chairman of Tristar International Consultant.
          </p>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            <span className="text-purple-400 font-semibold">Freelancing Advocacy:</span> As co-founder and chairman of PAFLA, Ibrahim has been a leading voice for Pakistan’s freelancing community — advocating for structural support, partnerships with banks and regulators, and easier access to foreign-currency receipts for freelance income.
          </p>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            <span className="text-purple-400 font-semibold">Thought Leadership & Training:</span> He is active in organizing conferences, delivering training, and advising on policy and industry practices — especially around digitalisation, financial crime prevention, and cybersecurity in the financial sector.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
        {achievements.map((achieve, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 p-6 rounded-3xl shadow-2xl transform hover:scale-105 hover:shadow-purple-400 transition-all duration-500 cursor-pointer"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center drop-shadow-md">
              {achieve}
            </h3>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-white text-[#0A1F44] rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeInUp">
        <div>
          <h3 className="text-2xl font-bold mb-2">Want to Collaborate?</h3>
          <p className="text-gray-700 mb-4">
            Interested in working with Ibrahim Amin? Send a request via the contact page or schedule a consultation.
          </p>
        </div>
        <a
          href="/contact"
          className="bg-[#0A1F44] text-white px-6 py-3 rounded-xl shadow-lg font-semibold hover:bg-[#061635] hover:scale-105 transition transform"
        >
    Request
        </a>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown { animation: fadeInDown 1s ease forwards; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1s ease forwards; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 10s ease infinite;
        }
      `}</style>
    </div>
  );
}
