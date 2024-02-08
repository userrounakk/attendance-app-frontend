"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

export default function Signin() {
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const router = useRouter();
  return (
    <div className="px-6 pt-12 flex flex-col sm:h-[calc(var(--vh, 1vh)*100)]">
      <div className="font-bold text-3xl py-8 mt-10">Reset Your Password</div>
      <div className="relative">
        <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
          <input
            type="password"
            id="floating_outlined"
            className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
            placeholder=" "
            onChange={(e) => setPass(e.target.value)}
            style={{ fontSize: "16px" }}
          />
          {/* TODO: Add onClick handler */}
          <VisibilityRoundedIcon className="h-6 w-6 mr-2 text-muted" />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-2 rtl:peer-focus:translate-x-1/4 start-2"
          >
            Password
          </label>
        </div>
      </div>
      <div className="relative mt-4">
        <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
          <input
            type="password"
            id="floating_outlined"
            className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
            placeholder=" "
            onChange={(e) => setConfirmPass(e.target.value)}
            style={{ fontSize: "16px" }}
          />
          {/* TODO: Add onClick handler */}
          <VisibilityRoundedIcon className="h-6 w-6 mr-2 text-muted" />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-2 rtl:peer-focus:translate-x-1/4 start-2"
          >
            Confirm Password
          </label>
        </div>
      </div>
      <button
        className="bg-theme-blue text-white py-4 px-16 my-14 rounded-lg w-[100%]"
        onClick={() => {}} // TODO: Add onClick handler
      >
        Reset
      </button>
    </div>
  );
}
