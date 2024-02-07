"use client";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import BackButton from "../components/BackButton";
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
      <div className="flex flex-col">
        <label htmlFor="">Email</label>
        <input
          className="border-2"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        className="bg-[#3D73DD] text-white py-4 px-16 my-2 rounded-md w-[100%]"
        onClick={initiateForgotPassword}
      >
        Submit
      </button>
    </div>
  );
}
