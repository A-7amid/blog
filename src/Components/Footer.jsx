import { BookOpen, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-secondary">
      <div className="pt-18 pb-12 w-7xl mx-auto container grid grid-cols-4 justify-center border-b border-[#1F2937]">
        <div className="flex flex-col">
          <h3 className="flex gap-3 items-center text-white font-extrabold text-3xl opacity-80 marck-font">
            <div className="flex items-center shadow-2xl bg-gradient-to-r from-primary to-[#00b1a8] rounded-lg px-2 py-1.5 text-md">
              <BookOpen size={20} />
            </div>
            VoxOmnia
          </h3>

          <span className="w-fit pr-6 flex mt-4 text-sm items-center">
            Empowering voices, building communities, shaping the future of
            knowledge sharing.
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-white text-lg font-semibold">Platform</h3>
          <div className="flex flex-col gap-2">
            <span>Write</span>
            <span>Read</span>
            <span>Community</span>
            <span>Analytics</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-white text-lg font-semibold">Resources</h3>
          <div className="flex flex-col gap-2">
            <span>Help Center</span>
            <span>Writing Guide</span>
            <span>API</span>
            <span>Blog</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-white text-lg font-semibold">Company</h3>
          <div className="flex flex-col gap-2">
            <span>About</span>
            <span>Careers</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
      <span className="flex w-full justify-center mt-10 mb-18">
        &copy; 2025 VoxOmnia. All rights reserved. Built with ❤️ for creators
        worldwide.
      </span>
    </footer>
  );
};

export default Footer;
