"use client";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, SearchIcon } from "lucide-react";
import { useState } from "react";
function Navbar() {
  const [showSearchBar, setSearchBar] = useState<boolean>(false);
  return (
    <>
      <header className="border-b z-50 bg-white/65 backdrop-blur-md sticky top-0 left-0">
        <div className="container mx-auto px-4 py-3 ">
          <div className="flex relative flex-col md:flex-row items-start md:items-center justify-between">
            <Button
              type="button"
              variant="outline"
              className="absolute right-0 block md:hidden"
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
                  src="/nyaya-logo.png" 
                  alt="NyayKosh logo" 
                  fill={true} 
                  className="object-cover"
                />
              </div>
              <span className="text-[#295F98] text-[1.7rem]">NyayaKosh</span>
            </Link>
            <div
              className={`flex mt-4 md:mt-0 w-full md:w-[400px] ${showSearchBar ? "flex" : "hidden md:flex"} flex-col md:flex-row gap-4`}
            >
              <div className="flex-grow">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  //   value={searchTerm}
                  //   onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button className="hidden md:flex items-center bg-[#295F98] hover:bg-[#295F73]">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
