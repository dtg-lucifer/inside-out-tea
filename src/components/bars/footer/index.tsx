import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

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
          <div className="text-2xl font__handwriting">
            Inside Out Tea | Copyrights reserved ©
          </div>
          <div className="flex justify-between items-center mt-4 text-2xl font__handwriting">
            <span>Mail us at: </span>
            <Button asChild variant={"link"} className="p-0 w-auto text-2xl">
              <Link href="mailto:insideouttea7@gmail.com">
                insideouttea7@gmail.com
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
