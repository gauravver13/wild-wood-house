"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

export function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <footer className="bg-[#f6f0e8] text-[#9b3f24] w-full">
      {/* Newsletter Section */}
      <div className="py-12 px-4 md:px-10 text-center flex flex-col items-center justify-center">
        <h2 className="text-xl md:text-2xl font-bold mb-3">BE IN THE LOOP</h2>
        <p className="max-w-2xl italic mb-6 px-2 text-xs md:text-sm">
          Enjoy a <span className="font-semibold">10% discount</span> on your
          initial online purchase by using the code{" "}
          <span className="font-bold not-italic"> WILD WOOD HOUSE </span> during
          checkout and stay ahead with exclusive updates on new collections,
          store openings, sales, and more!
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Email:", email, "Agreed:", agreed);
          }}
          className="flex flex-col items-center gap-4 w-full max-w-xl"
        >
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full py-4 px-4 pr-12 border border-[#e6dcd2] rounded-sm text-[#9b3f24] bg-transparent placeholder-[#c78b71] focus:outline-none text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9b3f24] hover:text-[#7a2e1a] transition-colors"
            >
              <ArrowRight />
            </button>
          </div>

          <div className="w-full text-left mt-1">
            <label className="flex items-center gap-2 text-xs font-medium text-black">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="accent-[#9b3f24] w-4 h-4"
                required
              />
              I agree to receiving marketing emails and special deals
            </label>
        </div>
        </form>
      </div>

      {/* Contact + Links Section */}
      <div className="border-t bg-slate-50 border-[#e6dcd2] py-12 px-4 md:px-10 font-light text-[#9b3f24]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-24 text-left text-sm">
          {/* Get in Touch */}
          <div>
            <h3 className="font-bold uppercase tracking-wide mb-4">Get in Touch</h3>
            <p className="mb-2">+91 9136473985</p>
            <p className="mb-2">Mon - Sat - 10:30am - 07:30pm IST</p>
            <p className="mb-2">info@wildwoodhouse.com</p>
            <p className="mb-4">
              Wild-Wood-House, 66, L Jaganmohandas Marg,
              Mumbai 400006
            </p>
            <div className="flex gap-4 mt-8">
              <FaFacebookF className="hover:text-blue-700 cursor-pointer" />
              <FaInstagram className="hover:text-orange-500 cursor-pointer" />
              <FaPinterestP className="hover:text-red-600 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold uppercase tracking-wide mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Contact Us</li>
              <li className="hover:underline cursor-pointer">Shipping and Returns</li>
              <li className="hover:underline cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="font-bold uppercase tracking-wide mb-4">Corporate</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
              <li className="hover:underline cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-right px-12 bg-slate-50 py-4 text-xs text-[#c78b71]">
        © 2025 Wild-Wood-House, All rights reserved.
      </div>

    </footer>
  );
}
