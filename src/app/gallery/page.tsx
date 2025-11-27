// app/gallery/page.tsx
'use client'
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Replace with your real images
  const images = [
    "/amin.png",
    "/amin1.png",
    "/amin2.png",
    "/amin3.png",
    "/amin4.png",
    "/amin5.png",
    "/amin6.png",
    "/amin7.png",
    "/amin8.png" ,
    "/amin9.png",
    "/amin10.png",
    "/amin11.png",
    "/amin12.png",
    "/amin13.png",
    "/amin14.png",
    "/amin15.png",
    "/amin16.png",
    "/amin17.png"
  ];


  return (
    <div className="min-h-screen bg-[#0A1F44] text-white px-6 lg:px-20 py-16 flex flex-col gap-16 items-center">

      {/* Top Hero / Banner */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold animate-fadeInDown">
          Gallery
        </h1>
        <p className="text-gray-300 text-lg md:text-xl animate-fadeIn delay-100">
          A glimpse into moments, projects, and events featuring Ibrahim Amin.
        </p>
      </section>

      {/* Image Grid */}
      <section className="max-w-6xl w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => setSelectedImg(src)}
            className="relative w-full h-64 md:h-72 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 hover:shadow-purple-500 transition-all duration-500 cursor-pointer animate-fadeIn"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-bold text-lg md:text-xl drop-shadow-lg">
                View
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImg}
              alt="Selected"
              fill
              className="object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

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
