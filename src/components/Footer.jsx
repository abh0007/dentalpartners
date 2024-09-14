import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="  py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg  poppins-medium">About Us</h2>
            <p className="mt-4 text-sm text-gray-400 poppins-light">
              We provide a seamless way for dentists to manage their appointments and focus on delivering the best care to patients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg poppins-medium">Quick Links</h2>
            <ul className="mt-4 space-y-2 poppins-light">
              <li><a href="/" className="text-gray-400 hover:text-orange-500">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-orange-500">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-orange-500">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-orange-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg poppins-medium">Contact Us</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-400 poppins-light">
              <li>Email: contact@dentalconnect.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Smile St, Dental City, USA</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        {/* <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-orange-500">
          <ImFacebook2 />
        </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
          <GrInstagram /> </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
          <FaLinkedin /></a>
        </div> */}

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-400 poppins-light">
          © 2024 Dental Connect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;