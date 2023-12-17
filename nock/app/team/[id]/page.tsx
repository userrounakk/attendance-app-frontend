import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export default function Team({ params }: Props) {
  console.log(params);
  return (
    <div className="px-4 py-8">
      <div>Members</div>
      <div className="flex flex-row">
        <div className="p-8 m-2 text-center rounded-md flex-auto bg-[#D9D9D9]">
          Send Link
        </div>
        <div className="p-8 m-2 text-center rounded-md flex-auto bg-[#D9D9D9]">
          QR Code
        </div>
      </div>
      <label htmlFor="searchbar" className="flex">
        <input
          className="border-2 flex-auto bg-[#D9D9D9] text-black placeholder:text-black p-1 rounded-md"
          type="text"
          placeholder="Search for name,email or student id"
        />
      </label>
    </div>
  );
}
