"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      setLocation({ lat: latitude, long: longitude });
      console.log(latitude, longitude);
    });
  }, []);

  return (
    <div className="px-8 py-16">
      <div className="font-bold text-2xl py-8">Create Meeting</div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-slate-500">
          Meeting Name
        </label>
        <input className="border-2" type="text" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-slate-500">
          Time
        </label>
        <input className="border-2" type="datetime-local" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-slate-500">
          Location
        </label>
        <input className="border-2" type="text" />
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
      <button className="bg-[#3D73DD] text-white py-4 px-16 my-2 rounded-md w-[100%]">
        Create Meeting
      </button>
    </div>
  );
}
