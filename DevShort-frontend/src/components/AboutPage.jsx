import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
      <div className="bg-white w-full sm:py-10 py-8">
        <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic mb-3">
          About DevShort
        </h1>
        <p className="text-gray-700 text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          DevShort is your smart solution for link management. Whether you're
          sharing content, tracking campaigns, or just cleaning up messy URLs,
          DevShort gives you the tools to shorten, customize, and monitor your
          links with ease. Simplify your workflow and maximize engagement with
          real-time insights and secure link handling — all in one powerful
          platform.
        </p>
        <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          <div className="flex items-start">
            <FaLink className="text-blue-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Seamless Link Shortening
              </h2>
              <p className="text-gray-600">
                Create compact and shareable URLs instantly. DevShort makes it
                easy to condense long links into sleek, user-friendly formats
                that are perfect for any platform.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaShareAlt className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Smart Link Analytics
              </h2>
              <p className="text-gray-600">
                Track the performance of your links with detailed analytics.
                Monitor click-through rates, geographic locations, and traffic
                sources to understand and optimize your sharing strategy.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaEdit className="text-purple-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
            Secure URLs
              </h2>
              <p className="text-gray-600">
                DevShort ensures all links are
                encrypted and protected against unauthorized access or tampering.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaChartLine className="text-red-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Speed & Reliability
              </h2>
              <p className="text-gray-600">
                Experience instant redirects and 24/7 availability with our
                high-performance backend. DevShort is built for speed, so your
                links are always ready when your audience clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
