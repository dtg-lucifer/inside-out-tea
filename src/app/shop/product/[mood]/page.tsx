"use client";

import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { descriptions } from "./descriptions";
import { MinusIcon, PlusIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "~/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";

const ProductPage = () => {
  const query = useSearchParams();
  const params = useParams<{ mood: string }>();
  const names = query.get("names");

  const validDescription = descriptions.find(d => d.mood === params.mood);

  const [price, setPrice] = useState(150);
  const [quantity, setQuantity] = useState(1);

  return (
    <AlertDialog>
      <section className="place-items-center grid bg-transparent pt-[5rem]">
        <div className="flex justify-between items-start gap-4 mx-auto py-4 w-[min(90%,60rem)]">
          <div className="left" style={{ flex: 2 }}>
            <Image
              height={400}
              width={400}
              src={`/tea_${params.mood}.png`}
              alt={params.mood}
              className="min-h-[65vh] animate-fade-left object-cover"
            />
          </div>
          <div
            className="right flex flex-col justify-between items-start gap-[1.5rem] py-4"
            style={{ flex: 3 }}
          >
            <h1 className="text-6xl animate-delay-[100ms] animate-fade-right font__oldmoney">
              {params.mood}
            </h1>
            <div className="animate-delay-[200ms] animate-fade-right font__handwriting">
              <h1 className="text-3xl">Available flavours:</h1>
              {names?.split(",").map(n => (
                <h3 key={n} className="text-xl">
                  {n}
                </h3>
              ))}
            </div>
            <div className="animate-delay-[300ms] animate-fade-right">
              <h1 className="text-4xl font__oldmoney">Description</h1>
              {validDescription?.desc.map(d => (
                <p className="mb-2 font__poppins" key={d}>
                  {d}
                </p>
              ))}
            </div>
            <Select>
              <SelectTrigger className="w-full animate-delay-[400ms] animate-fade-right">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                {names?.split(",").map(n => (
                  <SelectItem key={n} value={n}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex justify-between items-center gap-4 w-full animate-delay-[500ms] animate-fade-right">
              <div className="w-full font-bold text-4xl">
                Rs. {price * quantity}
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setQuantity(prev => (prev <= 1 ? (prev = 1) : --prev))
                  }
                >
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <span className="font-medium text-lg">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(prev => ++prev)}
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
                <AlertDialogTrigger asChild>
                  <Button size="lg" className="ml-auto">
                    <ShoppingCartIcon className="mr-2 w-4 h-4" />
                    Add to Cart
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-green-50">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to add these items to your cart?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      After submitting this will add the items to your cart amd
                      remove them from the list also.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-green-50">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="bg-green-800">
                      Add
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AlertDialog>
  );
};

export default ProductPage;
