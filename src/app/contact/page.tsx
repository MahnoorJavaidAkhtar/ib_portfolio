"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1F44] flex justify-center px-4 pt-28 pb-10">
      
      {/* Main Wrapper */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start gap-14">

        {/* LEFT SIDE: FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 bg-white p-8 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 opacity-20 animate-gradient-x rounded-3xl -z-10"></div>

          <h1 className="text-3xl font-bold text-center text-[#0A1F44] animate-fadeInDown">
            Contact Ibrahim Amin
          </h1>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-xl h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#0A1F44] text-white font-semibold p-3 rounded-xl hover:bg-[#061635] shadow-lg transition transform hover:scale-105"
          >
            Send
          </button>

          {status && (
            <p className="text-center text-sm mt-2 text-[#0A1F44] font-medium">
              {status}
            </p>
          )}
        </form>

        {/* RIGHT SIDE: IMAGE + TEXT */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-center text-white space-y-6 lg:ml-16">

          <img
            src="/ibrahim2.png"
            alt="Ibrahim Amin"
            className="w-64 lg:w-72 max-w-full h-auto rounded-3xl object-cover shadow-2xl border-4 border-white"
          />

          <h2 className="text-3xl font-bold">Ibrahim Amin</h2>

          <p className="opacity-90 leading-relaxed text-center lg:text-left">
            Ibrahim Amin is a highly experienced real estate consultant with a
            deep understanding of property investment and market trends. Reach
            out for expert advice on buying, selling, or investing in
            properties.
          </p>

          <p className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 backdrop-blur-lg text-sm">
            📞 Phone: +92 322 5300000 <br />
            📍 Location: Room No. 804, 8th Floor, Saima Trade Tower,
            I. I. Chundrigar Road, Karachi Sindh
          </p>

        </div>
      </div>
    </div>
  );
}







