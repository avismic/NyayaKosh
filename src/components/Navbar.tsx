"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Menu, X,Search, SearchIcon } from "lucide-react";
function Navbar() {
  const [showSearchBar, setSearchBar] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className="border-b z-50 bg-white/65 backdrop-blur-md sticky top-0 left-0">
        <div className="container mx-auto px-4 py-3 ">
          <div className="flex relative flex-col md:flex-row items-start md:items-center justify-between">
            <Button
              type="button"
              variant="outline"
              className="absolute right-20 block md:hidden"
              onClick={() => setSearchBar(!showSearchBar)}
            >
              <SearchIcon />
            </Button>
            <Link
              href="/"
              className="text-4xl font-bold flex items-center gap-2"
            >
              <div className="relative w-[50px] h-[50px]">
                <Image 
                  src="/nyaya-logo.svg" 
                  alt="NyayKosh logo" 
                  fill={true} 
                  className="object-cover"
                />
              </div>
              <span className="text-[#295F98] text-[1.7rem]">NyayaKosh</span>
            </Link>
            {/* Navigation Links - Desktop */}
              <nav className="hidden md:flex space-x-6">
                <Link href="/about" className="hover:text-[#295f73] text-md text-[#295f98] font-semibold">About</Link>
                <Link href="/people" className="hover:text-[#295f73] text-md text-[#295f98] font-semibold">People</Link>
                <Link href="/legal-maxims" className="hover:text-[#295f73] text-md text-[#295f98] font-semibold">Legal Maxims</Link>
                <Link href="/judgements" className="hover:text-[#295f73] text-md text-[#295f98] font-semibold">Judgements</Link>
                <Link href="/feedback" className="hover:text-[#295f73] text-md text-[#295f98] font-semibold">Feedback</Link>
                <Link href="/join-us" className="hover:text-[#295f73] text-md text-[#295f98] font-semibold">Join Us</Link>
                <Link href="/contact" className="hover:text-[#295f73] text-md text-[#295f98] font-semibold">Contact</Link>
              </nav>
            <div>

              <div
                className={`flex mt-4 md:mt-0 w-full md:w-[400px] ${showSearchBar ? "flex" : "hidden md:flex"} flex-col md:flex-row gap-4`}
              >
                <SearchBar />
                <Button className="hidden md:flex items-center bg-[#295F98] hover:bg-[#295F73]">
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </Button>
              </div>
              {/* Hamburger Icon - Mobile */}
              <Button
                type="button"
                variant="outline"
                className="md:hidden absolute right-0 top-0"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 text-white py-4">
          <Link href="/about" className="block px-4 py-2 text-md text-[#295f98] font-semibold">About</Link>
          <Link href="/people" className="block px-4 py-2 text-md text-[#295f98] font-semibold">People</Link>
          <Link href="/legal-maxims" className="block px-4 py-2 text-md text-[#295f98] font-semibold">Legal Maxims</Link>
          <Link href="/judgements" className="block px-4 py-2 text-md text-[#295f98] font-semibold">Judgements</Link>
          <Link href="/feedback" className="block px-4 py-2 text-md text-[#295f98] font-semibold">Feedback</Link>
          <Link href="/join-us" className="block px-4 py-2 text-md text-[#295f98] font-semibold">Join Us</Link>
          <Link href="/contact" className="block px-4 py-2 text-md text-[#295f98] font-semibold">Contact</Link>
        </div>
      )}
      </header>
    </>
  );
}

export default Navbar;
