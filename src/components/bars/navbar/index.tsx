import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import { LucideHome, Menu, ShoppingCart } from "lucide-react";
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
          <span className="text-2xl font__handwriting">Inside Out Tea</span>
        </div>
        <div className="right__wrapper flex gap-[3rem]">
          <Link
            className="md:inline-flex justify-between items-center gap-2 hidden text-xl font__oldmoney group"
            href="/shop"
          >
            <ShoppingCart className="group-hover:animate-jump" />
            <span>Shop</span>
          </Link>
          <Link
            className="md:inline-flex justify-between items-center gap-2 hidden text-xl font__oldmoney group"
            href="/about-us"
          >
            <LucideHome className="group-hover:animate-jump" />
            <span>About us</span>
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
