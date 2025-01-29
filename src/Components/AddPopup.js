import React, { useState } from "react";
import Popup from "./Popup";

export default function AddPopup({ isOpen, onClose, data, isEdit = false }) {
  const [formData, setFormData] = useState({
    user: data?.user || "",
    broker: data?.broker || "",
    apiKey: data?.apiKey || "",
    apiSecret: data?.apiSecret || "",
    pnl: data?.pnl || "",
    margin: data?.margin || "",
    maxRisk: data?.maxRisk || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add API call logic here
  };
  return (
    <Popup isOpen={isOpen} onClose={onClose} size={"max-w-[800px]"}>
      <form onSubmit={handleSubmit} className="space-y-4 p-4 mt-4">
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
            Submit
          </button>
        )}
      </form>
    </Popup>
  );
}
