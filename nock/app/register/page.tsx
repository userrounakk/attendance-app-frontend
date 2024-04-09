"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import BackButton from "../components/BackButton";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [confirmVisibility, setConfirmVisibility] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  async function initiateSignup() {
    console.log(email, pass);
    if (email === "" || pass === "" || name === "") {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    toast.loading("Signing up...");
    if (pass === confirmPass) {
      try {
        let res = await axios.post("https://atapp.fly.dev/v1/auth/register", {
          email: email,
          name: name,
          password: pass,
          profile_image:
            "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg",
        });
        toast.dismiss();
        toast.success("Sign up success");
        router.push("/verify-otp?email=" + email);
        console.log(res.data);
      } catch (e: any) {
        toast.dismiss();
        toast.error(e.response.data.message);
        console.error(e);
        setLoading(false);
      }
    } else {
      console.log("passwords don't match");
    }
  }
  function showToast() {
    toast("Coming Soon", {
      icon: "🤞",
    });
  }
  return (
    <div className="relative">
      <Toaster position="top-center" reverseOrder={false} />
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-50 z-50"></div>
      )}
      <form className="px-6 pt-12 flex flex-col sm:h-[calc(var(--vh, 1vh)*100)]">
        <BackButton />
        <div className="font-bold text-3xl py-8">Register</div>
        <div className="relative">
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
            <input
              type="text"
              id="floating_outlined"
              className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
              placeholder=" "
              onChange={(e) => setName(e.target.value)}
              style={{ fontSize: "16px" }}
            />
            <EditRoundedIcon className="h-6 w-6 mr-2 text-muted" />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-theme-blue  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-2 rtl:peer-focus:translate-x-1/4 start-2"
            >
              Name
            </label>
          </div>
        </div>
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
        <div className="relative mt-4">
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-theme-blue">
            <input
              type={visibility ? "text" : "password"}
              id="floating_outlined"
              className="p-2.5 block pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-theme-blue peer"
              placeholder=" "
              onChange={(e) => setPass(e.target.value)}
              style={{ fontSize: "16px" }}
              autoComplete="new-password"
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
              autoComplete="new-password"
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
          className="bg-theme-blue text-white py-4 px-16 my-5 rounded-lg w-[100%]"
          onClick={initiateSignup}
          disabled={loading}
        >
          Register
        </button>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full my-8 bg-gray-200" />
          <div className="absolute px-4 -translate-x-1/2 bg-white text-muted text-sm left-1/2">
            Or Register with
          </div>
        </div>

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

        <Link href={"/login"} className="mt-16 text-sm text-center mb-4">
          Already have an account?{" "}
          <span className="text-theme-blue">Login Now</span>
        </Link>
      </form>
    </div>
  );
}
