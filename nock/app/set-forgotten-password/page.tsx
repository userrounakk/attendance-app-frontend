"use client";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import BackButton from "../components/BackButton";
import { useSearchParams } from "next/navigation";
export default function ForgottenPassword() {
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  async function setForgottenPassword() {
    console.log("bruh");

    try {
      let res = await axios.post(
        `https://atapp.fly.dev/v1/auth/set-forgotten-password?email=${searchParams.get(
          "email"
        )}&otp=${searchParams.get("otp")}`,
        {
          new_password: password,
        }
      );
      console.log(res.data);
      toast.success("password set");
    } catch (e: any) {
      toast.error("password set failed");
      console.error(e);
    }
  }
  return (
    <div className="px-8 py-16">
      <Toaster position="top-center" reverseOrder={false} />
      <BackButton />
      <div className="font-bold text-2xl py-8">New Password</div>
      <div className="flex flex-col">
        <label htmlFor="">Password</label>
        <input
          className="border-2"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        className="bg-[#3D73DD] text-white py-4 px-16 my-2 rounded-md w-[100%]"
        onClick={setForgottenPassword}
      >
        Submit
      </button>
    </div>
  );
}
