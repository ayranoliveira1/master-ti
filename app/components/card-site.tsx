"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import CardItem from "./card-Item";
import sites from "../lib/sites";
import { useRef } from "react";

const CardSites = () => {
   const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

   return (
      <div className="flex flex-col items-center gap-5 justify-center">
         <h1 className="lg:text-4xl text-xl font-semibold mb-10">
            Sites Desenvolvidos
         </h1>

         <Carousel plugins={[plugin.current]} className="w-full">
            <CarouselContent className="gap-5">
               {sites.map((site) => (
                  <CarouselItem
                     key={site.name}
                     className="max-h-[500px] basis-1/2"
                  >
                     <CardItem
                        name={site.name}
                        Imagem={site.Image}
                        link={site.link}
                     />
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>
      </div>
   );
};

export default CardSites;
