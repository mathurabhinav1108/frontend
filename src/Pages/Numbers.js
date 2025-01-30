import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import AuthLayout from "../Layout/AuthLayout";
import Listing from "../Api/Listing";

export default function Numbers() {
  const [listing, setListing] = useState([]);
  const intervalRef = useRef(null);

  const getNumbers = () => {
    const main = new Listing();
    main
      .numbersGet()
      .then((r) => {
        setListing(r?.data?.data);
      })
      .catch((err) => {
        setListing([]);
        console.error("error", err);
      });
  };

  const generateNumbers = async () => {
    const main = new Listing();
    main.Numbersgenerate().catch((err) => {
      console.error("error", err);
    });

    if (!intervalRef.current) {
      intervalRef.current = setInterval(getNumbers, 2000);
    }
  };

  useEffect(() => {
    getNumbers();
    return () => clearInterval(intervalRef.current);
  }, []);

  const chartData = {
    labels: listing.map((data) =>
      new Date(data.timestamp).toLocaleTimeString()
    ),
    datasets: [
      {
        label: "Random Numbers",
        data: listing.map((data) => data.random_number),
        fill: false,
        borderColor: "rgb(30, 144, 255)", // DodgerBlue for better visibility in dark mode
        tension: 0.1,
      },
    ],
  };

  return (
    <AuthLayout page={"Random Numbers"}>
      <div className="flex items-center justify-between space-y-4 md:space-y-0">
        <h2 className="text-gray-300 text-lg tracking-[-0.04em] font-medium m-0">
          Random Numbers List
        </h2>
        <button
          className="bg-blue-600 hover:bg-blue-500 inline-block font-medium text-base text-white tracking-[-0.04em] rounded-lg lg:rounded-xl px-5 py-3"
          onClick={generateNumbers}
        >
          <span className="mr-1">+</span> Generate random numbers (30 only)
        </button>
      </div>

      <div className="bg-gray-800 mt-6 lg:mt-[30px] px-6 py-[30px] rounded-md lg:rounded-xl border border-gray-700">
        <Line data={chartData} />
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-none">
            <thead>
              <tr className="text-gray-400 bg-gray-700 border border-gray-600 uppercase">
                <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                  Sr No
                </th>
                <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                  Timestamp
                </th>
                <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                  Random Number
                </th>
              </tr>
            </thead>
            <tbody>
              {listing &&
                listing.map((data, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700 font-medium"
                  >
                    <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left">
                      {index + 1}
                    </td>
                    <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left capitalize">
                      {new Date(data?.timestamp).toLocaleString()}
                    </td>
                    <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left capitalize">
                      {data?.random_number}
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
