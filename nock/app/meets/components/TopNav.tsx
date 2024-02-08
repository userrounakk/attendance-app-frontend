import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Link from "next/link";
import { useState } from "react";

export default function TopNav() {
  const [showOptions, setShowOptions] = useState(false);

  function handleButtonClick() {
    setShowOptions(!showOptions);
  }
  return (
    <div className="w-full max-w-md">
      <div className="flex flex-row justify-between py-5 px-4 ">
        {/* TODO: Add link here */}
        <Link href={"#"} className="text-muted">
          <AccountCircleIcon fontSize="large" />
        </Link>
        <button onClick={handleButtonClick} className="text-muted">
          <CalendarMonthIcon fontSize="large" />
        </button>
        {showOptions && (
          <div className="absolute top-16 right-8 flex flex-col bg-white p-4 shadow-md rounded">
            <Link href="/create-team" className="mb-2">
              Create Team
            </Link>
            <Link href="/join-team">Join Team</Link>
          </div>
        )}
      </div>
    </div>
  );
}
