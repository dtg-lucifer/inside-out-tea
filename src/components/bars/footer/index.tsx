import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-300 px-4 py-8 w-full animate-ease-out animate-fade-up wrapper">
      <div className="flex justify-between items-center mx-auto w-[min(90%,60rem)]">
        <div className="left">
          <Link href={"/"}>
            <Image
              className="rounded-full"
              src="/logo.jpg"
              alt="logo"
              width="70"
              height="70"
              priority
            />
          </Link>
        </div>
        <div className="right">
          <span className="text-2xl font__handwriting">
            Inside out | Copyrights reserved ©
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
