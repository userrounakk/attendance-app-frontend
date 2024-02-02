"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import BottomNav from "../components/BottomNav";
import BackButton from "@/app/components/BackButton";
type Props = {
  params: {
    id: string;
  };
};

type Location = {
  lat: number;
  long: number;
};

export default function Team({ params }: Props) {
  const [location, setLocation] = useState<Location>({ lat: 0, long: 0 });
  const [meetingName, setMeetingName] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");
  const [venue, setVenue] = useState("");
  const [startTime, setStartTime] = useState("");
  const router = useRouter();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      setLocation({ lat: latitude, long: longitude });
      console.log(latitude, longitude);
    });
  }, []);

  async function createMeeting() {
    console.log(
      meetingName,
      meetingDescription,
      startTime,
      venue,
      new Date(startTime).toISOString()
    );
    const userData = localStorage.getItem("userData")!;
    let data = JSON.parse(userData);
    const config = {
      headers: { Authorization: `Bearer ${data.token}` },
    };

    try {
      const res = await axios.post(
        `https://atapp.fly.dev/v1/team/${params.id}/meetings`,
        {
          title: meetingName,
          description: meetingDescription,
          venue: venue,
          startTime: new Date(startTime).toISOString(),
          location: {
            longitude: location.long,
            latitude: location.lat,
            altitude: 0,
          },
        },
        config
      );
      if (res.status === 201) {
        toast.success("new meeting created!");
        router.push(`/team/${params.id}`);
      } else {
        toast.error("failed to create new meeting");
      }
    } catch (e) {
      toast.error("failed to create new meeting");
      console.error(e);
    }
  }

  return (
    <div>
      <div className="px-8 py-16">
        <Toaster position="top-center" reverseOrder={false} />
        <BackButton />
        <div className="font-bold text-2xl py-8">Create Meeting</div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-slate-500">
            Meeting Name
          </label>
          <input
            className="border-b-2 border-black"
            type="text"
            onChange={(e) => setMeetingName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-slate-500">
            Meeting Description
          </label>
          <input
            className="border-b-2 border-black"
            type="text"
            onChange={(e) => setMeetingDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-slate-500">
            Time
          </label>
          <input
            className="border-b-2 border-black"
            type="datetime-local"
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-slate-500">
            Location
          </label>
          <input
            className="border-b-2 border-black"
            type="text"
            onChange={(e) => setVenue(e.target.value)}
          />
        </div>
        <button
          className="bg-[#3D73DD] text-white py-4 px-16 my-2 rounded-md w-[100%]"
          onClick={createMeeting}
        >
          Create Meeting
        </button>
      </div>
      <BottomNav />
    </div>
  );
}
