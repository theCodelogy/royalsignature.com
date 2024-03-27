"use client";
import { useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GrCart } from "react-icons/gr";

// Import the image
import Link from "next/link";

// Navigation links array
const navLinks = [
  { title: "Smartphones", href: "category" },
  { title: "Feature Phones", href: "category" },
  { title: "Cases & Covers", href: "category" },
  { title: "Chargers", href: "category" },
  { title: "Samsung", href: "category" },
  { title: "Google", href: "category" },
  { title: "Huawei", href: "category" },
  { title: "Apple", href: "category" },
];

const Navbar = () => {
  // State for toggling the mobile menu icon
  const [showMediaIcon, setMediaIcon] = useState(true);

  return (
    <header className="flex flex-col justify-between">
      {/* Header content */}
      <div className="header-content bg-black text-white flex justify-between items-center p-1">
        {/* Logo */}
        <Link href={"/"} className="header-logo flex-1">
          {/* <Image src={img} height={90} width={90} alt="logo" /> */}
          <h2>RoyalSignutre</h2>
        </Link>

        {/* Search bar */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-white flex-1">
          <FiSearch className="text-xl text-black ml-2" />
          <input
            className="p-2 outline-none text-black"
            placeholder="Search here..."
          />
        </div>

        {/* User Sign In and Cart */}
        <div className="flex justify-end flex-1 gap-3">
          <div className="bg-slate-700 p-2 rounded-lg group hover:bg-white transition-all duration-200 ease-in">
            <FaRegUser className="text-white text-lg group-hover:text-black" />
          </div>
          <div className="bg-slate-700 p-2 rounded-lg group hover:bg-white transition-all duration-200 ease-in">
            <GrCart className="text-white text-lg group-hover:text-black" />
          </div>
        </div>

        {/* Mobile menu icon */}
        <div
          className="mobile-menu"
          onClick={() => setMediaIcon(!showMediaIcon)}
        >
          {showMediaIcon ? (
            <i className="my-icon icon-list"></i>
          ) : (
            <i className="my-icon icon-close1"></i>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white flex drop-shadow-md mb-3 p-3 justify-center">
        <ul className="flex gap-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
