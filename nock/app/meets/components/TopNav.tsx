import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const [showOptions, setShowOptions] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const router = useRouter();
  function handleButtonClick() {
    setShowOptions(!showOptions);
  }
  function showLogoutOption() {
    setShowAccountOptions(!showAccountOptions);
  }

  function handleLogout() {
    localStorage.removeItem("userData");
    router.push("/");
  }
  return (
    <div className="w-full max-w-md">
      <div className="flex flex-row justify-between py-5 px-4 ">
        <button onClick={showLogoutOption} className="text-muted">
          <AccountCircleIcon fontSize="large" />
        </button>
        <button onClick={handleButtonClick} className="text-muted">
          <AddIcon fontSize="large" />
        </button>
        {showOptions && (
          <div className="absolute top-16 right-8 flex flex-col bg-white p-4 shadow-md rounded">
            <Link href="/create-team" className="mb-2">
              Create Team
            </Link>
            <Link href="/join-team">Join Team</Link>
          </div>
        )}
        {showAccountOptions && (
          <div className="absolute top-16 left-8 flex flex-col bg-white p-4 shadow-md rounded">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
