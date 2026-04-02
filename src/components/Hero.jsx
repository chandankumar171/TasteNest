import { useState } from "react";
import truckIcon from "../assets/truck.png"; // change name/path if needed

import heroBg from "../assets/hero-bg.png";
import dishLeft from "../assets/dish-left.png";
import dishRight from "../assets/dish-right.png";

export default function Hero() {
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden pt-[80px] min-h-screen md:min-h-[85vh] lg:min-h-screen "
    // style={{ minHeight: "100svh", paddingTop: "80px" }}
    >
      {/* BACKGROUND */}
      <img
        src={heroBg}
        alt=""
        // className="absolute inset-0 w-full h-full object-cover z-0"
        className="absolute inset-0 w-full h-full object-cover md:object-top lg:object-cover z-0"
      // className="absolute inset-0 w-full h-full object-cover md:object-[center_top_-1580px] lg:object-cover z-0"
      />

      {/* LEFT-CONTENT */}

      <div className=" relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex items-center min-h-[calc(100vh-80px)] md:min-h-[70vh]  pl-8 sm:pl-12 lg:pl-24 pr-6">

        <div className="w-full lg:w-1/2 space-y-6">

          {/* HEADING */}
          <h1 className="font-heading text-gray-900 leading-[1.2] tracking-tight
text-[24px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-semibold">

            <span className="block">
              Best Food for
            </span>

            <span className="block mt-2">
              <span className="inline-block py-1.5" style={{ backgroundColor: "#FFD40D", padding: "0.5rem 1rem", borderRadius: "3rem", marginTop: "0.5rem" }}>
                Best Restaurants
              </span>
            </span>

          </h1>

          {/* SUBTEXT */}
          <p className="font-body text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-400">
            Arriving from Paris in 1986
          </p>

          {/* FORM */}
          <div className="w-full max-w-md space-y-3">

            {/* INPUT */}
            <input
              type="number"
              placeholder="No of Guest"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-400"
            />

            {/* DATE + TIME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="date"
                placeholder="Date"
                value={date}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                onChange={(e) => setDate(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm"
              />
              <input
                type="time"
                placeholder="Time"
                value={time}
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                onChange={(e) => setTime(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm"
              />
            </div>

            {/* BUTTON */}
            <div className="mt-4 inline-block border-2 border-red-500 rounded-lg p-[2px] w-0.5rem">

              <button className="bg-red-500 text-white px-6 sm:px-8 py-3 rounded-lg font-bold text-sm sm:text-base whitespace-nowrap relative -ml-[4px] mt-[2px] -translate-x-2">
                Reserve a Table
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* FLOATING IMAGES (NO CONTAINER) */}

      {/* BIG LEFT IMAGE */}

      <div
        className="absolute hidden lg:block"
        style={{
          top: "20px",
          right: "240px",
          width: "400px",
          height: "550px",
          borderRadius: "160px",
          overflow: "hidden",
          zIndex: 5,
        }}
      >
        <img
          src={dishLeft}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* SMALL RIGHT IMAGE */}
      <div
        className="absolute hidden lg:block"
        style={{
          bottom: "1px",
          top: "140px",
          right: "200px",
          width: "400px",
          height: "550px",
          borderRadius: "140px",
          overflow: "hidden",
          zIndex: 4,
        }}
      >
        <img
          src={dishRight}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* DELIVERY BADGE */}
       <div
        className="absolute hidden lg:flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-lg"
        style={{
          top: "150px",
          right: "250px",
          zIndex: 10,
        }}
      >
        <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center">

          <img
            src={truckIcon}
            alt="delivery"
            className="w-10 h-9 object-contain"
          />
        </div>
        <div className="text-xs font-bold leading-tight">
          <p><b>Free Delivery 7</b></p>
          <p>Days a Week</p>
        </div>
      </div> 
    </section>
  );
}