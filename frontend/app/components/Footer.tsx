

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-xl font-semibold text-white">Good Signs Notary Services</h3>
          <p className="mt-3 text-sm text-gray-400">
            Reliable mobile @ remote notary services for individuals and businesses.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Email: <a href="mailto:info@goodsignsnotaryservies.com" className="text-blue-400 hover:underline">info@goodsignsnotaryservies.com</a></li>
            <li>Phone: <a href="tel:555555555" className="text-blue-400 hover:underline">(555) 555-5555</a></li>
            <li>Location: Greater Seattle Area (Mobile + Online)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul>
            <li> <a href="#services" className="hover:underline">Services</a> </li>
            <li> <a href="#booking" className="hover:underline">Book an Appointment</a> </li>
            <li> <a href="#about" className="hover:underline">About</a> </li>
          </ul>
        </div>

      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        {new Date().getFullYear()} Good Signs Notary Services. All rights reserved.
      </div>
    </footer>
  );
}