import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#243144] text-white px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold tracking-wide">
            AI Caption & Hashtag Generator
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm">
          <a
            href="#"
            className="text-gray-300 hover:text-[#E57A00] transition duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-[#E57A00] transition duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-[#E57A00] transition duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
