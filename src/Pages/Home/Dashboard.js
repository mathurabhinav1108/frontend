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
        setLisitng(r?.data);
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

  return (
    <AuthLayout page={"Dashboard"}>
      <div className="flex items-center justify-between items-center space-y-4 md:space-y-0">
        <h2 className="text-[#151547] text-lg tracking-[-0.04em] font-medium m-0">
          Users Session Details{" "}
        </h2>
      </div>
      <div className="bg-white mt-6 lg:mt-[30px] px-6 py-[30px] rounded-md lg:rounded-xl border border-black border-opacity-10">
        <div className="overflow-x-auto">
          <table className="w-full border-none">
            <thead>
              <tr className="text-[#9090AD] bg-[#F4F6F8] border border-black border-opacity-10 uppercase ">
                <th className="px-4 py-3  tracking-[-0.04em] text-sm font-medium text-left">
                  Sr No
                </th>
                <th className="px-4 py-3  tracking-[-0.04em] text-sm font-medium text-left">
                  Username
                </th>
                <th className="px-4 py-3  tracking-[-0.04em] text-sm font-medium text-left">
                  Session Token
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {listing && listing?.map((data, index) => ( */}
              {listing && listing?.map((data, index) => (
                <tr
                  key={index}
                  className="border-b border-black border-opacity-10 font-medium"
                >
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                    {index + 1}
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left capitalize">
                    {data?.username}
                  </td>
                  <td className="px-3 py-5 text-[#1D1D42] tracking-[-0.04em] text-sm font-medium text-left">
                    {data?.token}
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
