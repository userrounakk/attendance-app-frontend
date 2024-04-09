"use client";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function App() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const userData = localStorage.getItem("userData");
      console.log(userData);
      if (userData) {
        router.push("/dashboard");
      } else {
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  });
  if (loading) {
    return (
      <div className="h-full w-full">
        <img
          className=" h-full w-full"
          src={"/loading.gif"}
          alt="loading screen"
        />
      </div>
    );
  }
  return (
    <div className="h-full justify-between flex flex-col">
      <img src="SigninImg.svg" alt="illustration" className="mt-4 p-4" />
      <div className="flex flex-row font-medium text-3xl  mt-10 p-4">
        Welcome to <div className="text-theme-blue px-2">Nock</div>
      </div>
      <div className="text-sm font-medium p-4">
        Smart Attendance Tracking App
      </div>
      <Link href="/login" className="m-12">
        <div className="p-4 text-center rounded-md text-white font-medium bg-theme-blue">
          Get Started
          <ArrowForwardIcon />
        </div>
      </Link>
      <div className="text-xs w-full mt-1 flex flex-row justify-center">
        Made with ❤️ By <div className="text-blue-700">G</div>
        <div className="text-yellow-500">D</div>
        <div className="text-red-500">S</div>
        <div className="text-green-500">C</div>
      </div>
    </div>
  );
}
