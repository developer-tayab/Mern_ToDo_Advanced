import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between text-center">
          {/* Copyright Notice */}
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} ToDo Pro. All rights reserved.
          </p>

          {/* Optional Privacy Policy Link */}
          <a
            href="/privacy-policy"
            className="text-sm text-gray-200 hover:text-gray-300 transition-all duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
