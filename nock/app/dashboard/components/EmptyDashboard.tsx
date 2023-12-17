"use client";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
export default function EmptyDashboard() {
  return (
    <div className="h-full justify-between flex flex-col p-8">
      <img src="SigninImg.svg" alt="" />
      <div className="font-medium text-3xl">
        Welcome to <span className="text-blue-700 px-2">Nock</span>
      </div>
      <div className="text-sm font-medium">Smart Attendance Tracking App</div>
      <Link href="/create-team">
        <div className="rounded-md mx-12 my-4 p-4 text-center text-white font-medium bg-blue-700">
          Create Team
        </div>
      </Link>
      <Link href="/join-team">
        <div className="rounded-md mx-12 my-4 p-4 text-center text-white font-medium bg-blue-700">
          Join Team
        </div>
      </Link>
    </div>
  );
}
