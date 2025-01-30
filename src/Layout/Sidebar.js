import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FiTruck } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { PiTrolleySuitcaseLight } from "react-icons/pi";
import { useLocation, Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiSortNumberAsc } from "react-icons/ri";
import { TbFileSpreadsheet } from "react-icons/tb";
import { useRole } from "../Context/UserContext";

function SideBar({ role }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const { info, setInfo } = useRole();

  return (
    <>
      {isOpen && (
        <button
          className="lg:hidden p-2 absolute left-[209px] top-6 text-red-500 border border-red-500 z-[99] rounded"
          onClick={() => setIsOpen(false)}
        >
          <IoMdArrowRoundBack size={24} />
        </button>
      )}
      {!isOpen && (
        <button
          className="lg:hidden p-2 fixed font-bold top-3 text-gray-400 z-[99]"
          onClick={() => setIsOpen(true)}
        >
          <IoIosMenu size={24} />
        </button>
      )}

      <div
        className={`z-50 custom_scroll border border-r border-gray-700 w-[260px] md:w-[304px] fixed left-0 top-0 bottom-0 overflow-y-auto bg-gray-900 transition-transform transform ${
          isOpen ? "translate-x-0" : "-tranyslate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        <div className="px-3 md:px-4 lg:px-6">
          <div className="flex items-center border-b border-gray-700 py-4 lg:py-6">
            <img
              src="/Logo.png"
              alt="FriegtFlow Logo"
              className="h-[30px] w-[126px] mr-2"
            />
            <div className="flex flex-col">
              <span className="text-lg font-medium text-white tracking-[-0.04em] mb-1 leading-tight">
                Random Name
              </span>
            </div>
          </div>
        </div>

        <div className="px-3 md:px-4 lg:px-6 py-4 lg:py-5">
          <div className="mb-4 font-medium">
            <div className="uppercase text-gray-500 text-sm font-medium mb-4 lg:mb-5">
              MAIN MENU
            </div>
            <ul className="mt-2 space-y-1 mb-10">
              <Link
                to="/"
                className={`flex items-center py-2.5 px-2.5 gap-2 text-gray-300 text-base font-medium tracking-[-0.06em] ${
                  pathname === "/"
                    ? "text-blue-400 bg-blue-900"
                    : "hover:bg-gray-800"
                } rounded-md`}
              >
                <RxDashboard size={20} />
                Dashboard
              </Link>
              <Link
                to="/random-numbers"
                className={`flex items-center py-2.5 px-2.5 gap-2 text-gray-300 text-base font-medium tracking-[-0.06em] ${
                  pathname.startsWith("/random-numbers")
                    ? "text-blue-400 bg-blue-900"
                    : "hover:bg-gray-800"
                } rounded-md`}
              >
                <RiSortNumberAsc size={20} />
                Random Numbers
              </Link>
              <Link
                to="/excel"
                className={`flex items-center py-2.5 px-2.5 gap-2 text-gray-300 text-base font-medium tracking-[-0.06em] ${
                  pathname.startsWith("/excel")
                    ? "text-blue-400 bg-blue-900"
                    : "hover:bg-gray-800"
                } rounded-md`}
              >
                <TbFileSpreadsheet size={20} />
                Excel Sheet Data
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
