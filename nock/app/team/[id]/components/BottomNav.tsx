import { Home, Videocam, Public } from "@mui/icons-material";
import Link from "next/link";

interface BottomNavProps {
  active: string;
}

export default function BottomNav({ active }: BottomNavProps) {
  return (
    <div className="bottom-0 fixed bg-[#F5F5F5] w-full max-w-md">
      <div className="flex flex-row justify-around py-5">
        <div>
          <Link href={`/dashboard`}>
            <Home
              fontSize="large"
              className={` ${
                active == "dashboard" ? "text-[#007AFF]" : "text-[#757575]"
              }`}
            />
          </Link>
        </div>
        <div>
          <Link href={`/meets`}>
            <Videocam
              fontSize="large"
              className={` ${
                active == "meeting" ? "text-[#007AFF]" : "text-[#757575]"
              }`}
            />
          </Link>
        </div>
        <div>
          <Link href={`/public-teams`}>
            <Public
              fontSize="large"
              className={` ${
                active == "discovery" ? "text-[#007AFF]" : "text-[#757575]"
              }`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
