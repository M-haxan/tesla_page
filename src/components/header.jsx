// export default function Header() {
//     return(
//         <>
//          <header className="flex justify-between items-center p-4 fixed top-0 w-full z-50 bg-transparent">
//       <div>
        
//             <svg className="block w-32 h-auto text-white" class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path></svg> 
//         </div>

//          <nav className=" hidden lg:flex  font-medium text-6xl tracking-wide bg-amber-50 items-center px-4">
//         <a href="#" className="hover:underline">Model S</a>
//         <a href="#" className="hover:underline">Model 3</a>
//         <a href="#" className="hover:underline">Model X</a>
//         <a href="#" className="hover:underline">Model Y</a>
//         <a href="#" className="hover:underline">Cybertruck</a>
//         <a href="#" className="hover:underline">Powerwall</a>
//       </nav>
//       <button className="text-white lg:hidden">Menu</button>

//       {/* Add desktop nav later with `lg:flex` */}
//     </header>
            
//         </>
//     )
// }
import React from "react";
import { FiHelpCircle } from "react-icons/fi";
import { IoGlobeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
function Header() {
  return (
    <header className=" sticky h-15 max-sm:h-15  top-0 left-0 z-50 w-full  px-6 py-4 flex justify-between items-center bg-white shadow-sm">
      {/* Left: Tesla Logo (SVG or Text for now) */}
      <div className="flex items-center">
        <img src="tesla_logo.png" alt="Tesla" className="w-36" /> {/* replace with your svg logo */}
      </div>

      {/* Center: Nav Links (Desktop only) */}
      <nav className="hidden lg:flex space-x-6 text-2xl font-semibold text-black">
        <a href="#">Vehicles</a>
        <a href="#">Energy</a>
        <a href="#">Charging</a>
        <a href="#">Discover</a>
        <a href="#">Shop</a>
      </nav>
      {/* Right: Icon Buttons */}
      <div className="hidden lg:flex space-x-3">
        <button className="p-2 rounded-full border hover:bg-gray-100 transition">
          <FiHelpCircle size={20} />
        </button>
        <button className="p-2 rounded-full border hover:bg-gray-100 transition">
          <IoGlobeOutline size={20} />
        </button>
        <button className="p-2 rounded-full border hover:bg-gray-100 transition">
          <FaRegUserCircle size={20} />
        </button>
      </div>
       <button className="lg:hidden text-sm m-4 font-sm w-18 h-8 border  rounded shadow-sm">
        Menu
      </button>
    </header>
  );
}

export default Header;
