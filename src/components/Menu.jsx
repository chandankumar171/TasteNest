import { menuData } from "../data/menuData";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-[#F5F8FD]">
      {/* <div className="max-w-7xl mx-auto px-6"> */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Delicious Menus ── */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-black text-gray-900 mb-2">Delicious Menus</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#FFC224" }} />
        </div>

        {/* Three-column menu layout (Breakfast | Lunch | Dinner) */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 justify-center mt-20">
          {Object.entries(menuData).map(([category, items]) => (
            <div
              key={category}

          className={`
  bg-white rounded-2xl p-6
  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
  hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
  transition-all duration-300

  ${
    category === "Lunch"
      ? "lg:-mt-8 lg:-mb-8 lg:scale-105 lg:z-10"
      : ""
  }
`}
              
              // className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6"
//               className={`
//   bg-white rounded-2xl p-6
//   shadow-[0_10px_30px_rgba(0,0,0,0.08)]
//   hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
//   transition-all duration-300 
//   ${category === "Lunch" ? "lg:-mt-8 -mb-8 scale-105 z-10" : ""}
// `}
            >
              {/* <h3 className="font-heading text-xl font-black text-gray-900 mb-5 pb-3 border-b border-gray-100">
                {category}
              </h3> */}
              {/* <h3 className="font-heading text-xl font-black text-gray-900 mb-3">
  {category}
</h3>

<div style={{ width: "2rem", height: "3px", backgroundColor: "#FFC224", borderRadius: "full", marginBottom: "1rem" }}></div> */}
<div className="mb-5">
  <h3 className="font-heading text-xl font-black text-gray-900 leading-none">
    {category}
  </h3>
  <div style={{ width: "2rem", height: "3px", backgroundColor: "#FFC224", borderRadius: "full", marginBottom: "0.5rem" }}></div>
</div>
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-bold text-sm text-gray-900">{item.name}</p>
                      <span className="font-black text-sm ml-4 shrink-0" style={{ color: "#E8192C" }}>
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── We Provide Best Services ── */}
        {/* <div className="mt-20"> */}
        <div className="mt-20 md:mt-28 lg:mt-32">
          {/* Top Section: Title & Description */}
          <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
            {/* Left - Heading */}
            <div className="md:w-1/2">
              <p className="text-red-500 text-sm font-semibold mb-2">BEST SOLUTIONS</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight font-heading">
                We Provide Best<br />Services
              </h2>
            </div>

            {/* Right - Description */}
            <div className="md:w-1/2">
              <p className="text-sm text-gray-500 leading-relaxed">
                Nil quam nestibulum ac quam nec odio elementu aucan ligula. Orci varius natoque pena tibus et maueri monte nascetu ridiculus mus nellanteque um ac quam nec odio rbine.
              </p>
            </div>
          </div>

          {/* Bottom Section: 4 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-2">
            <div className="group hover:scale-105 transition-transform max-w-xs mx-auto">
              <img src={service1} alt="Afternoon Tea" className="w-full h-auto" />
            </div>
            <div className="group hover:scale-105 transition-transform max-w-xs mx-auto">
              <img src={service2} alt="Takeaway & Delivery" className="w-full h-auto" />
            </div>
            <div className="group hover:scale-105 transition-transform max-w-xs mx-auto">
              <img src={service3} alt="Wine & Cocktails" className="w-full h-auto" />
            </div>
            <div className="group hover:scale-105 transition-transform max-w-xs mx-auto">
              <img src={service4} alt="Alfresco Dining" className="w-full h-auto" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
