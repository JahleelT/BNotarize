import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 md:px-12 lg:px-20 bg-(--color-bg)"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <h2 className="text-3xl font-bold text-(--color-text) mb-2">
          About Good Signs Notary
        </h2>
        <div className="w-16 h-1 bg-(--color-accent) mb-10" />

        {/* --- FIRST ROW --- */}
        {/* Image + first paragraph only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Photo */}
          <div className="relative w-full h-72 rounded-xl overflow-hidden bg-(--color-card) border border-white/10 shadow-lg">
            <Image
              src="/bill_photo.png"
              alt="Client Photo"
              fill
              className="object-cover"
            />
          </div>

          {/* First paragraph (aligns with image) */}
          <p className="text-gray-300 text-2xl leading-relaxed">
            Good Signs Notary Services is committed to delivering reliable,
            accessible, and professional notarization throughout the region.
            From general acknowledgments to loan documents, mobile services,
            and remote online notarizations, every appointment is handled with
            precision and care.
          </p>

        </div>

        {/* --- FULL-WIDTH PARAGRAPHS BELOW --- */}
        <div className="mt-10 space-y-6">
          <p className="text-gray-300 text-2xl leading-relaxed">
            Built on principles of clarity, punctuality, and trust, Good Signs
            Notary ensures a seamless experience from start to finish.
          </p>

          <p className="text-gray-300 text-2xl leading-relaxed">
            Your documents matter — and they’re treated with the utmost 
            integrity and attention to detail. Whether you need quick
            assistance or a guided signing session, we make sure you feel
            supported, informed, and confident every step of the way.
          </p>
        </div>

      </div>
    </section>
  );
}
