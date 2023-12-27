import { CalendarMonth, Home, People } from "@mui/icons-material";
import Link from "next/link";

export default function BottomNav({ id }: any) {
  return (
    <div className=" bottom-0 fixed w-full">
      <div className="flex flex-row justify-between">
        <div>
          <Link href={`/team/${id}`}>
            <Home fontSize="large" className="m-2 mx-4 text-[#007AFF]" />
          </Link>
        </div>
        <div>
          <Link href={`/team/${id}/members`}>
            <People fontSize="large" className="m-2 text-[#007AFF]" />
          </Link>
        </div>
        <div>
          <Link href={`/team/${id}/create-meeting`}>
            <CalendarMonth
              fontSize="large"
              className="m-2 mx-4 text-[#007AFF]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
