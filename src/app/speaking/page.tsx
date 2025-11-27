// app/speaking/page.tsx
'use client'
import Link from "next/link";
import Image from "next/image";

export default function SpeakingPage() {
  const topics = [
    "Digital Transformation in Financial Services",
    "Scaling Startups: From Idea to Impact",
    "Cybersecurity Readiness for Modern Banks",
  ];

  return (
    <div className="min-h-screen bg-[#0A1F44] text-white px-6 lg:px-20 py-16 flex flex-col gap-16 items-center">

      {/* Top Illustration */}
      <section className="flex justify-center ">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <Image
            src="/amin12.png"
            alt="Ibrahim Amin Speaking"
            fill
            className="object-cover rounded-3xl shadow-2xl border-4 border-white"
          />
        </div>
      </section>

      {/* Hero / Title Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold animate-fadeInDown">
          Speaking & Media
        </h1>
        <p className="text-gray-300 text-lg md:text-xl animate-fadeIn delay-100">
          Keynote topics include leadership in transformation, future of finance, and building innovation cultures.
        </p>
      </section>

      {/* Keynote Topics Section */}
      <section className="max-w-5xl w-full mx-auto grid gap-6 md:grid-cols-3">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fadeIn delay-[${index*100}ms]"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{topic}</h2>
            <p className="text-gray-100 opacity-90">
              An in-depth session exploring {topic.toLowerCase()} with actionable insights and real-world examples.
            </p>
          </div>
        ))}
      </section>

      {/* Booking / CTA Section */}
      <section className="bg-white text-[#0A1F44] rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeInUp">
        <div>
          <h3 className="text-2xl font-bold mb-2">Booking</h3>
          <p className="text-gray-700 mb-4">
            To book, send a request via the contact page or schedule a call.
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-[#0A1F44] text-white px-6 py-3 rounded-xl shadow-lg font-semibold hover:bg-[#061635] hover:scale-105 transition transform"
        >
          Request Speaking
        </Link>
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
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

