import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import DealOfWeek from "./components/DealOfWeek";
import Highlight from "./components/Highlight";
import News from "./components/News";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <DealOfWeek />
      <Highlight />
      <News />
      <Reservation />
      <Footer />
    </div>
  );
}
