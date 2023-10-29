"use client";
import { redirect, useRouter } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function App() {
  const { push } = useRouter();
  return (
    <div className="h-full justify-between flex flex-col p-8">
      <img src="SigninImg.svg" alt="" />
      <div className="flex flex-row font-medium text-3xl">
        Welcome to <div className="text-blue-700 px-2">Nock</div>
      </div>
      <div className="text-sm font-medium">Smart Attendance Tracking App</div>
      <div
        onClick={() => {
          console.log("miaow");
          push("/attendance");
        }}
        className="m-12 p-8 text-center text-white font-medium bg-blue-700"
      >
        Sign In
        <ArrowForwardIcon />
      </div>
      <div className="text-xs flex flex-row justify-center">
        Made with ❤️ By <div className="text-blue-700">G</div>
        <div className="text-yellow-300">D</div>
        <div className="text-red-500">S</div>
        <div className="text-green-500">C</div>
      </div>
    </div>
  );
}
