"use client";
import { useRouter } from "next/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function BackButton() {
  const router = useRouter();
  return (
    <div
      className="p-2 rounded-md border-2 border-[#E8ECF4] w-[40px] h-[40px]"
      onClick={() => {
        router.back();
      }}
    >
      <ArrowBackIosNewIcon />
    </div>
  );
}
