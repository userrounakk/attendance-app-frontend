import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
    </div>
  );
}
