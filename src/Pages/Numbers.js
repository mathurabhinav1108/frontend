import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import AuthLayout from '../Layout/AuthLayout';
import Listing from '../Api/Listing';

export default function Numbers() {
  const [listing, setListing] = useState([]);
  const intervalRef = useRef(null);

  const getNumbers = () => {
    const main = new Listing();
    main
      .numbersGet()
      .then((r) => {
        setListing(r?.data);
      })
      .catch((err) => {
        setListing([]);
        console.error("error", err);
      });
  };

  const generateNumbers = async () => {
    const main = new Listing();
    main
      .Numbersgenerate()
      .catch((err) => {
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
    labels: listing.map((data) => new Date(data.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Random Numbers',
        data: listing.map((data) => data.random_number),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <AuthLayout page={"Random Numbers"}>
      <div className="flex items-center justify-between items-center space-y-4 md:space-y-0">
        <h2 className="text-[#151547] text-lg tracking-[-0.04em] font-medium m-0">
          Random Numbers List
        </h2>
        <button
          className="bg-[#1C5FE8] hover:bg-[#0a3fab] inline-block font-medium text-base text-white tracking-[-0.04em] rounded-lg lg:rounded-xl px-5 py-3"
          onClick={generateNumbers}
        >
          <span className="mr-1">+</span> Generate random numbers (30 only)
        </button>
      </div>
      <div className="bg-white mt-6 lg:mt-[30px] px-6 py-[30px] rounded-md lg:rounded-xl border border-black border-opacity-10">
        <Line data={chartData} />
      </div>
    </AuthLayout>
  );
}
