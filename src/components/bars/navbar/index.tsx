import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import { Menu } from "lucide-react";
import { SheetTrigger } from "../../ui/sheet";

const Navbar = () => {
  return (
    <div className="bg-green-300 py-3 w-full animate-ease-out animate-fade-down wrapper">
      <nav
        className="flex justify-between items-center mx-auto"
        style={{ width: "min(90%, 60rem)" }}
      >
        <div className="flex justify-center items-center gap-4">
          <Link href={"/"}>
            <Image
              className="rounded-full"
              src="/logo.jpg"
              alt="logo"
              width="50"
              height="50"
              priority
            />
          </Link>
          <span className="text-2xl font__handwriting">Inside out</span>
        </div>
        <div className="right__wrapper flex gap-6">
          <Link
            className="md:inline-block hidden text-xl font__oldmoney"
            href="about-us"
          >
            About us
          </Link>
          <Link
            className="md:inline-block hidden text-xl font__oldmoney"
            href="community"
          >
            Community
          </Link>
          <SheetTrigger asChild>
            <Button variant={"ghost"} className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
