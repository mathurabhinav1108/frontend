import React from "react";
import AuthLayout from "../Layout/AuthLayout";

export default function FileReading() {
  return (
    <AuthLayout page={"Dashboard"}>
      <div className="flex items-center justify-between items-center space-y-4 md:space-y-0">
        <h2 className="text-[#151547] text-lg tracking-[-0.04em] font-medium m-0">
          CSV File Content{" "}
        </h2>
        <button className="bg-[#1C5FE8] hover:bg-[#0a3fab] inline-block font-medium text-base text-white tracking-[-0.04em] rounded-lg lg:rounded-xl px-5 py-3">
          <span className="mr-1">+</span> Add Data
        </button>
      </div>
      <div className="bg-white mt-6 lg:mt-[30px] px-6 py-[30px] rounded-md lg:rounded-xl border border-black border-opacity-10">
        <div className="overflow-x-auto">
          <table className="w-full border-none">
            <thead>
              <tr className="text-[#9090AD] bg-[#F4F6F8] border border-black border-opacity-10 uppercase ">
                <th className="px-4 py-3  tracking-[-0.04em] text-sm font-medium text-left">
                  User
                </th>
                <th className="px-4 py-3  tracking-[-0.04em] text-sm font-medium text-left">
                  Broker
                </th>
                <th className="px-4 py-3  tracking-[-0.04em] text-sm font-medium text-left">
                  API key
                </th>
                <th className="px-4 py-3  tracking-[-0.04em] text-sm font-medium text-left">
                  API secret
                </th>
                <th className="px-4 py-3  tracking-[-0.04em] text-sm font-medium text-left">
                  PNL
                </th>
                <th className="px-4 py-3  tracking-[-0.04em] text-sm font-medium text-left">
                  Margin
                </th>
                <th className="px-4 py-3  tracking-[-0.04em] text-sm font-medium text-left">
                  Max risk
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {listing && listing?.map((data, index) => ( */}
              {[1, 2, 3, 4, 5]?.map((data, index) => (
                <tr
                  key={index}
                  className="border-b border-black border-opacity-10 font-medium"
                >
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                    {index + 1}
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left capitalize">
                    Abhinav
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                    dfdfgdgfgf
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                    key_12345
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                    secret_54321
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                    $500
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                    $1000
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                    5%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AuthLayout>
  );
}
