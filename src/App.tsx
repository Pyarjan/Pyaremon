import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" max-w-7xl mx-auto min-h-screen  text-justify p-5">
      <h1 className="text-5xl font-bold text-center mb-5">Floating NavBar</h1>

      {/* NavBar */}
      <div className="flex justify-between items-center px-5 border sticky top-5 backdrop-blur bg-white/50 rounded-xl p-3 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/png.png" alt="logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-black">Pyaremon</span>
        </div>

        {/* Desktop Links */}
        <div className="md:flex hidden gap-8 items-center">
          {["Home", "About", "Contact", "Services", "Tech Stack"].map(
            (item) => (
              <a
                key={item}
                className="hover:text-blue-500 text-base font-semibold text-black"
                href="#"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Desktop Signup */}
        <button className="bg-black text-white hidden md:block px-5 text-lg font-semibold hover:bg-indigo-950  py-2 rounded-xl">
          Signup
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-0 right-0 top-40  transition-transform duration-300 transform z-40 ${
          isOpen ? "translate-x-0 m-5" : "-translate-x-full"
        }`}
      >
        <div className="bg-white/30 backdrop-blur-sm border w-full p-5 rounded-xl">
          {["Home", "About", "Contact", "Services", "Tech Stack"].map(
            (item) => (
              <a
                key={item}
                href="#"
                onClick={() => setIsOpen(false)}
                className="block py-2 font-semibold "
              >
                {item}
              </a>
            )
          )}
          <button className="w-full mt-4 bg-black text-white font-semibold py-2 rounded-xl hover:bg-blue-300">
            Signup
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-5 space-y-4">
        {[...Array(15)].map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            itaque autem quas, praesentium corrupti dolorem ab deserunt error.
            Ratione quidem nobis blanditiis excepturi sunt ab laboriosam aliquam
            eius ipsum totam.
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
