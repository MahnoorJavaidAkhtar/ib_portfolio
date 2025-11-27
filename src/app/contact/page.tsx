'use client'
import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#0A1F44] p-6 gap-10">
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
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition animate-fadeIn"
          required
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition animate-fadeIn delay-100"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-xl h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 transition animate-fadeIn delay-200"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#0A1F44] text-white font-semibold p-3 rounded-xl hover:bg-[#061635] shadow-lg transition transform hover:scale-105 animate-bounce"
        >
          Send
        </button>

        {status && (
          <p className="text-center text-sm mt-2 text-[#0A1F44] font-medium animate-fadeIn">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}


