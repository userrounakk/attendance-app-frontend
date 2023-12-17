"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import EmptyDashboard from "./components/EmptyDashboard";
import NonEmptyDashboard from "./components/NonEmptyDashboard";
export default function App() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const userData = localStorage.getItem("userData")!;
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
        console.log(res.data);
      } catch (e) {
        console.error(e);
      }
    }
    getTeams();
  }, []);
  return (
    <>
      {teams.length === 0 ? (
        <EmptyDashboard />
      ) : (
        <NonEmptyDashboard teams={teams} />
      )}
    </>
  );
}
