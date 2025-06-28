import React from "react";
import Card from "./Card";

const LandingPage = () => {
  let desc =
    "Create concise, catchy URLs effortlessly with DevShort’s user-friendly platform. Share links seamlessly across various channels. Improve your sharing approach with DevShort. Monitor link activity and organize your URLs smoothly to strengthen your digital reach. Generate clean, compact links with ease using DevShort’s simple interface. Distribute URLs without hassle across your favorite platforms.";

  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
          <h1 className="font-bold font-roboto text-slate-800 md:text-5xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full">
            DevShort Makes Link Sharing Simple and Effective
          </h1>
          <p className="text-slate-700 text-sm my-5">
            DevShort streamlines the URL shortening process, making link sharing
            quick and seamless. Its intuitive interface lets you create short,
            shareable URLs in just seconds. Simplify the way you share links —
            experience the ease of DevShort today.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 w-40 text-white rounded-md py-2">
                Manage Links
              </button>

              <button className="border border-blue-600 w-40 text-blue-600 rounded-md py-2">
                Create Short Link
              </button>
            </div>
          </div>
        </div>
        <div className="sm:pt-12 pt-7">
          <p className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center">
            Trusted by individuals and teams at the world best companies{" "}
          </p>
<div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2  mt-4">
  <Card
    title="Effortless Link Shortening"
    desc="Create compact, shareable links in seconds. Our streamlined interface and quick-start process make shortening URLs smooth and stress-free."
  />
  <Card
    title="Insightful Link Analytics"
    desc="Monitor your link activity with detailed analytics. View click counts, user locations, and referral data to sharpen your marketing decisions."
  />
  <Card
    title="Advanced Link Protection"
    desc="Keep your links secure with enterprise-grade encryption. We ensure that every shortened URL is safeguarded against unauthorized access."
  />
  <Card
    title="Speed and Dependability"
    desc="Benefit from instant redirection and industry-grade uptime. Our infrastructure guarantees your links remain fast, stable, and always accessible."
  />
</div>






        </div>
      </div>
    </div>
  );
};

export default LandingPage;
