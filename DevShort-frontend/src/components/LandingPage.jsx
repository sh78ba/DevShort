import React from "react";
import Card from "./Card";

const LandingPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4">
      {/* Hero Section */}
      <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full">
            DevShort Makes Link Sharing Smarter & Simpler.
          </h1>
          <p className="text-slate-700 text-sm my-5">
            DevShort simplifies how you manage and share links. With a clean interface and
            lightning-fast experience, you can create concise URLs in seconds.
          </p>
          <div className="flex items-center gap-3">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 w-40 text-white rounded-md py-2">
              Manage Links
            </button>
            <button className="border-blue-500 border w-40 text-blue-500 rounded-md py-2">
              Create Short Link
            </button>
          </div>
        </div>

       
      </div>

      {/* Feature Cards Section */}
      <div className="sm:pt-12 pt-7">
        <p className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center">
          Trusted by individuals and teams at top organizations worldwide
        </p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Effortless Link Shortening"
            desc="Quickly generate short URLs with minimal effort. Designed to save time and simplify your link sharing process."
          />
          <Card
            title="Insightful Analytics"
            desc="Track your link performance in real-time. Monitor clicks to better understand your audience."
          />
          <Card
            title="Robust Security"
            desc="Your links are protected with advanced encryption protocols, ensuring safe access and privacy every time."
          />
          <Card
            title="High Speed & Uptime"
            desc="Experience fast redirects and rock-solid uptime. DevShort guarantees stable performance for every link shared."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
