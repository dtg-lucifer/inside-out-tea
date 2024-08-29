import React, { useId } from "react";
import { teas } from "~/data/tea";
import ProductCard from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FeaturedProducts = () => {
  return (
    <article className="my-[6rem]">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="mx-auto"
      >
        <CarouselContent className="h-[20rem]">
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
                }
            )
            .map(({ mood, teaNames }) => {
              return (
                <CarouselItem key={mood}>
                  <ProductCard mood={mood} names={teaNames} />
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </article>
  );
};

export default FeaturedProducts;
