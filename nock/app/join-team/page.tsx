import Link from "next/link";
import React from "react";
import BackButton from "../components/BackButton";

export default function JoinTeam() {
  return (
    <div className="flex flex-col justify-center align-middle h-screen">
      <BackButton />
      <Link href="join-team/link">
        <div className="rounded-md mx-12 my-4 p-4 text-center font-medium bg-[#D9D9D9]">
          Enter Code
        </div>
      </Link>
    </div>
  );
}
