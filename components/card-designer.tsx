"use client";

import Autoplay from "embla-carousel-autoplay";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "./ui/carousel";
import { useRef } from "react";
import designers from "@/lib/designers";
import Image from "next/image";

const CardDesigner = () => {
   const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

   return (
      <div className="flex flex-col items-center gap-5">
         <h1 className="text-white text-3xl mb-10">Designers Desenvolvidos</h1>

         <Carousel plugins={[plugin.current]}>
            <CarouselContent className="w-[800px]">
               {designers.map((designer) => (
                  <CarouselItem
                     key={designer.Image}
                     className="flex justify-center"
                  >
                     <Image
                        src={designer.Image}
                        alt="Barber Shop"
                        width={400}
                        height={400}
                        className="object-cover"
                     />
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
      </div>
   );
};

export default CardDesigner;
