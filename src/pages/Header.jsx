import React from "react";

const Header = () => {
  return (
    <header className="bg-[#2E3C56] text-white py-6 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand Name */}
        <h1 className="text-4xl font-extrabold text-[#E57A00] tracking-wide">
          Viral Banao
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl font-medium text-gray-200 bg-[#37475E] px-4 py-2 rounded-lg shadow">
          🚀 Create Viral Content That Converts
        </p>
      </div>
    </header>
  );
};

export default Header;
