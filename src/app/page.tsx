"use client";

import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "~/components/featured-products";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <div
      className="flex flex-col gap-[6rem] mx-auto py-2 h-full"
      style={{ width: "min(90%, 60rem)" }}
    >
      <header className="flex justify-between items-center my-[6rem] animate-delay-[750ms] animate-ease-out animate-fade-right animate-once hero__wrapper">
        <div className="left flex flex-col text-6xl text-green-500 font__handwriting">
          <span>Howdy hey,</span>
          <span>
            What&apos;s your <span className="text-green-900">mood</span> today ?
          </span>
        </div>
        <div className="right">
          <Image
            src="/tea_cup.png"
            height={100}
            width={250}
            alt="tea cup"
            loading="lazy"
            className="object-cover"
          />
        </div>
      </header>

      <section className="flex flex-col gap-3 text-end text-xl animate-delay-500 animate-ease-out animate-fade-left font__oldmoney">
        <h1 className="text-6xl">Taste the spectrum of emotions</h1>
        <span className="text-green-700 font__poppins">
          There&apos;s no doubt about the fact that people love tea! In fact, there
          are so many of us who reach out for a warm and soothing cup of tea,
          first thing in the morning. The calming and soothing effects of tea
          are well-known, aren&apos;t they? Some teas contain caffeine which boosts
          your energy and helps you concentrate better. But if you think your
          relationship with tea ends here, you are highly mistaken.
        </span>
        <FeaturedProducts />
      </section>

      <section className="flex flex-col gap-3 text-xl animate-delay-1000 animate-ease-out animate-fade-right animate-once font__oldmoney">
        <h1 className="text-6xl">So, what&apos;s your mood today ?</h1>
        <div className="flex flex-col justify-between gap-4 w-full">
          <span className="text-green-700 font__poppins">
            Choose from any mood you are currently going trough and let us help
            you choose the right blend for your tea.
          </span>
          <Button
            asChild
            variant={"outline"}
            className="bg-transparent hover:bg-green-300 rounded-none w-[25%] h-12 transition-colors group"
          >
            <Link className="text-xl font__poppins" href={"/shop"}>
              <ShoppingBag className="mx-4 text-green-800 group-hover:animate-jump group-hover:delay-0" />
              Shop
            </Link>
          </Button>
        </div>
      </section>

      {/* //! TODO: add the other products and some more details about the whole idea. */}
      <section className="animate-delay-[1250ms] animate-ease-out animate-fade-left"></section>
    </div>
  );
}
