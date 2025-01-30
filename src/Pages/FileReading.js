import React, { useEffect, useState } from "react";
import AuthLayout from "../Layout/AuthLayout";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import Popup from "../Components/Popup";
import AddPopup from "../Components/AddPopup";
import Listing from "../Api/Listing";
import toast from "react-hot-toast";

export default function FileReading() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showBackupButton, setShowBackupButton] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const openEditPopup = () => setIsEditPopupOpen(true);
  const closeEditPopup = () => setIsEditPopupOpen(false);

  const [listing, setLisitng] = useState("");
  const [Loading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState({});

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

  const Restorebackup = async () => {
    const main = new Listing();
    main
      .Backup()
      .then((r) => {
        setShowBackupButton(false);
        console.log("r?.data", r?.data);
        getData();
      })
      .catch((err) => {
        console.error("error", err);
      });
  };

  const handleDelete = (user) => {
    console.log("user",user);
    const main = new Listing();
    const response = main.RowsDelete(user);
    response
      .then((res) => {
        if (res && res?.data && res?.data?.message) {
          toast.success("Row removed successfully");
          getData();
          setShowBackupButton(true);
        } else {
          toast.error("Unable to delete data");
        }
      })
      .catch((error) => {
        toast.error("An unknown error occured. Please try again");
        console.error("error", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthLayout page={"Dashboard"}>
      <div className="flex items-center justify-between space-y-4 md:space-y-0">
        <h2 className="text-gray-200 text-lg tracking-[-0.04em] font-medium m-0">
          CSV File Content
        </h2>
        {showBackupButton && (
          <button
            className="bg-blue-600 hover:bg-blue-500 inline-block font-medium text-base text-white tracking-[-0.04em] rounded-lg lg:rounded-xl px-5 py-3 transition"
            onClick={Restorebackup}
          >
            Restore Backup
          </button>
        )}
        <button
          className="bg-blue-600 hover:bg-blue-500 inline-block font-medium text-base text-white tracking-[-0.04em] rounded-lg lg:rounded-xl px-5 py-3 transition"
          onClick={openPopup}
        >
          <span className="mr-1">+</span> Add Data
        </button>
      </div>

      <div className="bg-gray-800 mt-6 lg:mt-[30px] px-6 py-[30px] rounded-md lg:rounded-xl border border-gray-700 shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full border-none">
            <thead>
              <tr className="text-gray-300 bg-gray-700 border border-gray-600 uppercase">
                <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                  User
                </th>
                <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                  Broker
                </th>
                <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                  API Key
                </th>
                <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                  API Secret
                </th>
                <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                  PNL
                </th>
                <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                  Margin
                </th>
                <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                  Max Risk
                </th>
                <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                  Actions
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
                      {data?.user}
                    </td>
                    <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left capitalize">
                      {data?.broker}
                    </td>
                    <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left">
                      {data?.[`API key`]}
                    </td>
                    <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left">
                      {data?.[`API secret`]}
                    </td>
                    <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left">
                      {data?.pnl}
                    </td>
                    <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left">
                      {data?.margin}
                    </td>
                    <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left">
                      {data?.max_risk}
                    </td>
                    <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left">
                      <div className="flex gap-2 items-center">
                        <FaEdit
                          size={20}
                          className="cursor-pointer"
                          color="#16A34A"
                          onClick={() => {
                            setSelectedData(data);
                            openEditPopup();
                          }}
                        />
                        <FaRegTrashCan
                          size={20}
                          className="cursor-pointer"
                          color="#FF4C4C"
                          onClick={() => handleDelete(data?.user)}
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
      <AddPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        getData={getData}
        setShowBackupButton={setShowBackupButton}
      />
      {/* Edit Popup */}
      <AddPopup
        data={selectedData}
        isOpen={isEditPopupOpen}
        onClose={closeEditPopup}
        isEdit={true}
        getData={getData}
        setShowBackupButton={setShowBackupButton}
      />
    </AuthLayout>
  );
}
