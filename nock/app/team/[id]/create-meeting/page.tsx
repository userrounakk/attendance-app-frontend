"use client";
import axios from "axios";
import { title } from "process";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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
      } else {
        toast.error("failed to create new meeting");
      }
    } catch (e) {
      toast.error("failed to create new meeting");
      console.error(e);
    }
  }

  return (
    <div className="px-8 py-16">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="font-bold text-2xl py-8">Create Meeting</div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-slate-500">
          Meeting Name
        </label>
        <input
          className="border-2"
          type="text"
          onChange={(e) => setMeetingName(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-slate-500">
          Meeting Description
        </label>
        <input
          className="border-2"
          type="text"
          onChange={(e) => setMeetingDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-slate-500">
          Time
        </label>
        <input
          className="border-2"
          type="datetime-local"
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-slate-500">
          Location
        </label>
        <input
          className="border-2"
          type="text"
          onChange={(e) => setVenue(e.target.value)}
        />
        {/* 
        <div className="flex justify-center">
          <MapContainer
            center={{ lat: location!.lat, lng: location!.long }}
            zoom={4}
            scrollWheelZoom={false}
            className="w-[300px] h-[300px]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location!.lat, location!.long]} icon={icon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
      <button
        className="bg-[#3D73DD] text-white py-4 px-16 my-2 rounded-md w-[100%]"
        onClick={createMeeting}
      >
        Create Meeting
      </button>
    </div>
  );
}
