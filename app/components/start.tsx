"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Start = () => {
   return (
      <div className="flex justify-center items-center flex-col gap-2">
         <div className="flex flex-col items-center">
            <Image
               src={"/main.png"}
               alt="Logo"
               width={150}
               height={211}
               className="object-cotain lg:hidden"
            />

            <Image
               src={"/main.png"}
               alt="Logo"
               width={210}
               height={210}
               className="object-cotain hidden lg:block"
            />

            <h1 className="text-white hidden lg:block font-medium bg-black text-3xl px-5 py-8 rounded-2xl">
               Melhor Empresa de Desenvolvimento de Sites <br /> e Soluções Para
               Seu Negocio Local & Online!
            </h1>

            {/* Mobile */}
            <h1 className="text-white text-center lg:hidden font-medium bg-black text-sm px-5 py-8 rounded-2xl">
               Melhor Empresa de Desenvolvimento de <br /> Sites e Soluções Para
               Seu NegocioLocal & <br /> Online!
            </h1>
         </div>

         <div className="flex flex-col gap-2">
            {/* Mobile */}
            <p className="lg:hidden text-xs mx-auto font-medium">
               Dois amigos apaixonados por design e <br /> programação unem
               forças em 2024 <br /> para fundar a Master TI, uma empresa <br />
               especializada em criar sites personalizados. <br /> Com uma
               abordagem artesanal e <br /> comprometimento, eles ganham <br />
               reconhecimento por seu trabalho <br /> de qualidade, ajudando
               clientes a <br /> prosperar no mundo digital em constante <br />
               evolução.
            </p>

            {/* Desktop */}
            <p className="hidden lg:block text-md font-medium">
               Dois amigos apaixonados por design e programação unem forças em
               2024 para <br /> fundar a Master TI, uma empresa especializada em
               criar sites personalizados. <br /> Com uma abordagem artesanal e
               comprometimento, eles ganham reconhecimento <br /> por seu
               trabalho de qualidade, ajudando clientes a prosperar no mundo
               digital em
               <br /> constante evolução.
            </p>

            <Link
               href={
                  "https://api.whatsapp.com/send?phone=+55(91)982534512&text=Olá%2C+gostaria+de+conhecer+mais+o+trabalho+de+sites+de+vocês!"
               }
               target="_blank"
               className="mx-auto"
            >
               <Button className="bg-black rounded-2xl text-xs lg:text-sm w-fit">
                  Consulte Mais Informações{" "}
                  <FaWhatsapp size={24} className="pl-2" />
               </Button>
            </Link>
         </div>
      </div>
   );
};

export default Start;
