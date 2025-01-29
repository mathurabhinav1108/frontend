import React, { useState } from "react";
import AuthLayout from "../Layout/AuthLayout";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import Popup from "../Components/Popup";
import AddPopup from "../Components/AddPopup";
import Listing from "../Api/Listing";

export default function FileReading() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const openEditPopup = () => setIsEditPopupOpen(true);
  const closeEditPopup = () => setIsEditPopupOpen(false);

  const [listing, setLisitng] = useState("");
  const [Loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    const main = new Listing();
    main
      .Rowsget()
      .then((r) => {
        setLoading(false);
        setLisitng(r?.data);
      })
      .catch((err) => {
        setLoading(false);
        setLisitng([]);
        console.log("error", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthLayout page={"Dashboard"}>
      <div className="flex items-center justify-between items-center space-y-4 md:space-y-0">
        <h2 className="text-[#151547] text-lg tracking-[-0.04em] font-medium m-0">
          CSV File Content{" "}
        </h2>
        <button
          className="bg-[#1C5FE8] hover:bg-[#0a3fab] inline-block font-medium text-base text-white tracking-[-0.04em] rounded-lg lg:rounded-xl px-5 py-3"
          onClick={() => {
            openPopup();
          }}
        >
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
                <th className="px-4 py-3  tracking-[-0.04em] text-sm font-medium text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {listing && listing?.map((data, index) => (
              // {[1, 2, 3, 4, 5]?.map((data, index) => (
                <tr
                  key={index}
                  className="border-b border-black border-opacity-10 font-medium"
                >
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                    {data?.user}
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left capitalize">
                  {data?.broker}
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                  {data?.[`API key`]}
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                  {data?.[`API secret`]}
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                  {data?.pnl}
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                  {data?.margin}
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                  {data?.max_risk}
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                    <div className="flex gap-2 items-center">
                      {/* <Link href={`/shipment/add/${shipment?._id}`}> */}
                      <FaEdit
                        size={20}
                        className="cursor-pointer"
                        color="#16A34A"
                        onClick={() => {
                          openEditPopup();
                        }}
                      />
                      {/* </Link> */}
                      <FaRegTrashCan
                        size={20}
                        className="cursor-pointer"
                        color="#Ff0000"
                        // onClick={() => deleteshipment(shipment?._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Add Popup */}
      <AddPopup isOpen={isPopupOpen} onClose={closePopup} />
      {/* Edit Popup */}
      <AddPopup
        isOpen={isEditPopupOpen}
        onClose={closeEditPopup}
        size={"max-w-[800px]"}
        isEdit={true}
      />
    </AuthLayout>
  );
}
