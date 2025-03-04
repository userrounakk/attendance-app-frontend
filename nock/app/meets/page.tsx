"use client";
import { useEffect, useState } from "react";
import BottomNav from "../team/[id]/components/BottomNav";
import axios from "axios";

export default function MyMeets() {
  const [meets, setMeets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("bruh");
    async function getMyMeetings() {
      console.log("meow");
      const userData = localStorage.getItem("userData")!;
      let data = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
      const res = await axios.get(
        "https://atapp.fly.dev/v1/user/me/meetings",
        config
      );
      setMeets(res.data);
      setLoading(false);
      console.log(res.data);
    }
    getMyMeetings();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="text-lg font-bold p-2">My meetings</div>
      {meets.map((meet) => (
        <div key={meet.Meeting.ID} className="bg-gray-200 rounded-md m-4">
          <div className="p-2 font-semibold">{meet.Meeting.Title}</div>
          <div className="p-4 text-sm">
            <div>
              <span className="font-semibold">Date:</span>{" "}
              {meet.Meeting.StartTime}
            </div>
            <div>
              <span className="font-semibold">Venue:</span> {meet.Meeting.Venue}
            </div>
          </div>
        </div>
      ))}
      <div className=" bottom-0 fixed w-full max-w-md">
        <BottomNav />
      </div>
    </div>
  );
}
