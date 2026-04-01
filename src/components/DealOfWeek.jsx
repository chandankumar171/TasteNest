import { useState, useEffect } from "react";
import burgerImg from "../assets/your-image.png"; // use your local image
import dianing1 from "../assets/dianing1.png";
import dianing2 from "../assets/dianing2.png";
import dianing3 from "../assets/dianing3.png";
import dianing4 from "../assets/dianing4.png";

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

export default function DealOfWeek() {
  const { days, hours, mins, secs } = useCountdown("2026-04-07T00:00:00");

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Deal of the Week ── */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-2 font-heading">
            Deal of the Week
          </h2>
          <div className="w-28 h-1 mx-auto rounded-full" style={{ backgroundColor: "#FFC224" }} />
          
        </div>

        {/* FIXED DEAL LAYOUT (no card) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">

          {/* LEFT CONTENT */}
          <div className="max-w-lg">
            <span className="bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded mb-4 inline-block">
              SALE UP TO 7% OFF
            </span>

            <h3 className="text-4xl font-black text-gray-900 mb-4 font-heading">
              Shroom Bacon Burger
            </h3>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-6">
              <span>✔ Fresh & Tasty</span>
              <span>✔ Best in organic foods</span>
              <span>✔ 100% Fresh ingredients</span>
              <span>✔ Better for your health</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="line-through text-gray-400">$21.76</span>
              <span className="text-3xl font-black text-red-500">$11.76</span>
            </div>

            {/* <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90">
              Add to cart
            </button> */}
            <div className="mt-4  inline-block border-2 border-red-500 rounded-lg p-[2px] w-0.5rem">
  
  <button className="bg-red-500 text-white px-6 sm:px-4 py-3 rounded-lg font-bold text-sm sm:text-base whitespace-nowrap relative -ml-[4px] mt-[2px] -translate-x-2">
    Add to cart
  </button>

</div>
          </div>

          {/* RIGHT IMAGE + VERTICAL COUNTDOWN */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-3">

            {/* IMAGE */}
            <img
              src={burgerImg}
              alt="Shroom Bacon Burger"
              className="w-[280px] md:w-[350px] object-contain"
            />

            {/* COUNTDOWN (RIGHT SIDE STACKED / BOTTOM ON MOBILE) */}
            {/* <div className="flex flex-wrap md:flex-col gap-3 justify-center md:absolute md:right-[-70px]"> */}
            <div className="
  flex flex-wrap justify-center gap-3
  sm:gap-4
  md:flex-row md:justify-start md:relative md:right-0
  lg:flex-col lg:absolute lg:right-[-70px]
">
              {[
                { label: "DAYS", value: days },
                { label: "HOURS", value: hours },
                { label: "MINS", value: mins },
                { label: "SEC", value: secs },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-yellow-400 w-16 h-16 rounded-xl flex flex-col items-center justify-center shadow-md"
                  style={{ backgroundColor: "#FFD40D" }}
                >
                  <span className="font-black text-lg">
                    {String(value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-bold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Private Dining and Events ── */}
        <div className="flex justify-center bg-[#F5F8FD]">
          <div className="border-4 rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0 max-w-2xl" style={{ borderColor: "#FFC224", backgroundColor: "white" }}>

            {/* Left — image grid */}
            <div className="grid grid-cols-2 gap-2 p-3">
              <img src={dianing1} alt="Event 1" className="w-full h-28 object-cover rounded-lg" />
              <img src={dianing2} alt="Event 2" className="w-full h-28 object-cover rounded-lg" />
              <img src={dianing3} alt="Event 3" className="w-full h-28 object-cover rounded-lg" />
              <img src={dianing4} alt="Event 4" className="w-full h-28 object-cover rounded-lg" />
            </div>

            {/* Right — text */}
            <div className="p-6 flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-black text-gray-900 mb-2">
                Private Dining and Events
              </h3>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                With many private dining spaces, M is the perfect place to host your event or gathering.
              </p>
               {/* <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold hover:opacity-90 self-start mb-3 text-sm">
                Enquiry Now
              </button>  */}
              <div className="mt-4 flex justify-start lg:justify-start">
  <div className="border-2 border-red-500 rounded-lg p-[2px] inline-block mb-3">
    <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-sm relative -translate-x-2 mb-0.5">
      Enquire Now
    </button> 
    
  </div>
</div>
              
              <p className="text-xs text-gray-500">
                Booking:{" "}
                <span className="font-bold text-gray-800">
                  +44 1296 123 987
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}