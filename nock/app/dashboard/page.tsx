"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import EmptyDashboard from "./components/EmptyDashboard";
import NonEmptyDashboard from "./components/NonEmptyDashboard";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
export default function App() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    console.log(userData);

    if (userData == null) {
      router.push("/login");
      toast.error("Please login again to continue.");
      return;
    }
    let data = JSON.parse(userData);
    async function getTeams() {
      try {
        console.log("bruh");
        const config = {
          headers: { Authorization: `Bearer ${data.token}` },
        };
        let res = await axios.get(
          "https://atapp.fly.dev/v1/user/me/teams",
          config
        );
        setTeams(res.data);
        setLoading(false);
        console.log(res.data);
      } catch (e) {
        router.push("/login");
        toast.error("Please login again to continue.");
        localStorage.removeItem("userData");
        console.error(e);
      }
    }
    getTeams();
  }, []);
  if (loading) {
    return (
      <div className="h-full w-full">
        <Toaster position="top-center" reverseOrder={false} />
        <img
          className=" h-full w-full"
          src={"/loading.gif"}
          alt="loading screen"
        />
      </div>
    );
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {teams.length === 0 ? (
        <EmptyDashboard />
      ) : (
        <NonEmptyDashboard teams={teams} />
      )}
    </>
  );
}
