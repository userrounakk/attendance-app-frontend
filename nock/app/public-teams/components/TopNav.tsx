import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TopNav() {
  const [showOptions, setShowOptions] = useState(false);
  const router = useRouter();
  function handleButtonClick() {
    setShowOptions(!showOptions);
  }
  function handleLogout() {
    localStorage.removeItem("userData");
    router.push("/");
  }
  return (
    <div className="w-full fixed top-0 bg-white max-w-md">
      <div className="flex flex-row justify-start py-5 px-4 ">
        {/* TODO: Add link here */}
        <button onClick={handleButtonClick} className="text-muted">
          <AccountCircleIcon fontSize="large" />
        </button>
        {showOptions && (
          <div className="absolute top-16 left-8 flex flex-col bg-white p-4 shadow-md rounded">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
