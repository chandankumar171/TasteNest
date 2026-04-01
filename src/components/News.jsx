import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";

export default function News() {
  const newsItems = [news1, news2, news3];

  return (
    <section id="news" className="py-24 bg-[#ffff]">
      <div className="max-w-6xl mx-auto px-12">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-2 font-heading">
            Recent News
          </h2>
          <div className="w-28 h-1 mx-auto rounded-full" style={{ backgroundColor: "#FFC224" }} />
          {/* <div className="w-20 h-1 mx-auto rounded-full bg-yellow-400" /> */}
        </div>

        {/* Image Cards ONLY */}
        <div className="grid md:grid-cols-3 gap-12">
          {newsItems.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <img
                src={img}
                alt={`news-${i}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}