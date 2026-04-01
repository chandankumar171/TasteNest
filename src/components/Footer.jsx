import footerBg from "../assets/footer.png";
import logo from "../assets/whitelogo.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#f5f5f5] pt-24 pb-12 overflow-hidden">
      {/* BACKGROUND DECORATION */}
<img
  src={footerBg}
  alt="footer bg"
  className="absolute bottom-0 left-0 w-full opacity-80 pointer-events-none select-none z-0"
/>
      {/* CONTENT ABOVE BACKGROUND */}
      <div className="relative z-10 max-w-5xl mx-auto px-8">

        {/* TOP SECTION */}
        {/* <div className="grid md:grid-cols-4 gap-12 justify-items-center md:justify-items-start"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 justify-items-center lg:justify-items-start">

          {/* RED CARD */}
          <div className="bg-red-500 text-white rounded-2xl p-6 shadow-md w-full max-w-full sm:max-w-[320px] h-[220px] flex flex-col justify-between items-start">

  {/* TOP */}
  <div className="w-full">
    
    {/* LOGO (TOP LEFT) */}
    <img
      src={logo}
      alt="TasteNest"
      className="h-12 mb-1"
    />

    {/* TEXT (LEFT ALIGNED) */}
    <p className="text-sm leading-5 text-left">
      Tuesday – Saturday <br />
      12:00pm – 23:00pm <br />
      Closed on Sunday
    </p>
  </div>

  {/* BOTTOM */}
  <div className="w-full">
    <div className="text-yellow-300 text-sm">★★★★★</div>
    <p className="text-xs mt-1">5 star rated on TripAdvisor</p>
  </div>

</div>

          {/* ABOUT */}
          <div className="text-center md:text-left">
            <h4 className="font-black text-gray-900 mb-3 border-b-4 border-[#FFC224] inline-block pb-1">
              About
            </h4>
            <ul className="space-y-3 text-sm text-gray-500 mt-4">
              {["Foodio One", "Special Dish", "Reservation", "Contact"].map((item) => (
                <li key={item} className="hover:text-black cursor-pointer">
                 › {item}
                </li>
              ))}
            </ul>
          </div>

          {/* MENU */}
          <div className="text-center md:text-left">
            <h4 className="font-black text-gray-900 mb-3 border-b-4 border-[#FFC224] inline-block pb-1">
              Menu
            </h4>
            <ul className="space-y-3 text-sm text-gray-500 mt-4">
              {["Steaks", "Burgers", "Cocktails", "Bar B Q", "Desserts"].map((item) => (
                <li key={item} className="hover:text-black cursor-pointer">
                  › {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="text-center md:text-left w-full max-w-full sm:max-w-[280px]">
            <h4 className="font-black text-gray-900 mb-3 border-b-4 border-[#FFC224] inline-block pb-1">
              Newsletter
            </h4>

            <p className="text-sm text-gray-500 mb-4 mt-4 ">
              Get recent news and updates.
            </p>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white border border-gray-200 rounded px-4 py-2 text-sm mb-3 outline-none"
            />

            {/* <div className="mt-4 inline-block border-2 border-red-500 rounded-lg p-[2px] w-0.5rem">
  
  <button className="bg-red-500 text-white px-6 sm:px-8 py-3 rounded-lg font-bold text-sm sm:text-base whitespace-nowrap relative -ml-[4px] mt-[2px] -translate-x-2">
    Reserve a Table
  </button>

</div> */}

<div className="mt-4 flex justify-center lg:justify-start">
  <div className="border-2 border-red-500 rounded-lg p-[2px] inline-block mb-3">
    <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-sm relative -translate-x-2 mb-0.5">
      Subscribe
    </button> 
    
  </div>
</div>

            {/* <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 w-full md:w-auto">
              Subscribe
            </button> */}
          </div>
        </div>

        {/* ✅ VISIBLE DIVIDER */}
        {/* <div className="relative z-10 mt-16 mb-10">
          <div className="h-[4px] w-full bg-[#FFC224] rounded"></div>
        </div> */}
        <div className="relative z-10 mt-12 sm:mt-16 mb-8 sm:mb-10 flex justify-center">
  <div className="h-[0.2rem] w-[90%] sm:w-[85%] md:w-[70%] lg:w-full max-w-4xl bg-[#FFD40D] rounded-full"></div>
</div>

        {/* BOTTOM BAR */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-gray-500 gap-4"> */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-black gap-4 px-0 md:px-20 lg:px-0">
          <p>
            {/* © 2026{" "} */}
            <span className="text-red-500 font-semibold">© 2026{" "}TasteNest</span> <b> | All showewhite Themes </b>
          </p>

          {/* <div className="flex gap-6"> */}
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center md:justify-start underline underline-offset-4">
            {["Facebook", "Instagram", "Twitter"].map((s) => (
              <span key={s} className="cursor-pointer hover:text-black-700">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold shadow-lg hover:scale-110 transition"
      >
        TOP
      </button>
    </footer>
  );
}