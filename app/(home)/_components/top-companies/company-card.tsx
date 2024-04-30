"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarImage } from "@radix-ui/react-avatar";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { MapPin } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const CompanyCard = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="overflow-hidden md:w-max md:mx-auto" ref={emblaRef}>
      <div className="flex">
        <div
          key={1}
          className="min-w-0 flex-0 flex-shrink-0 flex-grow-0 w-full p-8 border rounded-lg"
        >
          <div className="flex flex-col gap-y-2 items-center justify-center">
            <Avatar className="w-20 h-20 p-2">
              <AvatarImage src="/facebook.svg" />
            </Avatar>
            <span className="text-blue-500 font-semibold">Facebook</span>
            <div className="flex space-x-2">
              <MapPin className="h-5 w-5" />
              <span className="text-sm text-muted-foreground">
                Melbourne, Australia
              </span>
            </div>
            <Button className="text-blue-600 w-full mt-2 bg-blue-300/20 shadow-none py-6">
              8 Open Positions
            </Button>
          </div>
        </div>
        <div
          key={2}
          className="min-w-0 flex-0 flex-shrink-0 flex-grow-0 w-full p-8 border rounded-lg"
        >
          <div className="flex flex-col gap-y-2 items-center justify-center">
            <Avatar className="w-20 h-20 p-2">
              <AvatarImage src="/first-logo.webp" />
            </Avatar>
            <span className="text-blue-500 font-semibold">Company</span>
            <div className="flex space-x-2">
              <MapPin className="h-5 w-5" />
              <span className="text-sm text-muted-foreground">London, UK</span>
            </div>
            <Button className="text-blue-600 w-full mt-2 bg-blue-300/20 shadow-none py-6">
              15 Open Positions
            </Button>
          </div>
        </div>
        <div
          key={3}
          className="min-w-0 flex-0 flex-shrink-0 flex-grow-0 w-full p-8 border rounded-lg"
        >
          <div className="flex flex-col gap-y-2 items-center justify-center">
            <Avatar className="w-20 h-20 p-2">
              <AvatarImage src="/twitter.svg" />
            </Avatar>
            <span className="text-blue-500 font-semibold">Twitter</span>
            <div className="flex space-x-2">
              <MapPin className="h-5 w-5" />
              <span className="text-sm text-muted-foreground">
                Xiaong, China
              </span>
            </div>
            <Button className="text-blue-600 w-full mt-2 bg-blue-300/20 shadow-none py-6">
              2 Open Positions
            </Button>
          </div>
        </div>
      </div>
      {/* Scroll Index */}
      <div className="flex justify-center gap-[1.2rem] mt-[1.8rem]">
        <div className="flex flex-wrap justify-end items-center gap-x-2">
          {scrollSnaps.map((_, index) => (
            <div
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "w-3 h-3 rounded-full flex items-center bg-muted-foreground",
                index === selectedIndex && "bg-black w-6"
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
