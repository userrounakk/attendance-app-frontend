import { CalendarMonth, Home, People, Videocam } from "@mui/icons-material";
import Link from "next/link";

export default function BottomNav({ id }: any) {
  return (
    <div className=" bottom-0 w-full max-w-md">
      <div className="flex flex-row justify-center">
        <div>
          <Link href={`/dashboard`}>
            <Home fontSize="large" className="m-2 mx-4 text-[#007AFF]" />
          </Link>
        </div>
        <div>
          <Link href={`/meets`}>
            <Videocam fontSize="large" className="m-2 text-[#007AFF]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
