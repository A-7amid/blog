import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="pt-8 p-5 mx-auto container grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col">
          <Link to="/" className="text-2xl font-bold">
            VoxOmnia
          </Link>

          <span className="w-fit pr-6 flex mt-4 text-slate-500 text-lg items-center">
            A modern blog offering diverse content in technology, culture, and
            art.
          </span>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-xl">Quick Links</h3>

          <div className="flex flex-col mt-4 text-xl items-center">
            <Link to="/">Home</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" class="hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-twitter h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" class="hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" class="hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-rss h-5 w-5"
              >
                <path d="M4 11a9 9 0 0 1 9 9"></path>
                <path d="M4 4a16 16 0 0 1 16 16"></path>
                <circle cx="5" cy="19" r="1"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <span className="flex w-full justify-center my-3 mb-7 font-semibold text-slate-500 text-lg">
        &copy; 2025 VoxOmnia. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
