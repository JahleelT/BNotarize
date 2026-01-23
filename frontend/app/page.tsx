import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">

        {/* --- HERO SECTION --- */}
        <section className="relative w-full h-[60vh] flex items-center justify-center bg-(--color-bg-soft) overflow-hidden">

          {/* FAINT CENTER LOGO */}
          <Image
            src="/no_bg_logo.png"
            alt="Good Signs Notary Logo"
            width={500}
            height={500}
            className="absolute opacity-40 z-20 object-contain"
          />

          {/* TITLE */}
          <h1 className="text-4xl font-bold z-30 relative">
            Good Signs Notary Services
          </h1>
        </section>

        {/* ABOUT */}
        <section id="about" className="w-full max-w-4xl py-16">
          <About />
        </section>

        {/* SERVICES */}
        <section id="services" className="w-full max-w-4xl py-16">
          <Services />
        </section>

        {/* BOOKING */}
        <section id="booking" className="w-full max-w-4xl py-16">
          <Booking />
        </section>

      </main>

      <Footer />
    </>
  );
}
