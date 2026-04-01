import { useState } from "react";

export default function Reservation() {
  const [form, setForm] = useState({
    guests: "",
    fullName: "",
    phone: "",
    date: "",
    time: "",
  });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="py-15 mb-20 bg-[#ffff]  ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — contact info */}
          <div>
            <span className="section-tag">Get in Touch</span>
            <h2 className="section-title mb-8 font-heading">
              Reservation Table &amp; Enjoy<br />Dining Table
            </h2>

            <div className="space-y-5">
              {[
                {
                  icon: "📞",
                  color: "#FFC222",
                  label: "For booking",
                  value: "+1 (865) 398-6 68",
                },
                {
                  icon: "✉️",
                  // color: "#E8192C",
                  color: "#FFC222",
                  label: "For private dining",
                  value: "info@foodio.com",
                },
                {
                  icon: "📍",
                  // color: "#4ade80",
                  color: "#FFC222",
                  label: "Location",
                  value: "New Street Town 5193a (US)",
                },
              ].map(({ icon, color, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 text-lg"
                    style={{ backgroundColor: color }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold">{label}</p>
                    <p className="text-sm font-bold text-gray-900">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — reservation form */}
          <div className="  w-full max-w-md lg:ml-auto lg:mt-20 md:mt-20 ">
            <div className="mb-5">
              <input
                name="guests"
                type="number"
                placeholder="No of Guest"
                value={form.guests}
                onChange={handle}
                // className="w-full border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-primary"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm bg-transparent outline-none focus:border-red-400 transition"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handle}
                // className="border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-primary"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm bg-transparent outline-none focus:border-red-400 transition"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone No"
                value={form.phone}
                onChange={handle}
                // className="border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-primary"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm bg-transparent outline-none focus:border-red-400 transition"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handle}
                // className="border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-primary"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm bg-transparent outline-none focus:border-red-400 transition"
              />
              <input
                name="time"
                type="time"
                value={form.time}
                onChange={handle}
                // className="border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-primary"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm bg-transparent outline-none focus:border-red-400 transition"
              />
            </div>

            <div className="mt-4 flex justify-center lg:justify-end">
  <div className="border-2 border-red-500 rounded-lg p-[2px] inline-block">
    <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-sm relative -translate-x-1">
      Book Now
    </button>
  </div>
</div>
            {/* <button className="btn-primary w-full py-3.5 rounded-lg font-bold text-sm">
              Book Now
            </button> */}

          </div>

        </div>
      </div>
    </section>
  );
}
