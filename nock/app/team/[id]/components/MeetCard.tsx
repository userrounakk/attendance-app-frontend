import { dividerClasses } from "@mui/material";

type Props = {
  date: string;
  time: string;
  venue: string;
};
export function MeetCard({ date, time, venue }: Props) {
  return (
    <div className="bg-gray-200 rounded-md m-4">
      <div className="text-center p-2">Meeting Alert</div>
      <div className="p-4 text-sm">
        <div>Date: {date}</div>
        <div>Time: {time}</div>
        <div>Venue: {venue}</div>
      </div>
      <div className="w-full bg-[#545458A6] h-[0.1px]"></div>
      <div className="text-center p-2 text-[#007AFF]">Take Attendance</div>
    </div>
  );
}
