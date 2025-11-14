import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">

        <section className="w-full h-[60vh] flex items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold">Welcome to My Site</h1>
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
