"use client";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import BackButton from "../components/BackButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  async function initiateForgotPassword() {
    try {
      let res = await axios.get(
        `https://atapp.fly.dev/v1/auth/forgot-password?email=${email}`
      );
      console.log(res.data);
      toast.success("email sent");
    } catch (e: any) {
      toast.error("email send failed");
      console.error(e);
    }
  }
  return (
    <div className="px-8 py-16">
      <Toaster position="top-center" reverseOrder={false} />
      <BackButton />
      <div className="font-bold text-2xl py-8">Forgot Password</div>
      <div className="relative mt-4">
        <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
          <input
            type="email"
            id="floating_outlined"
            className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
            placeholder=" "
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontSize: "16px" }}
            autoComplete="email"
          />
          <EditRoundedIcon className="h-6 w-6 mr-2 text-muted" />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-2 rtl:peer-focus:translate-x-1/4 start-2"
          >
            Email
          </label>
        </div>
      </div>
      <button
        className="bg-theme-blue text-white py-4 px-16 my-14 mt-10 rounded-lg w-[100%]"
        onClick={initiateForgotPassword}
      >
        Submit
      </button>
    </div>
  );
}
