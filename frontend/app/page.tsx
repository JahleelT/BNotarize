import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">

        <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-100 overflow-hidden">

          <Image
            src="/notary_logo.png"
            alt="Good Signs Notary Logo"
            width={400}
            height={400}
            className="absolute opacity-10 -z-10 pointer-events-none object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <h1 className="text-4xl font-bold">Welcome to Good Signs Notary Services</h1>
        </section>

        <section id="about" className="w-full max-w-4xl py-16">
          <About />
        </section>

        <section id="services" className="w-full max-w-4xl py-16">
          <Services />
        </section>

        <section id="booking" className="w-full max-w-4xl py-16">
          <Booking />
        </section>

      </main>

      <Footer />
    </>
  );
}
