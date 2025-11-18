"use client";

import { useState } from "react";

type BookingData = {
  fullName: string;
  email: string;
  phone?: string;
  date: string;
  time: string;
  partySize: number;
  notes?: string;
};


export default function Booking({
  onSubmit, initial
} : {
  onSubmit?: (data: BookingData) => Promise<void> | void;
  initial?: Partial<BookingData>;
}) {
  const [form, setForm] = useState<BookingData>({
    fullName: initial?.fullName ?? "",
    email: initial?.email ?? "",
    phone: initial?.phone ?? "",
    date: initial?.date ?? "",
    time: initial?.time ?? "",
    partySize: initial?.partySize ?? 1,
    notes: initial?.notes ?? "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = 
  (key: keyof BookingData) =>
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = 
      e.target.type === "number" ? Number(e.target.value) : e.target.value;
    setForm((prev) => ({ ...prev, [key]: value}));
  };

  const validate = (): string | null => {
    if (!form.fullName.trim()) return "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Enter a valid email.";
    if (!form.date) return "Please choose a date.";
    if (!form.time) return "Please choose a time.";
    if (form.partySize < 1) return "Party size must be at least 1";
    return null
  };

  const simulateNetwork = (data: BookingData) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("Booking submitted (POC):", data);
        resolve();
      }, 900);
    });

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setSuccessMsg(null);
    setErrorMsg(null);

    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(form);
      } else {
        await simulateNetwork(form);
      }
      setSuccessMsg("Booking request submitted - this is a proof-of-concept.");
      setForm((f) => ({ ...f, fullName: "", email: "", phone: "", notes: ""}));
    } catch {
      setErrorMsg("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form 
        onSubmit={submit}
        className="max-w-xl w-full bg-(--color-card)/70 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/10"

        aria-labelledby="booking-form-title"
      >
        <h2 id="booking-form-title" className="text-lg font-semibold mb-3">
          Booking (Proof of Concept)
        </h2>

        <p className="text-sm text-gray-300 mb-4">
          This is a placeholder booking form for the client - it simulates submit and validation.
        </p>

        {errorMsg && (
          <div role="alert" className="mb-3 test-sm text-red-700">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div role="status" className="mb-3 text-sm text-green-700">
            {successMsg}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="flex flex-col">
            <span className="text-xs font-medium mb-1"> Full name</span>
            <input 
              type="text"
              value={form.fullName}
              onChange={handleChange("fullName")}
              className="rounded-lg p-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Bill Rider"
              required
              aria-required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs font-medium mb-1">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              className="rounded-lg p-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="you@example.com"
              required
              aria-required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs font-medium mb-1">Phone (optional)</span>
            <input
              type="tel"
              value={form.phone}
              onChange={handleChange("phone")}
              className="rounded-lg p-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="(555) 555-5555"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs font-medium mb-1">Party size</span>
            <input
              type="number"
              value={form.partySize}
              onChange={handleChange("partySize")}
              min={1}
              className="rounded-lg p-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Party size"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs font-medium mb-1">Date</span>
            <input
              type="date"
              value={form.date}
              onChange={handleChange("date")}
              className="rounded-lg p-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs font-medium mb-1">Time</span>
            <input
              type="time"
              value={form.time}
              onChange={handleChange("time")}
              className="rounded-lg p-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </label>
        </div>

        <label className="flex flex-col mt-3">
          <span className="text-xs font-medium mb-1">Notes / Special requests</span>
          <textarea
            value={form.notes}
            onChange={handleChange("notes")}
            rows={3}
            className="rounded-lg p-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Allergies, accessibility needs, project links, etc."
          />
        </label>

        <div className="mt-4 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => {
              setForm({
                fullName: "",
                email: "",
                phone: "",
                date: "",
                time: "",
                partySize: 1,
                notes: "",
              });
              setErrorMsg(null);
              setSuccessMsg(null);
            }}
            className="px-3 py-2 rounded-md text-sm border hover:bg-gray-50"
          >
            Reset
          </button>

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-md text-sm font-medium bg-linear-to-r from-blue-500 to-indigo-500 text-white disabled:opacity-60 disabled:cursor-not-allowed"
            aria-busy={loading}
          >
            {loading ? "Submitting…" : "Request Booking"}
          </button>
        </div>

        <div className="mt-3 text-xs text-gray-200">
          <strong>POC notes:</strong> Wire this to the client&apos;s booking API by replacing the
          `onSubmit` prop or hooking into your service call inside `submit()`.
        </div>
      </form>
    </>
  );
}

