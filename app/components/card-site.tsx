"use client";

import Autoplay from "embla-carousel-autoplay";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "./ui/carousel";
import CardItem from "./card-Item";
import sites from "../lib/sites";
import { useRef } from "react";

const CardSites = () => {
   const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

   return (
      <div className="flex flex-col items-center gap-5 justify-center">
         <h1 className="text-white text-3xl mb-10">Sites Desenvolvidos</h1>

         <Carousel plugins={[plugin.current]}>
            <CarouselContent>
               {sites.map((site) => (
                  <CarouselItem key={site.name} className="max-h-[480px]">
                     <CardItem
                        name={site.name}
                        Imagem={site.Image}
                        link={site.link}
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

export default CardSites;
