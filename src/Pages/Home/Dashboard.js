import React, { useEffect, useState } from "react";
import AuthLayout from "../../Layout/AuthLayout";
import Listing from "../../Api/Listing";

export default function Dashboard() {
  const [listing, setLisitng] = useState("");
  const [Loading, setLoading] = useState(false);

  const getsessions = () => {
    setLoading(true);
    const main = new Listing();
    main
      .SessionsGet()
      .then((r) => {
        setLoading(false);
        setLisitng(r?.data?.sessions);
      })
      .catch((err) => {
        setLoading(false);
        setLisitng([]);
        console.log("error", err);
      });
  };

  useEffect(() => {
    getsessions();
  }, []);
  console.log("listing", listing);

  return (
    <AuthLayout page={"Dashboard"}>
      {Loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex items-center justify-between items-center space-y-4 md:space-y-0">
            <h2 className="text-gray-300 text-lg tracking-[-0.04em] font-medium m-0">
              Users Session Details
            </h2>
          </div>
          <div className="bg-gray-800 mt-6 lg:mt-[30px] px-6 py-[30px] rounded-md lg:rounded-xl border border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full border-none">
                <thead>
                  <tr className="text-gray-400 bg-gray-700 border border-gray-600 uppercase">
                    <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                      Sr No
                    </th>
                    <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                      Username
                    </th>
                    <th className="px-4 py-3 tracking-[-0.04em] text-sm font-medium text-left">
                      Session Token
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listing &&
                    listing?.map((data, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-700 font-medium"
                      >
                        <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left">
                          {index + 1}
                        </td>
                        <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left capitalize">
                          {data?.username}
                        </td>
                        <td className="px-3 py-5 text-gray-300 tracking-[-0.04em] text-sm font-medium text-left">
                          {data?.token}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </AuthLayout>
  );
}
