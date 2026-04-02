import chef from "../assets/chef.png";
import person from "../assets/person.png";
import steak from "../assets/steak.png";
import circleText from "../assets/circle-text.png";
import dish from "../assets/dish.png";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const About = () => {
  return (
    <section className="bg-[#ffffff] py-16 md:py-20 px-6 md:px-10 lg:px-16 mt-0">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* TOP SECTION */}
      {/* <div className="grid md:grid-cols-3 gap-10 items-center"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
  <img
    src={chef}
    alt="chef"
    className="w-[300px] h-[420px] object-cover shadow-lg rounded-[200px]"
  />
</div>

        {/* Center Content */}
        {/* <div className="text-center"> */}
        <div className="text-center md:text-left">
          <p className="text-red-500 text-sm font-semibold mb-2"><b>
            WELCOME TO FOODIO
            </b>
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Feel The Taste <br /> of Foods
          </h2>

          <p className="text-gray-500 text-sm mb-4">
            Nor again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally circumstances occur.
          </p>

          <p className="text-sm font-semibold">
            Monday to Friday - 11:30 To 2:00
          </p>

          <p className="font-bold text-black mt-1"> <u>
            +44 1298 123 987
            </u>
          </p>
        </div>

        {/* Right Image + Badge */}
          {/* <div className="relative flex flex-col items-center justify-center ">      */}
          <div className="flex flex-col items-center justify-center w-full md:col-span-2 lg:col-span-1"> 
         
          {/* <div className="flex justify-center"> */}
          {/* <div className="flex justify-center w-full"> */}
          {/* <div className="flex flex-col md:flex-row items-center justify-center gap-18 w-full"> */}
          <div className="flex flex-col md:flex-row items-center md:justify-between justify-center gap-8 w-full md:px-20 lg:justify-center lg:gap-8 lg:px-0">
          <img
            src={person}
            alt="person"
            className="w-[240px] h-[160px] object-cover rounded-[100px] shadow-lg mb-8"
            
          />
          

          {/* Circle Text Badge with Image Inside */}
           {/* <div className="relative w-32 h-32 flex items-center justify-center ">  */}
           <div className="relative w-32 h-32 flex items-center justify-center overflow-visible">
            <img
              src={circleText}
              alt="FOODIO RESTAURANT"
              className="w-32 h-32 object-contain absolute animate-spin-slow z-0"
            />
            <img
              src={dish}
              alt="dish"
              className="w-24 h-24 lg:w-20 lg:h-20 object-cover rounded-full shadow-lg relative z-10"
            />
          </div> 
          </div>
      </div>
      </div>


      {/* MIDDLE SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-20">

        {/* Left - Heading */}
        <div className="md:w-1/4 text-center md:text-left  ">
          <h2 className="text-4xl md:text-3xl font-black leading-tight text-gray-900 font-heading ">
            Good Food <br /> Steak & Great <br /> Restaurant
          </h2>
        </div>

        {/* Center - Image with Badge */}
        <div className="relative w-80 h-80 flex items-center justify-center flex-shrink-0">
          {/* Main Food Image */}
          <img
            src={steak}
            alt="food"
            className="w-80 h-80 object-cover "
          />

          {/* Discount Badge - Overlaid on Image */}
          <div className="absolute top-7 left-2 w-24 h-24 rounded-full flex flex-col items-center justify-center text-xs font-bold shadow-lg z-10 text-black" style={{ backgroundColor: "#FFD40D", boxShadow: "inset 0 0 0 2px black" }}>
            UPTO <br />
            <span className="text-2xl">20%</span>
            <div className="text-xs">DISCOUNT</div>
          </div>
        </div>

        {/* Right - Features and Button */}
        <div className="md:w-1/4">
          {/* Features */}
          <div className="text-left space-y-3 text-sm mb-6">
            <p className="flex items-center gap-2">
              <span className="text-green-500 font-bold">✔</span><b> Quality foods natural gradient</b>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-500 font-bold">✔</span> <b>Award-winning Restaurant</b>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-500 font-bold">✔</span> <b>Healthy Food</b>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-500 font-bold">✔</span> <b>Individually styled bedrooms</b>
            </p>
          </div>

          {/* Button */}
          <div className="mt-4 flex justify-center lg:justify-start">
  
  <div className="inline-block border-2 border-red-500 rounded-lg p-[2px]">
    
    <button className="bg-red-500 text-white px-6 sm:px-8 py-3 rounded-lg font-bold text-sm sm:text-base whitespace-nowrap relative -ml-[4px] mt-[2px] -translate-x-2">
      Reserve a Table
    </button>

  </div>

</div>


        </div>

      </div>

      {/* SPONSORS */}
      <div className="mt-20 text-center">
        <p className="text-sm font-bold mb-6">
          HIGHLY TRUSTED SPONSOR
        </p>

        <div className="flex flex-wrap justify-center gap-6 items-center">

          <img src={logo1} alt="img1" className="h-20" />
          <img src={logo2} alt="img2" className="h-20" />
          <img src={logo3} alt="img3" className="h-20" />
          <img src={logo4} alt="img4" className="h-20" />
          <img src={logo5} alt="img5" className="h-20" />
          <img src={logo6} alt="img6" className="h-20" />

        </div>
      </div>
</div>
    </section>
  );
};

export default About;
