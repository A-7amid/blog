import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="pt-8 p-5 mx-auto container grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col">
          <Link to="/" className="text-lg font-bold">
            VoxOmnia
          </Link>

          <span className="w-fit pr-6 flex mt-4 text-slate-500 text-sm items-center">
            A modern blog offering diverse content in technology, culture, and
            art.
          </span>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg">Quick Links</h3>

          <div className="flex flex-col mt-4 text-md items-center">
            <Link to="/">Home</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link to="/">
              <Facebook size={20} />
            </Link>
            <Link to="/">
              <Twitter size={20} />
            </Link>
            <Link to="/">
              <Instagram size={20} />
            </Link>
            <Link to="/">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
      <span className="flex w-full justify-center my-3 mb-7 font-semibold text-slate-500 text-xs">
        &copy; 2025 VoxOmnia. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
