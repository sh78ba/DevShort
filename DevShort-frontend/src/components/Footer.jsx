import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 z-40 relative">
     <div className="container mx-auto px-6 lg:px-14 flex  lg:justify-between items-center gap-4">

        
        {/* Brand + Tagline */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">DevShort</h2>
          <p>Simplifying URL shortening for efficient sharing</p>
        </div>

        {/* Copyright */}
        <p className="mt-4 lg:mt-0 text-center">
          &copy; {new Date().getFullYear()} DevShort. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="#" className="hover:text-gray-200 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
