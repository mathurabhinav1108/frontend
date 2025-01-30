import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Listing from "../Api/Listing";
import { useRole } from "../Context/UserContext";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { info, setInfo } = useRole();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const main = new Listing();
    const response = main.login({
      username: formData?.username,
      password: formData.password,
    });
    response
      .then((res) => {
        if (res && res?.data && res?.data?.access_token) {
          toast.success("Login Successful");
          localStorage &&
            localStorage.setItem("token", res?.data?.access_token);
          navigate("/");
          setInfo(formData?.username);
          setLoading(false);
        } else {
          toast.error("Unable to login");
          setLoading(false);
        }
        setFormData({
          username: "",
          password: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        toast.error("An unknown error occured. Please try again");
        console.error("error", error);
        setLoading(false);
      });
  };

  return (
    <div className="flex h-screen">
      {/* Left Section (Image) */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-700">
        <img
          src="/Login-img.png"
          alt="Logistics Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section (Login Form) */}
      <div className="flex flex-col justify-center w-full md:w-1/2 py-8 px-6 md:px-12 lg:px-[76px] bg-gray-900">
        <h2 className="text-xl lg:text-[22px] tracking-[-0.03em] font-semibold text-gray-100 mb-1">
          SIGN IN
        </h2>
        <p className="text-gray-400 mb-8 md:mb-12 font-normal max-w-[380px]">
          Welcome to our screening app for Blackrose Technologies. Please put any details in the below form.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm lg:text-base font-medium text-gray-400 tracking-[-0.06em] mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full h-12 lg:h-[65px] px-3 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg lg:rounded-[15px] sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm lg:text-base font-medium text-gray-400 tracking-[-0.06em] mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full h-12 lg:h-[65px] px-3 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg lg:rounded-[15px] sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-blue-600 text-white font-medium rounded-md lg:rounded-xl hover:bg-blue-500 transition"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
