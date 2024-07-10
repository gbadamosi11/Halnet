import logo from "./assets/logo.png";
import bg from "./assets/bbg.png";
import back from "./assets/backcover.svg";
import social from "./assets/socials.svg";
import handle from "./assets/handles.svg";
import side from "./assets/Group 4.svg";
import a from "./assets/a.svg";
import b from "./assets/b.svg";
import c from "./assets/c.svg";
import d from "./assets/d.svg";
import e from "./assets/e.svg";
import f from "./assets/f.svg";
import r1 from "./assets/r1.svg";
import r2 from "./assets/r2.svg";
import r3 from "./assets/r3.svg";
import r4 from "./assets/r4.svg";
import g1 from "./assets/g1.svg";
import g2 from "./assets/g2.svg";
import g3 from "./assets/g3.svg";
import g4 from "./assets/g4.svg";
import g5 from "./assets/g5.svg";
import g6 from "./assets/g6.svg";
import f1 from "./assets/f1.svg";
import f2 from "./assets/f2.svg";
import f3 from "./assets/f3.svg";
import f4 from "./assets/f4.svg";
import f5 from "./assets/f5.svg";
import f6 from "./assets/f6.svg";
import f7 from "./assets/f7.svg";
import f8 from "./assets/f8.svg";
import burger from "./assets/burger.svg";
import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full overflow-x-hidden">
      <header
        className="App-header w-auto md:h-[500px] bg-cover bg-center text-white "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <nav className="flex mx-auto flex-1 w-auto justify-between py-5 px-10">
          <div className="mt-[15px] flex justify-between w-full">
            <img src={logo} alt="logo" />
            <button onClick={() => setToggle(!toggle)}>
              <img
                src={burger}
                alt="burger"
                className="md:hidden cursor-pointer "
              />
            </button>
          </div>

          <ul className="text-gray-400 gap-20 align-middle p-5 w-full ml-[50px] hidden md:flex ">
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
          <button className="h-[45px] w-[500px] bg-[#F6F6FA] text-[#A7A7A7] hidden md:block">
            Get your quotation
          </button>
        </nav>
        {toggle && (
          <div className="w-full flex flex-col space-y-5 ">
            <button className="hover:font-bold w-full p-2 bg-transparent hover:bg-[#FF4A1C] h-[50px]">
              about us
            </button>
            <button className="hover:font-bold w-full p-2 bg-transparent hover:bg-[#FF4A1C] h-[50px]">
              services
            </button>
            <button className="hover:font-bold w-full p-2 bg-transparent hover:bg-[#FF4A1C] h-[50px]">
              contact us
            </button>
          </div>
        )}

        <div className="p-5 space-y-5 mx-auto mt-[80px] md:ml-[200px]">
          <h1 className="font-bold text-3xl w-[400px]">
            Pioneering Excellence in telecoms infrastructure and fiber optice
          </h1>
          <p className="text-[12px] w-[380px] text-gray-600">
            experience unmatched flexibility and cutting-edge soultions designed
            to meet your unique telecom and fibre optic needs
          </p>
          <div className="block  md:flex ">
            <button className="p-2 bg-[#FF4A1C] w-full md:w-[180px]">
              get your quotation
            </button>
            <button className="p-2 bg-white text-black w-full md:ml-5 md:w-[180px] mt-3 md:mt-0">
              request service
            </button>
          </div>
        </div>
      </header>
      <section className="w-full p-5 text-center space-y-3">
        <h2 className="font-bold mt-10">
          Trusted by reputed numbers of companies{" "}
        </h2>
        <div className="grid grid-cols-2 w-auto md:w-[600px] mx-auto mb-10 md:grid-cols-3">
          <img src={a} alt="a" className="border-1 w-full h-full" />
          <img src={b} alt="b" className="border-1 w-full h-full" />
          <img src={c} alt="c" className="border-1 w-full h-full" />
          <img src={d} alt="d" className="border-1 w-full h-full" />
          <img src={e} alt="e" className="border-1 w-full h-full" />
          <img src={f} alt="f" className="border-1  w-full h-full" />
        </div>
      </section>
      <section className="w-full block md:flex justify-between ">
        <div className="md:w-[600px] w-auto">
          <img src={side} alt="side" className="w-full " />
        </div>
        <div className="w-[500px] p-5 mx-auto my-auto">
          <div className="md:space-y-3 space-y-5">
            <h3 className="font-bold text-2xl">
              We are leading provider in telcom infrastructure and services
              across the country and beyound
            </h3>
            <p className="text-gray-600 text-[12px]">
              HALNET is a premier provider of telecom infrastructure services,
              specializing in civil and telecom work, particularly in fiber
              optics development. We offer comprehensive solutions including
              Fiber to the Home (FTTH), Long Haul, and Metro works. Our FTTH
              services bring high-speed internet directly to residences,
              ensuring seamless connectivity. Long Haul solutions support
              extensive data transmission across regions, vital for businesses
              and organizations. Metro works enhance urban connectivity,
              supporting economic growth. Committed to quality and reliability,
              HALNET delivers tailored solutions to meet diverse client needs,
              making us a trusted partner in the telecommunications industry.
            </p>

            <button className="p-3 bg-[#FF4A1C]">
              Download company profile
            </button>
          </div>
        </div>
      </section>
      <section className="w-full h-[500px] bg-[#0B0A14] text-white text-center p-5">
        <div className="space-y-3 w-[312px] mx-auto mt-[150px]">
          <h3 className="font-bold text-2xl ">
            We bring to you the best services for your needs
          </h3>
          <p className="text-gray-200 ">
            With our amazing services you can begin to enjoy unmatched
            experience for your telecommunication needs
          </p>
          <button className="bg-white text-black p-3">Request a quote</button>
        </div>
        <img
          src={r1}
          alt="side"
          className="hidden md:block md:relative md:top-[-75%] md:right-[-22%] md:z-10 md:w-[200px] md:rotate-[-10deg]"
        />
        <img
          src={r2}
          alt="side"
          className="hidden md:block md:relative md:top-[-110%] md:left-[64%] md:z-10 md:w-[200px] md:rotate-[10deg]"
        />
        <img
          src={r3}
          alt="side"
          className="hidden md:block md:relative md:top-[-75%] md:left-[22%] md:z-10 w-[200px] md:rotate-[10deg]"
        />

        <img
          src={r4}
          alt="side"
          className="hidden md:block md:relative md:top-[-110%] md:left-[64%] md:z-10 w-[200px] md:rotate-[-15deg]"
        />

        <button className=" hidden p-5 mx-auto mt-5 bg-gray-800 md:mx-0 md:relative md:top-[-103%] md:mt-0 ">
          We also sell and supply the following
        </button>
      </section>
      <div className="bg-black w-full text-center">
        <img src={r1} alt="side" className="block md:hidden mx-auto" />
        <img src={r2} alt="side" className="block md:hidden mt-5 mx-auto" />
        <img src={r3} alt="side" className="block md:hidden mt-5 mx-auto" />

        <img src={r4} alt="side" className="block md:hidden mt-5 mx-auto" />
      </div>
      <section className="w-full bg-[#0B0A14] p-20 text-center">
        <h3 className="block text-white font-bold text-[18px] mt-20 mb-10 ">
          We also sell and supply the following
        </h3>
        <div className=" gap-5 md:space-y-0 grid md:grid-cols-3 w-full md:w-[800px] mx-auto grid-cols-1 ">
          <img src={g1} alt="side" />
          <img src={g2} alt="side" />
          <img src={g3} alt="side" />
          <img src={g4} alt="side" />
          <img src={g5} alt="side" />
          <img src={g6} alt="side" />
        </div>
      </section>
      <section className="w-full  p-10">
        <div className="w-full flex flex-col md:justify-between md:flex-row">
          <p className="font-bold">Our selected past projects</p>
          <p className="text-gray-600">
            We have worked one these projects and much more
          </p>
        </div>
        <div className="grid gap-y-10 md:grid-cols-4 md:grid-rows-2 p-5">
          <img
            src={f1}
            alt="side"
            className="mt-5 md:mt-0 md:w-[280px] w-full"
          />
          <img
            src={f2}
            alt="side"
            className="mt-5 md:mt-0 md:w-[280px] w-full"
          />
          <img
            src={f3}
            alt="side"
            className="mt-5 md:mt-0 md:w-[280px] w-full"
          />
          <img
            src={f4}
            alt="side"
            className="mt-5 md:mt-0 md:w-[280px] w-full"
          />
          <img
            src={f5}
            alt="side"
            className="mt-5 md:mt-0 md:w-[280px] w-full"
          />
          <img
            src={f6}
            alt="side"
            className="mt-5 md:mt-0 md:w-[280px] w-full"
          />
          <img
            src={f7}
            alt="side"
            className="mt-5 md:mt-0 md:w-[280px] w-full"
          />
          <img
            src={f8}
            alt="side"
            className="mt-5 md:mt-0 md:w-[280px] w-full"
          />
        </div>
      </section>
      <section className="w-full p-5 ">
        <form className="mt-[100px] mb-[200px] ">
          <div className="mx-auto w-auto md:w-[700px] space-y-5 border-2 border-gray-200 p-5 rounded-[5px]">
            <h2 className="font-bold text-3xl">Request a Quote</h2>
            <p className="text-gray-600">
              Fusce non hendrerit ante. Curabitur in libero neque. Nulla at
              vestibulum massa. Maecenas tempus,
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-8">
              <input
                placeholder="Name"
                className="border-2 border-gray-200 p-2 focus:outline-none rounded-[5px]"
              />
              <input
                placeholder="Email"
                className="border-2 border-gray-200 p-2 focus:outline-none rounded-[5px]"
              />
              <input
                placeholder="Phone number"
                className="border-2 border-gray-200 p-2 focus:outline-none rounded-[5px]"
              />
              <input
                placeholder="Company"
                className="border-2 border-gray-200 p-2 focus:outline-none rounded-[5px]"
              />
              <input
                placeholder="Services"
                className="border-2 border-gray-200 p-2 focus:outline-none rounded-[5px]"
              />
              <input
                placeholder="Company name"
                className="border-2 border-gray-200 p-2 focus:outline-none rounded-[5px]"
              />
              <input
                placeholder="Product"
                className="border-2 border-gray-200 p-2 focus:outline-none rounded-[5px]"
              />
              <input
                placeholder="Quantity"
                className="border-2 border-gray-200 p-2 focus:outline-none rounded-[5px]"
              />
            </div>
            <textarea
              className="h-64 w-full focus:outline-none p-2 rounded-[5px] border-2 border-gray-200"
              placeholder="Additional Details"
            ></textarea>
            <button className="p-2 bg-[#FF4A1C] w-full ">Submit request</button>
          </div>
        </form>
      </section>
      <section
        className="w-full bg-cover bg-center text-white  md:space-x-10 md:flex md:justify-center p-10"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="md:w-[200px] space-y-5 p-6 md:border-r-2 border-[#E0E0E0]">
          <p className="font-bold text-[18px]">
            We are within reach. Contact us today to get any information you
            need
          </p>
          <button className="px-5 py-3 bg-gray-300 text-black">
            Contact us
          </button>
        </div>
        <div className="border-l-2 border-[#E0E0E0] md:border-0">
          <div className="space-y-5 p-6">
            <p className="font-bold text-xl">Our socials</p>
            <img src={social} alt="socials"></img>
          </div>

          <img
            src={handle}
            alt="handles"
            className=" border-white pt-5 md:pt-0 border-t-2"
          ></img>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row space-y-5 md:space-y-0 bg-slate-200 p-10 md:justify-between">
        <div className="space-y-5">
          <img src={logo} alt=""></img>
          <p>
            Fusce non hendrerit ante. Curbrilabitur in libero neque. Nulla
            abrilla
          </p>
        </div>
        <div className="space-y-5">
          <h3 className="font-bold">Fibre optics development</h3>
          <p>Civil works(Long Haul/Metro)</p>
          <p>Telecoms works</p>
          <p>FTTH</p>
        </div>
        <div className="space-y-5">
          <h3 className="font-bold">Supple and Sale</h3>
          <p>HDPE</p>
          <p>Fiber Optics</p>
          <p>Pigtails</p>
          <p>Closure</p>
          <p>Heat String</p>
          <p>Spliters</p>
        </div>
        <div className="space-y-5">
          <button className="bg-slate-800 p-5 text-white">
            Request service
          </button>
        </div>
      </section>
      <footer className="w-full  bg-slate-200 flex justify-center p-5 border-t-2 border-gray-300">
        <p className="mt-[20px] mb-[20px]">
          copyright 2024, Halnet Technologies And Services Limited
        </p>
      </footer>
    </div>
  );
}

export default App;
