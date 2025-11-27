// app/success/page.tsx
'use client'
import Image from "next/image";

export default function SuccessPage() {
  const stories = [
    {
      title: "Built Dellsons into a Recognized Fintech & Banking Consultancy",
      description: "Under his leadership, Dellsons Associates became a well-known name in Pakistan’s fintech and banking advisory space, offering consulting, digital banking solutions, credit-risk services, and training to banks and financial institutions.",
    },
    {
      title: "Founded/led Tristar International Consultant",
      description: "Through Tristar, Ibrahim provided international consultancy services in finance, compliance, and digital transformation, extending his influence beyond domestic markets.",
    },
    {
      title: "Co-founded and led PAFLA",
      description: "As co-founder and chairman, he helped establish PAFLA as a national representative body for freelancers, facilitating access to foreign-currency bank accounts, partnerships with banks and regulators, and mentorship programs.",
    },
    {
      title: "Promoted Digitalisation to Combat Financial Crime",
      description: "Ibrahim has championed digitalisation as a tool for transparency, accountability, and prevention of financial crime, influencing industry thinking and contributing to conferences and discussions.",
    },
    {
      title: "Delivered Industry Events & Professional Training",
      description: "Organized and chaired conferences and training programs on digital banking, cybersecurity, and financial crime, raising sector capacity and awareness.",
    },
    {
      title: "Enabled International Partnerships & Market Entry",
      description: "Acted as a bridge for foreign technology/solution providers and Pakistani banks/financial institutions, facilitating partnerships and market expansion.",
    },
    {
      title: "Public Advocacy & Mentorship",
      description: "Active in mentoring, policy advocacy, and public engagement to modernize Pakistan’s financial services and support new economy workers like freelancers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1F44] text-white px-6 lg:px-20 py-16 flex flex-col gap-16">

      {/* Hero Section with Image */}
      <section className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
        <Image
          src="/ibrahim5.png"
          alt="Ibrahim Amin"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold animate-fadeInDown">
            Success Stories
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mt-2 animate-fadeIn delay-100">
            Highlights from Ibrahim Amin’s career, achievements, and contributions.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 p-6 rounded-3xl shadow-2xl transform hover:scale-105 hover:shadow-purple-400 transition-all duration-500 cursor-pointer animate-fadeIn"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 drop-shadow-md">{story.title}</h2>
            <p className="text-gray-100 opacity-90">{story.description}</p>
          </div>
        ))}
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown { animation: fadeInDown 1s ease forwards; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
      `}</style>

    </div>
  );
}
