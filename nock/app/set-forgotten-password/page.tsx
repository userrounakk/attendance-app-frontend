"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import BackButton from "../components/BackButton";
import { useSearchParams } from "next/navigation";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export default function ForgottenPassword() {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const [visibility, setVisibility] = useState(false);
  const [confirmVisibility, setConfirmVisibility] = useState(false);
  async function setForgottenPassword() {
    console.log("bruh");
    if (password !== confirmPass) {
      toast.error("Passwords do not match");
      return;
    }
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
      router.push("/login");
    } catch (e: any) {
      toast.error("password set failed");
      console.error(e);
    }
  }
  return (
    // <div className="px-8 py-16">
    //   <Toaster position="top-center" reverseOrder={false} />
    //   <BackButton />
    //   <div className="font-bold text-2xl py-8">New Password</div>
    //   <div className="flex flex-col">
    //     <label htmlFor="">Password</label>
    //     <input
    //       className="border-2"
    //       type="password"
    //       onChange={(e) => {
    //         setPassword(e.target.value);
    //       }}
    //     />
    //   </div>
    //   <button
    //     className="bg-[#3D73DD] text-white py-4 px-16 my-2 rounded-md w-[100%]"
    //     onClick={setForgottenPassword}
    //   >
    //     Submit
    //   </button>
    // </div>
    <div className="px-6 pt-12 flex flex-col sm:h-[calc(var(--vh, 1vh)*100)]">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="font-bold text-3xl py-8 mt-10">Reset Your Password</div>
      <div className="relative">
        <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
          <input
            type={visibility ? "text" : "password"}
            id="floating_outlined"
            className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
            placeholder=" "
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontSize: "16px" }}
          />
          {visibility ? (
            <VisibilityOffIcon
              className="h-6 w-6 mr-2 text-muted"
              onClick={() => setVisibility(false)}
            />
          ) : (
            <VisibilityRoundedIcon
              className="h-6 w-6 mr-2 text-muted"
              onClick={() => setVisibility(true)}
            />
          )}
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
            type={confirmVisibility ? "text" : "password"}
            id="floating_outlined"
            className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
            placeholder=" "
            onChange={(e) => setConfirmPass(e.target.value)}
            style={{ fontSize: "16px" }}
          />
          {confirmVisibility ? (
            <VisibilityOffIcon
              className="h-6 w-6 mr-2 text-muted"
              onClick={() => setConfirmVisibility(false)}
            />
          ) : (
            <VisibilityRoundedIcon
              className="h-6 w-6 mr-2 text-muted"
              onClick={() => setConfirmVisibility(true)}
            />
          )}
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
        onClick={() => setForgottenPassword()}
      >
        Reset
      </button>
    </div>
  );
}
