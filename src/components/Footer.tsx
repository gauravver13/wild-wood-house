'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <footer className="bg-black text-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-1  grid-cols-1 md:grid-cols-3 gap-8 md:gap-1">
        {/* Left Section */}
        <div>
          <p className="font-medium text-accent mb-6">CONTACT US</p>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary">Have a Project?</h3>
        </div>

        {/* Vertical Line */}
            <div className="hidden md:block border-l border-gray-500 h-28 ml-16"></div>
        {/* Right Section - Contact Form */}
        <div className="md:col-span-2">
          <h4 className="text-lg mb-4">What can we do for you?</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Interior Design", "Furniture Design", "Room Design", "Design Consultancy"].map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={cn(
                  "px-4 py-2 border rounded-lg text-white transition text-sm md:text-base",
                  selectedService === service ? "bg-gray-700" : "border-gray-500"
                )}
              >
                {service}
              </button>
            ))}
          </div>
          <Input type="text" placeholder="Your Name" className="mb-3 bg-gray-800 border-gray-600 text-white w-full" />
          <Input type="text" placeholder="Project Details" className="mb-3 bg-gray-800 border-gray-600 text-white w-full" />
          <Input type="email" placeholder="Your Email" className="mb-3 bg-gray-800 border-gray-600 text-white w-full" />
          <Button className="bg-white text-black px-6 py-2 rounded-lg border border-green-500 hover:bg-gray-200 w-full md:w-auto">
            Submit →
          </Button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="border-t border-gray-600 mt-10 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        <div>
          <h4 className="font-bold text-lg">FORMAT</h4>
          <p className="text-gray-400">Furniture & Interior Designs</p>
          <p className="text-gray-400 mt-2">H.J.E Wenckenbachweg 150A, 1114 AD Amsterdam-Duivendrecht</p>
          <div className="flex justify-center md:justify-start gap-3 mt-3">
            <Link href="#" passHref><Facebook size={20} className="text-gray-400" /></Link>
            <Link href="#" passHref><Instagram size={20} className="text-gray-400" /></Link>
            <Link href="#" passHref><Twitter size={20} className="text-gray-400" /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold">PRODUCTS</h4>
          <ul className="text-gray-400 space-y-1">
            <li><Link href="#" passHref>Furniture</Link></li>
            <li><Link href="#" passHref>Lighting</Link></li>
            <li><Link href="#" passHref>Homeware</Link></li>
            <li><Link href="#" passHref>Furnishing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold">SUPPORT</h4>
          <ul className="text-gray-400 space-y-1">
            <li><Link href="#" passHref>FAQs</Link></li>
            <li><Link href="#" passHref>Contact Us</Link></li>
            <li><Link href="#" passHref>Locate Us</Link></li>
            <li><Link href="#" passHref>Our Stores</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold">LEGAL</h4>
          <ul className="text-gray-400 space-y-1">
            <li><Link href="#" passHref>Terms & Conditions</Link></li>
            <li><Link href="#" passHref>Privacy Policy</Link></li>
            <li><Link href="#" passHref>Cancellation & Refund</Link></li>
            <li><Link href="#" passHref>Log In / Sign In</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
