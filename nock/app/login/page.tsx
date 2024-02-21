"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import BackButton from "../components/BackButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [visibility, setVisibility] = useState(false);
  const router = useRouter();

  async function initiateLogin() {
    console.log(email, pass);
    try {
      let res = await axios.post("https://atapp.fly.dev/v1/auth/login", {
        email: email,
        password: pass,
      });
      console.log(res.data);
      toast.success("logged in sucessfully");
      localStorage.setItem("userData", JSON.stringify(res.data));

      router.push("/dashboard");
    } catch (e: any) {
      toast.error("login failed:", e);
      console.error(e);
    }
  }
  function showToast() {
    toast("Coming Soon", {
      icon: "🤞",
    });
  }
  return (
    <div className="px-6 pt-12 flex flex-col sm:h-[calc(var(--vh, 1vh)*100)]">
      <Toaster position="top-center" reverseOrder={false} />
      <BackButton />
      <div className="font-bold text-3xl py-8">Log In</div>
      <div className="relative">
        <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
          <input
            type="email"
            id="email"
            className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
            placeholder=" "
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontSize: "16px" }}
          />
          {/* TODO: Add onClick handler */}
          <EditRoundedIcon className="h-6 w-6 mr-2 text-muted" />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-2 rtl:peer-focus:translate-x-1/4 start-2"
          >
            Email
          </label>
        </div>
      </div>
      <div className="relative mt-4">
        <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
          <input
            type={visibility ? "text" : "password"}
            id="password"
            className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
            placeholder=" "
            onChange={(e) => setPass(e.target.value)}
            style={{ fontSize: "16px" }}
          />
          {/* TODO: Add onClick handler */}
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
            htmlFor="password"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-2 rtl:peer-focus:translate-x-1/4 start-2"
          >
            Password
          </label>
        </div>
      </div>

      <Link
        href={"/forgot-password"}
        className="flex justify-end py-4 text-muted text-sm font-bold"
      >
        Forgot Password?
      </Link>

      <button
        className="bg-theme-blue text-white py-4 px-16 my-2 rounded-lg w-[100%]"
        onClick={initiateLogin}
      >
        Login
      </button>

      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full my-8 bg-gray-200" />
        <div className="absolute px-4 -translate-x-1/2 bg-white text-muted text-sm left-1/2">
          Or Login with
        </div>
      </div>
      {/* TODO: Add onClick handler */}
      <div className="flex justify-center ">
        <div
          className="bg-white w-full p-4 rounded-md border border-gray-300 mr-4"
          onClick={showToast}
        >
          <center>
            <FacebookIcon component="svg" />
          </center>
        </div>
        <div
          className="bg-white w-full p-4 rounded-md border border-gray-300 mr-4"
          onClick={showToast}
        >
          <center>
            <GoogleIcon component="svg" />
          </center>
        </div>
        <div
          className="bg-white w-full p-4 rounded-md border border-gray-300"
          onClick={showToast}
        >
          <center>
            <AppleIcon component="svg" />
          </center>
        </div>
      </div>

      <Link href={"/register"} className="mt-16 text-sm text-center mb-4">
        Don&apos;t have an account?{" "}
        <span className="text-theme-blue">Register Now</span>
      </Link>
    </div>
  );
}
