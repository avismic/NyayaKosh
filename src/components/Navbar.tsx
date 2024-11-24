import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
function Navbar() {
  return (
    <>
      <header className="border-b z-50 bg-white/65 backdrop-blur-md sticky top-0 left-0">
        <div className="container mx-auto px-4 py-3 ">
          <div className="flex flex-col items-start justify-between">
            <Link
              href="/"
              className="text-4xl font-bold flex items-center gap-2"
            >
              <div className="relative w-[40px] h-[40px]">
                <Image src="/LogoNew.svg" alt="NyayKosh logo" fill={true} />
              </div>
              <span className="text-[#295F98] text-[1.7rem]">NyayaKosh</span>
            </Link>
            <div className="flex mt-4 w-full flex-col md:flex-row gap-4">
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
