import redBack from "../assets/red-back.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import arrow from "../assets/arrow.png";

export default function Highlight() {
  return (
    <section
      className="py-24 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${redBack})` }}
    >
      {/* Semi-transparent overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left text */}
        <div>
          <p className="text-red-200 text-xs font-bold uppercase tracking-widest mb-3">
            Thanks for Watch Video
          </p>
          <h2 className="font-heading text-4xl md:text-3xl font-black text-white leading-tight mb-6">
            Highlighting Its<br />Unique Features and<br />Experiences
          </h2>

          <div className="flex items-center gap-5 mt-8">
            {/* 14 Years badge */}
            <div
              className="px-5 py-3 rounded-xl text-center"
              style={{ backgroundColor: "#FFC224" }}
            >
              <p className="text-xl font-black text-gray-900">14 Years</p>
              <p className="text-xs font-bold text-gray-700">Experience</p>
              <div className="flex justify-center gap-0.5 mt-1">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-xs text-gray-800">{s}</span>
                ))}
              </div>
            </div>

            {/* Watch video button */}
            <div className="flex items-center gap-3">
              <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                <span className="text-xl ml-1" style={{ color: "#E8192C" }}>▶</span>
              </button>
              <span className="text-white font-semibold text-sm">Watch Video</span>
            </div>
          </div>
        </div>

        {/* Right — food image circles with arrow */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              {[
                {
                  src: f1,
                  size: "w-32 h-32",
                },
                {
                  src: f2,
                  size: "w-32 h-32",
                },
                {
                  src: f3,
                  size: "w-32 h-32",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-full shadow-xl border-4 ${item.size} flex items-center justify-center ${i === 2 ? "col-span-2 mx-auto" : ""}`}
                  style={{ borderColor: "#FFC224" }}
                >
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Arrow and text positioned to the right of f3 */}
            <div className="absolute -right-8 bottom-0 flex flex-col justify-center items-center gap-2">
              <img src={arrow} alt="Arrow" className="w-12 h-12 object-contain" />
              <p className="text-white text-xs font-semibold text-center whitespace-nowrap">Great Hospitality<br />and Entertainment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
