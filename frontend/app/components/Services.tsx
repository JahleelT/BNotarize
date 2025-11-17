"use client";

import { useState } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    id: "remote-notary",
    title: "Remote Online Notary",
    description: "Fully remote notarization service available via secure video session.",
    price: "$25 / notarization",
  },
  {
    id: "in-person", 
    title: "In-Person Notarization", 
    description: "Mobile notary available to meet at your preferred location.",
    price: "From $35 + travel fee",
  },
  {
    id: "loan-signing",
    title: "Loan Signing",
    description: "Professional document signing for real estate, refinancing, and loans.",
    price: "Starting at $125",
  },
];

export default function Services() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <section className="w-full py-16 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols;2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-6">
          { services.map((service) => (
            <div 
              key={service.id}
              onClick={() => setSelected(service.id)}
              className={`
                rounded-2xl p-6 border cursor-pointer transition-all
                ${selected === service.id
                  ? "border-blue-600 shadow-lg scale-[1.02]"
                  : "border-gray-300 hover:border-blue-500"}  
              `}
            >
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="font-semibold text-blue-600">{service.price}</p>
            </div>
          ))}
        </div>

        {selected && (
          <div className="mt-8 text-center">
            <button
              className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Book This Service
            </button>
          </div>
        )}
      </section>
    </>
  );
}