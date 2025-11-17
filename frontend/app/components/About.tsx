"use client";

import Image from "next/image";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-10">
            About
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/bill_photo.png"
                  alt="Photo of William Rider"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* RIGHT SIDE - TITLE + MAIN TEXT */}
            <div className="md:col-span-2 flex flex-col space-y-4">
              <h3 className="text-2xl font-semibold">
                Meet Your Notary
              </h3>

              <p className="text-gray-700 leading-relaxed">
                At Good Signs Notary Services, we take pride in providing reliable, professional, and convenient notarization services. Whether in-person or mobile, we ensure every client receives thorough attention and a smooth experience.
              </p>

              <p className="text-gray-700 leading-relaxed">
                With a focus on accuracy and personal connection, it is my goal to bring a warm trustworthy approach to every signing - from simple affidavits to complex loan documents.
              </p>

              {/* Extra content naturally flows below image on small screens */}
              <p className="text-gray-700 leading-relaxed">
                This business combines efficiency with care, ensuring that clietns always feel informed, supported, and confident throughout the entire notarization process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}