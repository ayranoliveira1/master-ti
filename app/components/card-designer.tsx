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
import designers from "@/app/lib/designers";
import Image from "next/image";
import { tree } from "next/dist/build/templates/app-page";

const CardDesigner = () => {
   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

   return (
      <div className="flex flex-col items-center gap-5">
         <h1 className="lg:text-4xl text-xl font-semibold mb-10">
            Designers Desenvolvidos
         </h1>

         <Carousel plugins={[plugin.current]}>
            <CarouselContent className="">
               {designers.map((designer) => (
                  <CarouselItem
                     key={designer.Image}
                     className="flex flex-col justify-center basis-1/3"
                  >
                     <Image
                        src={designer.Image}
                        alt="Barber Shop"
                        width={300}
                        height={500}
                        className="object-cover"
                     />
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>
      </div>
   );
};

export default CardDesigner;
