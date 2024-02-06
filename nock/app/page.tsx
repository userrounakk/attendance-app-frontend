"use client";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
export default function App() {
  return (
    <div className="h-full justify-between flex flex-col p-4 `">
      <img src="SigninImg.svg" alt="" />
      <div className="flex flex-row font-medium text-3xl  mt-10">
        Welcome to <div className="text-theme-blue px-2">Nock</div>
      </div>
      <div className="text-sm font-medium">Smart Attendance Tracking App</div>
      <Link href="/login" className="m-12">
        <div className="p-4 text-center rounded-md text-white font-medium bg-theme-blue">
          Get Started
          <ArrowForwardIcon />
        </div>
      </Link>
      <div className="text-xs flex flex-row justify-center">
        Made with ❤️ By <div className="text-blue-700">G</div>
        <div className="text-yellow-500">D</div>
        <div className="text-red-500">S</div>
        <div className="text-green-500">C</div>
      </div>
    </div>
  );
}
