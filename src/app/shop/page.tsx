import { StoreIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import { teas } from "~/data/tea";

const Shop = () => {
  return (
    <section className="bg-transparent py-6">
      <div className="mx-auto w-[min(90%,60rem)]">
        <h1 className="border-green-600 mb-8 py-4 border-b-2 text-6xl animate-fade-right font__oldmoney">
          Shop
        </h1>
        <article className="flex flex-col gap-8">
          {teas
            .filter(
              t =>
                t.mood.toLowerCase() in
                {
                  joy: 1,
                  anxiety: 1,
                  disgust: 1,
                  sadness: 1,
                  fear: 1,
                  anger: 1,
                }
            )
            .map((t, i) => (
              <Link
                key={t.mood}
                href={`/shop/product/${t.mood}?names=${t.teaNames.map(n =>
                  n.split(" ").join("-")
                )}`}
              >
                <div
                  className={`hover:outline active:outline-offset-[16px] transition-all flex justify-between gap-4 p-4 animate-fade-right overflow-hidden cards group outline-2 outline-green-600 animate-delay-[${
                    i * 100 + 300
                  }ms]`}
                >
                  <div className="overflow-hidden">
                    <Image
                      height={200}
                      width={200}
                      src={`/tea_${t.mood}.png`}
                      alt={t.mood}
                      className="group-hover:scale-105 transition-transform object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <h1 className="mb-4 text-5xl font__handwriting">
                      {t.mood}
                    </h1>
                    {t.teaNames.map(n => (
                      <p
                        key={n}
                        className="text-green-600 text-xl font__handwriting"
                      >
                        {n}
                      </p>
                    ))}
                    <p>{}</p>
                  </div>
                  <div className="flex flex-col justify-between items-start">
                    <h1 className="text-3xl font__oldmoney">
                      Rs. 150 / 5 Tea bags
                    </h1>
                    <Button
                      variant={"outline"}
                      className="bg-transparent hover:bg-green-600 active:bg-green-800 py-6 rounded-none w-full text-green-600 text-xl hover:text-white font__poppins self-end"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
        </article>
        <p className="flex items-center gap-4 my-4 text-2xl font__handwriting">
          <StoreIcon />
          <span>More coming soon...</span>
        </p>
      </div>
    </section>
  );
};

export default Shop;
