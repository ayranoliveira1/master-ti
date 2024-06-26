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
               width={200}
               height={200}
               className="object-cotain"
            />

            <h1 className="text-white bg-[#292734] text-3xl p-5 rounded-2xl">
               Melhor Empresa de Desenvolvimento de Sites <br /> e Soluções Para
               Seu Negocio Local & Online!
            </h1>
         </div>

         <div className="flex flex-col gap-2">
            <p className="text-white text-xs">
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
            >
               <Button className="bg-[#292734] rounded-2xl text-sm w-fit">
                  Consulte Mais Informações{" "}
                  <FaWhatsapp size={24} className="pl-2" />
               </Button>
            </Link>
         </div>
      </div>
   );
};

export default Start;
