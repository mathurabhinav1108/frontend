import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import toast from "react-hot-toast";
import Listing from "../Api/Listing";

export default function AddPopup({ isOpen, onClose, data, isEdit = false, getData }) {
  const [formData, setFormData] = useState({
    user: "",
    broker: "",
    apiKey: "",
    apiSecret: "",
    pnl: "",
    margin: "",
    maxRisk: "",
  });

  // Update formData when data is received
  useEffect(() => {
    if (data) {
      setFormData({
        user: data.user || "",
        broker: data.broker || "",
        apiKey: data["API key"] || "", // Fix key name
        apiSecret: data["API secret"] || "", // Fix key name
        pnl: data.pnl || "",
        margin: data.margin || "",
        maxRisk: data.max_risk || "", // Fix key name
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const main = new Listing();
    const response = main.RowsUpdate(formData?.user, {
      user: formData?.user,
      broker: formData?.broker,
      API_key: formData?.apiKey,
      API_secret: formData?.apiSecret,
      pnl: formData?.pnl,
      margin: formData?.margin,
      max_risk: formData?.maxRisk,
    });
    response
      .then((res) => {
        if (res && res?.data && res?.data?.message) {
          toast.success("Data updated successfully");
          onClose();
          getData();
        } else {
          toast.error("Unable to update data");
        }
        setFormData({
          user: "",
          broker: "",
          apiKey: "",
          apiSecret: "",
          pnl: "",
          margin: "",
          maxRisk: "",
        });
      })
      .catch((error) => {
        toast.error("An unknown error occured. Please try again");
        console.error("error", error);
      });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const main = new Listing();
    const response = main.RowsAdd({ 
      user: formData?.user,
      broker: formData?.broker,
      API_key: formData?.apiKey,
      API_secret: formData?.apiSecret,
      pnl: formData?.pnl,
      margin: formData?.margin,
      max_risk: formData?.maxRisk,
     });
    response
      .then((res) => {
        if (res && res?.data && res?.data?.message) {
          toast.success("Data added successfully");
          onClose();
          getData();
        } else {
          toast.error("Unable to add data");
        }
        setFormData({
          user: "",
          broker: "",
          apiKey: "",
          apiSecret: "",
          pnl: "",
          margin: "",
          maxRisk: "",
        });
      })
      .catch((error) => {
        toast.error("An unknown error occured. Please try again");
        console.error("error", error);
      });
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose} size={"max-w-[800px]"}>
      <form
        onSubmit={isEdit ? handleEdit : handleAdd}
        className="space-y-4 p-4 mt-4"
      >
        {!isEdit && (
          <input
            type="text"
            name="user"
            placeholder="User"
            value={formData.user}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        )}
        <input
          type="text"
          name="broker"
          placeholder="Broker"
          value={formData.broker}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="apiKey"
          placeholder="API Key"
          value={formData.apiKey}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="apiSecret"
          placeholder="API Secret"
          value={formData.apiSecret}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="pnl"
          placeholder="PNL"
          value={formData.pnl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="margin"
          placeholder="Margin"
          value={formData.margin}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="maxRisk"
          placeholder="Max Risk"
          value={formData.maxRisk}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        {isEdit ? (
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update
          </button>
        ) : (
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        )}
      </form>
    </Popup>
  );
}
