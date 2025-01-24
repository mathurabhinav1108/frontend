import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FiTruck } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { PiTrolleySuitcaseLight } from "react-icons/pi";
import { useLocation, Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

function SideBar({role}) {
    const location = useLocation();
    const pathname = location.pathname;
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && 
      <button
        className="lg:hidden p-2 absolute left-[209px] top-6 text-red-700 border border-red-700 z-[99] rounded"
        onClick={() => setIsOpen(false)}
      >
     <IoMdArrowRoundBack size={24}/>
      </button>}
      {!isOpen &&
      <button
        className="lg:hidden p-2 fixed font-bold top-3 text-[#727272] z-[99]"
        onClick={() => setIsOpen(true)}
      >
        <IoIosMenu size={24}/>
      </button>}

      <div
        className={`z-50 custom_scroll border border-r border-black border-opacity-10 w-[260px] md:w-[304px] fixed left-0 top-0 bottom-0 overflow-y-auto bg-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        <div className="px-3 md:px-4 lg:px-6">
          <div className="flex items-center border-b border-gray-200  py-4 lg:py-6 ">
              <img src="/Logo.png" alt="FriegtFlow Logo" className="h-[41px] w-[98px] mr-2" />
              <div className="flex flex-col">
                <span className="text-lg font-medium text-[#151547] tracking-[-0.04em] mb-1 leading-tight">FriegtFlow</span>
                <span className="text-xs font-medium text-[#727272] tracking-[-0.06em] capitalize">{role}</span>
              </div>
          </div>
        </div>

        <div className="px-3 md:px-4 lg:px-6 py-4 lg:py-5">
          {/* <div className="flex items-center mb-5 md:mb-6 lg:mb-10 box-shadow1 p-2.5 rounded md:rounded-lg lg:rounded-xl">
            <div className="h-8 w-8 lg:h-11 lg:w-11 bg-gray-300 rounded-full">            
            </div>
            <div className="ml-2 lg:ml-3">
              <div className="text-sm text-[#151547] font-medium tracking-[-0.06em] leading-tight mb-1">{user?.email}</div>
              <div className="text-xs text-[#7A7A7A] tracking-[-0.04em] leading-[15px] font-normal">User</div>
            </div>
          </div> */}
 
          <div className="mb-4 font-medium">
            <div className="uppercase text-[#808080] text-sm font-medium mb-4 lg:mb-5">MAIN MENU</div>
            <ul className="mt-2 space-y-1 mb-10">
              <Link
                to="/"
                className={`flex items-center py-2.5 px-2.5 gap-2 text-[#727272] text-base font-medium tracking-[-0.06em] ${
                  pathname === "/" ? "text-blue-500 bg-blue-100" : "hover:bg-gray-100"} rounded-md`}
              >
                <RxDashboard size={20} />
                Dashboard
              </Link>
              <Link
                to="/shipment"
                className={`flex items-center py-2.5 px-2.5 gap-2 text-[#727272] text-base font-medium tracking-[-0.06em] ${
                  pathname.startsWith("/shipment")
                    ? "text-blue-500 bg-blue-100"
                    : "hover:bg-gray-100"
                } rounded-md`}
              >
                <FiTruck size={20} />
                Shipment
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
