// app/services/page.tsx
'use client'
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Fintech & Banking Consultancy",
      description:
        "Providing expert advisory services in digital banking, payments, credit-risk management, compliance, and financial strategy for institutions and startups.",
      icon: "/icons/fintech.png", // Replace with your icons
    },
    {
      title: "Digital Transformation",
      description:
        "Helping organizations adopt cutting-edge technologies and modernize their operations to drive efficiency, security, and innovation.",
      icon: "/icons/digital.png",
    },
    {
      title: "Freelancing Advocacy & Support",
      description:
        "Promoting Pakistan’s freelancing ecosystem through structural support, training, partnerships with banks, and access to foreign-currency payment channels.",
      icon: "/icons/freelance.png",
    },
    {
      title: "Training & Workshops",
      description:
        "Conducting professional workshops and training sessions on digital banking, cybersecurity, financial crime prevention, and fintech adoption.",
      icon: "/icons/training.png",
    },
    {
      title: "Policy & Advisory",
      description:
        "Advising organizations and regulators on policy, compliance, and best practices for financial technology, digital banking, and risk management.",
      icon: "/icons/advisory.png",
    },
    {
      title: "Public Speaking & Thought Leadership",
      description:
        "Keynotes, seminars, and public engagements sharing insights on leadership, fintech, innovation, and building sustainable business cultures.",
      icon: "/icons/speaking.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1F44] text-white px-6 lg:px-20 py-16 flex flex-col gap-16">

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
        <Image
          src="/ibrahim6.png"
          alt="Ibrahim Amin"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold animate-fadeInDown">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mt-2 animate-fadeIn delay-100">
            Expert solutions in consultancy, fintech, digital transformation, and freelancing advocacy.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 p-6 rounded-3xl shadow-2xl transform hover:scale-105 hover:shadow-purple-400 transition-all duration-500 cursor-pointer animate-fadeIn"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {service.icon && (
              <div className="w-16 h-16 mb-4 mx-auto">
                <Image src={service.icon} alt={service.title} width={64} height={64} />
              </div>
            )}
            <h2 className="text-xl md:text-2xl font-bold mb-2 drop-shadow-md text-center">
              {service.title}
            </h2>
            <p className="text-gray-100 opacity-90 text-center">{service.description}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-white text-[#0A1F44] rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeInUp">
        <div>
          <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
          <p className="text-gray-700 mb-4">
            Interested in any of our services? Send a request via the contact page or schedule a consultation.
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
      `}</style>
    </div>
  );
}
