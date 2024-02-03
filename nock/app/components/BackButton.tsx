"use client";
import { useRouter } from "next/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function BackButton() {
  const router = useRouter();
  return (
    <div
      className="flex justify-center items-center p-2 rounded-xl border border-[#E8ECF4] w-max"
      onClick={() => {
        router.back();
      }}
    >
      <ArrowBackIosNewIcon />
    </div>
  );
}
