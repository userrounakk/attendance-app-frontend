import React from "react";
import banner from "../assets/welcome-banner.svg";
function Welcome() {
  return (
    <div className="h-[100vh]">
      <div className="h-[100%] flex-col flex justify-center items-center md:flex-row">
        <div className="md:flex-1 max-w-[600px]">
          <img
            className="w-[100%] "
            src={banner}
            alt="Welcome to Nock banner"
          />
        </div>
        <div className="md:flex-1 p-5 max-w-[500px] w-[100%] flex flex-col items-center md:items-start ">
          <div className="text-left w-[100%] pt-10 pl-6">
            <h1 className="text-3xl font-sans self-start text-left mb-4">
              Welcome to <span className=" text-primary">Nock</span>
            </h1>
            <p className="font-sans ml-1 text-md">
              Smart Attendance Tracking App
            </p>
          </div>
          <div>
            <button className="font-sans text-xl m-10 py-5 px-10 bg-primary text-white">
              Get Started ->
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
