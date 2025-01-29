import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import SideBar from "./Sidebar";

export default function AuthLayout({ children, page }) {
  // const router = useRouter(); // Corrected variable name

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="md:flex flex-wrap  bg-[#F5F6FB] items-start">
      <SideBar role={"Role"} />
      <div className="w-full lg:ml-[304px] lg:w-[calc(100%-304px)]">
        <div className="fixed px-4 md:px-5 lg:px-[30px] py-3 lg:py-4 top-0  bg-white flex items-center w-full lg:w-[calc(100%-304px)] flex flex-wrap">
          <div className="w-4/12 pl-4 lg:pl-0">
            <h1 className="text-[#151547] text-lg lg:text-2xl tracking-[-0.04em] font-medium">
              {page || "Dashboard"}
            </h1>
          </div>
          <div className="w-8/12 flex flex-wrap justify-end space-x-4">
            <div className="relative">
              <button
                className="border border-black border-opacity-10 rounded-xl w-[48px] h-[38px] flex items-center justify-center text-[#151547] hover:bg-[#1C5FE8] hover:text-white"
                onClick={toggleDropdown}
              >
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M17 16.5C17 18.985 17 21 9 21C1 21 1 18.985 1 16.5C1 14.015 4.582 12 9 12C13.418 12 17 14.015 17 16.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>
                {/* <IoPersonOutline size={21} /> */}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                  <ul className="py-1">
                    <li className="flex gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <IoSettingsOutline size={20} /> Settings
                    </li>
                    <li className="flex gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <MdLogout size={20} /> Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-4 md:px-5 lg:px-[30px] pt-20 lg:pt-24 pb-8 bg-[#F6F7FA]">
          {children}
        </div>
      </div>
    </div>
  );
}
