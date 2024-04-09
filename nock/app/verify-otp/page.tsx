"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import BackButton from "../components/BackButton";
import Link from "next/link";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

export default function App() {
  const searchParams = useSearchParams();
  var emailParam = searchParams.get("email");
  emailParam = emailParam ? emailParam : "";

  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(emailParam);
  const [loading, setLoading] = useState(false);
  async function verifyOtp() {
    if (email === "") {
      toast.error("Please enter a valid email");
      return;
    }
    if (otp.length < 6) {
      toast.error("Please enter a valid OTP");
      return;
    }
    setLoading(true);
    toast.loading("Verifying your otp");
    try {
      let res = await axios.post(
        `https://atapp.fly.dev/v1/auth/verify?email=${email}&otp=${otp}`
      );
      console.log(res.data);
      setLoading(false);
      toast.dismiss();
      toast.success("verification success");
      localStorage.setItem("userData", JSON.stringify(res.data));
      router.push("/login");
    } catch (e: any) {
      setLoading(false);
      toast.dismiss();
      toast.error("verification failed");
      console.error(e);
    }
  }
  return (
    <div className="flex flex-col pt-12 px-8 h-[85vh]">
      <Toaster position="top-center" reverseOrder={false} />
      <BackButton />
      <div className="font-bold text-3xl mt-10 mb-4 ">OTP Verification</div>
      <p className="text-muted text-md">
        Enter the verification code we just sent on your email address.
      </p>
      <div className="relative mt-20 mb-10">
        <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
          <input
            type="email"
            id="floating_outlined"
            className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
            placeholder=" "
            value={email}
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
      <div className="flex justify-between mb-20">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          shouldAutoFocus
          containerStyle={{ justifyContent: "space-between" }}
          inputStyle={{ width: "15%", height: "50px" }}
          renderInput={(props, i) => {
            const { type, ...rest } = props;
            return (
              <input
                {...rest}
                type="number"
                inputMode="numeric"
                autoComplete="one-time-code"
                className={`text-center text-lg rounded-md focus:border-0 border ${
                  otp[i]
                    ? "border-theme-blue bg-white"
                    : "border-[#E8ECF4] bg-[#F7F8F9]"
                }`}
              />
            );
          }}
        />
      </div>
      <button
        className="bg-theme-blue text-white py-4 px-16 rounded-lg w-[100%]"
        onClick={() => verifyOtp()}
      >
        Verify
      </button>
      <Link href="/resend-verification" className="mt-auto text-center text-sm">
        Didn’t received code? <span className="text-theme-blue">Resend</span>
      </Link>
    </div>
  );
}
