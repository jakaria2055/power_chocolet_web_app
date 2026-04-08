import React from "react";

const Footer = () => {
  return (
    <footer className=" px-4 sm:px-6 lg:px-8 bg-white mt-20">
      <div className="bg-gray-400 max-w-6xl h-[1px] mx-auto mb-15"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-10">
        {/* About Section (spans more columns) */}
        <div className="lg:col-span-3">
          <h3 className="text-black text-xl font-semibold mb-4 hover:underline hover:decoration-blue-700">About</h3>
          <p className="text-sm leading-relaxed hover:underline hover:decoration-blue-400">
            At MuscleForge, we believe in the power of dedication and hard work.
            Our mission is to provide you with the tools, resources, and
            community you need to build the body of your dreams.
          </p>

          <div className="bg-black w-[200px] h-[2px] mx-left mt-10"></div>
          <div className="flex space-x-4 mt-4">
            <div className="hover:underline hover:decoration-blue-700">Social Media: </div>
            <a href="#" className="hover:text-blue-400 font-semibold">
              Fb
            </a>
            <a href="#" className="hover:text-pink-400 font-semibold">
              In
            </a>
            <a href="#" className="hover:text-sky-400 font-semibold">
              Tw
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-1">
          <h3 className="text-black text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our gym location
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Our Service */}
        <div className="lg:col-span-1">
          <h3 className="text-black text-xl font-semibold mb-4">Our Service</h3>
          <ul className="space-y-2 text-sm">
            <li>Indoor gym</li>
            <li>Outdoor gym</li>
            <li>On ground gym</li>
            <li>Yoga class</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2">
          <h3 className="text-black text-xl font-semibold mb-4">
            Contact Info
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-semibold">Mail: </span>info@example.com
            </li>
            <li>
              <span className="font-semibold">Call: </span>+91 9876543210
            </li>
            <li>
              <span className="font-semibold">Location: </span>New York, 235
              Lane, 10001
            </li>
            <li>
              <span className="font-semibold">Time: </span>Workout Hours: 5AM -
              8PM
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 pt-6 text-center text-sm text-gray-400 pb-10">
        <div className="bg-gray-400 max-w-96 h-[1px] mx-auto mb-10"></div>
        websitename.com©2024 all right reserve
      </div>
    </footer>
  );
};

export default Footer;
