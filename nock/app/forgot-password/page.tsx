"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import BackButton from "../components/BackButton";
import EditRoundedIcon from '@mui/icons-material/EditRounded';

export default function Signin() {
  const router = useRouter();
  return (
    <div className="px-6 pt-12 flex flex-col sm:h-[calc(var(--vh, 1vh)*100)]">
      <Toaster position="top-center" reverseOrder={false} />
      <BackButton />
      <div className="font-bold text-3xl mt-10 mb-4 ">Forgot Password?</div>
      <p className="text-sm text-muted">Please enter the email address linked with your account.</p>
      <div className="relative mt-10">
        <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
          <input type="email" 
            id="floating_outlined" 
            className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer" 
            placeholder=" "
            // TODO: Add onChange handler
            style={{ fontSize: '16px' }}
          />
          <EditRoundedIcon className="h-6 w-6 mr-2 text-muted" />
          <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-2 rtl:peer-focus:translate-x-1/4 start-2">Email</label>
        </div>
        </div>
      <button
        className="bg-theme-blue text-white py-4 px-16 my-2 rounded-md w-[100%] mt-16"
        // TODO: Add onClick handler
      >
        Send Code
      </button>
    </div>
  );
}
