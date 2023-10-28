import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Home() {
  return (
    <div>
      <div className="p-8">
        <div className="text-sm">Welcome 👋</div>
        <div className="text-lg font-bold">Kitty</div>
      </div>

      <div className="w-full h-[1px] bg-slate-300 border-gray-600"></div>
      <div className="flex flex-row justify-between p-8">
        <ArrowBackIosIcon fontSize="small" color="primary" />
        <div className="flex flex-row">
          <CalendarTodayIcon fontSize="small" color="primary" />
          <div className="px-1 text-sm text-blue-700">27 Oct 2023</div>
        </div>

        <ArrowForwardIosIcon fontSize="small" color="primary" />
      </div>
      <div className="flex flex-row justify-between rounded-lg p-4 my-6 mx-12 border-gray-400 border-2">
        <div className="text-blue-700">Checkin Not enabled yet</div>
        <CheckCircleIcon color="primary" />
      </div>
      <div className="py-12 flex flex-col items-center justify-center">
        <img src="./Clock.svg" />
        <div className="flex flex-row">
          <div className="px-2 py-1">09:00 PM</div>
          <img src="./Edit.svg" />
        </div>
        <div className="p-2 text-xs text-blue-700">Check-In Time</div>
      </div>
      <div className="py-4 flex flex-col items-center justify-center">
        <img src="./Map.svg" />
        <div className="flex flex-row">
          <div className="p-2">Foodys, VIT</div>
          <img src="./Edit.svg" />
        </div>
        <div className="p-2 text-xs text-blue-700">Location</div>
      </div>
      <div className="flex flex-row justify-between p-4 my-6 mx-12 border-blue-400 border-2">
        <div className="text-blue-700">Enable Check In</div>
        <CheckCircleIcon color="primary" />
      </div>
    </div>
  );
}
